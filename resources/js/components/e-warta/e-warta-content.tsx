import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { wartaData } from './warta-data';

export function EWartaContent() {
    const [selectedMonth, setSelectedMonth] = useState<string>("all");

    // Filter content correctly
    const filteredData = selectedMonth === "all"
        ? wartaData
        : wartaData.filter(group => group.month === selectedMonth);

    return (
        <section className="relative py-20 overflow-hidden bg-white select-none">
             {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden select-none">
                <BrandDecoLeft className="absolute top-20 -left-40 scale-125 opacity-40 hover:opacity-60 transition-opacity duration-1000" />
                <BrandDecoRight className="absolute top-1/4 right-0 scale-125 opacity-40 hover:opacity-60 transition-opacity duration-1000" />
                <BrandDecoLeft className="absolute top-1/2 -left-52 scale-110 opacity-30" />
                <BrandDecoRight className="absolute bottom-20 right-0 scale-110 opacity-40" />
                
                {/* Accent shapes in the middle/right with nice muted green opacity */}
                <div className="absolute top-[40%] left-1/4 w-32 h-32 opacity-15">
                    <div className="w-full h-full border border-[#7a9d54] rotate-45 transform origin-center"></div>
                </div>
                <div className="absolute bottom-[40%] right-1/4 w-32 h-32 opacity-15">
                    <div className="w-full h-full border border-[#7a9d54] rotate-45 transform origin-center"></div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Filter Section */}
                <div className="flex justify-center mb-16">
                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                        <SelectTrigger className="w-[200px] h-11 bg-[#EDEDED] border-2 border-[#7a9d54] rounded-full text-gray-700 hover:text-[#7a9d54] font-bold px-5 transition-all duration-300 cursor-pointer flex justify-between items-center select-none shadow-sm hover:shadow-md">
                            <SelectValue placeholder="Choose Month" />
                        </SelectTrigger>
                        <SelectContent className="bg-white rounded-xl border border-gray-100 shadow-xl z-[70] text-gray-800 min-w-[200px] p-1.5">
                            <SelectItem value="all" className="font-semibold text-gray-700 cursor-pointer rounded-lg px-4 py-2 text-sm transition-all focus:!bg-[#f7f9f0] focus:!text-[#7a9d54]">
                                Choose Month
                            </SelectItem>
                            <SelectItem value="JANUARI 2026" className="font-semibold text-gray-700 cursor-pointer rounded-lg px-4 py-2 text-sm transition-all focus:!bg-[#f7f9f0] focus:!text-[#7a9d54]">
                                Januari 2026
                            </SelectItem>
                            <SelectItem value="FEBRUARI 2026" className="font-semibold text-gray-700 cursor-pointer rounded-lg px-4 py-2 text-sm transition-all focus:!bg-[#f7f9f0] focus:!text-[#7a9d54]">
                                Februari 2026
                            </SelectItem>
                            <SelectItem value="DESEMBER 2025" className="font-semibold text-gray-700 cursor-pointer rounded-lg px-4 py-2 text-sm transition-all focus:!bg-[#f7f9f0] focus:!text-[#7a9d54]">
                                Desember 2025
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Content Groups */}
                {filteredData.map((group, groupIdx) => (
                    <div key={groupIdx} className="mb-20 last:mb-0">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-black text-center text-[#1a1a1a] mb-12 uppercase tracking-tight select-none"
                        >
                            {group.month}
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {group.items.map((item, itemIdx) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: itemIdx * 0.08 }}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full select-none"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/3] overflow-hidden select-none">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Date Badge */}
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-md">
                                            <span className="block text-xl font-black text-[#1a1a1a] leading-none">20</span>
                                            <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-tighter">JULI</span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex-1 flex flex-col bg-[#fdfdf5] group-hover:bg-[#f7f9f0] transition-colors duration-500">
                                        <h3 className="text-lg font-black text-[#1a1a1a] mb-1 uppercase tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs font-medium text-gray-600 mb-4 italic leading-relaxed">
                                            {item.subtitle}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between">
                                            <span className="text-[10px] font-bold text-[#7a9d54] uppercase tracking-wider">
                                                {item.dayTime}
                                            </span>
                                            <button className="bg-[#7a9d54] cursor-pointer p-2 rounded-lg text-white hover:bg-[#688945] transition-all duration-300 transform group-hover:translate-y-[-2px] shadow-lg shadow-[#7a9d54]/20">
                                                <Download size={18} strokeWidth={2.5} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Bottom Decorative Line */}
                                    <div className="h-2 bg-[#7a9d54] w-full"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
