import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { FilterDropdown } from '@/components/ui/filter-dropdown';

// Dummy Data
const initialVideos = [
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
        month: "JANUARI 2026",
        title: "LOREM IPSUM",
        subtitle: "CONSECTETUR ADIPISCING",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    },
    {
        id: 5,
        month: "DESEMBER 2025",
        title: "LOREM IPSUM",
        subtitle: "ELIT SED DO EIUSMOD",
        image: "/images/kegiatan/kebaktian-thumbnail.webp"
    }
];

export function VideoIbadahSection() {
    const [selectedMonth, setSelectedMonth] = useState<string>("JANUARI 2026");
    const [slideIndex, setSlideIndex] = useState(0);

    const filteredVideos = initialVideos.filter(v => v.month === selectedMonth);

    const handlePrev = () => {
        setSlideIndex(prev => (prev > 0 ? prev - 1 : filteredVideos.length - 3));
    };

    const handleNext = () => {
        setSlideIndex(prev => (prev < filteredVideos.length - 3 ? prev + 1 : 0));
    };

    return (
        <section id="video-ibadah" className="relative py-16 overflow-hidden bg-white">
            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
                
                {/* Header */}
                <div className="text-center mb-6">
                    <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-2">
                        REKAMAN IBADAH
                    </p>
                    <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] tracking-tight mb-6">
                        VIDEO IBADAH
                    </h2>
                </div>

                {/* Filter Section */}
                <div className="flex justify-center mb-10">
                    <FilterDropdown 
                        value={selectedMonth} 
                        onValueChange={(val) => { setSelectedMonth(val); setSlideIndex(0); }} 
                        placeholder="Choose Month"
                        options={[
                            { value: "JANUARI 2026", label: "Januari 2026" },
                            { value: "FEBRUARI 2026", label: "Februari 2026" },
                            { value: "DESEMBER 2025", label: "Desember 2025" }
                        ]}
                    />
                </div>

                {/* Slider / Carousel with left/right arrows */}
                <div className="relative w-full flex items-center justify-center gap-4">
                    {filteredVideos.length > 3 && (
                        <button 
                            onClick={handlePrev}
                            className="absolute left-0 lg:-left-6 z-20 bg-white border border-gray-200 text-gray-700 hover:bg-[#7a9d54] hover:text-white hover:border-[#7a9d54] transition-all p-3 rounded-full shadow-lg active:scale-95 flex-shrink-0"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </button>
                    )}

                    <div className="w-full max-w-5xl overflow-hidden py-4">
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-3 gap-6"
                            animate={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {filteredVideos.map((video, idx) => (
                                <motion.div 
                                    key={video.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col cursor-pointer"
                                >
                                    {/* Video Thumbnail Container */}
                                    <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                                        <div className="absolute inset-0 flex items-center justify-center z-20">
                                            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full text-[#1a1a1a] shadow-xl group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#7a9d54] group-hover:text-white">
                                                <Play size={24} fill="currentColor" strokeWidth={0} />
                                            </div>
                                        </div>
                                        {/* Fallback pattern background just in case image fails */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 opacity-60"></div>
                                        <div className="absolute bottom-4 left-4 right-4 z-20 text-white flex flex-col text-left">
                                            <span className="text-base md:text-lg font-black uppercase tracking-tight leading-tight">
                                                {video.title}
                                            </span>
                                            <span className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-wide">
                                                {video.subtitle}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h-1.5 bg-[#7a9d54] w-full"></div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {filteredVideos.length > 3 && (
                        <button 
                            onClick={handleNext}
                            className="absolute right-0 lg:-right-6 z-20 bg-white border border-gray-200 text-gray-700 hover:bg-[#7a9d54] hover:text-white hover:border-[#7a9d54] transition-all p-3 rounded-full shadow-lg active:scale-95 flex-shrink-0"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
