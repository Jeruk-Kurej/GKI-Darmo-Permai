import { Head } from '@inertiajs/react';
import { ContactContent } from '@/components/contact/contact-content';
import { PageHero } from '@/components/page-hero';

export default function ContactUs() {
    return (
        <>
            <Head title="Hubungi Kami" />

            <PageHero
                eyebrow="Hubungi Kami"
                title="Mari terhubung dan bertumbuh bersama"
                image="/images/contact-us/hubungi-kami-header.webp"
            />
            <ContactContent />
        </>
    );
}
