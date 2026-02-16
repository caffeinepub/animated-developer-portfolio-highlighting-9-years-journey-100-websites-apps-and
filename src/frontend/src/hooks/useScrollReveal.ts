import { useEffect, useCallback, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useScrollReveal() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            if (element.classList.contains('reveal')) {
              element.classList.add('reveal-active');
            }
            if (element.classList.contains('reveal-left')) {
              element.classList.add('reveal-left-active');
            }
            if (element.classList.contains('reveal-right')) {
              element.classList.add('reveal-right-active');
            }
            if (element.classList.contains('reveal-scale')) {
              element.classList.add('reveal-scale-active');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [prefersReducedMotion]);

  const observeElement = useCallback((element: HTMLElement) => {
    if (observerRef.current && !prefersReducedMotion) {
      observerRef.current.observe(element);
    } else if (prefersReducedMotion) {
      // Immediately show elements if reduced motion is preferred
      element.classList.add('reveal-active', 'reveal-left-active', 'reveal-right-active', 'reveal-scale-active');
    }
  }, [prefersReducedMotion]);

  return { observeElement };
}
