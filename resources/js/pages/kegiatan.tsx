import { Head } from '@inertiajs/react';
import { UpcomingEvents } from '@/components/kegiatan/upcoming-events';
import { PageHero } from '@/components/page-hero';

export default function Kegiatan({ events }: { events?: any[] }) {
    return (
        <>
            <Head title="Kegiatan" />

            <PageHero
                eyebrow="Kegiatan"
                title="Bertumbuh dan melayani bersama"
                image="/images/kegiatan/kegiatan-header.webp"
            />
            <UpcomingEvents events={events} />
        </>
    );
}
