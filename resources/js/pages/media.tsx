import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MediaHero } from '@/components/media/hero';
import { VideoIbadahSection } from '@/components/media/video-ibadah';
import { SamasSection } from '@/components/media/samas';
import { GaleriSection } from '@/components/media/galeri';
import { useState } from 'react';

export default function Media() {
    const [activeTab, setActiveTab] = useState<string>("video-ibadah");

    const handleScrollTo = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const targetY = element.getBoundingClientRect().top + window.scrollY - offset;
            const startY = window.scrollY;
            const difference = targetY - startY;
            const startTime = performance.now();
            const duration = 1000; // 1 second smooth scroll

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
    };

    return (
        <>
            <Head title="Media - GKI Darmo Permai" />

            <div className="bg-[#f8f9fa] w-full flex flex-col overflow-x-hidden select-none">
                <Navbar />
                
                {/* Hero Section */}
                <MediaHero />
                
                {/* Sub-Navigation Tabs */}
                <div className="w-full bg-white border-b border-gray-100 flex justify-center py-6 sticky top-[64px] z-30 shadow-sm">
                    <div className="flex items-center gap-4 md:gap-8 max-w-7xl px-4 flex-wrap justify-center">
                        <button
                            onClick={() => handleScrollTo("video-ibadah")}
                            className={`px-6 py-2.5 rounded-full font-extrabold text-xs md:text-sm uppercase tracking-wider cursor-pointer transition-all duration-300 select-none ${
                                activeTab === "video-ibadah"
                                    ? "bg-[#7a9d54] text-white shadow-lg shadow-[#7a9d54]/25"
                                    : "bg-transparent text-[#1a1a1a] hover:text-[#7a9d54]"
                            }`}
                        >
                            Video Ibadah
                        </button>
                        <button
                            onClick={() => handleScrollTo("samas")}
                            className={`px-6 py-2.5 rounded-full font-extrabold text-xs md:text-sm uppercase tracking-wider cursor-pointer transition-all duration-300 select-none ${
                                activeTab === "samas"
                                    ? "bg-[#7a9d54] text-white shadow-lg shadow-[#7a9d54]/25"
                                    : "bg-transparent text-[#1a1a1a] hover:text-[#7a9d54]"
                            }`}
                        >
                            SAMAS
                        </button>
                        <button
                            onClick={() => handleScrollTo("galeri")}
                            className={`px-6 py-2.5 rounded-full font-extrabold text-xs md:text-sm uppercase tracking-wider cursor-pointer transition-all duration-300 select-none ${
                                activeTab === "galeri"
                                    ? "bg-[#7a9d54] text-white shadow-lg shadow-[#7a9d54]/25"
                                    : "bg-transparent text-[#1a1a1a] hover:text-[#7a9d54]"
                            }`}
                        >
                            Galeri
                        </button>
                    </div>
                </div>

                {/* Main Content Sections */}
                <div className="relative">
                    <VideoIbadahSection />
                    <SamasSection />
                    <GaleriSection />
                </div>

                <Footer />
            </div>
        </>
    );
}
