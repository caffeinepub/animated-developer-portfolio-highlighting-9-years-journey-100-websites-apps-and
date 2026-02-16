import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface Milestone {
  year: string;
  title: string;
}

interface TimelineProgressIndicatorProps {
  milestones: Milestone[];
}

export function TimelineProgressIndicator({ milestones }: TimelineProgressIndicatorProps) {
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(100);
      return;
    }

    const handleScroll = () => {
      const section = document.querySelector('#journey');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (sectionHeight + viewportHeight)));

      setProgress(scrollProgress * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
      <div className="absolute inset-0 bg-border" />
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent to-secondary transition-all duration-300 ease-out"
        style={{ height: `${progress}%` }}
      />
      {milestones.map((_, index) => (
        <div
          key={index}
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-background transition-colors duration-300"
          style={{
            top: `${(index / (milestones.length - 1)) * 100}%`,
            backgroundColor: progress >= (index / (milestones.length - 1)) * 100 ? 'oklch(var(--accent))' : 'oklch(var(--border))'
          }}
        />
      ))}
    </div>
  );
}
