
import React from 'react';
import { Camera } from 'lucide-react';

const CameraLoading: React.FC = () => {
  return (
    <div className="bg-gray-800/50 rounded-lg p-8 mb-6 min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse text-center">
        <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4 animate-bounce" />
        <p className="text-white text-lg">📱 Starting camera...</p>
      </div>
    </div>
  );
};

export default CameraLoading;
