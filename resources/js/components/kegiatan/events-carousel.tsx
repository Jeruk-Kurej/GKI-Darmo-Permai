import React from 'react';
import { motion } from 'framer-motion';

export function EventsCarousel({ events }: { events?: any[] }) {
    if (events && events.length > 0) {
        return (
            <div className="w-full relative mt-10 px-4 md:px-16 select-none">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-start relative z-10">
                    {events.slice(0, 3).map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.2 * (idx + 1) }}
                            className={`flex flex-col items-center group relative ${idx === 1 ? 'mt-0 md:mt-20' : ''} ${idx === 2 ? 'hidden lg:flex' : ''}`}
                        >
                            <div className="aspect-[3/4] bg-[#dcdcdc] rounded-sm shadow-sm hover:shadow-md w-full transition-all duration-500 overflow-hidden relative cursor-pointer">
                                {item.image_path && (
                                    <img 
                                        src={item.image_path} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                )}
                            </div>
                            <div className="relative mt-8 mb-8 text-center flex flex-col items-center gap-1">
                                <h3 
                                    className="text-[#1a1a1a] font-bold line-clamp-2"
                                    style={{ 
                                        fontFamily: "'Roboto Condensed', sans-serif",
                                        fontSize: '25px',
                                        lineHeight: '30px',
                                        letterSpacing: '-0.01em'
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p 
                                    className="text-[#779965] uppercase pt-2 font-black tracking-wider text-xs"
                                >
                                    {item.category}
                                </p>
                                <p 
                                    className="text-[#1a1a1a] uppercase pt-1"
                                    style={{
                                        fontFamily: "'Roboto Condensed', sans-serif",
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '100%',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    {item.pastor}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="w-full relative mt-10 px-4 md:px-16 select-none">
            {/* Left Arrow */}
            <button className="absolute left-0 top-[30%] -translate-y-1/2 text-[#779965] cursor-pointer hover:text-[#5f7a50] transition-colors active:scale-95 z-30" aria-label="Previous">
                <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Cards (3 Placeholders with Staggered Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto items-start relative z-10">
                {/* Card 1 */}
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

                {/* Card 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="aspect-[3/4] bg-[#dcdcdc] rounded-sm shadow-sm w-full transition-transform hover:-translate-y-2 hover:shadow-md cursor-pointer hidden lg:block"
                />
            </div>

            {/* Right Arrow */}
            <button className="absolute right-0 top-[30%] -translate-y-1/2 text-[#779965] cursor-pointer hover:text-[#5f7a50] transition-colors active:scale-95 z-30" aria-label="Next">
                <svg className="w-10 h-10 md:w-14 md:h-14" fill="none" strokeWidth="2.5" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}
