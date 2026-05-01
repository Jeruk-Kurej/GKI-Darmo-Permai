import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { EWartaHero } from '@/components/e-warta/hero';
import { EWartaContent } from '@/components/e-warta/e-warta-content';

export default function EWarta() {
    return (
        <>
            <Head title="E-Warta - GKI Darmo Permai" />

            <div className="bg-[#f8f9fa] w-full min-h-screen flex flex-col overflow-x-hidden">
                <Navbar />
                
                <main className="flex-1 flex flex-col pt-16">
                    {/* Hero Section */}
                    <EWartaHero />
                    
                    {/* Content Section */}
                    <EWartaContent />
                </main>

                <Footer />
            </div>
        </>
    );
}
