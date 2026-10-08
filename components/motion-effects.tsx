"use client";

import { animate } from "motion/mini";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = "[data-motion-reveal]";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function getInitialTransform(element: HTMLElement): string {
  switch (element.dataset.motionFrom) {
    case "left":
      return "translate3d(-20px, 0, 0)";
    case "right":
      return "translate3d(20px, 0, 0)";
    case "scale":
      return "scale(0.975)";
    default:
      return "translate3d(0, 18px, 0)";
  }
}

function getDelay(element: HTMLElement): number {
  const delay = Number(element.dataset.motionDelay ?? 0);
  return Number.isFinite(delay) ? Math.min(Math.max(delay, 0), 0.24) : 0;
}

function clearMotionStyles(element: HTMLElement) {
  element.style.removeProperty("opacity");
  element.style.removeProperty("transform");
  element.style.removeProperty("will-change");
}

export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );

    if (elements.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia(reducedMotionQuery);
    const controls = new Set<ReturnType<typeof animate>>();
    const revealed = new WeakSet<HTMLElement>();
    const observerRef: { current: IntersectionObserver | null } = {
      current: null,
    };

    const reveal = (element: HTMLElement) => {
      if (revealed.has(element)) {
        return;
      }

      revealed.add(element);
      observerRef.current?.unobserve(element);

      const animation = animate(
        element,
        {
          opacity: [0, 1],
          transform: [
            getInitialTransform(element),
            "translate3d(0, 0, 0)",
          ],
        },
        {
          duration: 0.5,
          delay: getDelay(element),
          ease: [0.22, 1, 0.36, 1],
        },
      );

      controls.add(animation);
      animation.then(() => {
        controls.delete(animation);
        clearMotionStyles(element);
      });
    };

    const revealEverything = () => {
      observerRef.current?.disconnect();
      controls.forEach((animation) => animation.stop());
      controls.clear();
      elements.forEach(clearMotionStyles);
    };

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      revealEverything();
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const positions = elements.map((element) => ({
      element,
      bounds: element.getBoundingClientRect(),
    }));

    positions.forEach(({ element, bounds }) => {
      if (bounds.bottom <= 0) {
        revealed.add(element);
        return;
      }

      if (bounds.top < window.innerHeight * 0.92) {
        reveal(element);
        return;
      }

      element.style.opacity = "0";
      element.style.transform = getInitialTransform(element);
      element.style.willChange = "opacity, transform";
      observerRef.current?.observe(element);
    });

    const handleReducedMotion = () => {
      if (reducedMotion.matches) {
        revealEverything();
      }
    };

    reducedMotion.addEventListener("change", handleReducedMotion);

    return () => {
      reducedMotion.removeEventListener("change", handleReducedMotion);
      revealEverything();
    };
  }, [pathname]);

  return null;
}
