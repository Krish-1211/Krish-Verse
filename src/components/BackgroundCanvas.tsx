import { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dots: Dot[] = [];
    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };

    window.addEventListener('resize', resizeCanvas);

    // Google Antigravity Brand Colors (Darker shades)
    const colors = [
      '#3367D6', // Darker Blue
      '#0F9D58', // Darker Green
      '#C5221F', // Darker Red
      '#E37400', // Darker Yellow
      '#3C4043', // Darker Grey
    ];

    class Dot {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1; // Small dots
        this.speedY = Math.random() * 0.3 + 0.1; // Slow rise
        this.speedX = (Math.random() - 0.5) * 0.1; // Minimal drift
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.4 + 0.4; // Darker/More visible (higher opacity)
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        // Reset when moving off screen
        if (this.y < -10) {
          this.y = canvas.height + 10;
          this.x = Math.random() * canvas.width;
        }

        // Wrap horizontal
        if (this.x > canvas.width + 10) this.x = -10;
        if (this.x < -10) this.x = canvas.width + 10;
      }
    }

    const initDots = () => {
      dots = [];
      const density = (canvas.width * canvas.height) / 4000; // Increased density
      for (let i = 0; i < density; i++) {
        dots.push(new Dot());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(dot => {
        dot.draw();
        dot.update();
      });
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas(); // Init immediately
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="background-canvas"
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      aria-hidden="true"
    />
  );
};

export default BackgroundCanvas;
