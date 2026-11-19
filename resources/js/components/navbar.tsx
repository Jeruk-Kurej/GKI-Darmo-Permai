import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navLinks = [
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Ibadah', href: '/ibadah' },
    { name: 'Kegiatan', href: '/kegiatan' },
    { name: 'Media', href: '/media' },
    { name: 'E-Warta', href: '/e-warta' },
];

export function Navbar() {
    const { url } = usePage();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }, [isMenuOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 z-[70] h-20 w-full bg-white transition-shadow duration-500 ${
                    scrolled ? 'shadow-md' : ''
                }`}
            >
                <div className="container-page flex h-full items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/images/home/logo.webp"
                            alt="GKI Darmo Permai"
                            className="h-11 w-auto xl:h-[61px]"
                        />
                    </Link>

                    <div className="hidden items-center gap-8 lg:flex xl:gap-13">
                        {navLinks.map((link) => {
                            const isActive = url.startsWith(link.href);

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative py-2 font-ui text-base transition-colors xl:text-xl ${
                                        isActive
                                            ? 'text-brand'
                                            : 'text-black hover:text-brand'
                                    }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-brand" />
                                    )}
                                </Link>
                            );
                        })}

                        <Link
                            href="/hubungi-kami"
                            className="flex h-11 items-center justify-center rounded-[15px] bg-brand px-5 font-ui text-base font-semibold text-white transition-colors hover:bg-brand-dark xl:h-[55px] xl:w-[175px] xl:px-0 xl:text-xl"
                        >
                            Hubungi Kami
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
                        aria-expanded={isMenuOpen}
                        className="p-2 text-ink transition-transform hover:text-brand active:scale-90 lg:hidden"
                    >
                        {isMenuOpen ? (
                            <svg
                                className="h-8 w-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-8 w-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm lg:hidden"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                type: 'spring',
                                damping: 25,
                                stiffness: 200,
                            }}
                            className="fixed top-0 right-0 bottom-0 z-[65] flex w-[80%] max-w-xs flex-col bg-white px-8 pt-24 shadow-2xl lg:hidden"
                        >
                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`font-ui text-xl transition-colors ${
                                            url.startsWith(link.href)
                                                ? 'text-brand'
                                                : 'text-ink'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="border-t border-gray-100 pt-6">
                                    <Link
                                        href="/hubungi-kami"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex h-[55px] w-full items-center justify-center rounded-[15px] bg-brand type-button text-white transition-colors hover:bg-brand-dark"
                                    >
                                        Hubungi Kami
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
