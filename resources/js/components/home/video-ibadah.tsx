import { motion } from 'framer-motion';
import { MediaThumbnail } from '@/components/media/media-thumbnail';

const videos = [1, 2, 3];

function VideoArrow({
    label,
    path,
    className,
}: {
    label: string;
    path: string;
    className: string;
}) {
    return (
        <button
            type="button"
            aria-label={label}
            className={`absolute top-1/2 z-20 hidden -translate-y-1/2 text-white transition-colors hover:text-gray-300 active:scale-90 md:block ${className}`}
        >
            <svg
                className="h-12 w-12 lg:h-[57px] lg:w-[57px]"
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

export function VideoIbadah() {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat pt-10 pb-14 lg:pt-[41px] lg:pb-[66px]"
            style={{
                backgroundImage: `url('/images/home/video-terbaru-bg.webp')`,
            }}
        >
            <div className="relative z-10 mx-auto w-full max-w-[calc(1265px+3rem)] px-6">
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ duration: 0.6 }}
                        className="mb-[19px] type-eyebrow text-white"
                    >
                        Saksikan kembali firman Tuhan dan pujian penyembahan
                        dari ibadah minggu terakhir.
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.8 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="type-h2 text-white"
                    >
                        Video Ibadah Terbaru
                    </motion.h2>
                </div>

                <div className="relative mt-10 lg:mt-[63px]">
                    <VideoArrow
                        label="Video sebelumnya"
                        path="M15 19l-7-7 7-7"
                        className="-left-12 lg:-left-[57px]"
                    />

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[55px]">
                        {videos.map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.2 + index * 0.15,
                                }}
                                className={`w-full cursor-pointer ${
                                    index === 1
                                        ? 'hidden md:block'
                                        : index === 2
                                          ? 'hidden lg:block'
                                          : ''
                                }`}
                            >
                                <MediaThumbnail
                                    playable
                                    caption={
                                        <>
                                            Lorem ipsum
                                            <br />
                                            Dolor sit amet
                                        </>
                                    }
                                />
                            </motion.div>
                        ))}
                    </div>

                    <VideoArrow
                        label="Video selanjutnya"
                        path="M9 5l7 7-7 7"
                        className="-right-12 lg:-right-[57px]"
                    />
                </div>
            </div>
        </section>
    );
}
