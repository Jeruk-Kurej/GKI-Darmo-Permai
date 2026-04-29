import React from 'react';
import { Phone, Mail, CheckCircle2, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full bg-[#6a8a56] py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
                
                {/* Kolom 1: Logo & Info Kontak */}
                <div className="flex flex-col text-white lg:col-span-2 pr-0 lg:pr-8">
                    <div className="flex items-center gap-3 mb-6">
                        <img src="/images/logo-only.png" alt="GKI Logo" className="w-10 h-10 object-contain" />
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WA" className="w-4 h-4" />
                            <span>+62 812-1671-6689</span>
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
                        <li><a href="#" className="hover:text-gray-200 transition-colors">TENTANG KAMI</a></li>
                        <li><a href="#" className="hover:text-gray-200 transition-colors">IBADAH</a></li>
                        <li><a href="#" className="hover:text-gray-200 transition-colors">KEGIATAN</a></li>
                        <li><a href="#" className="hover:text-gray-200 transition-colors">MEDIA</a></li>
                        <li><a href="#" className="hover:text-gray-200 transition-colors">E-WARTA</a></li>
                    </ul>
                </div>

                {/* Kolom 3: Connect */}
                <div className="flex flex-col text-white">
                    <h4 className="font-bold mb-6 tracking-wide">Connect</h4>
                    <div className="flex gap-4">
                        <a href="#" className="hover:scale-110 transition-transform opacity-90 hover:opacity-100">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform opacity-90 hover:opacity-100">
                            <Youtube size={20} />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform opacity-90 hover:opacity-100">
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
