import { motion } from 'framer-motion';
import { ButtonLink } from '@/components/button-link';

export function CallToAction() {
    return (
        <section
            className="relative flex w-full items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-20 lg:py-32"
            style={{ backgroundImage: `url('/images/home/cta-bg.webp')` }}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative z-10 w-full max-w-[768px] bg-white px-6 pt-10 pb-14 backdrop-blur-[20px] lg:h-[480px] lg:px-12 lg:pt-[72px] lg:pb-0"
            >
                <h2 className="max-w-[368px] type-h2 text-ink">
                    We want to serve the world around us
                </h2>
                <p className="mt-4 max-w-[302px] type-paragraph text-ink/78">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                </p>
                <ButtonLink href="/hubungi-kami" className="mt-8 lg:mt-[34px]">
                    Visit
                </ButtonLink>

                <svg
                    className="absolute top-[175px] left-[497px] hidden h-[149px] w-[198px] text-brand-light/80 lg:block"
                    viewBox="0 0 198 149"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path d="M141 5.5Q151 1 161 0.5Q171 0 176 2Q181 4 186 8.5Q191 13 194 19Q197 25 196.5 37Q196 49 193 54Q190 59 180.5 67.5Q171 76 169.5 80Q168 84 170.5 93Q173 102 185.5 114.5Q198 127 192 133Q186 139 181 143Q176 147 168.5 141Q161 135 147.5 120Q134 105 126.5 89.5Q119 74 117.5 58.5Q116 43 118 35Q120 27 125.5 18.5Q131 10 141 5.5ZM26 5Q34 2 46 2Q58 2 66.5 8.5Q75 15 77.5 20Q80 25 79.5 38Q79 51 65.5 66.5Q52 82 52 87.5Q52 93 54.5 98.5Q57 104 69 116Q81 128 75 134.5Q69 141 65 145Q61 149 51 141Q41 133 26.5 115.5Q12 98 7 86Q2 74 1 57Q0 40 1.5 34.5Q3 29 10.5 18.5Q18 8 26 5Z" />
                </svg>

                <span className="absolute bottom-0 left-0 h-4 w-full bg-brand-light" />
            </motion.div>
        </section>
    );
}
