import React from 'react';
import { motion } from 'framer-motion';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';

export function TentangKami() {
    return (
        <section className="relative w-full h-full flex items-center justify-center bg-white overflow-hidden py-16 lg:py-0">
            
            {/* === BACKGROUND SHAPES === */}
            
            {/* Kiri Atas */}
            <div className="absolute top-0 left-0 h-full w-[30%] pointer-events-none">
                <BrandDecoLeft className="-translate-x-32 -translate-y-20 scale-150 opacity-50" />
            </div>

            {/* Kanan Bawah */}
            <div className="absolute top-0 right-0 h-full w-[30%] pointer-events-none flex justify-end items-end pb-10">
                <BrandDecoRight className="translate-x-32 translate-y-32 scale-150 opacity-50" />
            </div>

            {/* === MAIN CONTENT === */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col items-center">
                
                {/* HEADER */}
                <div className="text-center mb-20 md:mb-32 flex flex-col items-center">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3"
                    >
                        Gereja yang rindu menjadi berkat bagi kota dan generasi.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative inline-block"
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
                            TENTANG KAMI
                        </h2>
                        {/* Garis Hijau di bawah "TENTANG" */}
                        <div className="absolute -bottom-2 left-0 w-[55%] h-1.5 bg-[#779965]"></div>
                    </motion.div>
                </div>

                {/* TWO COLUMN LAYOUT */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    {/* KIRI: QUOTE & TEXT */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-start relative pl-4 md:pl-10"
                    >
                        
                        {/* Quote Mark Using Custom SVG Asset */}
                        <div className="absolute top-[-40px] left-[-20px] md:top-[-60px] md:left-[-40px] pointer-events-none w-24 h-24 md:w-40 md:h-40 opacity-90">
                            <img src="/assets/about-us/quote.svg" alt="Quote Icon" className="w-full h-full object-contain" />
                        </div>

                        <div className="relative z-10 space-y-1">
                            <p className="text-gray-700 text-lg md:text-xl tracking-widest uppercase">
                                WHEN YOU ARE AFTER
                            </p>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-black">
                                GOD'S WILL,
                            </h3>
                            <p className="text-gray-700 text-lg md:text-xl tracking-widest uppercase mt-2">
                                HE WILL BE AFTER
                            </p>
                            <div className="flex items-center gap-4">
                                <p className="text-gray-700 text-lg md:text-xl tracking-widest uppercase">
                                    YOUR OWN
                                </p>
                                <div className="w-12 md:w-16 h-4 md:h-5 bg-[#779965]"></div>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-[#779965] mt-1">
                                PURPOSE
                            </h3>
                        </div>

                        {/* Signature */}
                        <div className="mt-8 mb-10">
                            <p 
                                className="text-gray-800"
                                style={{
                                    fontFamily: 'Tangerine, cursive',
                                    fontWeight: 700,
                                    fontSize: '40px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%'
                                }}
                            >
                                Pst. Emmanuel Oarhe
                            </p>
                        </div>

                        <a 
                            href="#" 
                            className="bg-[#779965] hover:bg-[#5f7a50] text-white font-medium py-3 px-8 rounded transition-colors shadow-sm"
                        >
                            Lihat Selengkapnya
                        </a>

                    </motion.div>

                    {/* KANAN: IMAGE */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* Aksen Kotak Hijau di Belakang Foto */}
                        <div className="absolute right-0 md:right-[-20px] top-[-20px] w-64 h-64 md:w-80 md:h-80 bg-[#779965] z-0"></div>
                        
                        {/* Main Image */}
                        <div className="relative z-10 pr-6 pb-6">
                            <img 
                                src="/images/home/about-us-people.png" 
                                alt="Pdt. Emmanuel Oarhe" 
                                className="w-full max-w-sm md:max-w-md h-auto object-cover shadow-lg"
                                onError={(e) => {
                                    e.currentTarget.src = "https://via.placeholder.com/400x500/e5e7eb/9ca3af?text=Photo";
                                }}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
