import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export function Hero() {
    return (
        <section 
            className="relative w-full flex-1 min-h-[600px] flex items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/home/home-header.webp')` }}
        >
            {/* Overlay Gelap agar teks terbaca jelas */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Konten Hero */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="max-w-2xl">
                    <p className="text-white text-sm md:text-base font-semibold tracking-widest mb-2 uppercase drop-shadow-md">
                        Selamat Datang
                    </p>
                    
                    <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-2 drop-shadow-lg">
                        SHALOM
                    </h1>
                    
                    <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-8 drop-shadow-lg">
                        KELUARGA DAMAI!
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <Button 
                            onClick={() => {
                                const element = document.getElementById('jadwal-ibadah');
                                if (element) {
                                    const targetY = element.getBoundingClientRect().top + window.scrollY - 72;
                                    const startY = window.scrollY;
                                    const difference = targetY - startY;
                                    const startTime = performance.now();
                                    const duration = 1000; // 1 second for a slow, premium feel

                                    const step = (currentTime: number) => {
                                        const progress = (currentTime - startTime) / duration;
                                        if (progress < 1) {
                                            const easeProgress = 1 - Math.pow(1 - progress, 3);
                                            window.scrollTo(0, startY + difference * easeProgress);
                                            requestAnimationFrame(step);
                                        } else {
                                            window.scrollTo(0, targetY);
                                        }
                                    };
                                    requestAnimationFrame(step);
                                }
                            }}
                            className="cursor-pointer bg-[#7a9d54] hover:bg-[#688945] text-white px-8 py-6 text-lg rounded-md font-medium shadow-lg border border-transparent transition-all"
                        >
                            Lihat Jadwal Ibadah
                        </Button>
                        <Link href="/ibadah#umum">
                            <Button variant="outline" className="cursor-pointer w-full bg-transparent hover:bg-[#7a9d54]/20 text-white px-8 py-6 text-lg rounded-md font-medium shadow-lg border-2 border-[#7a9d54] transition-all">
                                Tonton Live Streaming
                            </Button>
                        </Link>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-6 h-0.5 bg-[#d4af37] mt-3"></div>
                        <p className="text-white/90 text-sm md:text-base max-w-md drop-shadow-md leading-relaxed">
                            Tempat bertumbuh dalam iman, membangun komunitas, dan mengalami kasih Tuhan bersama.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
