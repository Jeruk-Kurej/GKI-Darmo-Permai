import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { EWartaHero } from '@/components/e-warta/hero';
import { EWartaContent } from '@/components/e-warta/e-warta-content';
import { useEffect } from 'react';

export default function EWarta() {
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
                    const duration = 1200; 

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
            <Head title="E-Warta - GKI Darmo Permai" />

            <div className="bg-[#f8f9fa] w-full flex flex-col overflow-x-hidden">
                <Navbar />
                
                {/* Hero Section */}
                <EWartaHero />
                
                {/* Content Section */}
                <div id="warta-list">
                    <EWartaContent />
                </div>

                <Footer />
            </div>
        </>
    );
}

