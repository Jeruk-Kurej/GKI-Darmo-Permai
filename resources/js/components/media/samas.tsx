import { motion } from 'framer-motion';
import { useState } from 'react';
import { MediaHeading } from '@/components/media/media-heading';
import { MonthFilter } from '@/components/media/month-filter';
import { SpotifyIcon, YoutubeIcon } from '@/components/media/platform-icons';
import { initialSamas } from './media-data';

export function SamasSection({ mediaItems }: { mediaItems?: any[] }) {
    let displaySamas = initialSamas;

    if (mediaItems && mediaItems.length > 0) {
        const dbSamas = mediaItems
            .filter((m) => m.type === 'samas')
            .map((m) => ({
                id: m.id,
                month: m.month,
                title: m.title,
                date: m.subtitle || m.month,
                youtube: m.youtube_url,
                spotify: m.spotify_url,
                image: m.image_path,
            }));

        if (dbSamas.length > 0) {
            displaySamas = dbSamas;
        }
    }

    const uniqueMonths = [...new Set(displaySamas.map((s) => s.month))];
    const [selectedMonth, setSelectedMonth] = useState<string>(
        uniqueMonths[0] || 'JANUARI 2026',
    );

    const filteredSamas = displaySamas.filter((s) => s.month === selectedMonth);

    return (
        <section id="samas" className="relative bg-white py-16">
            <div className="container-page flex flex-col items-center">
                <MediaHeading
                    eyebrow="RENUNGAN SAPAAN DAMAI SEJAHTERA"
                    title="SAMAS"
                />

                <MonthFilter
                    value={selectedMonth}
                    options={uniqueMonths}
                    onValueChange={setSelectedMonth}
                />

                <div className="grid w-full grid-cols-1 gap-x-[25px] gap-y-9 md:grid-cols-2">
                    {filteredSamas.map((samas, idx) => (
                        <motion.article
                            key={samas.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="flex items-center justify-between gap-3 bg-brand-dark p-4 text-white select-none md:gap-4 md:p-5"
                        >
                            <div className="flex min-w-0 items-center gap-5">
                                <div className="size-16 shrink-0 overflow-hidden bg-[#d9d9d9] md:size-[87px]">
                                    <img
                                        src={samas.image}
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="flex min-w-0 flex-col text-left">
                                    <h3 className="font-display text-lg leading-6 font-bold uppercase md:text-2xl md:leading-7">
                                        {samas.title}
                                    </h3>
                                    <span className="font-display text-sm uppercase md:text-base">
                                        {samas.date}
                                    </span>
                                </div>
                            </div>

                            <div className="flex shrink-0 items-center gap-3">
                                {samas.youtube && (
                                    <a
                                        href={samas.youtube}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="YouTube"
                                        className="transition-opacity hover:opacity-80"
                                    >
                                        <YoutubeIcon className="h-6 w-6 md:h-8 md:w-8" />
                                    </a>
                                )}
                                {samas.spotify && (
                                    <a
                                        href={samas.spotify}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Spotify"
                                        className="transition-opacity hover:opacity-80"
                                    >
                                        <SpotifyIcon className="h-6 w-6 md:h-8 md:w-8" />
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
