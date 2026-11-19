import { Link } from '@inertiajs/react';

const NAVBAR_HEIGHT = 80;

const scrollToJadwal = () => {
    const element = document.getElementById('jadwal-ibadah');

    if (!element) {
        return;
    }

    const targetY =
        element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();
    const duration = 1000;

    const step = (currentTime: number) => {
        const progress = (currentTime - startTime) / duration;

        if (progress < 1) {
            window.scrollTo(
                0,
                startY + difference * (1 - Math.pow(1 - progress, 3)),
            );
            requestAnimationFrame(step);
        } else {
            window.scrollTo(0, targetY);
        }
    };

    requestAnimationFrame(step);
};

export function Hero() {
    return (
        <section
            className="relative flex min-h-[560px] w-full items-center bg-cover bg-center bg-no-repeat py-16 lg:h-[663px]"
            style={{ backgroundImage: `url('/images/home/home-header.webp')` }}
        >
            <div className="absolute inset-0 bg-black/[0.11]" />

            <div className="relative z-10 container-page text-white">
                <p className="type-eyebrow font-bold">Selamat Datang</p>

                <h1 className="mt-4 type-h1">
                    <span className="block">Shalom</span>
                    <span className="block">Keluarga Damai!</span>
                </h1>

                <div className="mt-3.5 flex w-full max-w-[281px] flex-col gap-3.5">
                    <button
                        type="button"
                        onClick={scrollToJadwal}
                        className="flex h-[55px] items-center justify-center rounded-2xl bg-brand type-button text-white transition-colors hover:bg-brand-dark"
                    >
                        Lihat Jadwal Ibadah
                    </button>
                    <Link
                        href="/ibadah#umum"
                        className="flex h-[55px] items-center justify-center rounded-2xl border-4 border-brand type-button font-bold text-white transition-colors hover:bg-brand/20"
                    >
                        Tonton Live Streaming
                    </Link>
                </div>

                <div className="mt-4 flex items-start gap-3">
                    <span className="mt-3 h-0.5 w-[18px] shrink-0 bg-[#d1db6a]" />
                    <p className="max-w-[332px] type-paragraph">
                        Tempat bertumbuh dalam iman, membangun komunitas, dan
                        mengalami kasih Tuhan bersama.
                    </p>
                </div>
            </div>
        </section>
    );
}
