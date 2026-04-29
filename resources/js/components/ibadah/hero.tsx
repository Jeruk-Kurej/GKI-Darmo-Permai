import React from 'react';
import { motion } from 'framer-motion';

export function IbadahHero() {
    return (
        <section 
            className="relative w-full min-h-[500px] lg:min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat pt-20"
            style={{ backgroundImage: `url('/images/ibadah/ibadah-header.png')` }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <h3 className="text-sm md:text-base font-extrabold tracking-widest text-[#1a1a1a] uppercase mb-4 opacity-90">
                        IBADAH
                    </h3>
                    <h1 className="text-4xl md:text-6xl lg:text-[80px] font-black text-[#1a1a1a] leading-[1.1] tracking-tight uppercase">
                        TAKE PART IN <br /> OUR SERMON
                    </h1>
                </motion.div>
            </div>
        </section>
    );
}
