import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Check, Facebook, Youtube, Instagram } from 'lucide-react';
import { BrandDecoLeft, BrandDecoRight, DotsPattern } from '@/components/ui/shapes';

export function ContactContent() {
    return (
        <section className="relative w-full py-24 bg-[#fcfcfc] overflow-hidden">
            {/* Background Decorative Shapes - More Rich & Complete */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <BrandDecoLeft className="absolute top-0 left-0 opacity-40 scale-150 -translate-x-1/4 -translate-y-1/4" />
                <BrandDecoRight className="absolute bottom-0 right-0 opacity-40 scale-150 translate-x-1/4 translate-y-1/4" />
                
                {/* Dot patterns like in the screenshot */}
                <div className="absolute top-20 right-1/4 opacity-25">
                    <DotsPattern size="w-72 h-72" dotSize="2.5px" spacing="18px" rotated={true} />
                </div>
                <div className="absolute bottom-1/4 left-1/4 opacity-25">
                    <DotsPattern size="w-64 h-64" dotSize="2.5px" spacing="16px" rotated={true} />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    
                    {/* Left side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <h2 className="text-xl font-bold text-[#1a1a1a] mb-8">
                            Contact Form:
                        </h2>
                        
                        <div className="space-y-5">
                            <div className="shadow-[0_4px_12px_rgba(0,0,0,0.04)] rounded-sm">
                                <input 
                                    type="text" 
                                    placeholder="Nama Lengkap" 
                                    className="w-full px-6 py-4 bg-white border-none rounded-sm focus:ring-1 focus:ring-[#7a9d54] outline-none text-sm placeholder:text-gray-400"
                                />
                            </div>
                            <div className="shadow-[0_4px_12px_rgba(0,0,0,0.04)] rounded-sm">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="w-full px-6 py-4 bg-white border-none rounded-sm focus:ring-1 focus:ring-[#7a9d54] outline-none text-sm placeholder:text-gray-400"
                                />
                            </div>
                            <div className="shadow-[0_4px_12px_rgba(0,0,0,0.04)] rounded-sm">
                                <input 
                                    type="text" 
                                    placeholder="Topik Terkait" 
                                    className="w-full px-6 py-4 bg-white border-none rounded-sm focus:ring-1 focus:ring-[#7a9d54] outline-none text-sm placeholder:text-gray-400"
                                />
                            </div>
                            <div className="shadow-[0_4px_12px_rgba(0,0,0,0.04)] rounded-sm">
                                <textarea 
                                    placeholder="Pesan" 
                                    rows={6}
                                    className="w-full px-6 py-4 bg-white border-none rounded-sm focus:ring-1 focus:ring-[#7a9d54] outline-none text-sm resize-none placeholder:text-gray-400"
                                ></textarea>
                            </div>
                            
                            <button className="w-full py-4 bg-[#7a9d54] hover:bg-[#688945] text-white font-bold text-sm tracking-wide rounded-sm shadow-lg transition-all active:scale-[0.98]">
                                Kirim Pesan
                            </button>
                        </div>
                    </motion.div>

                    {/* Right side: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 pt-8 lg:pl-10"
                    >
                        <div className="max-w-[554px] min-h-[313px] flex flex-col justify-between">
                            <div className="space-y-10">
                                <a 
                                    href="tel:0317321336"
                                    className="flex gap-5 items-center group transition-all"
                                >
                                    <div className="shrink-0">
                                        <Phone className="w-8 h-8 text-black fill-black group-hover:scale-110 transition-transform" />
                                    </div>
                                    <p className="text-[#1a1a1a] font-bold text-xl leading-tight flex-1 group-hover:text-[#7a9d54] transition-colors">(031) 732-1336</p>
                                </a>
                                <a 
                                    href="https://wa.me/6281216716689" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex gap-5 items-center group transition-all"
                                >
                                    <div className="shrink-0">
                                        <svg className="w-8 h-8 fill-black group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                    </div>
                                    <p className="text-[#1a1a1a] font-bold text-xl leading-tight flex-1 group-hover:text-[#7a9d54] transition-colors">+62 812-1671-6689</p>
                                </a>
                                <a 
                                    href="mailto:info@gkidamai.org"
                                    className="flex gap-5 items-center group transition-all"
                                >
                                    <div className="shrink-0">
                                        <Mail className="w-8 h-8 fill-black text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                                    </div>
                                    <p className="text-[#1a1a1a] font-bold text-xl leading-tight flex-1 group-hover:text-[#7a9d54] transition-colors">info@gkidamai.org</p>
                                </a>
                                <div className="flex gap-5 items-start">
                                    <div className="mt-1 shrink-0">
                                        <Check className="w-10 h-10 text-black stroke-[3px]" />
                                    </div>
                                    <div className="text-[#1a1a1a]">
                                        <p className="font-bold text-xl leading-none">258.350.712.4 BCA</p>
                                        <p className="text-sm text-gray-500 mt-1.5">a.n GKI Darmo Permai</p>
                                    </div>
                                </div>
                                <a 
                                    href="https://maps.app.goo.gl/v1UxFzrwqgzd3X1g9" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex gap-5 items-start group transition-all"
                                >
                                    <div className="mt-1 shrink-0">
                                        <MapPin className="w-8 h-8 fill-black text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                                    </div>
                                    <div className="text-[#1a1a1a]">
                                        <p className="font-bold text-lg leading-relaxed group-hover:text-[#7a9d54] transition-colors">Jl. Raya Pradah Indah No.9, Lontar</p>
                                        <p className="text-sm text-gray-500 mt-0.5">Kec. Sambikerep Kota SBY, Jawa Timur 60216</p>
                                    </div>
                                </a>
                            </div>

                            {/* Social Media */}
                            <div className="mt-16 pt-8">
                                <p className="text-xs font-bold text-gray-400 mb-6">Temukan Kami di</p>
                                <div className="flex gap-10">
                                    <a href="#" className="text-black hover:text-[#7a9d54] transition-all"><Facebook size={32} fill="black" stroke="none" /></a>
                                    <a href="#" className="text-black hover:text-[#7a9d54] transition-all"><Youtube size={32} fill="black" text-white strokeWidth={1} className="text-white" /></a>
                                    <a href="#" className="text-black hover:text-[#7a9d54] transition-all"><Instagram size={32} /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function InfoRow({ icon, text }: { icon: React.ReactNode, text: string }) {
    return (
        <div className="flex gap-5 items-center">
            <div className="shrink-0">{icon}</div>
            <p className="text-[#1a1a1a] font-bold text-xl leading-tight flex-1">{text}</p>
        </div>
    );
}


