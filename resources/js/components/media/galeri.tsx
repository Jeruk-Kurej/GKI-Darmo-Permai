import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const initialGallery = [
    {
        id: 1,
        month: "FEBRUARI 2026",
        title: "LOREM IPSUM",
        subtitle: "DOLOR SIT AMET",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 2,
        month: "FEBRUARI 2026",
        title: "LOREM IPSUM",
        subtitle: "DOLOR SIT AMET",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 3,
        month: "FEBRUARI 2026",
        title: "LOREM IPSUM",
        subtitle: "DOLOR SIT AMET",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 4,
        month: "FEBRUARI 2026",
        title: "LOREM IPSUM",
        subtitle: "DOLOR SIT AMET",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 5,
        month: "FEBRUARI 2026",
        title: "LOREM IPSUM",
        subtitle: "DOLOR SIT AMET",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 6,
        month: "FEBRUARI 2026",
        title: "LOREM IPSUM",
        subtitle: "DOLOR SIT AMET",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 7,
        month: "JANUARI 2026",
        title: "LOREM IPSUM",
        subtitle: "DOLOR SIT AMET",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 8,
        month: "DESEMBER 2025",
        title: "LOREM IPSUM",
        subtitle: "DOLOR SIT AMET",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    }
];

export function GaleriSection() {
    const [selectedMonth, setSelectedMonth] = useState<string>("FEBRUARI 2026");

    const filteredGallery = initialGallery.filter(g => g.month === selectedMonth);

    return (
        <section id="galeri" className="relative py-16 overflow-hidden bg-white">
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-6">
                    <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">
                        DOKUMENTASI KEGIATAN
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] tracking-tight mb-6">
                        GALERI
                    </h2>
                </div>

                {/* Filter Section */}
                <div className="flex justify-center mb-10">
                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                        <SelectTrigger className="w-[200px] h-11 bg-[#fcfcfc] border-2 border-[#7a9d54] rounded-full text-gray-700 hover:text-[#7a9d54] font-bold px-5 transition-all duration-300 flex justify-between items-center shadow-sm select-none">
                            <SelectValue placeholder="Februari 2026" />
                        </SelectTrigger>
                        <SelectContent className="bg-white rounded-xl border border-gray-100 shadow-xl z-[70] text-gray-800 min-w-[200px] p-1.5">
                            <SelectItem value="FEBRUARI 2026" className="font-semibold cursor-pointer rounded-lg px-4 py-2 text-sm transition-all focus:!bg-[#f7f9f0] focus:!text-[#7a9d54]">
                                Februari 2026
                            </SelectItem>
                            <SelectItem value="JANUARI 2026" className="font-semibold cursor-pointer rounded-lg px-4 py-2 text-sm transition-all focus:!bg-[#f7f9f0] focus:!text-[#7a9d54]">
                                Januari 2026
                            </SelectItem>
                            <SelectItem value="DESEMBER 2025" className="font-semibold cursor-pointer rounded-lg px-4 py-2 text-sm transition-all focus:!bg-[#f7f9f0] focus:!text-[#7a9d54]">
                                Desember 2025
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* 3-Column Image Grid */}
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredGallery.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="group relative bg-[#EDEDED] aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-end border border-gray-100"
                        >
                            {/* Fallback color / background image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/85 via-black/25 to-transparent z-10"></div>
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0 select-none opacity-80" 
                            />

                            {/* Caption at bottom */}
                            <div className="relative z-20 p-6 text-left flex flex-col">
                                <h3 className="text-base md:text-lg font-extrabold text-white uppercase leading-tight group-hover:text-[#e4efe0] transition-colors duration-300 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[10px] md:text-xs font-semibold text-gray-200 uppercase tracking-wide">
                                    {item.subtitle}
                                </p>
                            </div>
                            <div className="h-1 bg-[#7a9d54] w-full relative z-20"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
