import React from 'react';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';
import { UMUM_DATA, PROUD_DATA } from './ibadah-data';
import { IbadahGrid } from './ibadah-grid';
import { IbadahAnak } from './ibadah-anak';

export { IbadahTabs } from './ibadah-tabs';

export function IbadahContent() {
    return (
        <section className="relative w-full pb-32 bg-white z-10 overflow-hidden select-none">
            {/* Decorative Backgrounds */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <BrandDecoLeft className="absolute top-20 -left-64 scale-150" />
                <BrandDecoRight className="absolute bottom-40 -right-64 scale-150" />
                <BrandDecoLeft className="absolute top-1/2 -left-80 scale-110 opacity-30" />
                <BrandDecoRight className="absolute top-[30%] -right-80 scale-125 opacity-30" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-24 space-y-40">
                <div id="umum"><IbadahGrid data={UMUM_DATA} type="IBADAH UMUM" /></div>
                <div id="proud"><IbadahGrid data={PROUD_DATA} type="PROUD" /></div>
                <div id="anak"><IbadahAnak /></div>
            </div>
        </section>
    );
}
