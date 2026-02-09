import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-black/90 text-white/70 py-12 border-t border-white/10 backdrop-blur-md">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white tracking-widest"><span className="text-primary">DJ</span>XPERIENCE</h2>
                    <p className="text-sm">Elevating nightlife with immersive sound and visual experiences.</p>
                </div>

                {/* Links */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold uppercase tracking-wider">Explore</h3>
                    <ul className="space-y-2">
                        <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
                        <li><a href="/booking" className="hover:text-primary transition-colors">Booking</a></li>
                        <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold uppercase tracking-wider">Connect</h3>
                    <div className="flex space-x-4">
                        <motion.a href="#" whileHover={{ scale: 1.2, color: '#ec4899' }} className="hover:text-white transition-colors"><Instagram /></motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2, color: '#1da1f2' }} className="hover:text-white transition-colors"><Twitter /></motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2, color: '#1877f2' }} className="hover:text-white transition-colors"><Facebook /></motion.a>
                        <motion.a href="#" whileHover={{ scale: 1.2, color: '#ff0000' }} className="hover:text-white transition-colors"><Youtube /></motion.a>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="space-y-4">
                    <h3 className="text-white font-semibold uppercase tracking-wider">Stay Tuned</h3>
                    <form className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 focus:stroke-primary focus:outline-none focus:ring-1 focus:ring-primary w-full"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-r-md transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </motion.button>
                    </form>
                </div>

            </div>
            <div className="text-center mt-12 pt-8 border-t border-white/5 text-sm">
                &copy; {new Date().getFullYear()} DJ XPerience. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
