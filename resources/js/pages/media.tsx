import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';
import { GaleriSection } from '@/components/media/galeri';
import { SamasSection } from '@/components/media/samas';
import { VideoIbadahSection } from '@/components/media/video-ibadah';
import { PageHero } from '@/components/page-hero';

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

export default function Media({ mediaItems }: { mediaItems?: any[] }) {
    const [activeTab, setActiveTab] = useState<string>('video-ibadah');
    const tabs = [
        { id: 'video-ibadah', label: 'Video Ibadah' },
        { id: 'samas', label: 'SAMAS' },
        { id: 'galeri', label: 'Galeri' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = tabs.map((tab) => document.getElementById(tab.id));
            const scrollPosition = window.scrollY + 200;

            sections.forEach((section, idx) => {
                if (
                    section &&
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
                ) {
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
            const offset = 148;
            const targetY =
                element.getBoundingClientRect().top + window.scrollY - offset;
            slowSmoothScrollTo(targetY, 1200);
        }
    };

    return (
        <>
            <Head title="Media - GKI Darmo Permai" />

            <PageHero
                eyebrow="Media"
                title="Dengar dan tonton kembali"
                image="/images/media/media-header.webp"
            />
            <div className="sticky top-20 z-40 w-full bg-[#8ca36b] shadow-lg select-none">
                <div className="mx-auto flex max-w-7xl items-center">
                    {tabs.map((tab, idx) => (
                        <React.Fragment key={tab.id}>
                            <button
                                onClick={() => handleTabClick(tab.id)}
                                className={`relative flex-1 cursor-pointer py-5 text-sm font-bold tracking-[0.2em] uppercase transition-all select-none md:text-xl ${
                                    activeTab === tab.id
                                        ? 'text-white'
                                        : 'text-white/60 hover:text-white'
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
            <div className="relative">
                <VideoIbadahSection mediaItems={mediaItems} />
                <SamasSection mediaItems={mediaItems} />
                <GaleriSection mediaItems={mediaItems} />
            </div>
        </>
    );
}
