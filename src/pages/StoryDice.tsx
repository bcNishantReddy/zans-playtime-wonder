
import React from 'react';
import Navbar from '@/components/Navbar';
import ErrorBoundary from '@/components/story-dice/ErrorBoundary';
import StoryDiceApp from '@/components/story-dice/StoryDiceApp';

const StoryDice: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-accent/5">
      <Navbar />
      <div className="pt-20">
        <ErrorBoundary>
          <StoryDiceApp />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default StoryDice;
