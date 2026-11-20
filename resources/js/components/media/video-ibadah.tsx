import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { MediaHeading } from '@/components/media/media-heading';
import { MediaThumbnail } from '@/components/media/media-thumbnail';
import { MonthFilter } from '@/components/media/month-filter';
import { initialVideos } from './media-data';

const VISIBLE_COUNT = 3;

type VideoItem = {
    id: number | string;
    month: string;
    title: string;
    subtitle: string;
    image?: string;
    youtube_url?: string | null;
};

function SlideArrow({
    label,
    direction,
    onClick,
}: {
    label: string;
    direction: 'prev' | 'next';
    onClick: () => void;
}) {
    const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            className="shrink-0 text-brand transition-colors hover:text-brand-dark active:scale-95"
        >
            <Icon className="h-10 w-10 lg:h-[57px] lg:w-[57px]" strokeWidth={2} />
        </button>
    );
}

export function VideoIbadahSection({ mediaItems }: { mediaItems?: any[] }) {
    let displayVideos: VideoItem[] = initialVideos;

    if (mediaItems && mediaItems.length > 0) {
        const dbVideos = mediaItems.filter((m) => m.type === 'video').map((m) => ({
            id: m.id,
            month: m.month,
            title: m.title,
            subtitle: m.subtitle,
            image: m.image_path,
            youtube_url: m.youtube_url,
        }));

        if (dbVideos.length > 0) {
            displayVideos = dbVideos;
        }
    }

    const uniqueMonths = [...new Set(displayVideos.map((v) => v.month))];
    const [selectedMonth, setSelectedMonth] = useState<string>(uniqueMonths[0] || 'JANUARI 2026');
    const [slideIndex, setSlideIndex] = useState(0);

    const filteredVideos = displayVideos.filter((v) => v.month === selectedMonth);
    const canSlide = filteredVideos.length > VISIBLE_COUNT;
    const lastStart = filteredVideos.length - VISIBLE_COUNT;
    const visibleVideos = filteredVideos.slice(slideIndex, slideIndex + VISIBLE_COUNT);

    const handlePrev = () => {
        setSlideIndex((prev) => (prev > 0 ? prev - 1 : lastStart));
    };

    const handleNext = () => {
        setSlideIndex((prev) => (prev < lastStart ? prev + 1 : 0));
    };

    return (
        <section id="video-ibadah" className="relative bg-white py-16">
            <div className="container-page flex flex-col items-center">
                <MediaHeading eyebrow="REKAMAN IBADAH" title="VIDEO IBADAH" />

                <MonthFilter
                    value={selectedMonth}
                    options={uniqueMonths}
                    onValueChange={(val) => {
                        setSelectedMonth(val);
                        setSlideIndex(0);
                    }}
                />

                <div className="flex w-full items-center gap-4 lg:gap-[47px]">
                    {canSlide && <SlideArrow label="Video sebelumnya" direction="prev" onClick={handlePrev} />}

                    <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3 lg:gap-[55px]">
                        {visibleVideos.map((video, idx) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                onClick={() => video.youtube_url && window.open(video.youtube_url, '_blank')}
                                className="cursor-pointer"
                            >
                                <MediaThumbnail
                                    image={video.image}
                                    playable
                                    caption={
                                        <>
                                            {video.title}
                                            <br />
                                            {video.subtitle}
                                        </>
                                    }
                                />
                            </motion.div>
                        ))}
                    </div>

                    {canSlide && <SlideArrow label="Video selanjutnya" direction="next" onClick={handleNext} />}
                </div>
            </div>
        </section>
    );
}
