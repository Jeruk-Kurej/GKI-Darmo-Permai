import { Head } from '@inertiajs/react';
import { ContactContent } from '@/components/contact/contact-content';
import { ContactHero } from '@/components/contact/hero';

export default function ContactUs() {
    return (
        <>
            <Head title="Hubungi Kami" />

            <ContactHero />
            <ContactContent />
        </>
    );
}
