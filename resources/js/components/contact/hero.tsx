import React from 'react';
import { motion } from 'framer-motion';

export function ContactHero() {
    return (
        <section 
            className="relative w-full min-h-[500px] lg:min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat pt-20"
            style={{ backgroundImage: `url('/images/contact-us/hubungi-kami-header.png')` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
                <div className="max-w-3xl">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-white/90 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4"
                    >
                        HUBUNGI KAMI
                    </motion.p>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] uppercase tracking-tight"
                    >
                        MARI TERHUBUNG <br />
                        DAN BERTUMBUH <br />
                        BERSAMA
                    </motion.h1>
                </div>
            </div>
        </section>
    );
}
