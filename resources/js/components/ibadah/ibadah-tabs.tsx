import React, { useState, useEffect } from 'react';
import { smoothScrollTo, TAB_BAR_OFFSET } from '@/lib/scroll';

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
            const targetY = element.getBoundingClientRect().top + window.scrollY - TAB_BAR_OFFSET;
            smoothScrollTo(targetY);
        }
    };

    return (
        <div className="sticky top-20 z-40 w-full bg-brand shadow-lg select-none">
            <div className="flex h-24 items-stretch">
                {tabs.map((tab, idx) => (
                    <React.Fragment key={tab}>
                        <button
                            onClick={() => handleTabClick(tab)}
                            className={`flex flex-1 items-center justify-center font-display text-2xl leading-none font-bold uppercase transition-colors cursor-pointer select-none md:text-[40px] ${
                                activeTab === tab ? 'text-white' : 'text-white/70 hover:text-white'
                            }`}
                        >
                            {tab}
                        </button>
                        {idx < tabs.length - 1 && (
                            <div className="my-auto h-12 w-[3px] bg-white" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
