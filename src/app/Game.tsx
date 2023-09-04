'use client';

import { FC, useEffect, useRef } from 'react';

export const Game: FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const ctx = canvas.current?.getContext('2d');
    if (!ctx || !canvas.current) return;

    const devicePixelRatio = window.devicePixelRatio || 1;

    canvas.current.width = window.innerWidth * devicePixelRatio;
    canvas.current.height = window.innerHeight * devicePixelRatio;

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
  }, []);

  return <canvas className="w-screen h-screen" id="canvas" ref={canvas} />;
};
