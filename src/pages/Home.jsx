import Hero from '@/components/home/Hero';
import { motion } from 'framer-motion';
import { Music, Calendar, Zap, Star, Award, Users, Phone, Mail, MapPin, Send, Check, Headphones, Radio, Mic } from 'lucide-react';
import Card from '@/components/ui/Card';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const packages = [
    {
        name: "The Warm-Up",
        price: "$500",
        duration: "4 Hours",
        features: ["4 Hours DJ Set", "Basic Sound System", "Standard Lighting", "Setup & Teardown", "Music Consultation"]
    },
    {
        name: "The Headliner",
        price: "$1,200",
        duration: "6 Hours",
        features: ["6 Hours DJ Set", "Premium Sound System", "Intelligent Lighting Rig", "Fog Machine", "MC Services", "Custom Playlist"],
        isPopular: true
    },
    {
        name: "The Festival",
        price: "$2,500",
        duration: "Unlimited",
        features: ["Unlimited Hours", "Concert-Grade Audio", "Full Laser & LED Show", "Custom Visuals", "Live Percussionist Add-on", "Video Projection"]
    }
];

const timeline = [
    { year: "2018", title: "The Beginning", desc: "Started spinning vinyl in underground clubs." },
    { year: "2020", title: "Rising Star", desc: "Residency at Club Neon, gaining local fame." },
    { year: "2022", title: "Main Stage", desc: "Headlined the Summer Vibes Festival for 5,000 people." },
    { year: "2024", title: "Global Sound", desc: "International tour and release of debut EP 'Midnight'." }
];

const Home = () => {
    const handleContactSubmit = (e) => {
        e.preventDefault();
        toast.success("Message Sent Successfully!");
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section id="home">
                <Hero />
            </section>

            {/* Features Section */}
            <section className="py-20 bg-background relative z-10">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
                    >
                        Why Choose The Vibe?
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Music, title: "High-Fidelity Audio", desc: "Crystal clear sound systems that fill the room with premium acoustics." },
                            { icon: Zap, title: "Intelligent Lighting", desc: "Visuals that sync perfectly with every beat and mood." },
                            { icon: Calendar, title: "Seamless Booking", desc: "Interactive calendar to secure your date instantly online." },
                            { icon: Star, title: "Top-Tier Talent", desc: "Experienced DJs who know how to read and energize the crowd." }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Card className="h-full bg-white/5 border-white/10 p-6 flex flex-col items-center text-center">
                                    <div className="p-4 rounded-full bg-primary/20 mb-6 group-hover:bg-primary/40 transition-colors">
                                        <feature.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="bg-gradient-to-br from-primary/10 to-purple-900/10 p-8 rounded-2xl border border-primary/20">
                            <h3 className="text-2xl font-bold text-white mb-4">Professional Equipment</h3>
                            <p className="text-gray-400 mb-4">State-of-the-art Pioneer CDJs, Allen & Heath mixers, and premium sound systems from JBL and QSC.</p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>• 10,000+ watt sound systems</li>
                                <li>• Wireless microphone systems</li>
                                <li>• Backup equipment on-site</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-indigo-900/10 to-blue-900/10 p-8 rounded-2xl border border-indigo-500/20">
                            <h3 className="text-2xl font-bold text-white mb-4">Music Library</h3>
                            <p className="text-gray-400 mb-4">Over 50,000 tracks spanning all genres from classic hits to the latest chart-toppers.</p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>• EDM, Hip-Hop, Pop, Rock</li>
                                <li>• Latin, Reggaeton, Afrobeats</li>
                                <li>• Custom playlist creation</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-purple-900/10 to-pink-900/10 p-8 rounded-2xl border border-purple-500/20">
                            <h3 className="text-2xl font-bold text-white mb-4">Event Expertise</h3>
                            <p className="text-gray-400 mb-4">Specialized experience in weddings, corporate events, clubs, and private parties.</p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>• Pre-event consultation</li>
                                <li>• Timeline coordination</li>
                                <li>• MC/Emcee services available</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services/Packages Section */}
            <section id="services" className="py-20 bg-gradient-to-b from-background to-black/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Our Packages</h2>
                        <p className="text-xl text-gray-400">Curated experiences for every event size.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
                        {packages.map((pkg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={pkg.isPopular ? "md:-mt-8" : ""}
                            >
                                <Card className={`h-full p-8 ${pkg.isPopular ? "border-primary shadow-[0_0_30px_rgba(147,51,234,0.3)] bg-primary/5" : "bg-white/5"}`}>
                                    {pkg.isPopular && (
                                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                            POPULAR
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                                    <div className="text-4xl font-black text-primary mb-2">{pkg.price}</div>
                                    <div className="text-sm text-gray-400 mb-6">{pkg.duration}</div>

                                    <ul className="space-y-4 mb-8">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-center text-gray-300">
                                                <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to="/booking" className={`block w-full py-4 rounded-lg font-bold transition-all text-center ${pkg.isPopular ? "bg-primary text-white hover:bg-primary/80" : "bg-white/10 text-white hover:bg-white/20"}`}>
                                        Select Package
                                    </Link>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16"
                    >
                        <h3 className="text-3xl font-bold text-center mb-8 text-white">Add-On Services</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: Headphones, title: "Silent Disco", desc: "Wireless headphone party experience", price: "+$300" },
                                { icon: Radio, title: "Live Streaming", desc: "Broadcast your event worldwide", price: "+$200" },
                                { icon: Mic, title: "Karaoke Setup", desc: "Professional karaoke system", price: "+$150" }
                            ].map((addon, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/5 border border-white/10 p-6 rounded-xl text-center"
                                >
                                    <addon.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                                    <h4 className="text-xl font-bold text-white mb-2">{addon.title}</h4>
                                    <p className="text-gray-400 text-sm mb-3">{addon.desc}</p>
                                    <span className="text-primary font-bold">{addon.price}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase relative inline-block">
                            <span className="relative z-10">Beyond The Beat</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/50 -skew-x-12 z-0" />
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-6">
                            Music isn't just sound—it's an energy that connects us. My mission is to craft sonic journeys that leave you breathless and memories that last forever.
                        </p>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            With over 8 years of experience in the industry, I've had the privilege of performing at hundreds of events, from intimate weddings to massive festivals. Every event is unique, and I pride myself on creating custom experiences that reflect your vision and exceed your expectations.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                        {[
                            { label: "Events Played", value: "500+", icon: Music, desc: "Across 5 states" },
                            { label: "Happy Clients", value: "100%", icon: Users, desc: "Satisfaction rate" },
                            { label: "Awards Won", value: "12", icon: Award, desc: "Industry recognition" },
                            { label: "Years Active", value: "8", icon: Star, desc: "Professional experience" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm"
                            >
                                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-400 uppercase tracking-widest mb-1">{stat.label}</div>
                                <div className="text-xs text-gray-500">{stat.desc}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Timeline */}
                    <h3 className="text-3xl font-bold text-center mb-12">The Journey</h3>
                    <div className="relative max-w-4xl mx-auto mb-16">
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2" />

                        {timeline.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex items-center justify-between mb-16 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
                            >
                                <div className="w-5/12" />
                                <div className="w-2/12 flex justify-center relative">
                                    <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_theme('colors.primary.DEFAULT')] relative z-10" />
                                    <div className="absolute w-8 h-8 bg-primary/30 rounded-full animate-ping" />
                                </div>
                                <div className="w-5/12 bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:border-primary/50 transition-colors">
                                    <div className="text-primary font-black text-xl mb-1">{item.year}</div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Skills & Specialties */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-primary/10 to-purple-900/10 p-8 rounded-2xl border border-primary/20"
                    >
                        <h3 className="text-2xl font-bold text-center mb-8">Specialties & Skills</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                "Open Format", "EDM/House", "Hip-Hop/R&B", "Latin/Reggaeton",
                                "Top 40/Pop", "Wedding Specialist", "Corporate Events", "Live Mixing",
                                "Scratching", "Beat Matching", "Crowd Reading", "MC Services"
                            ].map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white/5 px-4 py-2 rounded-lg text-center text-sm text-gray-300 border border-white/10 hover:border-primary/50 transition-colors"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20 bg-gradient-to-b from-background to-black/50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">Epic Moments</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Captured memories from unforgettable nights. From intimate gatherings to massive festivals, we bring the energy that makes every event legendary.</p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {[
                            { title: "Summer Festival 2024", location: "Miami Beach", attendees: "5,000+" },
                            { title: "Corporate Gala", location: "Beverly Hills", attendees: "500+" },
                            { title: "Wedding Reception", location: "Malibu", attendees: "200+" },
                            { title: "Club Night", location: "Downtown LA", attendees: "1,000+" },
                            { title: "Private Party", location: "Hollywood Hills", attendees: "150+" },
                            { title: "New Year's Eve", location: "Santa Monica", attendees: "3,000+" }
                        ].map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                                className="bg-white/5 h-64 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-900/20 flex items-center justify-center text-gray-600 font-bold text-4xl">
                                    <Music className="w-20 h-20 text-primary/30" />
                                </div>
                                <div className="absolute bottom-4 left-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-bold text-lg">{event.title}</h3>
                                    <p className="text-primary text-sm">{event.location}</p>
                                    <p className="text-gray-400 text-xs">{event.attendees} attendees</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Watch Our Highlights</h3>
                        <p className="text-gray-400 mb-6">Experience the energy and atmosphere we create at every event</p>
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-900/20 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                                <Music className="w-16 h-16 text-primary mx-auto mb-4" />
                                <p className="text-gray-400">Video Showreel Coming Soon</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-4"
                    >
                        Vibe Checks
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
                    >
                        Don't just take our word for it. Here's what our clients say about their experience with DJ XPerience.
                    </motion.p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                        {[
                            { name: "Sarah J.", role: "Event Planner", quote: "The energy was unmatched. Best DJ we've ever hired! The crowd was dancing all night and the transitions were flawless.", rating: 5 },
                            { name: "Mike T.", role: "Club Owner", quote: "Professional, punctual, and absolutely killed the set. Our venue has never been more packed. Booking again next month!", rating: 5 },
                            { name: "Emma R.", role: "Bride", quote: "Made our wedding reception absolutely magical. Everyone was dancing! They read the room perfectly and played exactly what we wanted.", rating: 5 }
                        ].map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white/5 p-8 rounded-2xl border border-white/10 relative"
                            >
                                <div className="text-4xl text-primary absolute top-4 left-4 opacity-30">"</div>
                                <div className="flex mb-4 relative z-10">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-lg text-gray-300 mb-6 italic relative z-10">{t.quote}</p>
                                <div className="font-bold text-white">{t.name}</div>
                                <div className="text-sm text-primary">{t.role}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Reviews */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            { name: "David L.", role: "Corporate Client", quote: "Transformed our company party into an unforgettable experience. Highly recommended!" },
                            { name: "Jessica M.", role: "Birthday Celebrant", quote: "Best birthday party ever! The DJ knew exactly how to keep the energy high all night." }
                        ].map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-primary/5 to-purple-900/5 p-6 rounded-xl border border-white/5"
                            >
                                <p className="text-gray-300 mb-4 italic">"{t.quote}"</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-bold text-white text-sm">{t.name}</div>
                                        <div className="text-xs text-primary">{t.role}</div>
                                    </div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gradient-to-b from-background to-black">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-bold mb-4">Let's Connect</h2>
                        <p className="text-xl text-gray-400">Ready to make your event unforgettable?</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
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

                            {/* Google Map */}
                            <div className="h-64 rounded-2xl overflow-hidden border border-white/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.4803892374!2d-118.24532492346056!3d34.05223731826134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md"
                        >
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <form onSubmit={handleContactSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">First Name</label>
                                        <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-primary transition-colors focus:ring-1 focus:ring-primary focus:outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Last Name</label>
                                        <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-primary transition-colors focus:ring-1 focus:ring-primary focus:outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Email Address</label>
                                    <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-primary transition-colors focus:ring-1 focus:ring-primary focus:outline-none" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Message</label>
                                    <textarea required rows="4" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:border-primary transition-colors focus:ring-1 focus:ring-primary focus:outline-none"></textarea>
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
            </section>
        </div>
    );
};

export default Home;
