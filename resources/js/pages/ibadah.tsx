import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { IbadahHero } from '@/components/ibadah/hero';
import { IbadahContent, IbadahTabs } from '@/components/ibadah/ibadah-content';

import { useEffect } from 'react';

export default function Ibadah() {
    useEffect(() => {
        if (window.location.hash) {
            setTimeout(() => {
                const element = document.getElementById(window.location.hash.substring(1));
                if (element) {
                    const offset = 140;
                    const targetY = element.getBoundingClientRect().top + window.scrollY - offset;
                    const startY = window.scrollY;
                    const difference = targetY - startY;
                    const startTime = performance.now();
                    const duration = 1200; // 1.2 seconds for ultra-premium feel

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
            }, 600);
        }
    }, []);

    return (
        <>
            <Head title="Ibadah - GKI Damai" />

            <div className="bg-[#f8f9fa] w-full overflow-x-hidden">
                <Navbar />
                
                {/* Hero Section */}
                <IbadahHero />
                
                {/* Content Sections */}
                <div className="relative -mt-px">
                    <IbadahTabs />
                    <IbadahContent />
                </div>

                <Footer />
            </div>
        </>
    );
}
