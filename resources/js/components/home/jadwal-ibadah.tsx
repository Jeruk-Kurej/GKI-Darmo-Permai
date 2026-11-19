import React, { useState, useEffect, useRef } from 'react';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';
import { schedulesData } from './home-data';

const AUTO_PLAY_INTERVAL = 4000;

function ScheduleArrow({
    label,
    onClick,
    path,
}: {
    label: string;
    onClick: () => void;
    path: string;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            className="p-2 text-white transition-transform hover:text-white/70 active:scale-95"
        >
            <svg
                className="h-7 w-7 md:h-10 md:w-10"
                fill="none"
                strokeWidth="2.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d={path} />
            </svg>
        </button>
    );
}

export function JadwalIbadah({ schedules }: { schedules?: any[] }) {
    const schedulesToDisplay: any[] =
        schedules && schedules.length > 0
            ? Object.values(
                  schedules.reduce((acc: any, item: any) => {
                      if (!acc[item.category]) {
                          acc[item.category] = {
                              category: item.category,
                              items: [],
                          };
                      }

                      acc[item.category].items.push({
                          type: item.type,
                          time: item.time,
                      });

                      return acc;
                  }, {}),
              )
            : schedulesData;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const [animKey, setAnimKey] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const navigate = (newIndex: number, dir: 'left' | 'right') => {
        setDirection(dir);
        setAnimKey((k) => k + 1);
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => {
            const next = prev === schedulesToDisplay.length - 1 ? 0 : prev + 1;
            setDirection('left');
            setAnimKey((k) => k + 1);

            return next;
        });
    };

    const startAutoPlay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(goToNext, AUTO_PLAY_INTERVAL);
    };

    const handlePrev = () => {
        const newIndex =
            currentIndex === 0
                ? schedulesToDisplay.length - 1
                : currentIndex - 1;
        navigate(newIndex, 'right');
        startAutoPlay();
    };

    const handleNext = () => {
        const newIndex =
            currentIndex === schedulesToDisplay.length - 1
                ? 0
                : currentIndex + 1;
        navigate(newIndex, 'left');
        startAutoPlay();
    };

    useEffect(() => {
        if (!isPaused) {
            startAutoPlay();
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isPaused]);

    useEffect(() => {
        if (currentIndex >= schedulesToDisplay.length) {
            setCurrentIndex(0);
        }
    }, [schedulesToDisplay.length]);

    const activeSchedule: any = schedulesToDisplay[currentIndex] || {
        category: '',
        items: [],
    };
    const activeItems: any[] = activeSchedule?.items || [];

    const slide = {
        animation: `slideIn${direction === 'left' ? 'Left' : 'Right'} 1s cubic-bezier(0.16, 1, 0.3, 1) both`,
    };

    return (
        <section
            id="jadwal-ibadah"
            className="relative w-full overflow-hidden bg-brand-muted py-6 lg:h-[233px] lg:pt-6 lg:pb-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="pointer-events-none absolute top-0 left-0 h-full w-[30%]">
                <BrandDecoLeft
                    theme="dark"
                    className="-translate-x-20 -translate-y-20 scale-125 opacity-70"
                />
            </div>
            <div className="pointer-events-none absolute top-0 right-0 flex h-full w-[30%] items-end justify-end pb-10">
                <BrandDecoRight
                    theme="dark"
                    className="translate-x-20 translate-y-10 scale-110 opacity-70"
                />
            </div>

            <div className="relative z-10 container-page flex flex-col items-center text-center text-white">
                <div className="flex items-center justify-center gap-2 md:gap-4">
                    <ScheduleArrow
                        label="Jadwal sebelumnya"
                        onClick={handlePrev}
                        path="M15 19l-7-7 7-7"
                    />
                    <div className="flex flex-col items-center">
                        <h2 className="type-h2">Jadwal Ibadah</h2>
                        <div className="-mt-5 h-[52px] overflow-hidden md:h-[60px]">
                            <span
                                key={`cat-${animKey}`}
                                className="block font-script text-[32px] md:text-[40px]"
                                style={slide}
                            >
                                {activeSchedule.category}
                            </span>
                        </div>
                    </div>
                    <ScheduleArrow
                        label="Jadwal selanjutnya"
                        onClick={handleNext}
                        path="M9 5l7 7-7 7"
                    />
                </div>

                <div
                    key={`items-${animKey}`}
                    className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 sm:gap-x-10 lg:mt-1 lg:flex lg:items-center lg:justify-center lg:gap-x-16"
                    style={slide}
                >
                    {activeItems.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="flex items-center justify-center gap-1.5 whitespace-nowrap"
                        >
                            <span className="font-display text-sm font-semibold tracking-[-0.01em] uppercase md:text-2xl">
                                {item.type}
                            </span>
                            <span className="h-7 w-[3px] bg-white md:h-[46px]" />
                            <span className="font-ui text-xl leading-none font-bold tracking-[-0.01em] uppercase md:text-4xl md:leading-[64px]">
                                {item.time}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
