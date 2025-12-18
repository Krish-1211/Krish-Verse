import { useEffect, useRef } from 'react';

const CursorTrail = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles: TrailParticle[] = [];
        let animationId: number;
        let mouse = { x: -9999, y: -9999 };

        const colors = [
            '#FFFFFF', // White
            '#E0E0E0', // Light Silver
            '#C0C0C0', // Silver
            '#A9A9A9', // Dark Silver
            '#F8F8FF', // Ghost White
        ];

        class TrailParticle {
            x: number;
            y: number;
            size: number;
            color: string;
            speedX: number;
            speedY: number;
            life: number;
            rotation: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 4 + 2; // Slightly larger for stars
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.speedX = (Math.random() - 0.5) * 1.5;
                this.speedY = (Math.random() - 0.5) * 1.5;
                this.life = 1.0;
                this.rotation = Math.random() * Math.PI * 2;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= 0.02;
                if (this.size > 0.1) this.size -= 0.05;
                this.rotation += 0.1;
            }

            draw() {
                if (!ctx) return;
                ctx.save();
                ctx.globalAlpha = this.life;
                ctx.fillStyle = this.color;

                // Draw 4-pointed star (Sparkle)
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.beginPath();
                const spikes = 4;
                const outerRadius = this.size;
                const innerRadius = this.size / 2;

                for (let i = 0; i < spikes * 2; i++) {
                    const r = (i % 2 === 0) ? outerRadius : innerRadius;
                    const angle = (Math.PI / spikes) * i;
                    ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
                }

                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Spawn sprinkles
            for (let i = 0; i < 1; i++) {
                particles.push(new TrailParticle(mouse.x, mouse.y));
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                mouse.x = e.touches[0].clientX;
                mouse.y = e.touches[0].clientY;

                // Spawn sprinkles for touch
                for (let i = 0; i < 1; i++) {
                    particles.push(new TrailParticle(mouse.x, mouse.y));
                }
            }
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchstart', handleTouchMove);
        resizeCanvas();

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                if (particles[i].life <= 0 || particles[i].size <= 0.1) {
                    particles.splice(i, 1);
                    i--;
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', handleTouchMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[9999]"
            aria-hidden="true"
        />
    );
};

export default CursorTrail;
