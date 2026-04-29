import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/pages/hero';
import { JadwalIbadah } from '@/components/pages/jadwal-ibadah';
import { TentangKami } from '@/components/pages/tentang-kami';
import { VisiKami } from '@/components/pages/visi-kami';
import { AcaraMendatang } from '@/components/pages/acara-mendatang';
import { VideoIbadah } from '@/components/pages/video-ibadah';
import { LatestPost } from '@/components/pages/latest-post';
import { CallToAction } from '@/components/pages/cta';
import { Footer } from '@/components/pages/footer';

export default function Welcome() {
    return (
        <>
            <Head title="Home" />

            <div className="bg-[#f8f9fa] w-full flex flex-col">
                
                {/* SCREEN 1: Navbar + Hero */}
                <div className="w-full h-screen flex flex-col">
                    <Navbar />
                    <Hero />
                </div>

                {/* Jadwal Ibadah - biarkan ukuran natural */}
                <JadwalIbadah />
                
                {/* SCREEN 2: Tentang Kami (Full Screen) */}
                <div className="w-full h-screen flex flex-col">
                    <TentangKami />
                </div>
                
                {/* Lanjutan Section Bawah */}
                <VisiKami />
                <AcaraMendatang />
                <VideoIbadah />
                <LatestPost />
                <CallToAction />
                <Footer />
                
            </div>
        </>
    );
}
