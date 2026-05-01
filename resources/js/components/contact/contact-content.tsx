import React from 'react';
import { BrandDecoLeft, BrandDecoRight, DotsPattern } from '@/components/ui/shapes';
import { ContactForm } from './contact-form';
import { ContactInfo } from './contact-info';

export function ContactContent() {
    return (
        <section className="relative w-full py-24 bg-[#fcfcfc] overflow-hidden select-none">
            {/* Background Decorative Shapes */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <BrandDecoLeft className="absolute top-0 left-0 opacity-40 scale-150 -translate-x-1/4 -translate-y-1/4" />
                <BrandDecoRight className="absolute bottom-0 right-0 opacity-40 scale-150 translate-x-1/4 translate-y-1/4" />
                
                {/* Dot patterns */}
                <div className="absolute top-20 right-1/4 opacity-25">
                    <DotsPattern size="w-72 h-72" dotSize="2.5px" spacing="18px" rotated={true} />
                </div>
                <div className="absolute bottom-1/4 left-1/4 opacity-25">
                    <DotsPattern size="w-64 h-64" dotSize="2.5px" spacing="16px" rotated={true} />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left side: Form */}
                    <ContactForm />

                    {/* Right side: Info */}
                    <ContactInfo />
                </div>
            </div>
        </section>
    );
}
