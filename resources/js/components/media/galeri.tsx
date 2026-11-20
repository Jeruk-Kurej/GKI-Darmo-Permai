import { motion } from 'framer-motion';
import { useState } from 'react';
import { MediaHeading } from '@/components/media/media-heading';
import { MediaThumbnail } from '@/components/media/media-thumbnail';
import { MonthFilter } from '@/components/media/month-filter';
import { initialGallery } from './media-data';

export function GaleriSection({ mediaItems }: { mediaItems?: any[] }) {
    let displayGallery = initialGallery;

    if (mediaItems && mediaItems.length > 0) {
        const dbGallery = mediaItems.filter((m) => m.type === 'gallery').map((m) => ({
            id: m.id,
            month: m.month,
            title: m.title,
            subtitle: m.subtitle,
            image: m.image_path,
        }));

        if (dbGallery.length > 0) {
            displayGallery = dbGallery;
        }
    }

    const uniqueMonths = [...new Set(displayGallery.map((g) => g.month))];
    const [selectedMonth, setSelectedMonth] = useState<string>(uniqueMonths[0] || 'JANUARI 2026');

    const filteredGallery = displayGallery.filter((g) => g.month === selectedMonth);

    return (
        <section id="galeri" className="relative bg-white py-16">
            <div className="container-page flex flex-col items-center">
                <MediaHeading eyebrow="DOKUMENTASI KEGIATAN" title="GALERI" />

                <MonthFilter value={selectedMonth} options={uniqueMonths} onValueChange={setSelectedMonth} />

                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-[55px]">
                    {filteredGallery.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            className="cursor-pointer"
                        >
                            <MediaThumbnail
                                image={item.image}
                                caption={
                                    <>
                                        {item.title}
                                        <br />
                                        {item.subtitle}
                                    </>
                                }
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
