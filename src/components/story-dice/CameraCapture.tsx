
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import CameraPreview from './CameraPreview';
import PhotoPreview from './PhotoPreview';
import CameraError from './CameraError';
import CameraLoading from './CameraLoading';
import { useCameraCapture } from './useCameraCapture';

interface CameraCaptureProps {
  onCapture: (imageData: string) => void;
  onClose: () => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture, onClose }) => {
  const {
    videoRef,
    canvasRef,
    capturedPhoto,
    isLoading,
    error,
    startCamera,
    takePhoto,
    retakePhoto,
    stopCamera
  } = useCameraCapture();

  const confirmPhoto = () => {
    if (capturedPhoto) {
      stopCamera();
      onCapture(capturedPhoto);
    }
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
          <PhotoPreview
            capturedPhoto={capturedPhoto}
            onConfirm={confirmPhoto}
            onRetake={retakePhoto}
          />
        ) : isLoading ? (
          <CameraLoading />
        ) : error ? (
          <CameraError error={error} onRetry={startCamera} />
        ) : (
          <CameraPreview
            videoRef={videoRef}
            canvasRef={canvasRef}
            onTakePhoto={takePhoto}
          />
        )}
      </div>
    </Card>
  );
};

export default CameraCapture;
