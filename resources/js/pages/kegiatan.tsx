import { Head } from '@inertiajs/react';
import { KegiatanHero } from '@/components/kegiatan/hero';
import { UpcomingEvents } from '@/components/kegiatan/upcoming-events';

export default function Kegiatan({ events }: { events?: any[] }) {
    return (
        <>
            <Head title="Kegiatan" />

            <KegiatanHero />
            <UpcomingEvents events={events} />
        </>
    );
}
