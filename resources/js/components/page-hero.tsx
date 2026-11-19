import { motion } from 'framer-motion';

type PageHeroProps = {
    eyebrow: string;
    title: string;
    image: string;
    tone?: 'light' | 'dark';
};

/**
 * Header of the inner public pages. The design has no overlay on these photos, so the
 * text colour follows the photo: light text on dark photos, dark text on light ones.
 */
export function PageHero({
    eyebrow,
    title,
    image,
    tone = 'light',
}: PageHeroProps) {
    return (
        <section
            className="relative flex min-h-[320px] w-full items-center bg-cover bg-center bg-no-repeat py-16 lg:h-[419px]"
            style={{ backgroundImage: `url('${image}')` }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`container-page ${tone === 'dark' ? 'text-ink' : 'text-white'}`}
            >
                <p className="type-eyebrow font-bold">{eyebrow}</p>
                <h1 className="mt-4 type-h2 lg:whitespace-nowrap">{title}</h1>
            </motion.div>
        </section>
    );
}
