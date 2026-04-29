import React from 'react';
import { motion } from 'framer-motion';

export function VideoIbadah() {
    return (
        <section 
            className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/video-terbaru-bg.png')` }}
        >
            {/* Dark Overlay untuk membuat teks putih lebih terbaca */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ duration: 0.6 }}
                        className="text-[9px] md:text-xs font-medium tracking-[0.2em] text-gray-300 uppercase mb-4"
                    >
                        Saksikan kembali firman Tuhan dan pujian penyembahan dari ibadah minggu terakhir.
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
                    >
                        VIDEO IBADAH TERBARU
                    </motion.h2>
                </div>

                {/* Video Carousel Section */}
                <div className="w-full relative flex items-center justify-center">
                    
                    {/* Left Navigation Arrow */}
                    <motion.button 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute left-[-20px] md:left-[-50px] text-white hover:text-gray-300 transition-colors active:scale-90 z-20 hidden md:block"
                        aria-label="Previous Video"
                    >
                        <svg className="w-12 h-12 lg:w-16 lg:h-16 drop-shadow-md" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    {/* Cards Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        
                        {/* Dummy Video Array untuk Loop */}
                        {[1, 2, 3].map((item, index) => (
                            <motion.div 
                                key={item}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.7, delay: 0.2 + (index * 0.15) }}
                                className={`group relative w-full aspect-[16/10] bg-gray-300 overflow-hidden cursor-pointer shadow-xl ${index === 1 ? 'hidden md:block' : ''} ${index === 2 ? 'hidden lg:block' : ''}`}
                            >
                                {/* Placeholder Background (Bisa diganti dengan thumbnail Youtube nantinya) */}
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-400 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
                                
                                {/* Gradient Bawah Hitam untuk teks */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                                {/* Play Button Icon (Center) */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                        <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M5 3l14 9-14 9V3z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Teks Bawah */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-white text-lg md:text-xl font-bold leading-tight tracking-wide drop-shadow-md">
                                        LOREM IPSUM<br/>
                                        DOLOR SIT AMET
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Navigation Arrow */}
                    <motion.button 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute right-[-20px] md:right-[-50px] text-white hover:text-gray-300 transition-colors active:scale-90 z-20 hidden md:block"
                        aria-label="Next Video"
                    >
                        <svg className="w-12 h-12 lg:w-16 lg:h-16 drop-shadow-md" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>

                </div>

            </div>
        </section>
    );
}
