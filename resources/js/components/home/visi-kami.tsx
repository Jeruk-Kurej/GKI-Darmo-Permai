import { ArrowLink } from '@/components/arrow-link';

export function VisiKami() {
    return (
        <section
            className="relative flex w-full flex-col items-center bg-cover bg-center bg-no-repeat py-14 lg:pt-[99px] lg:pb-[42px]"
            style={{ backgroundImage: `url('/images/home/vision-bg.webp')` }}
        >
            <div className="absolute inset-0 bg-black/[0.11]" />

            <div className="relative z-10 mx-auto flex w-full max-w-[calc(1085px+3rem)] flex-col items-center px-6 text-center">
                <p className="mb-5 type-eyebrow text-white">Visi Kami</p>

                <h2 className="mb-3 max-w-[1085px] type-h2 text-white">
                    “Mewujudkan keluarga ‘Damai’ yang melayani.”
                </h2>

                <p className="mb-[42px] max-w-[740px] type-lead text-white">
                    Mewujudkan keluarga Kristen yang berintegritas, mandiri dan
                    produktif, dalam keutuhan jemaat yang saling menopang dan
                    melayani.
                </p>

                <ArrowLink
                    href="/tentang-kami#visi-misi"
                    className="text-white hover:text-gray-300"
                >
                    Lihat Semua
                </ArrowLink>
            </div>
        </section>
    );
}
