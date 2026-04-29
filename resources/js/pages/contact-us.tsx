import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactHero } from '@/components/contact/hero';
import { ContactContent } from '@/components/contact/contact-content';

export default function ContactUs() {
    return (
        <>
            <Head title="Hubungi Kami" />

            <div className="bg-[#f8f9fa] w-full overflow-x-hidden">
                <Navbar />
                
                <ContactHero />
                
                <ContactContent />

                <Footer />
            </div>
        </>
    );
}
