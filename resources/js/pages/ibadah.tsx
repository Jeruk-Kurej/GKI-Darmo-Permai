import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { IbadahContent, IbadahTabs } from '@/components/ibadah/ibadah-content';
import { PageHero } from '@/components/page-hero';
import { smoothScrollTo, TAB_BAR_OFFSET } from '@/lib/scroll';

export default function Ibadah() {
    useEffect(() => {
        if (!window.location.hash) {
            return;
        }

        const timer = setTimeout(() => {
            const element = document.getElementById(window.location.hash.substring(1));

            if (element) {
                smoothScrollTo(element.getBoundingClientRect().top + window.scrollY - TAB_BAR_OFFSET);
            }
        }, 600);

        return () => clearTimeout(timer);
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
