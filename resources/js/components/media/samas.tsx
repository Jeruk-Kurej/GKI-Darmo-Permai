import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar } from 'lucide-react';
import { FilterDropdown } from '@/components/ui/filter-dropdown';

// Spotify custom icon for matching perfectly
function SpotifyIcon({ className = "w-5 h-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.31c-.22.36-.68.47-1.04.25-2.86-1.74-6.47-2.14-10.72-1.17-.4.09-.81-.16-.9-.57-.09-.41.16-.82.57-.9 4.66-1.06 8.65-.6 11.83 1.34.37.23.48.69.26 1.05zm1.47-3.26c-.28.45-.87.59-1.32.31-3.28-2.02-8.29-2.61-12.18-1.42-.51.15-1.05-.14-1.21-.65-.15-.51.15-1.05.65-1.21 4.45-1.35 10-0.7 13.73 1.59.45.28.59.87.31 1.32zm.12-3.41c-3.93-2.33-10.43-2.55-14.21-1.4-.6.18-1.24-.16-1.42-.77-.18-.6.16-1.24.77-1.42 4.34-1.31 11.53-1.05 16.07 1.64.54.32.72 1.02.4 1.56-.32.54-1.02.72-1.56.4z"/>
        </svg>
    );
}

// Dummy data for SAMAS
const initialSamas = [
    {
        id: 1,
        month: "FEBRUARI 2026",
        title: "YANG KECIL BERDAMPAK BESAR",
        date: "13 FEBRUARI 2026",
        youtube: "https://youtube.com",
        spotify: "https://spotify.com",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 2,
        month: "FEBRUARI 2026",
        title: "YANG KECIL BERDAMPAK BESAR",
        date: "13 FEBRUARI 2026",
        youtube: "https://youtube.com",
        spotify: "https://spotify.com",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 3,
        month: "FEBRUARI 2026",
        title: "YANG KECIL BERDAMPAK BESAR",
        date: "13 FEBRUARI 2026",
        youtube: "https://youtube.com",
        spotify: "https://spotify.com",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 4,
        month: "FEBRUARI 2026",
        title: "YANG KECIL BERDAMPAK BESAR",
        date: "13 FEBRUARI 2026",
        youtube: "https://youtube.com",
        spotify: "https://spotify.com",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 5,
        month: "FEBRUARI 2026",
        title: "YANG KECIL BERDAMPAK BESAR",
        date: "13 FEBRUARI 2026",
        youtube: "https://youtube.com",
        spotify: "https://spotify.com",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 6,
        month: "FEBRUARI 2026",
        title: "YANG KECIL BERDAMPAK BESAR",
        date: "13 FEBRUARI 2026",
        youtube: "https://youtube.com",
        spotify: "https://spotify.com",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 7,
        month: "JANUARI 2026",
        title: "BERTUMBUH DALAM KEBENARAN",
        date: "20 JANUARI 2026",
        youtube: "https://youtube.com",
        spotify: "https://spotify.com",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 8,
        month: "DESEMBER 2025",
        title: "KASIH YANG MEMULIHKAN",
        date: "25 DESEMBER 2025",
        youtube: "https://youtube.com",
        spotify: "https://spotify.com",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    }
];

export function SamasSection() {
    const [selectedMonth, setSelectedMonth] = useState<string>("JANUARI 2026");

    const filteredSamas = initialSamas.filter(s => s.month === selectedMonth);

    return (
        <section id="samas" className="relative py-16 overflow-hidden bg-[#fafbfa]">
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-6">
                    <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">
                        RENUNGAN SAPAAN DAMAI SEJAHTERA
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] tracking-tight mb-6">
                        SAMAS
                    </h2>
                </div>

                {/* Filter Section */}
                <div className="flex justify-center mb-10">
                    <FilterDropdown 
                        value={selectedMonth} 
                        onValueChange={setSelectedMonth} 
                        placeholder="Choose Month"
                        options={[
                            { value: "JANUARI 2026", label: "Januari 2026" },
                            { value: "FEBRUARI 2026", label: "Februari 2026" },
                            { value: "DESEMBER 2025", label: "Desember 2025" }
                        ]}
                    />
                </div>

                {/* 2-Column Responsive Grid */}
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredSamas.map((samas, idx) => (
                        <motion.div
                            key={samas.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="flex items-center justify-between bg-[#6a8b4b] hover:bg-[#5f7d43] text-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#7a9d54]/20 group select-none"
                        >
                            {/* Left: Thumbnail area */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                                    <img 
                                        src={samas.image} 
                                        alt={samas.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>

                                {/* Title and Date */}
                                <div className="flex flex-col text-left">
                                    <h3 className="text-sm md:text-base font-extrabold leading-snug tracking-tight mb-1">
                                        {samas.title}
                                    </h3>
                                    <span className="text-[10px] md:text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                        {samas.date}
                                    </span>
                                </div>
                            </div>

                            {/* Right: Platforms / Links */}
                            <div className="flex items-center gap-3">
                                <a 
                                    href={samas.youtube} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="p-2 bg-white/10 hover:bg-white text-white hover:text-red-500 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center backdrop-blur-sm"
                                    aria-label="YouTube"
                                >
                                    <Play size={16} fill="currentColor" strokeWidth={0} />
                                </a>
                                <a 
                                    href={samas.spotify} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="p-2 bg-white/10 hover:bg-white text-white hover:text-green-500 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center justify-center backdrop-blur-sm"
                                    aria-label="Spotify"
                                >
                                    <SpotifyIcon className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
