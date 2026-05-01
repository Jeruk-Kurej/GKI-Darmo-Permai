import React from 'react';
import { motion } from 'framer-motion';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';
import { EventsCarousel } from './events-carousel';
import { EventsGrid } from './events-grid';

export function UpcomingEvents() {
    return (
        <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 z-10 select-none">
            {/* === BACKGROUND SHAPES === */}
            <div className="absolute top-0 left-0 h-full w-[30%] pointer-events-none">
                <BrandDecoLeft className="-translate-x-20 -translate-y-20 scale-125 opacity-70" />
            </div>
            <div className="absolute top-0 right-0 h-full w-[30%] pointer-events-none flex justify-end items-end pb-10">
                <BrandDecoRight className="translate-x-20 translate-y-10 scale-110 opacity-70" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
                {/* Header */}
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
                    className="inline-block bg-[#779965] hover:bg-[#5f7a50] text-white font-semibold py-3 px-10 rounded-md transition-colors shadow-md mb-4 md:-mb-10 relative z-20 cursor-pointer"
                >
                    Lihat Semua
                </motion.a>

                {/* Top Slide Carousel Section */}
                <EventsCarousel />

                {/* Space separator */}
                <div className="h-20 w-full" />

                {/* Bottom Search & Categories Event Grid Section */}
                <EventsGrid />
            </div>
        </section>
    );
}
