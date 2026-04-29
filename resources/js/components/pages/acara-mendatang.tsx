import React from 'react';
import { motion } from 'framer-motion';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';

export function AcaraMendatang() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-16 md:py-24">
            
            {/* === BACKGROUND SHAPES === */}
            
            {/* Kiri Atas */}
            <div className="absolute top-0 left-0 h-full w-[30%] pointer-events-none">
                <BrandDecoLeft className="-translate-x-20 -translate-y-20 scale-125 opacity-70" />
            </div>

            {/* Kanan Bawah */}
            <div className="absolute top-0 right-0 h-full w-[30%] pointer-events-none flex justify-end items-end pb-10">
                <BrandDecoRight className="translate-x-20 translate-y-10 scale-110 opacity-70" />
            </div>

            {/* === MAIN CONTENT === */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                
                {/* Header */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.6 }}
                    className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-4"
                >
                    Ikuti berbagai kegiatan dan pelayanan yang akan segera dilaksanakan.
                </motion.p>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-8"
                >
                    ACARA MENDATANG
                </motion.h2>

                <motion.a 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    href="#" 
                    className="inline-block bg-[#779965] hover:bg-[#5f7a50] text-white font-semibold py-3 px-10 rounded-md transition-colors shadow-md mb-4 md:-mb-10 relative z-20"
                >
                    Lihat Semua
                </motion.a>

                {/* Carousel Container */}
                <div className="w-full flex items-center justify-center gap-4 md:gap-8 lg:gap-12 mt-10">
                    
                    {/* Left Arrow */}
                    <button className="text-[#779965] hover:text-[#5f7a50] transition-colors active:scale-95 flex-shrink-0" aria-label="Previous">
                        <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Cards (3 Placeholders with Staggered Layout) */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl items-start">
                        
                        {/* Card 1 (Normal) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="aspect-[3/4] bg-[#dcdcdc] rounded-sm shadow-sm w-full transition-transform hover:-translate-y-2 hover:shadow-md cursor-pointer"
                        />
                        
                        {/* Card 2 (Middle - Shifted Down) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="aspect-[3/4] bg-[#dcdcdc] rounded-sm shadow-sm w-full transition-transform hover:-translate-y-2 hover:shadow-md cursor-pointer hidden md:block mt-0 md:mt-20"
                        />
                        
                        {/* Card 3 (Normal) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="aspect-[3/4] bg-[#dcdcdc] rounded-sm shadow-sm w-full transition-transform hover:-translate-y-2 hover:shadow-md cursor-pointer hidden lg:block"
                        />
                        
                    </div>

                    {/* Right Arrow */}
                    <button className="text-[#779965] hover:text-[#5f7a50] transition-colors active:scale-95 flex-shrink-0" aria-label="Next">
                        <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>

            </div>
        </section>
    );
}
