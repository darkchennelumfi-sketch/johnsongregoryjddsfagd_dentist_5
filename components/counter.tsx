"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CounterProps = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
};

export function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  duration = 1.6,
}: CounterProps) {
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const valueRef = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (!inView || !valueRef.current) return;

    const format = (value: number) => value.toFixed(decimals);

    if (reduceMotion) {
      valueRef.current.textContent = format(to);
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        if (valueRef.current) {
          valueRef.current.textContent = format(value);
        }
      },
    });

    return () => controls.stop();
  }, [decimals, duration, inView, reduceMotion, to]);

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      <span ref={valueRef}>0</span>
      {suffix}
    </span>
  );
}
