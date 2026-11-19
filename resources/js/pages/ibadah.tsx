import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { IbadahContent, IbadahTabs } from '@/components/ibadah/ibadah-content';
import { PageHero } from '@/components/page-hero';

export default function Ibadah() {
    useEffect(() => {
        if (window.location.hash) {
            setTimeout(() => {
                const element = document.getElementById(
                    window.location.hash.substring(1),
                );

                if (element) {
                    const offset = 148;
                    const targetY =
                        element.getBoundingClientRect().top +
                        window.scrollY -
                        offset;
                    const startY = window.scrollY;
                    const difference = targetY - startY;
                    const startTime = performance.now();
                    const duration = 1200;

                    const step = (currentTime: number) => {
                        const progress = (currentTime - startTime) / duration;

                        if (progress < 1) {
                            const easeProgress = 1 - Math.pow(1 - progress, 3);
                            window.scrollTo(
                                0,
                                startY + difference * easeProgress,
                            );
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

            <PageHero
                eyebrow="Ibadah"
                title="Take part in our sermon"
                image="/images/ibadah/ibadah-header.webp"
                tone="dark"
            />
            <div className="relative -mt-px">
                <IbadahTabs />
                <IbadahContent />
            </div>
        </>
    );
}
