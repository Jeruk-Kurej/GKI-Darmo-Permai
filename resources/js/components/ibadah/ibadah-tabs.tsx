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

export function IbadahTabs() {
    const [activeTab, setActiveTab] = useState('UMUM');
    const tabs = ['UMUM', 'PROUD', 'ANAK'];

    useEffect(() => {
        const handleScroll = () => {
            const sections = tabs.map(tab => document.getElementById(tab.toLowerCase()));
            const scrollPosition = window.scrollY + 200;

            sections.forEach((section, idx) => {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveTab(tabs[idx]);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTabClick = (tab: string) => {
        const element = document.getElementById(tab.toLowerCase());
        if (element) {
            const offset = 140;
            const targetY = element.getBoundingClientRect().top + window.scrollY - offset;
            slowSmoothScrollTo(targetY, 1200);
        }
    };

    return (
        <div className="sticky top-[72px] z-40 w-full bg-[#8ca36b] shadow-lg select-none">
            <div className="max-w-7xl mx-auto flex items-center">
                {tabs.map((tab, idx) => (
                    <React.Fragment key={tab}>
                        <button
                            onClick={() => handleTabClick(tab)}
                            className={`flex-1 py-5 text-sm md:text-xl font-bold tracking-[0.2em] transition-all relative uppercase cursor-pointer select-none ${
                                activeTab === tab ? 'text-white' : 'text-white/60 hover:text-white'
                            }`}
                        >
                            {tab}
                        </button>
                        {idx < tabs.length - 1 && (
                            <div className="h-8 w-[2px] bg-white/20" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
