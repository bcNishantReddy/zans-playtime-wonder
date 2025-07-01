
import React, { useRef, useState, useCallback } from 'react';
import { Camera, Upload, Image as ImageIcon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface CameraCaptureProps {
  onImageCapture: (file: File) => void;
  capturedImage: string | null;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onImageCapture, capturedImage }) => {
  const [isCapturing, setIsCapturing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const startCamera = useCallback(async () => {
    try {
      setIsCapturing(true);
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast({
        title: "Camera Error",
        description: "Could not access camera. Please use the upload option instead.",
        variant: "destructive"
      });
      setIsCapturing(false);
    }
  }, [toast]);

  const capturePhoto = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], 'dice-photo.jpg', { type: 'image/jpeg' });
            onImageCapture(file);
            stopCamera();
          }
        }, 'image/jpeg', 0.8);
      }
    }
  }, [onImageCapture]);

  const stopCamera = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCapturing(false);
  }, []);

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onImageCapture(file);
    } else {
      toast({
        title: "Invalid File",
        description: "Please select a valid image file.",
        variant: "destructive"
      });
    }
  }, [onImageCapture, toast]);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
      {/* Mobile-Optimized Preview Area */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/40 sm:border-2 md:border-4">
        {capturedImage ? (
          <div className="relative w-full h-full">
            <img 
              src={capturedImage} 
              alt="Captured dice" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-green-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 shadow-lg">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Ready!
            </div>
          </div>
        ) : isCapturing ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted
          />
        ) : (
          <div className="flex items-center justify-center h-full relative">
            <div className="text-center text-white z-10 px-4">
              <ImageIcon className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 mx-auto mb-2 sm:mb-3 md:mb-4 opacity-80" />
              <p className="text-sm sm:text-lg md:text-xl font-black mb-1 sm:mb-2">📸 Capture Your Story Dice!</p>
              <p className="text-xs sm:text-sm opacity-90 font-semibold">Take a clear photo of all 3 dice</p>
            </div>
            {/* Enhanced Decorative Bubbles */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 border-2 border-white/40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 bg-white/30 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-1/2 left-2 sm:left-3 md:left-4 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-yellow-300/60 rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/4 right-1/4 w-2 h-2 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-pink-300/50 rounded-full animate-bounce delay-700"></div>
          </div>
        )}
      </div>

      {/* Hidden canvas for photo capture */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Mobile-Optimized Control Buttons */}
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
        {!isCapturing ? (
          <>
            <Button
              onClick={startCamera}
              className="w-full h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl transform transition-all duration-200 hover:scale-[1.02] active:scale-95 border border-white/30 sm:border-2"
            >
              <Camera className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              📷 Take Photo
            </Button>
            
            <Button
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-black bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl transform transition-all duration-200 hover:scale-[1.02] active:scale-95 border border-white/30 sm:border-2"
            >
              <Upload className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              📁 Upload Image
            </Button>
          </>
        ) : (
          <div className="flex gap-2 sm:gap-3 md:gap-4">
            <Button
              onClick={capturePhoto}
              className="flex-1 h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-black bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl transform transition-all duration-200 hover:scale-[1.02] active:scale-95 border border-white/30 sm:border-2"
            >
              📸 Capture Now
            </Button>
            
            <Button
              onClick={stopCamera}
              variant="outline"
              className="flex-1 h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-black border border-white bg-white/95 hover:bg-white text-gray-800 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl transform transition-all duration-200 hover:scale-[1.02] active:scale-95 sm:border-2"
            >
              ❌ Cancel
            </Button>
          </div>
        )}
      </div>

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
