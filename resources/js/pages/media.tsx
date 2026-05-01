import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MediaHero } from '@/components/media/hero';

export default function Media() {
    return (
        <>
            <Head title="Media - GKI Darmo Permai" />

            <div className="bg-[#f8f9fa] w-full flex flex-col overflow-x-hidden">
                <Navbar />
                
                {/* Hero Section */}
                <MediaHero />
                
                {/* Sample Content Section */}
                <section className="relative py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
                        <p className="text-lg">Informasi Galeri & Media Gereja akan di-update secara berkala.</p>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
