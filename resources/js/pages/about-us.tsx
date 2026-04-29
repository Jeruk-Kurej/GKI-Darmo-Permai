import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { AboutHero } from '@/components/about/hero';
import { VisiMisi } from '@/components/about/visi-misi';
import { Sejarah } from '@/components/about/sejarah';
import { AnggotaGereja } from '@/components/about/anggota-gereja';

export default function AboutUs() {
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
