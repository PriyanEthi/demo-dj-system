import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            const numberOfParticles = Math.min(window.innerWidth / 10, 150);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 2 + 0.5,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    color: `hsla(${Math.random() * 60 + 260}, 100%, 70%, ${Math.random() * 0.5 + 0.2})`
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(147, 51, 234, ${1 - distance / 100})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-[#0a0a0e]" />

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20 z-0 pointer-events-none" />

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h2 className="text-xl md:text-3xl font-light tracking-[0.5em] text-cyan-300 mb-4 uppercase">
                        The Ultimate
                    </h2>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-6 mix-blend-overlay opacity-90"
                        style={{ textShadow: "0 0 40px rgba(139, 92, 246, 0.5)" }}
                    >
                        DJ XPERIENCE
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Immersive Sound. Pulse-Pounding Visuals. Unforgettable Nights.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link to="/booking">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg tracking-wide uppercase transition-all"
                            >
                                Book Your Date
                            </motion.button>
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg tracking-wide uppercase backdrop-blur-sm transition-all"
                        >
                            View Services
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="w-8 h-8 text-white/50" />
            </motion.div>
        </section>
    );
};

export default Hero;
