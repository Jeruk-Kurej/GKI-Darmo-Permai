import type { ReactNode } from 'react';

type MediaThumbnailProps = {
    caption: ReactNode;
    image?: string;
    playable?: boolean;
};

export function MediaThumbnail({
    caption,
    image,
    playable = false,
}: MediaThumbnailProps) {
    return (
        <div className="group relative aspect-[385/249] w-full overflow-hidden bg-[linear-gradient(to_bottom,#d9d9d9_28%,#2e2e2e)]">
            {image && (
                <>
                    <img
                        src={image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </>
            )}
            {playable && (
                <div className="absolute top-[31%] left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full bg-ink transition-transform duration-300 group-hover:scale-110 md:h-[83px] md:w-[83px]">
                    <svg
                        className="ml-1 h-10 w-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                </div>
            )}
            <p className="absolute bottom-3.5 left-2.5 font-display text-[23px] leading-7 font-bold text-white uppercase">
                {caption}
            </p>
        </div>
    );
}
