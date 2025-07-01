
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
  }, [stream]);

  const startCamera = async () => {
    try {
      setError(null);
      setIsLoading(true);
      
      const constraints = {
        video: {
          facingMode: 'environment',
          width: { ideal: 1280, max: 1920 },
          height: { ideal: 720, max: 1080 }
        }
      };

      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
          setIsLoading(false);
        };
        setStream(mediaStream);
      }
    } catch (error) {
      console.error('Camera access failed:', error);
      setError('Camera access failed. Please allow camera permissions and try again.');
      setIsLoading(false);
      toast({
        title: "Camera Access Failed",
        description: "Please allow camera access to take photos",
        variant: "destructive"
      });
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
    <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 sm:p-6 w-full max-w-6xl mx-auto">
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
        {capturedPhoto ? (
          /* Photo Preview */
          <div className="text-center">
            <div className="relative inline-block mb-4 sm:mb-6">
              <img
                src={capturedPhoto}
                alt="Captured"
                className="w-full max-w-4xl max-h-[60vh] object-contain rounded-lg shadow-lg border-4 border-white/30"
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
              <div className="bg-gray-800/50 rounded-lg p-8 mb-6 h-[50vh] flex items-center justify-center">
                <div className="animate-pulse text-center">
                  <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4 animate-bounce" />
                  <p className="text-white text-lg">📱 Starting camera...</p>
                </div>
              </div>
            ) : error ? (
              <div className="bg-red-800/20 border border-red-500/30 rounded-lg p-8 mb-6 h-[50vh] flex items-center justify-center">
                <div className="text-center">
                  <Camera className="h-16 w-16 text-red-400 mx-auto mb-4" />
                  <p className="text-white text-lg mb-4">{error}</p>
                  <Button
                    onClick={startCamera}
                    className="bg-blue-500 hover:bg-blue-600"
                    size="lg"
                  >
                    🔄 Try Again
                  </Button>
                </div>
              </div>
            ) : (
              <div className="relative mb-6">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full max-w-4xl h-[50vh] object-cover rounded-lg shadow-lg border-4 border-white/30"
                />
                <div className="absolute inset-0 border-4 border-dashed border-white/50 rounded-lg pointer-events-none flex items-center justify-center">
                  <div className="text-white/80 text-center bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                    <p className="text-lg font-semibold mb-2">🎯 Position your dice here</p>
                    <p className="text-sm">Make sure all dice are visible and well-lit</p>
                  </div>
                </div>
              </div>
            )}

            {!isLoading && !error && (
              <>
                <Button
                  onClick={takePhoto}
                  size="lg"
                  className="h-16 w-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all mb-4"
                >
                  <Camera className="h-8 w-8" />
                </Button>
                
                <p className="text-white/80 text-lg">
                  🎯 Center your dice and tap to capture!
                </p>
              </>
            )}
          </div>
        )}

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </Card>
  );
};

export default CameraCapture;
