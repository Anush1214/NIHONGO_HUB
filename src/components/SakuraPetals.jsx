import { useEffect, useRef } from 'react';

const SakuraPetals = ({ count = 50 }) => {
    const canvasRef = useRef(null);
    const petalsRef = useRef([]);
    const animFrameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Create petals
        const createPetal = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            speedX: Math.random() * 1.5 - 0.75,
            speedY: Math.random() * 1.5 + 0.5,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.03,
            opacity: Math.random() * 0.6 + 0.3,
            wobble: Math.random() * Math.PI * 2,
            wobbleSpeed: Math.random() * 0.02 + 0.01,
            color: Math.random() > 0.5 ? '#FFB7C5' : '#FFDCE5',
        });

        // Adapt count for mobile performance
        const isMobile = canvas.width < 480;
        const isTablet = canvas.width < 768;
        const actualCount = isMobile ? Math.floor(count * 0.4) : isTablet ? Math.floor(count * 0.6) : count;

        petalsRef.current = Array.from({ length: actualCount }, createPetal);

        const drawPetal = (petal) => {
            ctx.save();
            ctx.translate(petal.x, petal.y);
            ctx.rotate(petal.rotation);
            ctx.globalAlpha = petal.opacity;

            // Draw a sakura petal shape
            ctx.beginPath();
            ctx.fillStyle = petal.color;
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(
                petal.size * 0.3, -petal.size * 0.5,
                petal.size, -petal.size * 0.5,
                petal.size * 0.5, petal.size * 0.2
            );
            ctx.bezierCurveTo(
                petal.size * 0.8, petal.size * 0.6,
                petal.size * 0.2, petal.size * 0.5,
                0, 0
            );
            ctx.fill();

            // Second petal lobe
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(
                -petal.size * 0.3, -petal.size * 0.5,
                -petal.size, -petal.size * 0.5,
                -petal.size * 0.5, petal.size * 0.2
            );
            ctx.bezierCurveTo(
                -petal.size * 0.8, petal.size * 0.6,
                -petal.size * 0.2, petal.size * 0.5,
                0, 0
            );
            ctx.fill();

            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            petalsRef.current.forEach((petal) => {
                petal.wobble += petal.wobbleSpeed;
                petal.x += petal.speedX + Math.sin(petal.wobble) * 0.5;
                petal.y += petal.speedY;
                petal.rotation += petal.rotationSpeed;

                // Reset petal when it goes off screen
                if (petal.y > canvas.height + 20) {
                    petal.y = -20;
                    petal.x = Math.random() * canvas.width;
                }
                if (petal.x > canvas.width + 20) petal.x = -20;
                if (petal.x < -20) petal.x = canvas.width + 20;

                drawPetal(petal);
            });

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [count]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1000,
            }}
        />
    );
};

export default SakuraPetals;
