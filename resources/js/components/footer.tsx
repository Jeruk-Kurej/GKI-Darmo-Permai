import { Link } from '@inertiajs/react';
import {
    Check,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Youtube,
} from 'lucide-react';

const quicklinks = [
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Ibadah', href: '/ibadah' },
    { name: 'Kegiatan', href: '/kegiatan' },
    { name: 'Media', href: '/media' },
    { name: 'E-Warta', href: '/e-warta' },
];

const socials = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/1DpRcGs16R/?mibextid=wwXIfr',
        Icon: Facebook,
    },
    {
        name: 'YouTube',
        href: 'https://youtube.com/@gkidarmopermai?si=IFpHFV7zllj6yshV',
        Icon: Youtube,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/gkidamai?igsh=MTEzM3UxbzVwZGNmMA==',
        Icon: Instagram,
    },
];

export function Footer() {
    return (
        <footer className="w-full bg-brand-dark pt-[35px] pb-12 font-display text-white">
            <div className="mx-auto grid w-full max-w-[calc(1110px+3rem)] grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-[398fr_162fr_222fr_328fr] lg:gap-0">
                <div className="flex flex-col">
                    <div className="flex items-center gap-[3px]">
                        <img
                            src="/images/home/logo-only.webp"
                            alt=""
                            className="h-[45px] w-12 object-contain"
                        />
                        <span className="font-wordmark text-sm font-bold uppercase [word-spacing:0.3em]">
                            GKI Darmo Permai
                        </span>
                    </div>

                    <p className="mt-[17px] text-xs leading-[1.2] font-bold uppercase">
                        © Copyright GKI Darmo Permai 2026
                    </p>

                    <ul className="mt-3 space-y-2 text-xs leading-[1.2] font-bold">
                        <li>
                            <a
                                href="tel:0317321336"
                                className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
                            >
                                <Phone size={18} />
                                <span>(031) 732-1336</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/6281216716689"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
                            >
                                <svg
                                    className="h-[18px] w-[18px] fill-current"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                <span>+62 812-1671-6689</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:info@gkidamai.org"
                                className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
                            >
                                <Mail size={18} />
                                <span>info@gkidamai.org</span>
                            </a>
                        </li>
                        <li className="flex items-start gap-1.5">
                            <Check
                                size={18}
                                className="shrink-0 stroke-[3px]"
                            />
                            <div>
                                <span className="block">258.350.712.4 BCA</span>
                                <span className="block text-[11px] font-normal">
                                    a.n GKI Darmo Permai
                                </span>
                            </div>
                        </li>
                        <li>
                            <a
                                href="https://maps.app.goo.gl/v1UxFzrwqgzd3X1g9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-1.5 transition-opacity hover:opacity-80"
                            >
                                <MapPin size={18} className="shrink-0" />
                                <span>
                                    <span className="block">
                                        Jl. Raya Pradah Indah No.9, Lontar
                                    </span>
                                    <span className="block text-[11px] font-normal">
                                        Kec. Sambikerep Kota SBY, Jawa Timur
                                        60216
                                    </span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="lg:pt-[45px]">
                    <h4 className="text-base leading-[1.2] font-bold">
                        Quicklinks
                    </h4>
                    <ul className="mt-[18px] space-y-[15px] text-xs leading-[1.2] text-mist uppercase">
                        {quicklinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="transition-colors hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:pt-[45px]">
                    <h4 className="text-base leading-[1.2] font-bold">
                        Connect
                    </h4>
                    <div className="mt-2.5 flex gap-[13px]">
                        {socials.map(({ name, href, Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={name}
                                className="transition-transform hover:scale-110"
                            >
                                <Icon size={23} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="h-[179px] w-full overflow-hidden rounded-[19px] bg-gray-200 md:col-span-2 lg:col-span-1 lg:mt-[42px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.646618710415!2d112.67660367499988!3d-7.280988492726266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc3769bb781d%3A0xf2f1673345b7c44b!2sGKI%20Darmo%20Permai!5e0!3m2!1sen!2sid!4v1777456569467!5m2!1sen!2sid"
                        title="Peta lokasi GKI Darmo Permai"
                        className="h-full w-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </footer>
    );
}
