import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export function Navbar() {
    const navLinks = [
        { name: 'Tentang Kami', href: '/tentang-kami' },
        { name: 'Ibadah', href: '/ibadah' },
        { name: 'Kegiatan', href: '/kegiatan' },
        { name: 'Media', href: '/media' },
        { name: 'E-Warta', href: '/e-warta' },
    ];

    return (
        <nav className="w-full bg-white py-4 px-6 shadow-sm border-b border-gray-100">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
                {/* Logo Placeholder */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <img 
                            src="/images/home/logo.png" 
                            alt="Logo GKI" 
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[15px] font-medium text-gray-800 hover:text-black transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Button className="bg-[#7a9d54] hover:bg-[#688945] text-white px-6 py-5 rounded-md font-medium shadow-none">
                        Hubungi Kami
                    </Button>
                </div>
                
                {/* Mobile Menu Button Placeholder */}
                <div className="md:hidden flex items-center">
                    <button className="text-gray-800 hover:text-black">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
