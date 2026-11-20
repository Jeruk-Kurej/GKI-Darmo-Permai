import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/button-link';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';

export function TentangKami() {
    return (
        <section className="relative w-full overflow-hidden bg-white pt-14 pb-16 lg:pb-[130px]">
            <div className="pointer-events-none absolute top-0 left-0 h-full w-[30%]">
                <BrandDecoLeft className="-translate-x-32 -translate-y-20 scale-150 opacity-50" />
            </div>
            <div className="pointer-events-none absolute top-0 right-0 flex h-full w-[30%] items-end justify-end pb-10">
                <BrandDecoRight className="translate-x-32 translate-y-32 scale-150 opacity-50" />
            </div>

            <div className="relative z-10 container-page">
                <div className="flex flex-col items-center text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4 type-eyebrow text-ink"
                    >
                        Gereja yang rindu menjadi berkat bagi kota dan generasi.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <h2 className="type-h2 text-ink">Tentang Kami</h2>
                        <span className="absolute -bottom-[5px] left-0 h-2 w-[170px] max-w-[57%] bg-brand" />
                    </motion.div>
                </div>

                <div className="mt-12 grid grid-cols-1 items-start gap-16 lg:mt-[31px] lg:grid-cols-[1fr_491px] lg:gap-0 lg:pr-[71px] lg:pl-[120px]">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 pt-16 pl-8 lg:order-1 lg:pt-[102px] lg:pl-[52px]"
                    >
                        <img
                            src="/assets/about-us/quote.svg"
                            alt=""
                            className="pointer-events-none absolute top-0 left-0 w-28 lg:w-[213px]"
                        />

                        <div className="relative font-display text-ink uppercase">
                            <p className="text-2xl leading-none lg:text-[34px]">
                                When you are after
                            </p>
                            <p className="text-[44px] leading-none font-bold lg:text-[62px]">
                                God’s will,
                            </p>
                            <p className="mt-2 text-2xl leading-none lg:text-[34px]">
                                He will be after
                            </p>
                            <div className="mt-1.5 flex items-center gap-2.5">
                                <p className="text-2xl leading-none lg:text-[34px]">
                                    Your own
                                </p>
                                <span className="h-5 w-24 bg-brand lg:h-[26px] lg:w-[143px]" />
                            </div>
                            <p className="mt-1 text-[56px] leading-none font-bold text-brand lg:text-[78px]">
                                Purpose
                            </p>
                        </div>

                        <p className="mt-1 font-[Tangerine,cursive] text-[40px] leading-none font-bold text-ink">
                            Pst. Emmanuel Oarhe
                        </p>

                        <ButtonLink
                            href="/tentang-kami"
                            size="wide"
                            className="mt-[38px]"
                        >
                            Lihat Selengkapnya
                        </ButtonLink>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-1 mx-auto aspect-square w-full max-w-[491px] lg:order-2"
                    >
                        <div className="absolute top-[4.9%] right-0 aspect-square w-[87%] bg-brand" />
                        <img
                            src="/images/home/about-us-people.webp"
                            alt="Pdt. Emmanuel Oarhe"
                            className="absolute bottom-0 left-0 aspect-square w-[87%] object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
