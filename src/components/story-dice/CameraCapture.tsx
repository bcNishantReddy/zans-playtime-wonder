
import React, { useRef, useEffect, useState } from 'react';
import { Camera, X, RotateCcw, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface CameraCaptureProps {
  onCapture: (imageData: string) => void;
  onClose: () => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Camera access failed:', error);
      toast({
        title: "Camera Access Failed",
        description: "Please allow camera access to take photos",
        variant: "destructive"
      });
      setIsLoading(false);
    }
  };

  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);

    const imageData = canvas.toDataURL('image/jpeg', 0.8);
    setCapturedPhoto(imageData);
  };

  const confirmPhoto = () => {
    if (capturedPhoto) {
      onCapture(capturedPhoto);
    }
  };

  const retakePhoto = () => {
    setCapturedPhoto(null);
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">📸 Capture Story Dice</h2>
        <Button
          onClick={onClose}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="relative">
        {/* Floating bubbles around camera */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 40 + 10}px`,
                height: `${Math.random() * 40 + 10}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 2 + 1}s`
              }}
            />
          ))}
        </div>

        {capturedPhoto ? (
          /* Photo Preview */
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <img
                src={capturedPhoto}
                alt="Captured"
                className="max-w-full max-h-96 rounded-lg shadow-lg border-4 border-white/30"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse" />
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button
                onClick={confirmPhoto}
                size="lg"
                className="h-14 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <Check className="h-5 w-5 mr-2" />
                ✅ Use This Photo
              </Button>
              
              <Button
                onClick={retakePhoto}
                variant="outline"
                size="lg"
                className="h-14 bg-white/10 border-white/30 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all backdrop-blur-sm"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                🔄 Retake
              </Button>
            </div>
          </div>
        ) : (
          /* Camera View */
          <div className="text-center">
            {isLoading ? (
              <div className="bg-gray-800 rounded-lg p-8 mb-6">
                <div className="animate-pulse">
                  <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-white">📱 Starting camera...</p>
                </div>
              </div>
            ) : (
              <div className="relative mb-6">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg border-4 border-white/30"
                />
                <div className="absolute inset-0 border-2 border-dashed border-white/50 rounded-lg pointer-events-none" />
              </div>
            )}

            <Button
              onClick={takePhoto}
              disabled={isLoading}
              size="lg"
              className="h-16 w-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all"
            >
              <Camera className="h-8 w-8" />
            </Button>
            
            <p className="text-white/80 mt-4 text-lg">
              🎯 Center your dice and tap to capture!
            </p>
          </div>
        )}

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </Card>
  );
};

export default CameraCapture;
