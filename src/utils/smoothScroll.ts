/**
 * Smooth Scroll Utility - iPhone-style momentum scrolling
 *
 * This utility provides smooth, physics-based scrolling between sections
 * with momentum and easing effects similar to iOS native scrolling.
 *
 * Features:
 * - Momentum-based scrolling with gradual deceleration
 * - Respects user's reduced motion preferences
 * - Optimized for performance
 * - Works with scroll-snap for section alignment
 */

interface ScrollOptions {
  duration?: number;
  easing?: 'easeInOutCubic' | 'easeOutQuart' | 'easeInOutQuint';
}

/**
 * Easing functions for smooth animation curves
 */
const easingFunctions = {
  // Smooth ease in and out - similar to iOS scrolling
  easeInOutCubic: (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  },

  // Strong deceleration at the end - feels natural
  easeOutQuart: (t: number): number => {
    return 1 - Math.pow(1 - t, 4);
  },

  // Very smooth ease - premium feel
  easeInOutQuint: (t: number): number => {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
  }
};

/**
 * Check if user prefers reduced motion (accessibility)
 */
const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Smooth scroll to a specific element with momentum physics
 *
 * @param target - Element to scroll to or CSS selector
 * @param options - Scroll configuration options
 */
export const smoothScrollTo = (
  target: HTMLElement | string,
  options: ScrollOptions = {}
): void => {
  // Default options
  const {
    duration = 1000,
    easing = 'easeInOutQuint'
  } = options;

  // Get target element
  const element = typeof target === 'string'
    ? document.querySelector(target) as HTMLElement
    : target;

  if (!element) {
    console.warn('Smooth scroll target not found');
    return;
  }

  // If user prefers reduced motion, use instant scroll
  if (prefersReducedMotion()) {
    element.scrollIntoView({ behavior: 'auto', block: 'start' });
    return;
  }

  // Get scroll positions
  const startPosition = window.pageYOffset;
  const targetPosition = element.getBoundingClientRect().top + startPosition;
  const distance = targetPosition - startPosition;

  // If already at target, no need to scroll
  if (Math.abs(distance) < 1) {
    return;
  }

  let startTime: number | null = null;

  // Animation loop
  const animation = (currentTime: number) => {
    if (startTime === null) {
      startTime = currentTime;
    }

    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Apply easing function
    const easedProgress = easingFunctions[easing](progress);
    const newPosition = startPosition + distance * easedProgress;

    window.scrollTo(0, newPosition);

    // Continue animation until complete
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  // Start animation
  requestAnimationFrame(animation);
};

/**
 * Smooth scroll to a specific Y position
 *
 * @param targetY - Y position to scroll to
 * @param options - Scroll configuration options
 */
export const smoothScrollToPosition = (
  targetY: number,
  options: ScrollOptions = {}
): void => {
  const {
    duration = 1000,
    easing = 'easeInOutQuint'
  } = options;

  if (prefersReducedMotion()) {
    window.scrollTo(0, targetY);
    return;
  }

  const startPosition = window.pageYOffset;
  const distance = targetY - startPosition;

  if (Math.abs(distance) < 1) {
    return;
  }

  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) {
      startTime = currentTime;
    }

    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const easedProgress = easingFunctions[easing](progress);
    const newPosition = startPosition + distance * easedProgress;

    window.scrollTo(0, newPosition);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Initialize smooth scrolling for anchor links
 * Call this once when the app loads
 */
export const initSmoothScrolling = (): void => {
  // Handle all anchor link clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    // Check if clicked element or parent is an anchor link
    const anchor = target.closest('a[href^="#"]');

    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    // Prevent default jump
    e.preventDefault();

    // Smooth scroll to target
    const targetElement = document.querySelector(href);
    if (targetElement) {
      smoothScrollTo(targetElement as HTMLElement, {
        duration: 1000,
        easing: 'easeInOutQuint'
      });

      // Update URL without jumping
      if (history.pushState) {
        history.pushState(null, '', href);
      }
    }
  }, false);
};

/**
 * Scroll to next section with momentum
 */
export const scrollToNextSection = (): void => {
  const sections = document.querySelectorAll('section');
  const currentScrollY = window.pageYOffset;
  const windowHeight = window.innerHeight;

  // Find next section
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + currentScrollY;

    // If section is below current position
    if (sectionTop > currentScrollY + windowHeight * 0.3) {
      smoothScrollTo(section as HTMLElement, {
        duration: 1200,
        easing: 'easeInOutQuint'
      });
      return;
    }
  }
};

/**
 * Scroll to previous section with momentum
 */
export const scrollToPrevSection = (): void => {
  const sections = Array.from(document.querySelectorAll('section')).reverse();
  const currentScrollY = window.pageYOffset;

  // Find previous section
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + currentScrollY;

    // If section is above current position
    if (sectionTop < currentScrollY - 100) {
      smoothScrollTo(section as HTMLElement, {
        duration: 1200,
        easing: 'easeInOutQuint'
      });
      return;
    }
  }
};
