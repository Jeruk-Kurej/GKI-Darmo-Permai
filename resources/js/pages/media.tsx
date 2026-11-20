import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { GaleriSection } from '@/components/media/galeri';
import { SamasSection } from '@/components/media/samas';
import { VideoIbadahSection } from '@/components/media/video-ibadah';
import { PageHero } from '@/components/page-hero';
import { smoothScrollTo, TAB_BAR_OFFSET } from '@/lib/scroll';

const tabs = [
    { id: 'video-ibadah', label: 'Video Ibadah' },
    { id: 'samas', label: 'SAMAS' },
    { id: 'galeri', label: 'Galeri' },
];

export default function Media({ mediaItems }: { mediaItems?: any[] }) {
    const [activeTab, setActiveTab] = useState<string>('video-ibadah');

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
            const targetY =
                element.getBoundingClientRect().top +
                window.scrollY -
                TAB_BAR_OFFSET;
            smoothScrollTo(targetY);
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
            <div className="sticky top-20 z-40 flex h-24 w-full items-center bg-white select-none">
                <div className="container-page grid grid-cols-3 gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => handleTabClick(tab.id)}
                            className={`mx-auto flex h-12 w-full max-w-[317px] cursor-pointer items-center justify-center rounded-full font-display text-sm font-bold uppercase transition-colors sm:text-lg md:h-16 md:text-[32px] ${
                                activeTab === tab.id
                                    ? 'bg-brand text-white'
                                    : 'text-ink hover:text-brand'
                            }`}
                        >
                            {tab.label}
                        </button>
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
