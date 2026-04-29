import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/home/hero';
import { JadwalIbadah } from '@/components/home/jadwal-ibadah';
import { TentangKami } from '@/components/home/tentang-kami';
import { VisiKami } from '@/components/home/visi-kami';
import { AcaraMendatang } from '@/components/home/acara-mendatang';
import { VideoIbadah } from '@/components/home/video-ibadah';
import { LatestPost } from '@/components/home/latest-post';
import { CallToAction } from '@/components/home/cta';
import { Footer } from '@/components/footer';

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
