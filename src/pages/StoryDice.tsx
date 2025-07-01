
import React from 'react';
import Navbar from '@/components/Navbar';
import ErrorBoundary from '@/components/story-dice/ErrorBoundary';
import StoryDiceApp from '@/components/story-dice/StoryDiceApp';

const StoryDice: React.FC = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Navbar />
      <ErrorBoundary>
        <StoryDiceApp />
      </ErrorBoundary>
    </div>
  );
};

export default StoryDice;
