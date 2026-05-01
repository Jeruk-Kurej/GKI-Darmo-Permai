import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { members } from './about-data';

export function AnggotaGereja() {
    return (
        <section className="relative w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
                
                {/* Header */}
                <div className="mb-16">
                    <h4 className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-500 mb-4">
                        CHURCH MEMBERS
                    </h4>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight uppercase">
                        ANGGOTA GEREJA
                    </h2>
                </div>

                {/* Grid Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {members.map((member, index) => (
                        <div 
                            key={index} 
                            className="bg-[#eef3d2] flex flex-col items-center justify-center py-12 px-6 rounded-sm shadow-sm hover:shadow-md transition-shadow group"
                        >
                            {/* Profile Image (Circular) */}
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[6px] border-white shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=7a9d54&color=fff&size=200`;
                                    }}
                                />
                            </div>

                            {/* Info */}
                            <h3 className="text-base md:text-lg font-black text-[#1a1a1a] mb-1">
                                {member.name}
                            </h3>
                            <p className="text-[11px] md:text-xs text-gray-500 mb-6 uppercase tracking-widest font-semibold">
                                {member.role}
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4 text-[#1a1a1a]">
                                <a href="#" className="hover:text-[#7a9d54] transition-colors p-1" aria-label="Facebook">
                                    <Facebook size={14} className="fill-current" />
                                </a>
                                <a href="#" className="hover:text-[#7a9d54] transition-colors p-1" aria-label="Twitter">
                                    <Twitter size={14} className="fill-current" />
                                </a>
                                <a href="#" className="hover:text-[#7a9d54] transition-colors p-1" aria-label="LinkedIn">
                                    <Linkedin size={14} className="fill-current" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
