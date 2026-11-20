import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/button-link';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';

const cards = [
    { className: 'lg:h-[362px] lg:w-[290px]', delay: 0.2 },
    {
        className: 'hidden md:block lg:mt-[61px] lg:h-[429px] lg:w-[343px]',
        delay: 0.4,
    },
    { className: 'hidden lg:block lg:h-[362px] lg:w-[290px]', delay: 0.6 },
];

function CarouselArrow({ label, path }: { label: string; path: string }) {
    return (
        <button
            type="button"
            aria-label={label}
            className="shrink-0 text-brand transition-colors hover:text-brand-dark active:scale-95 lg:mt-[148px]"
        >
            <svg
                className="h-10 w-10 lg:h-[57px] lg:w-[57px]"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d={path} />
            </svg>
        </button>
    );
}

export function AcaraMendatang() {
    return (
        <section className="relative w-full overflow-hidden bg-white pt-16 pb-16 lg:pt-[83px] lg:pb-[100px]">
            <div className="pointer-events-none absolute top-0 left-0 h-full w-[30%]">
                <BrandDecoLeft className="-translate-x-20 -translate-y-20 scale-125 opacity-70" />
            </div>
            <div className="pointer-events-none absolute top-0 right-0 flex h-full w-[30%] items-end justify-end pb-10">
                <BrandDecoRight className="translate-x-20 translate-y-10 scale-110 opacity-70" />
            </div>

            <div className="relative z-10 container-page flex flex-col items-center text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 type-eyebrow text-ink"
                >
                    Ikuti berbagai kegiatan dan pelayanan yang akan segera
                    dilaksanakan.
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="type-h2 text-ink"
                >
                    Acara Mendatang
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative z-20 mt-[39px]"
                >
                    <ButtonLink href="/kegiatan">Lihat Semua</ButtonLink>
                </motion.div>

                <div className="mt-6 flex w-full items-center justify-center gap-2 lg:-mt-7 lg:items-start lg:gap-[3px]">
                    <CarouselArrow
                        label="Acara sebelumnya"
                        path="M15 19l-7-7 7-7"
                    />

                    <div className="flex flex-1 items-start justify-center gap-6 lg:flex-none lg:gap-[47px]">
                        {cards.map((card) => (
                            <motion.div
                                key={card.delay}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: card.delay,
                                }}
                                className={`aspect-[290/362] w-full max-w-[290px] cursor-pointer bg-[#d9d9d9] transition-transform hover:-translate-y-2 lg:aspect-auto lg:max-w-none ${card.className}`}
                            />
                        ))}
                    </div>

                    <CarouselArrow
                        label="Acara selanjutnya"
                        path="M9 5l7 7-7 7"
                    />
                </div>
            </div>
        </section>
    );
}
