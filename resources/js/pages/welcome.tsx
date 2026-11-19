import { Head } from '@inertiajs/react';
import { AcaraMendatang } from '@/components/home/acara-mendatang';
import { CallToAction } from '@/components/home/cta';
import { Hero } from '@/components/home/hero';
import { JadwalIbadah } from '@/components/home/jadwal-ibadah';
import { LatestPost } from '@/components/home/latest-post';
import { TentangKami } from '@/components/home/tentang-kami';
import { VideoIbadah } from '@/components/home/video-ibadah';
import { VisiKami } from '@/components/home/visi-kami';

export default function Welcome({ schedules }: { schedules: any[] }) {
    return (
        <>
            <Head title="Home" />

            <Hero />
            <JadwalIbadah schedules={schedules} />
            <TentangKami />
            <VisiKami />
            <AcaraMendatang />
            <VideoIbadah />
            <LatestPost />
            <CallToAction />
        </>
    );
}
