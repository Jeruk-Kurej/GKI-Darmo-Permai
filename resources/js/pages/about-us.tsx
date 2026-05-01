import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AboutHero } from '@/components/about/hero';
import { VisiMisi } from '@/components/about/visi-misi';
import { Sejarah } from '@/components/about/sejarah';
import { AnggotaGereja } from '@/components/about/anggota-gereja';

import { useEffect } from 'react';

export default function AboutUs() {
    useEffect(() => {
        if (window.location.hash) {
            setTimeout(() => {
                const element = document.getElementById(window.location.hash.substring(1));
                if (element) {
                    const offset = 80;
                    const targetY = element.getBoundingClientRect().top + window.scrollY - offset;
                    const startY = window.scrollY;
                    const difference = targetY - startY;
                    const startTime = performance.now();
                    const duration = 1200; // 1.2 seconds for ultra-smooth feel

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
            <Head title="Tentang Kami" />

            <div className="bg-[#f8f9fa] w-full flex flex-col overflow-x-hidden">
                <Navbar />
                
                {/* Hero Section */}
                <AboutHero />
                
                {/* Content Sections */}
                <VisiMisi />
                <Sejarah />
                <AnggotaGereja />

                <Footer />
                
            </div>
        </>
    );
}
