import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import React from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const scrollContainerRef = useRef(null);

    const navLinks = location.pathname === '/booking' 
        ? [{ name: 'Home', path: '/' }, { name: 'Booking', path: '/booking' }]
        : [
            { name: 'Home', id: 'home' },
            { name: 'Services', id: 'services' },
            { name: 'About', id: 'about' },
            { name: 'Gallery', id: 'gallery' },
            { name: 'Testimonials', id: 'testimonials' },
            { name: 'Contact', id: 'contact' },
        ];

    useEffect(() => {
        if (location.pathname !== '/') return;

        const handleScroll = () => {
            const sections = ['home', 'services', 'about', 'gallery', 'testimonials', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === '/' && scrollContainerRef.current) {
            const activeButton = scrollContainerRef.current.querySelector(`[data-section="${activeSection}"]`);
            if (activeButton) {
                activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [activeSection, location.pathname]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollMenu = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors duration-300 group">
                        <span className="text-white group-hover:hidden">DJ</span>
                        <span className="hidden group-hover:inline text-primary animate-pulse">DJ</span>
                        <span className="text-primary">X</span>Perience
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {location.pathname === '/' ? (
                            navLinks.map((link) => (
                                link.path ? (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="relative text-sm font-medium transition-colors hover:text-primary text-gray-300"
                                    >
                                        {link.name}
                                    </Link>
                                ) : (
                                    <button
                                        key={link.id}
                                        onClick={() => scrollToSection(link.id)}
                                        className={cn(
                                            "relative text-sm font-medium transition-colors hover:text-primary",
                                            activeSection === link.id ? "text-primary" : "text-gray-300"
                                        )}
                                    >
                                        {link.name}
                                        {activeSection === link.id && (
                                            <motion.div
                                                layoutId="underline"
                                                className="absolute left-0 top-full block h-[2px] w-full bg-primary"
                                            />
                                        )}
                                    </button>
                                )
                            ))
                        ) : (
                            <>
                                <Link to="/" className="relative text-sm font-medium transition-colors hover:text-primary text-gray-300">Home</Link>
                                <Link to="/#services" className="relative text-sm font-medium transition-colors hover:text-primary text-gray-300">Services</Link>
                                <Link to="/#about" className="relative text-sm font-medium transition-colors hover:text-primary text-gray-300">About</Link>
                                <Link to="/#gallery" className="relative text-sm font-medium transition-colors hover:text-primary text-gray-300">Gallery</Link>
                                <Link to="/#testimonials" className="relative text-sm font-medium transition-colors hover:text-primary text-gray-300">Testimonials</Link>
                                <Link to="/#contact" className="relative text-sm font-medium transition-colors hover:text-primary text-gray-300">Contact</Link>
                            </>
                        )}
                        <Link
                            to="/booking"
                            className="px-4 py-2 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/80 transition-colors"
                        >
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Buttons */}
                    {location.pathname === '/' ? (
                        <Link
                            to="/booking"
                            className="md:hidden px-4 py-2 bg-primary text-white rounded-full text-sm font-bold hover:bg-primary/80 transition-colors"
                        >
                            Book Now
                        </Link>
                    ) : (
                        <Link
                            to="/"
                            className="md:hidden flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-bold hover:bg-white/20 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Link>
                    )}
                </div>
            </nav>

            {/* Mobile Scroll Indicator */}
            {location.pathname === '/' && (
                <div className="md:hidden fixed top-20 left-0 w-full z-40 bg-black/50 backdrop-blur-sm border-b border-white/5">
                    <div className="relative flex items-center">
                        <button
                            onClick={() => scrollMenu('left')}
                            className="absolute left-0 z-10 p-2 bg-black/80 hover:bg-primary/80 transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4 text-white" />
                        </button>
                        
                        <div ref={scrollContainerRef} className="flex space-x-2 px-10 py-2 overflow-x-auto scrollbar-hide">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    data-section={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className={cn(
                                        "px-4 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all",
                                        activeSection === link.id 
                                            ? "bg-primary text-white" 
                                            : "bg-white/10 text-gray-400"
                                    )}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => scrollMenu('right')}
                            className="absolute right-0 z-10 p-2 bg-black/80 hover:bg-primary/80 transition-colors"
                        >
                            <ChevronRight className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
