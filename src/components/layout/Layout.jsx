import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAudio } from '@/context/AudioContext';
import { Volume2, VolumeX, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ParticleBackground from '@/components/ui/ParticleBackground';

const Layout = () => {
    const { isMuted, toggleMute, startAudio } = useAudio();
    const location = useLocation();
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden" onClick={startAudio}>
            <ParticleBackground />
            
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="noise-overlay" />

            <Navbar />

            <main className={`flex-grow relative z-10 w-full ${location.pathname === '/' ? 'pt-0 md:pt-0' : 'pt-32 md:pt-20'}`}>
                <Outlet />
            </main>

            <Footer />

            <motion.button
                onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-primary/80 transition-all shadow-lg group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-primary group-hover:text-white animate-pulse" />}
            </motion.button>

            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-20 right-6 z-50 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-primary/80 transition-all shadow-lg group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowUp className="w-6 h-6 text-white" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Layout;
