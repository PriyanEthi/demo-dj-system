import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Calendar from '@/components/booking/Calendar';
import { CheckCircle, Clock, PartyPopper } from 'lucide-react';
import toast from 'react-hot-toast';

const Booking = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [formData, setFormData] = useState({ eventName: '', fullName: '', phone: '', email: '' });
    const [showSuccess, setShowSuccess] = useState(false);
    const successRef = useRef(null);

    const slots = ["18:00 - 22:00", "20:00 - 00:00", "22:00 - 02:00", "00:00 - 04:00"];

    useEffect(() => {
        if (showSuccess && successRef.current) {
            successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [showSuccess]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedDate || !selectedSlot) {
            toast.error("Please select a date and time slot.");
            return;
        }
        
        setShowSuccess(true);
        
        setTimeout(() => {
            setShowSuccess(false);
            setSelectedDate(null);
            setSelectedSlot(null);
            setFormData({ eventName: '', fullName: '', phone: '', email: '' });
            e.target.reset();
        }, 5000);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen pt-4 pb-20 container mx-auto px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0 pointer-events-none" />

            <div className="relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
                >
                    Start The Party
                </motion.h1>

                {showSuccess ? (
                    <motion.div
                        ref={successRef}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-2xl mx-auto bg-gradient-to-br from-green-500/20 to-primary/20 border-2 border-green-500/50 rounded-3xl p-12 text-center backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                        >
                            <PartyPopper className="w-24 h-24 text-green-400 mx-auto mb-6" />
                        </motion.div>
                        <h2 className="text-4xl font-bold text-white mb-4">Booking Confirmed! 🎉</h2>
                        <p className="text-xl text-gray-300 mb-6">Your event is secured and we can't wait to make it unforgettable!</p>
                        <div className="bg-black/30 rounded-xl p-6 mb-6">
                            <div className="grid grid-cols-2 gap-4 text-left">
                                <div>
                                    <p className="text-gray-400 text-sm">Event</p>
                                    <p className="text-white font-bold">{formData.eventName}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Name</p>
                                    <p className="text-white font-bold">{formData.fullName}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Date</p>
                                    <p className="text-white font-bold">{selectedDate?.toLocaleDateString()}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Time</p>
                                    <p className="text-white font-bold">{selectedSlot}</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">A confirmation email has been sent to <span className="text-primary font-bold">{formData.email}</span></p>
                        <p className="text-gray-500 text-xs mt-4">Redirecting in a moment...</p>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm mr-3">1</span>
                                Select Date
                            </h3>
                            <Calendar onSelectDate={setSelectedDate} />

                            {selectedDate && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="mt-8"
                                >
                                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm mr-3">2</span>
                                        Select Time
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {slots.map((slot) => (
                                            <button
                                                key={slot}
                                                onClick={() => setSelectedSlot(slot)}
                                                className={`
                                                    p-4 rounded-xl border transition-all flex items-center justify-center gap-2
                                                    ${selectedSlot === slot
                                                        ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(147,51,234,0.3)]'
                                                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}
                                                `}
                                            >
                                                <Clock className="w-4 h-4" />
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm self-start sticky top-32"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm mr-3">3</span>
                                Event Details
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Event Name / Type</label>
                                    <input 
                                        required 
                                        type="text" 
                                        name="eventName"
                                        value={formData.eventName}
                                        onChange={handleInputChange}
                                        className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
                                        placeholder="e.g. Wedding, Private Party" 
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                                        <input 
                                            required 
                                            type="text" 
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:border-primary transition-all" 
                                            placeholder="John Doe" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Phone</label>
                                        <input 
                                            required 
                                            type="tel" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:border-primary transition-all" 
                                            placeholder="+1 (555) 000-0000" 
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                    <input 
                                        required 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-black/30 border border-white/10 rounded-lg p-4 text-white focus:border-primary transition-all" 
                                        placeholder="john@example.com" 
                                    />
                                </div>

                                <div className="pt-4 border-t border-white/10">
                                    <div className="flex justify-between mb-2 text-gray-400">
                                        <span>Date:</span>
                                        <span className="text-white font-medium">{selectedDate ? selectedDate.toLocaleDateString() : '—'}</span>
                                    </div>
                                    <div className="flex justify-between mb-6 text-gray-400">
                                        <span>Time:</span>
                                        <span className="text-white font-medium">{selectedSlot || '—'}</span>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={!selectedDate || !selectedSlot}
                                        className={`
                                            w-full py-4 rounded-lg font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2
                                            ${selectedDate && selectedSlot
                                                ? 'bg-primary text-white hover:shadow-primary/50'
                                                : 'bg-gray-700 text-gray-400 cursor-not-allowed'}
                                        `}
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        Confirm Booking
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Booking;
