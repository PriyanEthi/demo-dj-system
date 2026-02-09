import { motion } from 'framer-motion';
import { Award, Music, Users, Star } from 'lucide-react';

const timeline = [
    { year: "2018", title: "The Beginning", desc: "Started spinning vinyl in underground clubs." },
    { year: "2020", title: "Rising Star", desc: "Residency at Club Neon, gaining local fame." },
    { year: "2022", title: "Main Stage", desc: "Headlined the Summer Vibes Festival for 5,000 people." },
    { year: "2024", title: "Global Sound", desc: "International tour and release of debut EP 'Midnight'." }
];

const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 container mx-auto px-4">
            {/* Hero Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <h1 className="text-5xl font-black mb-6 tracking-tighter uppercase relative inline-block">
                    <span className="relative z-10">Beyond The Beat</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/50 -skew-x-12 z-0" />
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Music isn't just sound—it's an energy that connects us. My mission is to craft sonic journeys that leave you breathless and memories that last forever.
                </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                {[
                    { label: "Events Played", value: "500+", icon: Music },
                    { label: "Happy Clients", value: "100%", icon: Users },
                    { label: "Awards Won", value: "12", icon: Award },
                    { label: "Years Active", value: "8", icon: Star },
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm"
                    >
                        <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                        <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                        <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
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

            {/* Gallery Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-24"
            >
                <h2 className="text-4xl font-bold text-center mb-12">Epic Moments</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                            className="bg-white/5 h-64 rounded-xl overflow-hidden relative group cursor-pointer border border-white/10"
                        >
                            {/* Placeholder for image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600 font-bold text-4xl">
                                EVENT {i}
                            </div>
                            <div className="absolute bottom-4 left-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white font-bold text-lg">Neon Nights</h3>
                                <p className="text-primary text-sm">Los Angeles, 2023</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Testimonials */}
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">Vibe Checks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { name: "Sarah J.", role: "Event Planner", quote: "The energy was unmatched. Best DJ we've ever hired!" },
                        { name: "Mike T.", role: "Club Owner", quote: "Professional, punctual, and absolutely killed the set." }
                    ].map((t, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10 relative"
                        >
                            <div className="text-4xl text-primary absolute top-4 left-4 opacity-30">"</div>
                            <p className="text-lg text-gray-300 mb-6 italic relative z-10">{t.quote}</p>
                            <div className="font-bold text-white">{t.name}</div>
                            <div className="text-sm text-primary">{t.role}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
