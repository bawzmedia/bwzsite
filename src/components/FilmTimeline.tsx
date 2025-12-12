import { useEffect, useRef } from 'react';

export default function FilmTimeline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let offset1 = 0;
    let offset2 = 0;
    let offset3 = 0;

    const drawFilmStrip = (y: number, offset: number, opacity: number, color: string) => {
      const stripHeight = 60;
      const frameWidth = 80;
      const perfSize = 8;
      const perfSpacing = 12;

      ctx.save();
      ctx.globalAlpha = opacity;

      const totalFrames = Math.ceil(canvas.width / frameWidth) + 2;

      for (let i = -1; i < totalFrames; i++) {
        const x = (i * frameWidth + offset) % (canvas.width + frameWidth * 2) - frameWidth;

        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(x, y, frameWidth, stripHeight);

        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 2, y + 2, frameWidth - 4, stripHeight - 4);

        ctx.fillStyle = '#0a0a0a';
        const perfsTop = Math.floor((frameWidth - perfSpacing) / perfSpacing);
        for (let p = 0; p < perfsTop; p++) {
          ctx.fillRect(x + 6 + p * perfSpacing, y - 4, perfSize, 8);
          ctx.fillRect(x + 6 + p * perfSpacing, y + stripHeight - 4, perfSize, 8);
        }

        ctx.fillStyle = color;
        ctx.font = '8px monospace';
        ctx.fillText(`${String(i + Math.floor(offset / frameWidth)).padStart(4, '0')}`, x + 8, y + stripHeight / 2 + 3);

        if (Math.random() > 0.7) {
          ctx.fillStyle = `${color}30`;
          ctx.fillRect(x + 10, y + 10, frameWidth - 20, stripHeight - 20);
        }
      }

      ctx.restore();
    };

    const drawTimecodeMarkers = (y: number, offset: number) => {
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.strokeStyle = '#E9A820';
      ctx.lineWidth = 1;

      const markerSpacing = 100;
      const totalMarkers = Math.ceil(canvas.width / markerSpacing) + 2;

      for (let i = -1; i < totalMarkers; i++) {
        const x = (i * markerSpacing + offset) % (canvas.width + markerSpacing * 2) - markerSpacing;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + 15);
        ctx.stroke();

        ctx.fillStyle = '#E9A820';
        ctx.font = '9px monospace';
        const seconds = Math.floor((i + Math.floor(offset / markerSpacing)) * 2);
        const timecode = `00:00:${String(seconds % 60).padStart(2, '0')}`;
        ctx.fillText(timecode, x + 3, y + 12);
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawFilmStrip(canvas.height * 0.2, offset1, 0.2, '#E9A820');
      drawTimecodeMarkers(canvas.height * 0.2 - 20, offset1 * 0.5);

      drawFilmStrip(canvas.height * 0.5, offset2, 0.15, '#2d1654');
      drawTimecodeMarkers(canvas.height * 0.5 - 20, offset2 * 0.6);

      drawFilmStrip(canvas.height * 0.75, offset3, 0.1, '#E9A820');
      drawTimecodeMarkers(canvas.height * 0.75 - 20, offset3 * 0.4);

      offset1 -= 1.2;
      offset2 -= 0.8;
      offset3 -= 0.5;

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
}
