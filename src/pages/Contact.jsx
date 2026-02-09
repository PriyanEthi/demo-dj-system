import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
    const handleSend = (e) => {
        e.preventDefault();
        toast.success("Message Sent Successfully!");
    };

    return (
        <div className="min-h-screen pt-32 pb-20 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>
                <p className="text-xl text-gray-400">Ready to make your event unforgettable?</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact UI */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
                        <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <span className="text-lg">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span className="text-lg">bookings@djxperience.com</span>
                            </div>
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <span className="text-lg">Los Angeles, CA & Worldwide</span>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-64 rounded-2xl overflow-hidden relative border border-white/10 group">
                        {/* This would be a real map iframe */}
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                            <span className="text-gray-500 font-bold tracking-widest uppercase">Interactive Map Loading...</span>
                        </div>
                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md"
                >
                    <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                    <form onSubmit={handleSend} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">First Name</label>
                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-primary transition-colors focus:ring-1 focus:ring-primary focus:outline-none" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Last Name</label>
                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-primary transition-colors focus:ring-1 focus:ring-primary focus:outline-none" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Email Address</label>
                            <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-primary transition-colors focus:ring-1 focus:ring-primary focus:outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Message</label>
                            <textarea rows="4" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-primary transition-colors focus:ring-1 focus:ring-primary focus:outline-none"></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-primary to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
