
import React, { useRef, useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Upload, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CameraCaptureProps {
  onImageCapture: (file: File) => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onImageCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  
  const [isStreamActive, setIsStreamActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  
  const { toast } = useToast();

  const startCamera = useCallback(async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsStreamActive(true);
      }
    } catch (error) {
      console.error('Camera access error:', error);
      setError('Unable to access camera. Please check permissions or try uploading a file.');
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please try file upload instead.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsStreamActive(false);
  }, []);

  const capturePhoto = useCallback(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    
    if (!canvas || !video || video.videoWidth === 0) {
      toast({
        title: "Capture Error",
        description: "Camera not ready. Please try again.",
        variant: "destructive",
      });
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw video frame to canvas
    context.drawImage(video, 0, 0);
    
    // Convert canvas to blob and create File object
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], 'dice-photo.jpg', { type: 'image/jpeg' });
        onImageCapture(file);
        stopCamera();
      }
    }, 'image/jpeg', 0.8);
  }, [onImageCapture, stopCamera, toast]);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Please select an image smaller than 10MB.",
          variant: "destructive",
        });
        return;
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid File Type",
          description: "Please select a valid image file.",
          variant: "destructive",
        });
        return;
      }

      onImageCapture(file);
    }
  }, [onImageCapture, toast]);

  return (
    <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6 mb-6">
      <div className="text-center mb-4">
        <h3 className="text-white text-lg font-medium mb-2">📸 Capture Your Dice</h3>
        <p className="text-gray-300 text-sm">Take a photo of your story dice or upload an image</p>
      </div>

      {/* Camera Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-pulse text-center">
            <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4 animate-bounce" />
            <p className="text-white text-lg">📱 Starting camera...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
          <p className="text-red-200 text-sm text-center">{error}</p>
        </div>
      )}

      {/* Camera Feed */}
      {!isLoading && (
        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`w-full rounded-lg ${isStreamActive ? 'block' : 'hidden'}`}
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          
          <canvas
            ref={canvasRef}
            className="hidden"
          />
          
          {/* Camera Controls */}
          <div className="flex gap-2 sm:gap-4 mt-4 justify-center flex-wrap">
            {!isStreamActive ? (
              <>
                <Button
                  onClick={startCamera}
                  className="bg-blue-600 hover:bg-blue-700 text-white flex-1 sm:flex-none h-12 sm:h-14"
                  disabled={isLoading}
                >
                  <Camera className="mr-2 h-5 w-5" />
                  Start Camera
                </Button>
                
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 flex-1 sm:flex-none h-12 sm:h-14"
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Upload Image
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={capturePhoto}
                  className="bg-green-600 hover:bg-green-700 text-white flex-1 sm:flex-none h-12 sm:h-14"
                >
                  <Camera className="mr-2 h-5 w-5" />
                  📸 Capture Photo
                </Button>
                
                <Button
                  onClick={stopCamera}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 h-12 sm:h-14"
                >
                  <RotateCcw className="mr-2 h-5 w-5" />
                  Reset
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
};

export default CameraCapture;
