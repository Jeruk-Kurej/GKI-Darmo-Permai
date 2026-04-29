import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/pages/hero';
import { JadwalIbadah } from '@/components/pages/jadwal-ibadah';
import { TentangKami } from '@/components/pages/tentang-kami';
import { VisiKami } from '@/components/pages/visi-kami';
import { AcaraMendatang } from '@/components/pages/acara-mendatang';

export default function Welcome() {
    return (
        <>
            <Head title="Home" />

            <div className="bg-[#f8f9fa] w-full">
                
                {/* SCREEN 1: Navbar + Hero */}
                <div className="w-full h-screen flex flex-col">
                    <Navbar />
                    <Hero />
                </div>

                {/* SCREEN 2: Jadwal Ibadah + Tentang Kami */}
                <div className="w-full h-screen flex flex-col">
                    <JadwalIbadah />
                    <TentangKami />
                </div>
                
                {/* Lanjutan Section Bawah */}
                <VisiKami />
                <AcaraMendatang />
                
            </div>
        </>
    );
}
