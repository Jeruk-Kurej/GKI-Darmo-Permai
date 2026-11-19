import { ArrowLink } from '@/components/arrow-link';

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

                <ArrowLink href="/tentang-kami#visi-misi" className="text-white hover:text-gray-300">
                    Lihat Semua
                </ArrowLink>
                
            </div>
        </section>
    );
}
