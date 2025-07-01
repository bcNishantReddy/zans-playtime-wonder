
import React from 'react';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CameraErrorProps {
  error: string;
  onRetry: () => void;
}

const CameraError: React.FC<CameraErrorProps> = ({ error, onRetry }) => {
  return (
    <div className="bg-red-800/20 border border-red-500/30 rounded-lg p-8 mb-6 min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <Camera className="h-16 w-16 text-red-400 mx-auto mb-4" />
        <p className="text-white text-lg mb-4">{error}</p>
        <Button
          onClick={onRetry}
          className="bg-blue-500 hover:bg-blue-600"
          size="lg"
        >
          🔄 Try Again
        </Button>
      </div>
    </div>
  );
};

export default CameraError;
