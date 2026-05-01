import React from 'react';
import { motion } from 'framer-motion';

export function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
        >
            <h2 className="text-xl font-bold text-[#1a1a1a] mb-8">
                Contact Form:
            </h2>
            
            <div className="space-y-5">
                <div className="shadow-[0_4px_12px_rgba(0,0,0,0.04)] rounded-sm">
                    <input 
                        type="text" 
                        placeholder="Nama Lengkap" 
                        className="w-full px-6 py-4 bg-white border border-gray-100 rounded-sm focus:ring-1 focus:ring-[#7a9d54] outline-none text-sm text-[#1a1a1a] placeholder:text-gray-400 caret-black"
                    />
                </div>
                <div className="shadow-[0_4px_12px_rgba(0,0,0,0.04)] rounded-sm">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="w-full px-6 py-4 bg-white border border-gray-100 rounded-sm focus:ring-1 focus:ring-[#7a9d54] outline-none text-sm text-[#1a1a1a] placeholder:text-gray-400 caret-black"
                    />
                </div>
                <div className="shadow-[0_4px_12px_rgba(0,0,0,0.04)] rounded-sm">
                    <input 
                        type="text" 
                        placeholder="Topik Terkait" 
                        className="w-full px-6 py-4 bg-white border border-gray-100 rounded-sm focus:ring-1 focus:ring-[#7a9d54] outline-none text-sm text-[#1a1a1a] placeholder:text-gray-400 caret-black"
                    />
                </div>
                <div className="shadow-[0_4px_12px_rgba(0,0,0,0.04)] rounded-sm">
                    <textarea 
                        placeholder="Pesan" 
                        rows={6}
                        className="w-full px-6 py-4 bg-white border border-gray-100 rounded-sm focus:ring-1 focus:ring-[#7a9d54] outline-none text-sm text-[#1a1a1a] resize-none placeholder:text-gray-400 caret-black"
                    ></textarea>
                </div>
                
                <button className="w-full py-4 bg-[#7a9d54] cursor-pointer hover:bg-[#688945] text-white font-bold text-sm tracking-wide rounded-sm shadow-lg transition-all active:scale-[0.98]">
                    Kirim Pesan
                </button>
            </div>
        </motion.div>
    );
}
