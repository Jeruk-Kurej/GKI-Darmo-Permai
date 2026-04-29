import React from 'react';

export function VisiKami() {
    return (
        <section 
            className="relative w-full py-8 md:py-12 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/vision-bg.png')` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
                
                <p className="text-gray-300 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                    VISI KAMI
                </p>
                
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug md:leading-tight mb-3 max-w-4xl">
                    “MEWUJUDKAN KELUARGA ‘DAMAI’ YANG MELAYANI.”
                </h2>
                
                <p className="text-gray-200 text-sm md:text-base font-medium max-w-3xl leading-relaxed mb-6">
                    Mewujudkan keluarga Kristen yang berintegritas, mandiri dan produktif, dalam keutuhan jemaat yang saling menopang dan melayani.
                </p>

                <a 
                    href="#" 
                    className="group flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors"
                >
                    Lihat Semua
                    <svg 
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
                
            </div>
        </section>
    );
}
