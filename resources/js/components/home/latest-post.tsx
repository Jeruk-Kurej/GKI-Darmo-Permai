import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';

export function LatestPost() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-16 md:py-24">
            {/* === BACKGROUND SHAPES === */}
            
            {/* Kiri Atas */}
            <div className="absolute top-0 left-0 h-full w-[30%] pointer-events-none">
                <BrandDecoLeft className="-translate-x-20 -translate-y-10 scale-125 opacity-70" />
            </div>

            {/* Kanan Bawah */}
            <div className="absolute top-0 right-0 h-full w-[30%] pointer-events-none flex justify-end items-end pb-20">
                <BrandDecoRight className="translate-x-10 translate-y-20 scale-110 opacity-70" />
            </div>

            {/* === MAIN CONTENT === */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ duration: 0.6 }}
                        className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-4"
                    >
                        READ OUR BLOG
                    </motion.p>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-black tracking-tight"
                    >
                        LATEST POST
                    </motion.h2>
                </div>

                {/* Grid 4 Kolom */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    
                    {[1, 2, 3, 4].map((item, index) => (
                        <motion.div 
                            key={item}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="flex flex-col w-full shadow-lg hover:-translate-y-2 transition-transform duration-300 cursor-pointer group"
                        >
                            {/* Card Image Area */}
                            <div className="relative w-full aspect-square bg-[#63a4d4] overflow-hidden">
                                {/* Placeholder Gambar / Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#4ca1af] to-[#2c3e50] mix-blend-multiply opacity-20 group-hover:scale-105 transition-transform duration-700"></div>
                                
                                {/* Placeholder Teks Gambar (Hanya untuk referensi ketiadaan foto asli) */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-80">
                                    <h4 className="text-[#f1c40f] font-extrabold text-3xl md:text-4xl text-center leading-none tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>
                                        THE<br/>SERMON
                                    </h4>
                                    <p className="text-white font-medium italic mt-2 text-sm" style={{ fontFamily: 'Tangerine, cursive', fontSize: '24px' }}>
                                        on The Mount
                                    </p>
                                </div>

                                {/* Date Badge */}
                                <div className="absolute top-4 right-4 text-right">
                                    <span className="block text-2xl font-black text-black leading-none">20</span>
                                    <span className="block text-[10px] font-bold text-black uppercase tracking-wider">JULI</span>
                                </div>
                            </div>

                            {/* Card Content Area */}
                            <div className="flex-1 bg-[#f3f4e8] p-6 flex flex-col justify-between border-b-[12px] border-[#779965]">
                                <div>
                                    <p className="text-[#779965] font-bold text-xs tracking-widest uppercase mb-2">
                                        KEBAKTIAN
                                    </p>
                                    <h3 className="text-xl font-extrabold text-black leading-tight mb-4 group-hover:text-[#5f7a50] transition-colors">
                                        CAMP JEMAAT GKI DAMAI 2026
                                    </h3>
                                </div>
                                
                                <div className="mt-4">
                                    <p className="text-gray-800 text-xs mb-1">
                                        Oleh Albert Einstein
                                    </p>
                                    <p className="text-gray-600 text-[10px] font-semibold tracking-wide">
                                        MINGGU | 07:00 WIB
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Link */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full flex justify-end mt-8"
                >
                    <Link href="/e-warta#warta-list" className="flex items-center text-gray-800 hover:text-[#779965] font-semibold transition-colors group">
                        Lihat Semua 
                        <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}

