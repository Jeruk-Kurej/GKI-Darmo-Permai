import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MediaHero } from '@/components/media/hero';
import { VideoIbadahSection } from '@/components/media/video-ibadah';
import { SamasSection } from '@/components/media/samas';
import { GaleriSection } from '@/components/media/galeri';
import React, { useState, useEffect } from 'react';

const slowSmoothScrollTo = (targetY: number, duration: number) => {
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();

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
};

export default function Media() {
    const [activeTab, setActiveTab] = useState<string>("video-ibadah");
    const tabs = [
        { id: "video-ibadah", label: "Video Ibadah" },
        { id: "samas", label: "SAMAS" },
        { id: "galeri", label: "Galeri" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = tabs.map(tab => document.getElementById(tab.id));
            const scrollPosition = window.scrollY + 200;

            sections.forEach((section, idx) => {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveTab(tabs[idx].id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTabClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 140;
            const targetY = element.getBoundingClientRect().top + window.scrollY - offset;
            slowSmoothScrollTo(targetY, 1200);
        }
    };

    return (
        <>
            <Head title="Media - GKI Darmo Permai" />

            <div className="bg-[#f8f9fa] w-full flex flex-col overflow-x-hidden select-none">
                <Navbar />
                
                {/* Hero Section */}
                <MediaHero />
                
                {/* Sub-Navigation Tabs - Exact same look and feel as Ibadah */}
                <div className="sticky top-[72px] z-40 w-full bg-[#8ca36b] shadow-lg select-none">
                    <div className="max-w-7xl mx-auto flex items-center">
                        {tabs.map((tab, idx) => (
                            <React.Fragment key={tab.id}>
                                <button
                                    onClick={() => handleTabClick(tab.id)}
                                    className={`flex-1 py-5 text-sm md:text-xl font-bold tracking-[0.2em] transition-all relative uppercase cursor-pointer select-none ${
                                        activeTab === tab.id ? 'text-white' : 'text-white/60 hover:text-white'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                                {idx < tabs.length - 1 && (
                                    <div className="h-8 w-[2px] bg-white/20" />
                                )}
                            </React.Fragment>
                        ))}
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
