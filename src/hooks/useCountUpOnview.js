// src/hooks/useCountUpOnView.js
import { useEffect, useRef, useState } from "react";

/**
 * ✅ returns { ref, inView }
 * one-time intersection observer
 */
export function useInViewOnce({ threshold = 0.35 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect(); // ✅ only once
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/**
 * ✅ Count up ONLY when inView becomes true
 * @param {boolean} inView
 * @param {number} target
 * @param {number} durationMs
 */
export function useCountUp(inView, target = 0, durationMs = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const from = 0;
    const to = Number(target) || 0;

    if (to === 0) {
      setValue(0);
      return;
    }

    const t0 = performance.now();

    const tick = (now) => {
      const p = Math.min(1, (now - t0) / durationMs);
      const next = Math.round(from + (to - from) * p);
      setValue(next);
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target, durationMs]);

  return value;
}
