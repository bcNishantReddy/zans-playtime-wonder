
import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useCameraCapture = () => {
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
      stopCamera();
    };
  }, []);

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => {
        track.stop();
      });
      setStream(null);
    }
  };

  const startCamera = async () => {
    try {
      setError(null);
      setIsLoading(true);
      
      stopCamera();
      
      const constraints = [
        {
          video: {
            facingMode: { ideal: 'environment' },
            width: { ideal: 1280, min: 640 },
            height: { ideal: 720, min: 480 }
          }
        },
        {
          video: { facingMode: { ideal: 'environment' } }
        },
        {
          video: {
            width: { ideal: 1280, min: 640 },
            height: { ideal: 720, min: 480 }
          }
        },
        { video: true }
      ];

      let mediaStream = null;
      
      for (const constraint of constraints) {
        try {
          console.log('Trying camera constraint:', constraint);
          mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
          break;
        } catch (err) {
          console.log('Camera constraint failed:', err);
          continue;
        }
      }

      if (!mediaStream) {
        throw new Error('No camera access available');
      }
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        
        await new Promise((resolve, reject) => {
          if (!videoRef.current) {
            reject(new Error('Video element not available'));
            return;
          }
          
          videoRef.current.onloadedmetadata = () => {
            if (videoRef.current) {
              videoRef.current.play()
                .then(() => {
                  console.log('Camera started successfully');
                  setIsLoading(false);
                  resolve(true);
                })
                .catch((err) => {
                  console.error('Video play failed:', err);
                  reject(err);
                });
            }
          };
          
          videoRef.current.onerror = (err) => {
            console.error('Video error:', err);
            reject(err);
          };
        });
        
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
    if (!videoRef.current || !canvasRef.current) {
      toast({
        title: "Camera Error",
        description: "Camera not ready. Please try again.",
        variant: "destructive"
      });
      return;
    }

    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');

    if (!context) {
      toast({
        title: "Canvas Error",
        description: "Unable to process image. Please try again.",
        variant: "destructive"
      });
      return;
    }

    canvas.width = video.videoWidth || video.clientWidth;
    canvas.height = video.videoHeight || video.clientHeight;
    
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL('image/jpeg', 0.9);
    setCapturedPhoto(imageData);
    
    console.log('Photo captured successfully');
  };

  const retakePhoto = () => {
    setCapturedPhoto(null);
  };

  return {
    videoRef,
    canvasRef,
    capturedPhoto,
    isLoading,
    error,
    startCamera,
    takePhoto,
    retakePhoto,
    stopCamera
  };
};
