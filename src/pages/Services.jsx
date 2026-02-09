import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { Check } from 'lucide-react';

const packages = [
    {
        name: "The Warm-Up",
        price: "$500",
        features: ["4 Hours DJ Set", "Basic Sound System", "Standard Lighting", "Setup & Teardown"]
    },
    {
        name: "The Headliner",
        price: "$1,200",
        features: ["6 Hours DJ Set", "Premium Sound System", "Intelligent Lighting Rig", "Fog Machine", "MC Services"],
        isPopular: true
    },
    {
        name: "The Festival",
        price: "$2,500",
        features: ["Unlimited Hours", "Concert-Grade Audio", "Full Laser & LED Show", "Custom Visuals", "Live Percussionist Add-on"]
    }
];

const Services = () => (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Our Packages</h1>
            <p className="text-xl text-gray-400">Curated experiences for every event size.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
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
                        <div className="text-4xl font-black text-primary mb-6">{pkg.price}</div>

                        <ul className="space-y-4 mb-8">
                            {pkg.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <Check className="w-5 h-5 text-green-400 mr-3" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className={`w-full py-4 rounded-lg font-bold transition-all ${pkg.isPopular ? "bg-primary text-white hover:bg-primary/80" : "bg-white/10 text-white hover:bg-white/20"}`}>
                            Select Package
                        </button>
                    </Card>
                </motion.div>
            ))}
        </div>
    </div>
);

export default Services;
