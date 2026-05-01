import React from 'react';
import { motion } from 'framer-motion';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';
import { misiList } from './about-data';

export function VisiMisi() {
    return (
        <section id="visi-misi" className="relative w-full py-24 bg-white z-10 overflow-hidden">
            {/* Background Decorative Elements - Peeking Style */}
            {/* Top-left decoration */}
            <div className="absolute top-0 left-0 w-[40%] h-[150%] pointer-events-none opacity-60">
                <BrandDecoLeft className="-translate-x-64 -translate-y-20 scale-125" />
            </div>

            {/* Bottom-right decoration */}
            <div className="absolute bottom-0 right-0 w-[40%] h-full pointer-events-none opacity-60 flex justify-end items-end">
                <BrandDecoRight className="translate-x-64 translate-y-32 scale-125" />
            </div>

            {/* Extra subtle spread elements for "menyebar" effect */}
            <div className="absolute top-1/3 left-0 opacity-10 pointer-events-none">
                <BrandDecoLeft className="-translate-x-80 scale-75 -rotate-6" />
            </div>
            <div className="absolute bottom-1/4 right-0 opacity-10 pointer-events-none flex justify-end">
                <BrandDecoRight className="translate-x-80 scale-90 rotate-12" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <h4 className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">
                        ARAH DAN PANGGILAN YANG MENJADI DASAR PELAYANAN KAMI
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight">
                        VISI & MISI
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mt-8">
                    
                    {/* Visi (Kiri) */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 0.15, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute -top-10 -left-10 lg:-top-16 lg:-left-16"
                        >
                            <img 
                                src="/assets/about-us/quote.svg" 
                                alt="Quote" 
                                className="w-20 md:w-28 lg:w-32 h-auto select-none pointer-events-none"
                            />
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 flex flex-col pt-4 w-fit"
                        >
                            <div className="flex items-end mb-4">
                                <div className="w-[55px] md:w-[75px] shrink-0"></div>
                                <div className="flex-grow flex justify-between w-full">
                                    <span className="text-[11px] md:text-[14px] font-bold text-gray-700 tracking-[0.3em] lg:tracking-[0.45em] uppercase leading-none whitespace-nowrap">
                                        MENJADIKAN KELUARGA
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-start mb-4">
                                <div className="w-[55px] md:w-[75px] shrink-0 flex justify-end">
                                    <span className="text-[48px] md:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-[0.7] -mt-1 md:-mt-2 mr-1">"</span>
                                </div>
                                <div className="flex-grow">
                                    <span className="text-[48px] md:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-[0.7] uppercase tracking-tighter block">
                                        DAMAI",
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center mb-6 pt-4">
                                <div className="w-[55px] md:w-[75px] shrink-0"></div>
                                <div className="flex flex-grow items-center gap-4">
                                    <span className="text-[12px] md:text-[15px] font-bold text-gray-600 uppercase leading-none">
                                        YANG
                                    </span>
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '85%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
                                        className="h-[12px] md:h-[18px] lg:h-[24px] bg-[#7a9d54]"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-[55px] md:w-[75px] shrink-0"></div>
                                <div className="flex-grow">
                                    <span className="text-[46px] md:text-7xl lg:text-[100px] font-black text-[#7a9d54] leading-[0.75] uppercase tracking-tighter block">
                                        MELAYANI
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Misi (Kanan) */}
                    <div className="flex relative pl-8 md:pl-12 lg:ml-12 mt-8 lg:mt-0">
                        <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="absolute left-0 top-0 bottom-0 w-[8px] md:w-[10px] bg-[#7a9d54]"
                        />
                        
                        <div className="space-y-6 md:space-y-8 lg:space-y-10">
                            {misiList.map((misi, index) => {
                                const isGreen = index === 0 || index === 2; 
                                return (
                                    <motion.div 
                                        key={index} 
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        className="flex items-start group"
                                    >
                                        <div className="mr-4 md:mr-6 shrink-0 -mt-1">
                                            <span className={`text-[28px] md:text-[36px] font-black leading-none ${isGreen ? 'text-[#7a9d54]' : 'text-[#1a1a1a]'}`}>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        
                                        <p className="text-[15px] md:text-[18px] font-semibold text-gray-700 leading-[1.2] max-w-sm pt-0">
                                            {misi}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
