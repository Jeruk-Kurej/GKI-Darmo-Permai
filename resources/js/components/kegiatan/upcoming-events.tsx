import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';

// --- Types ---
interface EventData {
    id: number;
    date: string;
    month: string;
    title: string;
    category: string;
    pastor: string;
    time: string;
    image: string;
}

interface VerticalDecoTextProps {
    text: string;
    position?: "left" | "right";
}

interface EventCardProps {
    event: EventData;
}

// --- Mock Data ---
const EVENTS_DATA: EventData[] = [
    {
        id: 1,
        date: "20",
        month: "JULI",
        title: "Event: Spiritualy Reborn and Healthy Lives",
        category: "Keluarga",
        pastor: "Oleh Albert Einstein",
        time: "MINGGU | 07:00 WIB",
        image: "/images/kegiatan/kebaktian-thumbnail.png",
    },
    {
        id: 2,
        date: "21",
        month: "JULI",
        title: "Kondisi Rohani Dalam Keluarga Modern",
        category: "Keluarga",
        pastor: "Oleh Pdt. Budi Santoso",
        time: "SENIN | 18:00 WIB",
        image: "/images/kegiatan/kebaktian-thumbnail.png",
    },
    {
        id: 3,
        date: "22",
        month: "JULI",
        title: "Ceria Bersama di Sekolah Minggu",
        category: "Anak",
        pastor: "Kak Maria",
        time: "SELASA | 09:00 WIB",
        image: "/images/kegiatan/kebaktian-thumbnail.png",
    },
    {
        id: 4,
        date: "23",
        month: "JULI",
        title: "Youth Vibe: Finding Your Purpose",
        category: "Remaja",
        pastor: "Brother Joshua",
        time: "RABU | 17:00 WIB",
        image: "/images/kegiatan/kebaktian-thumbnail.png",
    }
];

// --- Sub-Components ---

const VerticalDecoText = ({ text, position = "left" }: VerticalDecoTextProps) => (
    <div className={`absolute top-[15%] ${position === 'left' ? 'left-4' : 'right-4'} hidden xl:block pointer-events-none`}>
        <p className={`text-[120px] font-black text-black/[0.03] leading-none [writing-mode:vertical-rl] ${position === 'left' ? 'rotate-180' : ''} tracking-tighter uppercase select-none`}>
            {text}
        </p>
    </div>
);

const EventCard = ({ event }: EventCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ 
            duration: 0.4,
            ease: "easeOut"
        }}
        className="group flex flex-col bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full border border-gray-100"
    >
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <div className="absolute top-5 right-5 z-20 bg-white/20 backdrop-blur-md rounded-md p-2.5 text-center border border-white/30 shadow-lg">
                <span className="block text-2xl font-black text-white leading-none">{event.date}</span>
                <span className="block text-[8px] font-black text-white uppercase tracking-tighter">{event.month}</span>
            </div>
            <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        </div>
        <div className="p-10 bg-white flex-1 flex flex-col">
            <span className="text-[10px] font-bold text-[#7a9d54] tracking-[0.25em] uppercase mb-4 block">Event Pelayanan</span>
            <h4 className="text-[21px] font-bold text-[#1a1a1a] mb-8 leading-tight group-hover:text-[#7a9d54] transition-colors line-clamp-2">{event.title}</h4>
            <div className="mt-auto pt-6 border-t border-gray-50 space-y-2">
                <p className="text-[15px] font-semibold text-gray-800">{event.pastor}</p>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">{event.time}</p>
            </div>
        </div>
        <div className="h-1.5 w-full bg-[#7a9d54]" />
    </motion.div>
);

// --- Main Component ---

export function UpcomingEvents() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("Semua");
    const categories = ["Semua", "Keluarga", "Anak", "Remaja"];

    const filteredEvents = EVENTS_DATA.filter(event => 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        (activeCategory === "Semua" || event.category === activeCategory)
    );

    return (
        <section className="relative w-full py-24 bg-[#fafafa] z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-[45%] h-[150%] pointer-events-none opacity-[0.15] mix-blend-multiply">
                <BrandDecoLeft className="-translate-x-1/2 -translate-y-1/4 scale-150 rotate-12" />
            </div>
            <div className="absolute bottom-0 right-0 w-[45%] h-full pointer-events-none opacity-[0.15] flex justify-end items-end mix-blend-multiply">
                <BrandDecoRight className="translate-x-1/3 translate-y-1/4 scale-150 -rotate-12" />
            </div>

            <VerticalDecoText text="Upcoming" position="left" />
            <VerticalDecoText text="Kegiatan" position="right" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                
                {/* Carousel Section (Identical to Home) */}
                <div className="text-center w-full">
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-4">
                        Ikuti berbagai kegiatan dan pelayanan yang akan segera dilaksanakan.
                    </motion.p>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-8">
                        ACARA MENDATANG
                    </motion.h2>
                    <motion.a 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.5, delay: 0.2 }} 
                        href="#" 
                        className="inline-block bg-[#779965] hover:bg-[#5f7a50] text-white font-semibold py-3 px-10 rounded-md transition-colors shadow-md mb-4 md:-mb-10 relative z-20"
                    >
                        Lihat Semua
                    </motion.a>

                    <div className="w-full flex items-center justify-center gap-4 md:gap-12 mt-10">
                        <button className="text-[#779965] hover:text-[#5f7a50] transition-colors active:scale-95 flex-shrink-0">
                            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                        </button>

                        <div className="flex-1 flex flex-col md:flex-row items-start justify-center gap-6 md:gap-8 w-full max-w-5xl">
                            <div className="flex-1 aspect-[3/4] bg-[#dcdcdc] rounded-sm shadow-sm transition-transform hover:-translate-y-2 hover:shadow-md cursor-pointer hidden md:block overflow-hidden relative group" />
                            
                            <div className="flex-1 flex flex-col items-center mt-0 md:mt-20 group">
                                <div className="aspect-[3/4] bg-[#dcdcdc] rounded-sm shadow-xl w-full transition-transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer mb-8 overflow-hidden relative" />
                                <div className="text-center px-4 w-full max-w-lg">
                                    <h3 className="text-lg md:text-[19px] font-bold text-[#1a1a1a] leading-tight mb-3">Berbahagialah yang Murah Hati <br /> dan Lemah Lembut</h3>
                                    <p className="text-[13px] font-medium text-gray-500 uppercase tracking-widest">Ibu Victoria Woen</p>
                                </div>
                            </div>
                            
                            <div className="flex-1 aspect-[3/4] bg-[#dcdcdc] rounded-sm shadow-sm transition-transform hover:-translate-y-2 hover:shadow-md cursor-pointer hidden lg:block overflow-hidden relative group" />
                        </div>

                        <button className="text-[#779965] hover:text-[#5f7a50] transition-colors active:scale-95 flex-shrink-0">
                            <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Search, Filter, and Grid Section */}
                <div className="w-full mt-52 flex flex-col items-center gap-16">
                    <div className="w-full max-w-2xl relative group">
                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#7a9d54] transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input type="text" placeholder="Temukan kegiatan yang Anda cari..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white border border-gray-100 shadow-sm rounded-full py-5 pl-16 pr-10 text-lg font-medium focus:ring-4 focus:ring-[#7a9d54]/10 transition-all outline-none text-gray-800 placeholder:text-gray-400" />
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {categories.map((cat) => (
                            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeCategory === cat ? 'bg-[#40512b] text-white shadow-xl scale-105' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#7a9d54] hover:text-[#7a9d54]'}`}>{cat}</button>
                        ))}
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 min-h-[400px]">
                        <AnimatePresence mode="popLayout">
                            {filteredEvents.map((event) => <EventCard key={event.id} event={event} />)}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
}
