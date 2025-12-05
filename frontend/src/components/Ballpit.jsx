import { useEffect, useRef } from 'react';

// This is a placeholder for the Ballpit background component requested in the prompt.
// It simulates a dark canvas with some movement to verify the z-indexing and layout.
export default function Ballpit() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        // Simple floating orbs simulation to mimic "Ballpit" vibe
        const orbs = Array.from({ length: 20 }).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            radius: Math.random() * 100 + 50,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            color: ['#3A29FF', '#FF94B4', '#FF3232'][Math.floor(Math.random() * 3)]
        }));

        const render = () => {
            ctx.fillStyle = '#060712'; // Near-black canvas
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            orbs.forEach(orb => {
                orb.x += orb.vx;
                orb.y += orb.vy;

                if (orb.x < 0 || orb.x > canvas.width) orb.vx *= -1;
                if (orb.y < 0 || orb.y > canvas.height) orb.vy *= -1;

                const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
                gradient.addColorStop(0, orb.color + '40'); // Transparent center
                gradient.addColorStop(1, 'transparent');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0, background: '#060712' }}
        />
    );
}
