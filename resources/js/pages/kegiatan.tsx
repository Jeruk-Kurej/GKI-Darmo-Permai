import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { KegiatanHero } from '@/components/kegiatan/hero';
import { UpcomingEvents } from '@/components/kegiatan/upcoming-events';

export default function Kegiatan() {
    return (
        <>
            <Head title="Kegiatan" />

            <div className="bg-[#fcfcfc] w-full flex flex-col overflow-x-hidden min-h-screen">
                <Navbar />
                
                {/* Hero Section */}
                <KegiatanHero />
                
                {/* Upcoming Events Section */}
                <UpcomingEvents />

                <Footer />
            </div>
        </>
    );
}
