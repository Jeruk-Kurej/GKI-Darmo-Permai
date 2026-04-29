import React from 'react';
import { Phone, Mail, CheckCircle2, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full bg-[#6a8a56] py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
                
                {/* Kolom 1: Logo & Info Kontak */}
                <div className="flex flex-col text-white lg:col-span-2 pr-0 lg:pr-8">
                    <div className="flex items-center gap-3 mb-6">
                        <img src="/images/home/logo-only.png" alt="GKI Logo" className="w-10 h-10 object-contain" />
                        <span className="font-bold tracking-widest text-sm">GKI DARMO PERMAI</span>
                    </div>
                    
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-6 opacity-90">
                        © COPYRIGHT GKI DARMO PERMAI 2026
                    </p>
                    
                    <ul className="space-y-4 text-xs font-medium opacity-90">
                        <li className="flex items-center gap-3">
                            <Phone size={16} />
                            <span>(031) 732-1336</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <a href="https://wa.me/6281216716689" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                <span>+62 812-1671-6689</span>
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={16} />
                            <span>info@gkidamai.org</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="mt-0.5" />
                            <div>
                                <span className="block font-bold">258.350.712.4 BCA</span>
                                <span className="block text-[10px] opacity-80">a.n GKI Darmo Permai</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                            <span className="leading-relaxed">
                                Jl. Raya Pradah Indah No.9, Lontar<br/>
                                <span className="text-[10px] opacity-80">Kec. Sambikerep Kota SBY, Jawa Timur 60216</span>
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Kolom 2: Quicklinks */}
                <div className="flex flex-col text-white lg:pl-4">
                    <h4 className="font-bold mb-6 tracking-wide">Quicklinks</h4>
                    <ul className="space-y-4 text-xs font-semibold tracking-widest opacity-80">
                        <li><a href="/tentang-kami" className="hover:text-gray-200 transition-colors">TENTANG KAMI</a></li>
                        <li><a href="/ibadah" className="hover:text-gray-200 transition-colors">IBADAH</a></li>
                        <li><a href="/kegiatan" className="hover:text-gray-200 transition-colors">KEGIATAN</a></li>
                        <li><a href="/media" className="hover:text-gray-200 transition-colors">MEDIA</a></li>
                        <li><a href="/e-warta" className="hover:text-gray-200 transition-colors">E-WARTA</a></li>
                    </ul>
                </div>

                {/* Kolom 3: Connect */}
                <div className="flex flex-col text-white">
                    <h4 className="font-bold mb-6 tracking-wide">Connect</h4>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform opacity-90 hover:opacity-100">
                            <Facebook size={20} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform opacity-90 hover:opacity-100">
                            <Youtube size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform opacity-90 hover:opacity-100">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Kolom 4: Map */}
                <div className="flex flex-col w-full h-full min-h-[250px] lg:col-span-2">
                    <div className="w-full h-full bg-gray-200 rounded-xl overflow-hidden shadow-inner">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.646618710415!2d112.67660367499988!3d-7.280988492726266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc3769bb781d%3A0xf2f1673345b7c44b!2sGKI%20Darmo%20Permai!5e0!3m2!1sen!2sid!4v1777456569467!5m2!1sen!2sid" 
                            className="w-full h-full min-h-[250px]"
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

            </div>
        </footer>
    );
}
