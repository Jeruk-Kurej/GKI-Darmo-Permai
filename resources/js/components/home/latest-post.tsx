import { motion } from 'framer-motion';
import { ArrowLink } from '@/components/arrow-link';
import { BrandDecoLeft, BrandDecoRight } from '@/components/ui/shapes';

const posts = [1, 2, 3, 4].map((id) => ({
    id,
    image: '/images/kegiatan/kebaktian-thumbnail.webp',
    day: '20',
    month: 'Juli',
    category: 'Kebaktian',
    title: 'Camp Jemaat GKI Damai 2026',
    author: 'Oleh Albert Einstein',
    time: 'MINGGU | 07:00 WIB',
}));

export function LatestPost() {
    return (
        <section className="relative w-full overflow-hidden bg-white pt-16 pb-16 lg:pt-[70px] lg:pb-[70px]">
            <div className="pointer-events-none absolute top-0 left-0 h-full w-[30%]">
                <BrandDecoLeft className="-translate-x-20 -translate-y-10 scale-125 opacity-70" />
            </div>
            <div className="pointer-events-none absolute top-0 right-0 flex h-full w-[30%] items-end justify-end pb-20">
                <BrandDecoRight className="translate-x-10 translate-y-20 scale-110 opacity-70" />
            </div>

            <div className="relative z-10 container-page flex flex-col items-center">
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ duration: 0.6 }}
                        className="mb-4 type-eyebrow text-ink"
                    >
                        Read our Blog
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="type-h2 text-ink"
                    >
                        Latest Post
                    </motion.h2>
                </div>

                <div className="mt-12 grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className="group relative flex h-[367px] w-full max-w-[302px] cursor-pointer flex-col bg-cream transition-transform duration-300 hover:-translate-y-2"
                        >
                            <div className="relative h-[170px] w-full overflow-hidden">
                                <img
                                    src={post.image}
                                    alt=""
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-[5px] right-[15px] text-right font-display leading-none text-ink uppercase">
                                    <span className="block text-xl font-bold tracking-[-0.01em]">
                                        {post.day}
                                    </span>
                                    <span className="block text-[15px]">
                                        {post.month}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col px-7 pt-[11px] font-display">
                                <p className="inline-block self-start bg-[linear-gradient(164.6deg,#5d6c4c_53.8%,#86a661_62.6%)] bg-clip-text text-xl leading-none font-bold tracking-[0.08em] text-transparent uppercase">
                                    {post.category}
                                </p>
                                <h3 className="mt-2.5 text-2xl leading-7 font-bold tracking-[-0.01em] text-black uppercase">
                                    {post.title}
                                </h3>
                                <p className="mt-auto text-lg leading-none text-ink">
                                    {post.author}
                                </p>
                                <p className="mt-[3px] mb-[13px] text-base leading-6 text-ink">
                                    {post.time}
                                </p>
                            </div>

                            <span className="h-4 w-full bg-brand-dark" />
                        </motion.article>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-5 flex w-full justify-end"
                >
                    <ArrowLink
                        href="/e-warta#warta-list"
                        className="text-ink hover:text-brand"
                    >
                        Lihat Semua
                    </ArrowLink>
                </motion.div>
            </div>
        </section>
    );
}
