
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4 sm:p-6 flex items-center justify-center">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-white/60 max-w-sm sm:max-w-md w-full text-center">
            <div className="text-4xl sm:text-6xl mb-4">😕</div>
            <h2 className="text-xl sm:text-2xl font-black text-gray-800 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Don't worry! This sometimes happens. Let's try again.
            </p>
            <Button
              onClick={this.handleReset}
              className="w-full h-12 sm:h-14 text-base sm:text-lg font-black bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl sm:rounded-2xl shadow-xl transform transition-all duration-200 hover:scale-[1.02]"
            >
              🔄 Try Again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
