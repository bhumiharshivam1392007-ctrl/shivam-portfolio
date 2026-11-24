"use client";

import { useEffect, useRef } from "react";

interface LottieAnimationProps {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  height?: number | string;
  width?: number | string;
}

export default function LottieAnimation({
  animationData,
  loop = false,
  autoplay = false,
  height = 200,
  width = 400,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;

    // Dynamically import lottie-web only in browser environment
    import("lottie-web").then((lottieModule) => {
      if (!isMounted || !containerRef.current) return;

      const lottie = lottieModule.default || lottieModule;
      
      // Clean up any existing instance
      if (animRef.current) {
        animRef.current.destroy();
      }

      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: Boolean(loop),
        autoplay: Boolean(autoplay),
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });
    });

    return () => {
      isMounted = false;
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [animationData, loop, autoplay]);

  return (
    <div
      ref={containerRef}
      style={{
        height: typeof height === "number" ? `${height}px` : height,
        width: typeof width === "number" ? `${width}px` : width,
        overflow: "hidden",
        margin: "0 auto",
      }}
    />
  );
}
