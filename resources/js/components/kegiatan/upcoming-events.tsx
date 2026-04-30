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

const EventCard = ({ event }: EventCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
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
        <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 z-10">

            {/* === BACKGROUND SHAPES (Identical to AcaraMendatang) === */}
            <div className="absolute top-0 left-0 h-full w-[30%] pointer-events-none">
                <BrandDecoLeft className="-translate-x-20 -translate-y-20 scale-125 opacity-70" />
            </div>
            <div className="absolute top-0 right-0 h-full w-[30%] pointer-events-none flex justify-end items-end pb-10">
                <BrandDecoRight className="translate-x-20 translate-y-10 scale-110 opacity-70" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">

                {/* Header (Identical to AcaraMendatang) */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.6 }}
                    className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-gray-500 uppercase mb-4 text-center"
                >
                    Ikuti berbagai kegiatan dan pelayanan yang akan segera dilaksanakan.
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-extrabold text-black tracking-tight mb-8 text-center"
                >
                    ACARA MENDATANG
                </motion.h2>

                <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    href="#"
                    className="inline-block bg-[#779965] hover:bg-[#5f7a50] text-white font-semibold py-3 px-10 rounded-md transition-colors shadow-md mb-4 md:-mb-10 relative z-20"
                >
                    Lihat Semua
                </motion.a>

                {/* Carousel Container (Identical to AcaraMendatang) */}
                <div className="w-full relative mt-10 px-4 md:px-16">
                    
                    {/* Left Arrow */}
                    <button className="absolute left-0 top-[30%] -translate-y-1/2 text-[#779965] hover:text-[#5f7a50] transition-colors active:scale-95 z-30" aria-label="Previous">
                        <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Cards (3 Placeholders with Staggered Layout) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-start relative z-10">
                        
                        {/* Card 1 (Normal) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="aspect-[3/4] bg-[#dcdcdc] rounded-sm shadow-sm w-full transition-transform hover:-translate-y-2 hover:shadow-md cursor-pointer"
                        />

                        {/* Card 2 (Middle - Shifted Down) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col items-center hidden md:flex mt-0 md:mt-20 group relative"
                        >
                            <div className="aspect-[3/4] bg-[#dcdcdc] rounded-sm shadow-xl w-full transition-transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden relative" />
                            <div className="relative mt-16 mb-16 w-[600px] flex-shrink-0 text-center flex flex-col items-center gap-1">
                                <h3 
                                    className="text-[#1a1a1a] font-bold"
                                    style={{ 
                                        fontFamily: "'Roboto Condensed', sans-serif",
                                        fontSize: '25px',
                                        lineHeight: '30px',
                                        letterSpacing: '-0.01em'
                                    }}
                                >
                                    Berbahagialah yang Murah Hati <br className="hidden md:block" /> dan Lemah Lembut
                                </h3>
                                <p 
                                    className="text-[#1a1a1a] uppercase pt-2"
                                    style={{
                                        fontFamily: "'Roboto Condensed', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '100%',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    IBU VICTORIA WOEN
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3 (Normal) */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="aspect-[3/4] bg-[#dcdcdc] rounded-sm shadow-sm w-full transition-transform hover:-translate-y-2 hover:shadow-md cursor-pointer hidden lg:block"
                        />
                        
                    </div>

                    {/* Right Arrow */}
                    <button className="absolute right-0 top-[30%] -translate-y-1/2 text-[#779965] hover:text-[#5f7a50] transition-colors active:scale-95 z-30" aria-label="Next">
                        <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>

                {/* --- SEARCH, FILTER, AND GRID SECTION --- */}
                <div className="w-full mt-0 flex flex-col items-center gap-16">
                    {/* Search Bar */}
                    <div className="w-full max-w-2xl relative group">
                        <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#7a9d54] transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input type="text" placeholder="Temukan kegiatan yang Anda cari..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-white border border-gray-100 shadow-sm rounded-full py-5 pl-16 pr-10 text-lg font-medium focus:ring-4 focus:ring-[#7a9d54]/10 transition-all outline-none text-gray-800 placeholder:text-gray-400 caret-black" />
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {categories.map((cat) => (
                            <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeCategory === cat ? 'bg-[#40512b] text-white shadow-xl scale-105' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#7a9d54] hover:text-[#7a9d54]'}`}>{cat}</button>
                        ))}
                    </div>

                    {/* Event Grid */}
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
