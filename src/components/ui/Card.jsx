import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const Card = ({ children, className }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className={cn("relative group cursor-pointer", className)}
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div
                style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                className="relative h-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 shadow-xl overflow-hidden"
            >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-[100%] group-hover:animate-shine bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none" />

                {children}
            </div>
        </motion.div>
    );
};

export default Card;
