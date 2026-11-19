import { Link } from '@inertiajs/react';

export function VisiKami() {
    return (
        <section 
            className="relative w-full py-8 md:py-12 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/home/vision-bg.webp')` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex w-full max-w-[calc(1085px+3rem)] flex-col items-center px-6 text-center">
                
                <p className="type-eyebrow mb-4 text-white">
                    VISI KAMI
                </p>
                
                <h2 className="type-h2 mb-3 max-w-[1085px] text-white">
                    “MEWUJUDKAN KELUARGA ‘DAMAI’ YANG MELAYANI.”
                </h2>
                
                <p className="type-lead mb-10 max-w-[740px] text-white">
                    Mewujudkan keluarga Kristen yang berintegritas, mandiri dan produktif, dalam keutuhan jemaat yang saling menopang dan melayani.
                </p>

                <Link 
                    href="/tentang-kami#visi-misi" 
                    className="group flex items-center gap-2 text-xl leading-8 text-white transition-colors hover:text-gray-300"
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
                </Link>
                
            </div>
        </section>
    );
}
