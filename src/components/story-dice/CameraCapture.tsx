
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
  const [error, setError] = useState<string | null>(null);
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
      setError(null);
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1920, max: 1920 },
          height: { ideal: 1080, max: 1080 }
        }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Camera access failed:', error);
      setError('Camera access failed. Please allow camera permissions.');
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
    <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 sm:p-6 w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">📸 Capture Story Dice</h2>
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
            <div className="relative inline-block mb-4 sm:mb-6">
              <img
                src={capturedPhoto}
                alt="Captured"
                className="w-full max-w-2xl max-h-96 sm:max-h-[500px] object-contain rounded-lg shadow-lg border-4 border-white/30"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={confirmPhoto}
                size="lg"
                className="h-12 sm:h-14 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <Check className="h-5 w-5 mr-2" />
                ✅ Use This Photo
              </Button>
              
              <Button
                onClick={retakePhoto}
                variant="outline"
                size="lg"
                className="h-12 sm:h-14 bg-white/10 border-white/30 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all backdrop-blur-sm"
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
              <div className="bg-gray-800 rounded-lg p-6 sm:p-8 mb-4 sm:mb-6 aspect-video flex items-center justify-center">
                <div className="animate-pulse text-center">
                  <Camera className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-white text-sm sm:text-base">📱 Starting camera...</p>
                </div>
              </div>
            ) : error ? (
              <div className="bg-red-800/20 border border-red-500/30 rounded-lg p-6 sm:p-8 mb-4 sm:mb-6 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-12 w-12 sm:h-16 sm:w-16 text-red-400 mx-auto mb-4" />
                  <p className="text-white text-sm sm:text-base">{error}</p>
                  <Button
                    onClick={startCamera}
                    className="mt-4 bg-blue-500 hover:bg-blue-600"
                    size="sm"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            ) : (
              <div className="relative mb-4 sm:mb-6">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full max-w-2xl aspect-video object-cover rounded-lg shadow-lg border-4 border-white/30"
                />
                <div className="absolute inset-0 border-2 border-dashed border-white/50 rounded-lg pointer-events-none" />
              </div>
            )}

            <Button
              onClick={takePhoto}
              disabled={isLoading || !!error}
              size="lg"
              className="h-14 w-14 sm:h-16 sm:w-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all disabled:opacity-50 disabled:transform-none"
            >
              <Camera className="h-6 w-6 sm:h-8 sm:w-8" />
            </Button>
            
            <p className="text-white/80 mt-4 text-sm sm:text-lg">
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
