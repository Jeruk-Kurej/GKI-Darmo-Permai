import React from 'react';
import { motion } from 'framer-motion';

export function AboutHero() {
    return (
        <section 
            className="relative w-full flex-1 min-h-[500px] lg:min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/about-us/about-us-header.webp')` }}
        >
            {/* Dark overlay for better readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <h3 className="text-sm md:text-base font-extrabold tracking-widest text-white uppercase mb-4 opacity-90 drop-shadow-sm">
                        TENTANG KAMI
                    </h3>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                        SERVING THE WORLD AROUND US
                    </h1>
                </motion.div>
            </div>
        </section>
    );
}
