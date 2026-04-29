import React, { useState } from 'react';
import { DiamondOutline, DiamondSolid, DotsPattern, TriangleDotsPattern, GlowCircle } from '@/components/ui/shapes';

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
        <section className="relative w-full overflow-hidden bg-[#779965] py-4 md:py-6">
            {/* Background Floating Assets (Using Reusable Shapes) */}
            
            {/* === LEFT CLUSTER === */}
            <div className="absolute top-0 left-0 h-full w-[40%] pointer-events-none">
                {/* Wajik Solid (Di Ujung Kiri) */}
                <DiamondSolid 
                    className="-left-40 -top-10" 
                    size="w-80 h-80" 
                    opacity="opacity-[0.15]" 
                    blur="backdrop-blur-none"
                    animate="animate-[pulse_6s_ease-in-out_infinite]" 
                />
                
                {/* Wajik Outline (Membelah wajik solid) */}
                <DiamondOutline 
                    className="-left-48 top-10" 
                    size="w-96 h-96" 
                    borderWidth="border-2"
                    opacity="opacity-40" 
                    animate="animate-[spin_40s_linear_infinite]" 
                />
                
                {/* Wajik Outline Tipis (Lebih kecil) */}
                <DiamondOutline 
                    className="-left-20 -top-10" 
                    size="w-56 h-56" 
                    borderWidth="border-[1px]"
                    opacity="opacity-50" 
                    animate="animate-[spin_30s_linear_infinite_reverse]" 
                />

                {/* Pola Titik Segitiga (Kiri Atas) */}
                <TriangleDotsPattern 
                    className="left-16 top-6" 
                    size="w-28 h-28" 
                    opacity="opacity-30" 
                    clipPath="polygon(0 0, 100% 0, 0 100%)"
                    animate="animate-[bounce_8s_infinite]" 
                />
            </div>

            {/* === RIGHT CLUSTER === */}
            <div className="absolute top-0 right-0 h-full w-[40%] pointer-events-none">
                {/* Wajik Outline Sangat Besar (Ujung Kanan Bawah) */}
                <DiamondOutline 
                    className="-right-56 -bottom-32" 
                    size="w-[500px] h-[500px]" 
                    borderWidth="border-[2px]"
                    opacity="opacity-30" 
                    animate="animate-[spin_50s_linear_infinite_reverse]" 
                />
                
                {/* Wajik Outline Sedang (Kanan Atas) */}
                <DiamondOutline 
                    className="-right-10 -top-20" 
                    size="w-64 h-64" 
                    borderWidth="border-[1.5px]"
                    opacity="opacity-40" 
                    animate="animate-[spin_35s_linear_infinite]" 
                />

                {/* Lingkaran Bercahaya (Pojok Kanan Atas) */}
                <GlowCircle 
                    className="right-24 top-6" 
                    size="w-10 h-10" 
                    opacity="opacity-[0.15]" 
                    blur="blur-md"
                    animate="animate-[pulse_3s_ease-in-out_infinite]" 
                />

                {/* Pola Titik Segitiga (Kanan Bawah) */}
                <TriangleDotsPattern 
                    className="right-16 bottom-10" 
                    size="w-32 h-32" 
                    opacity="opacity-30" 
                    clipPath="polygon(100% 100%, 100% 0, 0 100%)"
                    animate="animate-[bounce_10s_infinite]" 
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-white text-center flex flex-col items-center justify-center min-h-[110px]">
                
                {/* Title Section */}
                <div className="flex items-center justify-center gap-6 md:gap-12 mb-3">
                    <button 
                        onClick={handlePrev}
                        className="text-white hover:text-white/70 transition-transform active:scale-95 p-2"
                        aria-label="Jadwal Sebelumnya"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
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
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Schedules */}
                <div key={`items-${activeSchedule.category}`} className="flex flex-wrap items-center justify-center gap-y-2 md:gap-y-0 text-center w-full mt-1 animate-[fadeInUp_0.4s_ease-out]">
                    {activeSchedule.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-center px-3 md:px-5">
                            <div className="flex flex-col items-end mr-2">
                                <span className="text-[10px] md:text-xs font-semibold tracking-widest leading-none">
                                    {item.type}
                                </span>
                            </div>
                            <div className="h-6 w-0.5 bg-white mx-1"></div>
                            <div className="ml-2">
                                <span className="text-xl md:text-2xl font-bold">{item.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
