import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { IbadahHero } from '@/components/ibadah/hero';
import { IbadahContent, IbadahTabs } from '@/components/ibadah/ibadah-content';

export default function Ibadah() {
    const [activeTab, setActiveTab] = useState('UMUM');

    return (
        <>
            <Head title="Ibadah" />

            <div className="bg-[#f8f9fa] w-full overflow-x-hidden">
                <Navbar />
                
                {/* Hero Section */}
                <IbadahHero />
                
                {/* Content Sections - Using -mt-px to bridge any sub-pixel gap */}
                <div className="relative -mt-px">
                    <IbadahTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                    <IbadahContent activeTab={activeTab} />
                </div>

                <Footer />
            </div>
        </>
    );
}
