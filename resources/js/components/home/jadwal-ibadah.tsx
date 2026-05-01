import React, { useState, useEffect, useRef } from 'react';
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

const AUTO_PLAY_INTERVAL = 4000;

export function JadwalIbadah() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const [animKey, setAnimKey] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const navigate = (newIndex: number, dir: 'left' | 'right') => {
        setDirection(dir);
        setAnimKey(k => k + 1);
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        setCurrentIndex(prev => {
            const next = prev === schedulesData.length - 1 ? 0 : prev + 1;
            setDirection('left');
            setAnimKey(k => k + 1);
            return next;
        });
    };

    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(goToNext, AUTO_PLAY_INTERVAL);
    };

    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? schedulesData.length - 1 : currentIndex - 1;
        navigate(newIndex, 'right');
        startAutoPlay();
    };

    const handleNext = () => {
        const newIndex = currentIndex === schedulesData.length - 1 ? 0 : currentIndex + 1;
        navigate(newIndex, 'left');
        startAutoPlay();
    };

    const handleDotClick = (index: number) => {
        const dir = index > currentIndex ? 'left' : 'right';
        navigate(index, dir);
        startAutoPlay();
    };

    useEffect(() => {
        if (!isPaused) {
            startAutoPlay();
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused]);

    const activeSchedule = schedulesData[currentIndex];

    return (
        <section
            id="jadwal-ibadah"
            className="relative w-full overflow-hidden bg-[#779965] py-4 md:py-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* === BACKGROUND SHAPES === */}
            <div className="absolute top-0 left-0 h-full w-[30%] pointer-events-none">
                <BrandDecoLeft theme="dark" className="-translate-x-20 -translate-y-20 scale-125 opacity-70" />
            </div>
            <div className="absolute top-0 right-0 h-full w-[30%] pointer-events-none flex justify-end items-end pb-10">
                <BrandDecoRight theme="dark" className="translate-x-20 translate-y-10 scale-110 opacity-70" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-white text-center flex flex-col items-center justify-center">

                {/* Title + Nav arrows */}
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

                    <div className="flex flex-col items-center min-w-[200px] overflow-hidden">
                        <h3 className="text-xl md:text-2xl font-bold tracking-wide">
                            JADWAL IBADAH
                        </h3>
                        {/* Category name slides */}
                        <div className="relative overflow-hidden h-8 flex items-center justify-center w-full">
                            <span
                                key={`cat-${animKey}`}
                                className="font-serif italic text-xl md:text-2xl"
                                style={{
                                    animation: `slideIn${direction === 'left' ? 'Left' : 'Right'} 1s cubic-bezier(0.16, 1, 0.3, 1) both`,
                                    display: 'block',
                                }}
                            >
                                {activeSchedule.category}
                            </span>
                        </div>
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

                {/* Schedules — slide in with direction */}
                <div
                    key={`items-${animKey}`}
                    className={`${
                        activeSchedule.items.length > 2
                            ? 'grid grid-cols-2 gap-x-3 gap-y-3 max-w-[320px]'
                            : 'flex gap-x-8'
                    } md:flex items-center justify-center md:gap-x-12 gap-y-0 text-center w-full md:max-w-none mx-auto mt-2 h-[88px] md:h-[48px]`}
                    style={{
                        animation: `slideIn${direction === 'left' ? 'Left' : 'Right'} 1s cubic-bezier(0.16, 1, 0.3, 1) both`,
                    }}
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

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-2 mt-4">
                    {schedulesData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            aria-label={`Lihat jadwal ${schedulesData[index].category}`}
                            className="relative w-5 h-1.5 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
                            style={{ background: 'rgba(255,255,255,0.35)' }}
                        >
                            {index === currentIndex && (
                                <span
                                    key={`progress-${currentIndex}-${isPaused}`}
                                    className="absolute inset-y-0 left-0 bg-white rounded-full"
                                    style={{
                                        animation: isPaused
                                            ? 'none'
                                            : `progressBar ${AUTO_PLAY_INTERVAL}ms linear forwards`,
                                        width: isPaused ? '100%' : undefined,
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes progressBar {
                    from { width: 0%; }
                    to { width: 100%; }
                }
                @keyframes slideInLeft {
                    from { opacity: 0; transform: translateX(60px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes slideInRight {
                    from { opacity: 0; transform: translateX(-60px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
            `}</style>
        </section>
    );
}
