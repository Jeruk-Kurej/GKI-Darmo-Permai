import React from 'react';
import { motion } from 'framer-motion';
import { buttonClasses } from '@/components/button-link';

export function IbadahGrid({ data, type, eyebrow }: { data: any, type: string, eyebrow: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.8 }}
            className="select-none"
        >
            <div className="text-center mb-16">
                <p className="type-eyebrow mb-4 text-ink">{eyebrow}</p>
                <div className="relative inline-block">
                    <h2 className="type-h2 text-ink">{type}</h2>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-[5px] bg-brand" />
                </div>
            </div>

            <div className="mb-16">
                <div className="bg-[#f5f7e4] rounded-sm overflow-hidden shadow-md flex flex-col lg:grid lg:grid-cols-12">
                    <div className="order-2 lg:order-1 lg:col-span-4 p-8 md:p-10 flex flex-col justify-between relative">
                        <div className="absolute top-8 right-8 text-right">
                            <span className="block text-2xl font-black text-ink leading-none">{data.main.date.split(' ')[0]}</span>
                            <span className="block text-xs font-bold text-ink uppercase tracking-tighter">{data.main.date.split(' ')[1]}</span>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold text-brand tracking-widest uppercase mb-4 block">KEBAKTIAN</span>
                            <h3 className="text-2xl font-black text-ink mb-4 uppercase leading-tight">{data.main.title}</h3>
                            <div className="space-y-1 mb-8">
                                <p className="text-[15px] font-bold text-gray-800 leading-snug">{data.main.theme}</p>
                                <p className="text-sm font-medium text-gray-600">{data.main.pastor}</p>
                            </div>
                            <div className="space-y-3 mb-10 text-sm font-bold text-gray-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full border-2 border-brand flex items-center justify-center"><div className="w-1 h-2 bg-brand rotate-45 translate-x-[1px] -translate-y-[1px]" /></div>
                                    {data.main.time}
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    {data.main.location}
                                </div>
                            </div>
                        </div>
                        <button className={`${buttonClasses()} w-full cursor-pointer`}>Tonton Streaming</button>
                    </div>
                    <div className="order-1 lg:order-2 lg:col-span-8 relative group cursor-pointer overflow-hidden min-h-[300px] md:min-h-[450px]">
                        <img src={data.main.thumbnail} alt="Live Stream" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center">
                            <motion.div whileHover={{ scale: 1.1 }} className="w-20 h-20 md:w-24 md:h-24 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl"><svg className="w-10 h-10 text-white fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {data.schedules.map((schedule: any, idx: number) => (
                    <motion.div key={idx} whileHover={{ y: -8 }} className="bg-[#f5f7e4] p-5 md:p-8 rounded-sm shadow-sm flex flex-col justify-between relative border-b-[6px] md:border-b-[8px] border-brand">
                        <div className="absolute top-5 right-5 text-right">
                            <span className="block text-lg md:text-xl font-black text-ink leading-none">{schedule.date.split(' ')[0]}</span>
                            <span className="block text-[9px] md:text-[10px] font-bold text-ink uppercase tracking-tighter">{schedule.date.split(' ')[1]}</span>
                        </div>
                        <div>
                            <span className="text-[8px] md:text-[9px] font-bold text-brand tracking-widest uppercase mb-3 block leading-none">KEBAKTIAN</span>
                            <h4 className="text-lg md:text-xl font-black text-ink mb-2 uppercase leading-tight pr-14">{schedule.title}</h4>
                            <p className="text-xs md:text-[13px] font-bold text-gray-800 italic mb-1 leading-snug">{schedule.theme}</p>
                            <p className="text-[11px] md:text-xs font-medium text-gray-500 mb-4">{schedule.pastor}</p>
                            <div className="space-y-1.5 text-[11px] md:text-xs font-bold text-gray-700 pt-2 border-t border-black/5">
                                <div className="flex items-center gap-2"><div className="w-4 h-4 rounded-full border-2 border-brand flex items-center justify-center scale-75"><div className="w-[1px] h-1.5 bg-brand rotate-45 translate-x-[0.5px] -translate-y-[0.5px]" /></div>{schedule.time}</div>
                                <div className="flex items-center gap-2"><svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>{schedule.location}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
