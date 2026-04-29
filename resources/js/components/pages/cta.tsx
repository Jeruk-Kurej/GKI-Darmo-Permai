import React from 'react';
import { motion } from 'framer-motion';

export function CallToAction() {
    return (
        <section 
            className="relative w-full py-24 md:py-32 flex justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/cta-bg.png')` }}
        >
            {/* Dark/Green Overlay untuk memperjelas card putih */}
            <div className="absolute inset-0 bg-[#779965]/20 backdrop-blur-[1px]"></div>

            {/* Main Card */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-[90%] max-w-4xl bg-white shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center border-b-[12px] border-[#a0bb87]"
            >
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left pr-0 md:pr-10">
                    <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] leading-[1.1] mb-6 tracking-tight">
                        WE WANT TO<br />
                        SERVE THE WORLD<br />
                        AROUND US
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-sm mx-auto md:mx-0 font-medium leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                    </p>
                    <a 
                        href="#" 
                        className="inline-block bg-[#779965] hover:bg-[#5f7a50] text-white font-bold py-3 px-12 rounded-md transition-colors shadow-md"
                    >
                        Visit
                    </a>
                </div>

                {/* Right Content (Quote Graphics) */}
                <div className="hidden md:flex flex-1 justify-center items-center pl-10">
                    <svg className="w-48 h-48 text-[#a0bb87]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                </div>
            </motion.div>
        </section>
    );
}
