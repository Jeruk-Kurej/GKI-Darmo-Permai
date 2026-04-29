import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AboutHero } from '@/components/about/hero';

export default function AboutUs() {
    return (
        <>
            <Head title="Tentang Kami" />

            <div className="bg-[#f8f9fa] w-full flex flex-col">
                
                {/* Navbar + Hero */}
                <div className="w-full flex flex-col h-screen">
                    <Navbar />
                    <AboutHero />
                </div>
                
                <Footer />
                
            </div>
        </>
    );
}
