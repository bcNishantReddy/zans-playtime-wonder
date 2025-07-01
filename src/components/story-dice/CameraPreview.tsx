
import React, { useRef } from 'react';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface CameraPreviewProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  onTakePhoto: () => void;
}

const CameraPreview: React.FC<CameraPreviewProps> = ({
  videoRef,
  canvasRef,
  onTakePhoto
}) => {
  return (
    <div className="text-center">
      <div className="relative mb-6">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full max-w-4xl min-h-[300px] sm:min-h-[400px] max-h-[60vh] object-cover rounded-lg shadow-lg border-4 border-white/30 bg-black"
        />
        <div className="absolute inset-4 border-4 border-dashed border-white/50 rounded-lg pointer-events-none flex items-center justify-center">
          <div className="text-white/80 text-center bg-black/30 p-4 rounded-lg backdrop-blur-sm">
            <p className="text-lg font-semibold mb-2">🎯 Position your dice here</p>
            <p className="text-sm">Make sure all dice are visible and well-lit</p>
          </div>
        </div>
      </div>

      <Button
        onClick={onTakePhoto}
        size="lg"
        className="h-16 w-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all mb-4"
      >
        <Camera className="h-8 w-8" />
      </Button>
      
      <p className="text-white/80 text-lg">
        🎯 Center your dice and tap to capture!
      </p>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default CameraPreview;
