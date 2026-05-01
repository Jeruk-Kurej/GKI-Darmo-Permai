import React from 'react';
import { motion } from 'framer-motion';
import { classes } from './ibadah-data';

export function IbadahAnak() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
            className="select-none"
        >
            <div className="text-center mb-16">
                <p className="text-[10px] md:text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mb-3">LAYANAN SEKOLAH MINGGU</p>
                <div className="relative inline-block">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight">IBADAH ANAK</h2>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-[5px] bg-[#7a9d54]" />
                </div>
            </div>

            <div className="bg-[#f5f7e4] rounded-sm shadow-lg grid grid-cols-1 md:grid-cols-2 relative p-10 md:p-16 lg:p-20 overflow-hidden">
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-3/5 bg-[#7a9d54]" />
                <div className="flex flex-col justify-center pr-0 md:pr-16 mb-12 md:mb-0">
                    <div className="flex justify-between items-start mb-10">
                        <span className="text-[10px] font-bold text-[#7a9d54] tracking-widest uppercase">IBADAH ANAK</span>
                        <div className="text-right">
                            <span className="block text-2xl font-black text-[#1a1a1a] leading-none">20</span>
                            <span className="block text-[10px] font-bold text-[#1a1a1a] uppercase tracking-tighter">JULY</span>
                        </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-8 uppercase leading-[0.9] tracking-tighter">SEKOLAH <br /> MINGGU</h3>
                    <div className="space-y-4 text-sm md:text-base font-bold text-gray-800">
                        <div className="flex items-center gap-4"><svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Minggu | 09:30 WIB</div>
                        <div className="flex items-center gap-4"><svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>GSG Lantai 1-2</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center pl-0 md:pl-16">
                    <h4 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-10 uppercase tracking-tight">KELAS SEKOLAH MINGGU</h4>
                    <div className="space-y-4">
                        {classes.map((item, idx) => (
                            <div key={idx} className="flex items-center text-gray-800 group">
                                <span className="text-sm md:text-base font-medium w-40 shrink-0">{item.name.split(' ')[0]} <span className="font-black">{item.name.split(' ')[1]}</span></span>
                                <span className="text-sm md:text-base font-bold mr-6">:</span>
                                <span className="text-sm md:text-base font-semibold">{item.age}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
