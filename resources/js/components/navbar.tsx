import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export function Navbar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const navLinks = [
        { name: 'Tentang Kami', href: '/tentang-kami' },
        { name: 'Ibadah', href: '/ibadah' },
        { name: 'Kegiatan', href: '/kegiatan' },
        { name: 'Media', href: '/media' },
        { name: 'E-Warta', href: '/e-warta' },
    ];

    const { url } = usePage();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav 
                className={`w-full px-6 transition-all duration-500 fixed top-0 z-[60] ${
                    scrolled 
                        ? 'py-3 bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200' 
                        : 'py-5 bg-white border-b border-gray-200'
                }`}
            >
                <div className="mx-auto max-w-7xl flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <img 
                                src="/images/home/logo.png" 
                                alt="Logo GKI" 
                                className={`transition-all duration-500 object-contain ${scrolled ? 'h-10' : 'h-12'}`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = url.startsWith(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-[15px] font-semibold transition-colors relative py-2 cursor-pointer ${
                                        isActive ? 'text-[#7a9d54]' : 'text-gray-700 hover:text-[#7a9d54]'
                                    }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#7a9d54] rounded-full" />
                                    )}
                                </Link>
                            );
                        })}

                        <Link href="/hubungi-kami" className="cursor-pointer">
                            <Button className={`transition-all duration-300 bg-[#7a9d54] hover:bg-[#688945] text-white rounded-md font-bold shadow-lg shadow-[#7a9d54]/20 cursor-pointer ${
                                scrolled ? 'px-5 py-4 text-sm' : 'px-6 py-5'
                            }`}>
                                Hubungi Kami
                            </Button>
                        </Link>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-800 hover:text-[#7a9d54] p-2 relative z-[70] transition-transform active:scale-90"
                        >
                            {isMenuOpen ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-xs bg-white z-[65] shadow-2xl flex flex-col pt-24 px-8 md:hidden"
                        >
                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link) => {
                                    const isActive = url.startsWith(link.href);
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`text-xl font-bold transition-colors ${
                                                isActive ? 'text-[#7a9d54]' : 'text-gray-800'
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                                <div className="pt-6 border-t border-gray-100">
                                    <Link href="/hubungi-kami" onClick={() => setIsMenuOpen(false)}>
                                        <Button className="w-full bg-[#7a9d54] hover:bg-[#688945] text-white py-6 rounded-xl font-bold text-lg">
                                            Hubungi Kami
                                        </Button>
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
