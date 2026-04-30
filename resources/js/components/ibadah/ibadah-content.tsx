import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';

// Mock Data for Ibadah Umum
const UMUM_DATA = {
    main: {
        id: 1,
        date: "20 JULY",
        title: "IBADAH UMUM 1",
        theme: '"Diteguhkan oleh Cahaya Kemuliaan-Nya"',
        pastor: "Oleh Ibu Dian Stephanita",
        time: "Minggu | 07:00 WIB",
        location: "Gedung Gereja GKI Damai",
        thumbnail: "/images/ibadah/live-umum-placeholder.png",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    schedules: [
        { id: 2, date: "20 JULY", title: "IBADAH UMUM 1", theme: '"Diteguhkan oleh Cahaya Kemuliaan-Nya"', pastor: "Oleh Ibu Dian Stephanita", time: "Minggu | 07:00 WIB", location: "Gedung Gereja GKI Damai" },
        { id: 3, date: "20 JULY", title: "IBADAH UMUM 2", theme: '"Diteguhkan oleh Cahaya Kemuliaan-Nya"', pastor: "Oleh Ibu Dian Stephanita", time: "Minggu | 07:00 WIB", location: "Gedung Gereja GKI Damai" },
        { id: 4, date: "20 JULY", title: "IBADAH UMUM 3", theme: '"Diteguhkan oleh Cahaya Kemuliaan-Nya"', pastor: "Oleh Ibu Dian Stephanita", time: "Minggu | 07:00 WIB", location: "Gedung Gereja GKI Damai" },
        { id: 5, date: "20 JULY", title: "IBADAH UMUM 1", theme: '"Menghadapi Cobaan Kehidupan"', pastor: "Oleh Pdt. Paulus Bimo S.C. Pamungkas", time: "Minggu | 07:00 WIB", location: "Gedung Gereja GKI Damai" },
    ]
};

// Mock Data for PROUD
const PROUD_DATA = {
    main: {
        id: 1,
        date: "20 JULY",
        title: "IBADAH PROUD 1",
        theme: '"BERBAHAGIALAH YANG MURAH HATI"',
        pastor: "Ibu Victoria Woen",
        time: "Minggu | 10:00 WIB",
        location: "Gedung Gereja GKI Damai",
        thumbnail: "/images/ibadah/live-proud-placeholder.png",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    schedules: [
        { id: 2, date: "20 JULY", title: "IBADAH PROUD 1", theme: '"BERBAHAGIALAH YANG MURAH HATI"', pastor: "Ibu Victoria Woen", time: "Minggu | 10:00 WIB", location: "Gedung Gereja GKI Damai" },
    ]
};

export function IbadahTabs({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
    const tabs = ['UMUM', 'PROUD', 'ANAK'];
    return (
        <div className="sticky top-[72px] z-40 w-full bg-[#8ca36b] shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center">
                {tabs.map((tab, idx) => (
                    <React.Fragment key={tab}>
                        <button
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-5 text-sm md:text-xl font-bold tracking-[0.2em] transition-all relative uppercase ${
                                activeTab === tab ? 'text-white' : 'text-white/70 hover:text-white'
                            }`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <motion.div 
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#5e7144]"
                                />
                            )}
                        </button>
                        {idx < tabs.length - 1 && (
                            <div className="h-8 w-[2px] bg-white/30" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export function IbadahContent({ activeTab }: { activeTab: string }) {
    return (
        <section className="relative w-full pb-10 bg-white z-10">
            {/* Decorative Backgrounds - Pushed further to edges for "peeking" effect */}
            <motion.div 
                animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 left-0 w-[40%] h-full pointer-events-none opacity-30"
            >
                {/* Pushed further left (-translate-x-64) */}
                <BrandDecoLeft className="-translate-x-64 scale-150" />
            </motion.div>

            <motion.div 
                animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ 
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-20 right-0 w-[40%] h-full pointer-events-none opacity-30 flex justify-end items-end"
            >
                {/* Pushed further right (translate-x-64) */}
                <BrandDecoRight className="translate-x-64 scale-150" />
            </motion.div>

            {/* Extra subtle spread elements */}
            <div className="absolute top-1/2 right-10 opacity-10 pointer-events-none">
                <BrandDecoRight className="translate-x-80 scale-75 rotate-12" />
            </div>
            <div className="absolute bottom-1/4 left-10 opacity-10 pointer-events-none">
                <BrandDecoLeft className="-translate-x-80 scale-90 -rotate-6" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-16">
                <AnimatePresence mode="wait">
                    {activeTab === 'UMUM' && <IbadahGrid key="umum" data={UMUM_DATA} type="IBADAH UMUM" />}
                    {activeTab === 'PROUD' && <IbadahGrid key="proud" data={PROUD_DATA} type="PROUD" />}
                    {activeTab === 'ANAK' && <IbadahAnak key="anak" />}
                </AnimatePresence>
            </div>
        </section>
    );
}

function IbadahGrid({ data, type }: { data: any, type: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header - Refined */}
            <div className="text-center mb-16">
                <p className="text-[10px] md:text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mb-3">IBADAH MINGGUAN UNTUK SELURUH JEMAAT</p>
                <div className="relative inline-block">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight">
                        {type}
                    </h2>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-[5px] bg-[#7a9d54]" />
                </div>
            </div>

            {/* Main Video Card - Pixel Perfect Refinement */}
            <div className="mb-16">
                <div className="bg-[#f5f7e4] rounded-sm overflow-hidden shadow-md grid grid-cols-1 lg:grid-cols-12">
                    {/* Left Info */}
                    <div className="lg:col-span-4 p-8 md:p-10 flex flex-col justify-between relative">
                        {/* Date - Top Right of this section */}
                        <div className="absolute top-8 right-8 text-right">
                            <span className="block text-2xl font-black text-[#1a1a1a] leading-none">20</span>
                            <span className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-tighter">JULY</span>
                        </div>

                        <div>
                            <span className="text-[10px] font-bold text-[#7a9d54] tracking-widest uppercase mb-4 block">KEBAKTIAN</span>
                            <h3 className="text-2xl font-black text-[#1a1a1a] mb-4 uppercase leading-tight">{data.main.title}</h3>
                            <div className="space-y-1 mb-8">
                                <p className="text-[15px] font-bold text-gray-800 leading-snug">{data.main.theme}</p>
                                <p className="text-sm font-medium text-gray-600">{data.main.pastor}</p>
                            </div>
                            
                            <div className="space-y-3 mb-10">
                                <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                    <div className="w-5 h-5 rounded-full border-2 border-[#7a9d54] flex items-center justify-center">
                                        <div className="w-1 h-2 bg-[#7a9d54] rotate-45 translate-x-[1px] -translate-y-[1px]" />
                                    </div>
                                    {data.main.time}
                                </div>
                                <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                                    <svg className="w-5 h-5 text-[#7a9d54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    {data.main.location}
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-[#8ca36b] text-white py-4 font-bold text-base rounded-md hover:bg-[#7a9d54] transition-all shadow-lg shadow-[#8ca36b]/20">
                            Tonton Streaming
                        </button>
                    </div>
                    {/* Right Video Preview */}
                    <div className="lg:col-span-8 relative group cursor-pointer overflow-hidden min-h-[300px] md:min-h-[450px]">
                        <img 
                            src={data.main.thumbnail} 
                            alt="Live Stream Thumbnail" 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                            <motion.div 
                                whileHover={{ scale: 1.1 }}
                                className="w-24 h-24 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl"
                            >
                                <svg className="w-10 h-10 text-white fill-current ml-1" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Schedules Grid - Refined */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {data.schedules.map((schedule: any, idx: number) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -8 }}
                        className="bg-[#f5f7e4] p-8 rounded-sm shadow-sm flex flex-col justify-between relative border-b-[8px] border-[#8ca36b]"
                    >
                        {/* Date - Top Right */}
                        <div className="absolute top-6 right-6 text-right">
                            <span className="block text-xl font-black text-[#1a1a1a] leading-none">20</span>
                            <span className="block text-[10px] font-bold text-[#1a1a1a] uppercase tracking-tighter">JULY</span>
                        </div>

                        <div>
                            <span className="text-[9px] font-bold text-[#7a9d54] tracking-widest uppercase mb-4 block leading-none">KEBAKTIAN</span>
                            <h4 className="text-xl font-black text-[#1a1a1a] mb-3 uppercase leading-tight">{schedule.title}</h4>
                            <p className="text-[13px] font-bold text-gray-800 italic mb-1 leading-snug">{schedule.theme}</p>
                            <p className="text-xs font-medium text-gray-500 mb-6">{schedule.pastor}</p>
                            
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                                    <div className="w-4 h-4 rounded-full border-2 border-[#7a9d54] flex items-center justify-center scale-75">
                                        <div className="w-[1px] h-1.5 bg-[#7a9d54] rotate-45 translate-x-[0.5px] -translate-y-[0.5px]" />
                                    </div>
                                    {schedule.time}
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                                    <svg className="w-4 h-4 text-[#7a9d54]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    {schedule.location}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

function IbadahAnak() {
    const classes = [
        { name: "Kelas Nuh", age: "Playgroup" },
        { name: "Kelas Ishak", age: "TK" },
        { name: "Kelas Abraham", age: "SD 1-2" },
        { name: "Kelas Yakub", age: "SD 3-4" },
        { name: "Kelas Yusuf", age: "SD 5-6" },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            {/* Header */}
            <div className="text-center mb-16">
                <p className="text-[10px] md:text-xs font-bold text-gray-500 tracking-[0.2em] uppercase mb-3">IBADAH MINGGUAN UNTUK SELURUH JEMAAT</p>
                <div className="relative inline-block">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight">
                        IBADAH ANAK
                    </h2>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-[5px] bg-[#7a9d54]" />
                </div>
            </div>

            {/* Main Anak Card - Pixel Perfect Refinement */}
            <div className="bg-[#f5f7e4] rounded-sm shadow-lg grid grid-cols-1 md:grid-cols-2 relative p-10 md:p-16 lg:p-20 overflow-hidden">
                {/* Vertical Divider Line */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-3/5 bg-[#7a9d54]" />

                {/* Left Side: Info */}
                <div className="flex flex-col justify-center pr-0 md:pr-16 mb-12 md:mb-0">
                    <div className="flex justify-between items-start mb-10">
                        <span className="text-[10px] font-bold text-[#7a9d54] tracking-widest uppercase">IBADAH ANAK</span>
                        <div className="text-right">
                            <span className="block text-2xl font-black text-[#1a1a1a] leading-none">20</span>
                            <span className="block text-[10px] font-bold text-[#1a1a1a] uppercase tracking-tighter">JULY</span>
                        </div>
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] mb-8 uppercase leading-[0.9] tracking-tighter">
                        SEKOLAH <br /> MINGGU
                    </h3>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm md:text-base font-bold text-gray-800">
                            <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Minggu | 09:30 WIB
                        </div>
                        <div className="flex items-center gap-4 text-sm md:text-base font-bold text-gray-800">
                            <svg className="w-5 h-5 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            GSG Lantai 1-2
                        </div>
                    </div>
                </div>

                {/* Right Side: Class List */}
                <div className="flex flex-col justify-center pl-0 md:pl-16">
                    <h4 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-10 uppercase tracking-tight">KELAS SEKOLAH MINGGU</h4>
                    <div className="space-y-4">
                        {classes.map((item, idx) => {
                            const nameParts = item.name.split(' ');
                            return (
                                <div key={idx} className="flex items-center text-gray-800 group">
                                    <span className="text-sm md:text-base font-medium w-40 shrink-0">
                                        {nameParts[0]} <span className="font-black">{nameParts[1]}</span>
                                    </span>
                                    <span className="text-sm md:text-base font-bold mr-6">:</span>
                                    <span className="text-sm md:text-base font-semibold">{item.age}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
