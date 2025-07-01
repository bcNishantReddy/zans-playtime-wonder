
import React from 'react';
import { Check, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhotoPreviewProps {
  capturedPhoto: string;
  onConfirm: () => void;
  onRetake: () => void;
}

const PhotoPreview: React.FC<PhotoPreviewProps> = ({
  capturedPhoto,
  onConfirm,
  onRetake
}) => {
  return (
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
          onClick={onConfirm}
          size="lg"
          className="h-12 sm:h-14 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
        >
          <Check className="h-5 w-5 mr-2" />
          ✅ Use This Photo
        </Button>
        
        <Button
          onClick={onRetake}
          variant="outline"
          size="lg"
          className="h-12 sm:h-14 bg-white/10 border-white/30 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all backdrop-blur-sm"
        >
          <RotateCcw className="h-5 w-5 mr-2" />
          🔄 Retake
        </Button>
      </div>
    </div>
  );
};

export default PhotoPreview;
