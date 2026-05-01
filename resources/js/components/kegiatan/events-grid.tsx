import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
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

// Mock Data
const EVENTS_DATA: EventData[] = [
    {
        id: 1,
        date: "20",
        month: "JULI",
        title: "Event: Spiritualy Reborn and Healthy Lives",
        category: "Keluarga",
        pastor: "Oleh Albert Einstein",
        time: "MINGGU | 07:00 WIB",
        image: "/images/kegiatan/kebaktian-thumbnail.webp",
    },
    {
        id: 2,
        date: "21",
        month: "JULI",
        title: "Kondisi Rohani Dalam Keluarga Modern",
        category: "Keluarga",
        pastor: "Oleh Pdt. Budi Santoso",
        time: "SENIN | 18:00 WIB",
        image: "/images/kegiatan/kebaktian-thumbnail.webp",
    },
    {
        id: 3,
        date: "22",
        month: "JULI",
        title: "Ceria Bersama di Sekolah Minggu",
        category: "Anak",
        pastor: "Kak Maria",
        time: "SELASA | 09:00 WIB",
        image: "/images/kegiatan/kebaktian-thumbnail.webp",
    },
    {
        id: 4,
        date: "23",
        month: "JULI",
        title: "Youth Vibe: Finding Your Purpose",
        category: "Remaja",
        pastor: "Brother Joshua",
        time: "RABU | 17:00 WIB",
        image: "/images/kegiatan/kebaktian-thumbnail.webp",
    }
];

const EventCard = ({ event }: { event: EventData }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group flex flex-col bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 h-full border border-gray-100 select-none"
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

export function EventsGrid({ events }: { events?: any[] }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("Semua");
    const categories = ["Semua", "Keluarga", "Anak", "Remaja"];

    let displayEvents = EVENTS_DATA;

    if (events && events.length > 0) {
        displayEvents = events.map((item) => {
            const date = new Date(item.date);
            return {
                id: item.id,
                date: date.getDate().toString(),
                month: date.toLocaleDateString('id-ID', { month: 'short' }).toUpperCase(),
                title: item.title,
                category: item.category,
                pastor: item.pastor,
                time: item.time,
                image: item.image_path,
            };
        });
    }

    const filteredEvents = displayEvents.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (activeCategory === "Semua" || event.category === activeCategory)
    );

    return (
        <div className="w-full mt-0 flex flex-col items-center gap-16 select-none">
            {/* Search Bar */}
            <div className="w-full max-w-2xl relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#7a9d54] transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <input 
                    type="text" 
                    placeholder="Temukan kegiatan yang Anda cari..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="w-full bg-white border border-gray-100 shadow-sm rounded-full py-5 pl-16 pr-10 text-lg font-medium focus:ring-4 focus:ring-[#7a9d54]/10 transition-all outline-none text-gray-800 placeholder:text-gray-400 caret-black" 
                />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                {categories.map((cat) => (
                    <button 
                        key={cat} 
                        onClick={() => setActiveCategory(cat)} 
                        className={`px-10 py-3 rounded-full font-bold text-sm cursor-pointer transition-all duration-300 ${activeCategory === cat ? 'bg-[#40512b] text-white shadow-xl scale-105' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#7a9d54] hover:text-[#7a9d54]'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Event Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 min-h-[400px]">
                <AnimatePresence mode="popLayout">
                    {filteredEvents.map((event) => <EventCard key={event.id} event={event} />)}
                </AnimatePresence>
            </div>
        </div>
    );
}
