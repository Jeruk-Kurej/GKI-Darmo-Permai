import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { IbadahHero } from '@/components/ibadah/hero';
import { IbadahContent, IbadahTabs } from '@/components/ibadah/ibadah-content';

export default function Ibadah() {
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
