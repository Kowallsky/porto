'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useReducedMotion } from 'motion/react';

interface TypingTextProps {
  text: string;
  startDelayMs?: number;
  durationMs?: number;
  showCursor?: boolean;
  keepCursorAfterComplete?: boolean;
  cursorClassName?: string;
  className?: string;
  as?: 'span' | 'p' | 'h1' | 'div';
}

export function TypingText({
  text,
  startDelayMs = 0,
  durationMs = 1100,
  showCursor = false,
  keepCursorAfterComplete = false,
  cursorClassName = 'bg-[#FF6C65]',
  className = '',
  as: Component = 'span',
}: TypingTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const [charCount, setCharCount] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    if (hasAnimatedRef.current) {
      return;
    }
    hasAnimatedRef.current = true;

    const totalChars = text.length;
    if (totalChars === 0) return;

    const stepMs = Math.max(14, Math.floor(durationMs / totalChars));
    let intervalId: number | undefined;

    const startTimer = window.setTimeout(() => {
      setIsTyping(true);
      let current = 0;

      intervalId = window.setInterval(() => {
        current += 1;
        if (current >= totalChars) {
          setCharCount(totalChars);
          setIsTyping(false);
          setIsComplete(true);
          if (intervalId !== undefined) {
            window.clearInterval(intervalId);
          }
        } else {
          setCharCount(current);
        }
      }, stepMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(startTimer);
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
      }
    };
  }, [text, startDelayMs, durationMs, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const displayedText = isComplete ? text : text.slice(0, charCount);
  const shouldRenderCursor =
    showCursor && (isTyping || (isComplete && keepCursorAfterComplete));

  return (
    <Component className={`relative block ${className}`} aria-label={text}>
      {/* Invisible layout-reserving ghost copy to guarantee zero layout shift */}
      <span aria-hidden="true" className="invisible select-none block">
        {text}
      </span>

      {/* Active typed overlay positioned identically */}
      <span aria-hidden="true" className="absolute inset-0 block">
        {displayedText}
        {shouldRenderCursor && (
          <span
            className={`ml-0.5 inline-block h-[0.85em] w-[0.06em] min-w-[2px] align-baseline animate-pulse ${cursorClassName}`}
          />
        )}
      </span>
    </Component>
  );
}
