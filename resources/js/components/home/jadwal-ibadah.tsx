import React, { useState } from 'react';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';

// Data jadwal dinamis
const schedulesData = [
    {
        category: "Umum",
        items: [
            { type: "ONSITE", time: "07:00 WIB" },
            { type: "ONSITE", time: "09:30 WIB" },
            { type: "ONSITE", time: "17:00 WIB" },
            { type: "STREAMING", time: "07:30 WIB" },
        ]
    },
    {
        category: "PROUD",
        items: [
            { type: "ONSITE", time: "09:30 WIB" },
            { type: "STREAMING", time: "09:30 WIB" },
        ]
    },
    {
        category: "Anak",
        items: [
            { type: "ONSITE", time: "09:30 WIB" },
        ]
    }
];

export function JadwalIbadah() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? schedulesData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === schedulesData.length - 1 ? 0 : prev + 1));
    };

    const activeSchedule = schedulesData[currentIndex];

    return (
        <section id="jadwal-ibadah" className="relative w-full overflow-hidden bg-[#779965] py-4 md:py-6">
            
            {/* === BACKGROUND SHAPES === */}
            
            {/* Kiri Atas */}
            <div className="absolute top-0 left-0 h-full w-[30%] pointer-events-none">
                <BrandDecoLeft theme="dark" className="-translate-x-20 -translate-y-20 scale-125 opacity-70" />
            </div>

            {/* Kanan Bawah */}
            <div className="absolute top-0 right-0 h-full w-[30%] pointer-events-none flex justify-end items-end pb-10">
                <BrandDecoRight theme="dark" className="translate-x-20 translate-y-10 scale-110 opacity-70" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-white text-center flex flex-col items-center justify-center">
                
                {/* Title Section */}
                <div className="flex items-center justify-center gap-6 md:gap-12 mb-3">
                    <button 
                        onClick={handlePrev}
                        className="text-white hover:text-white/70 transition-transform active:scale-95 p-2"
                        aria-label="Jadwal Sebelumnya"
                    >
                        <svg className="w-5 h-5 cursor-pointer md:w-6 md:h-6" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <div className="flex flex-col items-center min-w-[200px]">
                        <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                            JADWAL IBADAH
                        </h3>
                        <span key={`category-${activeSchedule.category}`} className="font-serif italic text-xl md:text-2xl mt-[-2px] animate-[fadeIn_0.3s_ease-in-out]">
                            {activeSchedule.category}
                        </span>
                    </div>

                    <button 
                        onClick={handleNext}
                        className="text-white hover:text-white/70 transition-transform active:scale-95 p-2"
                        aria-label="Jadwal Selanjutnya"
                    >
                        <svg className="w-5 h-5 cursor-pointer md:w-6 md:h-6" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Schedules */}
                <div
                    key={`items-${activeSchedule.category}`}
                    className={`${
                        activeSchedule.items.length > 2
                            ? 'grid grid-cols-2 gap-x-3 gap-y-3 max-w-[320px]'
                            : 'flex gap-x-8'
                    } md:flex items-center justify-center md:gap-x-12 gap-y-0 text-center w-full md:max-w-none mx-auto mt-2 h-[88px] md:h-[48px] animate-[fadeInUp_0.4s_ease-out]`}
                >
                    {activeSchedule.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-center whitespace-nowrap">
                            <div className={`${activeSchedule.items.length > 2 ? 'w-[48px] md:w-auto' : 'w-auto'} flex justify-end mr-1.5`}>
                                <span className={`${activeSchedule.items.length > 2 ? 'text-[7px]' : 'text-[9px]'} md:text-xs font-semibold tracking-normal leading-none text-white text-right`}>
                                    {item.type}
                                </span>
                            </div>
                            <div className="h-4 w-0.5 bg-white mx-1 flex-shrink-0"></div>
                            <div className="ml-1.5">
                                <span className={`${activeSchedule.items.length > 2 ? 'text-sm' : 'text-base'} md:text-2xl font-bold text-white leading-none`}>{item.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
