import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, Film, Award, ArrowRight, Activity, Users, Globe } from 'lucide-react';

interface Stats {
    schedules_count: number;
    bulletins_count: number;
    events_count: number;
    media_count: number;
}

interface Props {
    stats: Stats;
}

export default function AdminDashboard({ stats }: Props) {
    const s = stats || { schedules_count: 0, bulletins_count: 0, events_count: 0, media_count: 0 };

    return (
        <>
            <Head title="Admin Dashboard" />

            <div className="flex flex-col gap-10">
                {/* Welcome section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="text-[10px] bg-[#7a9d54]/15 font-black text-[#4c6336] px-3 py-1 rounded-full uppercase tracking-widest">
                            Overview
                        </span>
                        <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mt-4 leading-snug">
                            Selamat Datang Kembali, Admin!
                        </h1>
                        <p className="text-slate-500 text-sm mt-1 max-w-lg leading-relaxed">
                            Kelola jadwal ibadah, warta jemaat, kegiatan acara, dan galeri media website GKI Damai secara praktis dan interaktif.
                        </p>
                    </div>
                    <div className="flex-shrink-0 relative z-10 flex items-center gap-3">
                        <Button asChild variant="outline" className="border-slate-200/80 hover:bg-slate-50">
                            <Link href="/" target="_blank" className="flex items-center gap-2 text-xs font-bold">
                                <Globe className="w-4 h-4 text-slate-500" />
                                Lihat Website Publik
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Stat Counters Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 select-none animate-in slide-in-from-bottom-2 duration-300">
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-100/50">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-slate-400 block uppercase tracking-wide leading-none mb-1">Jadwal</span>
                            <span className="text-2xl font-black text-slate-800 tracking-tight leading-none">{s.schedules_count}</span>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-amber-100/50">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-slate-400 block uppercase tracking-wide leading-none mb-1">E-Warta</span>
                            <span className="text-2xl font-black text-slate-800 tracking-tight leading-none">{s.bulletins_count}</span>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-100/50">
                            <Award className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-slate-400 block uppercase tracking-wide leading-none mb-1">Acara</span>
                            <span className="text-2xl font-black text-slate-800 tracking-tight leading-none">{s.events_count}</span>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-center gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm border border-purple-100/50">
                            <Film className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-xs font-bold text-slate-400 block uppercase tracking-wide leading-none mb-1">Media</span>
                            <span className="text-2xl font-black text-slate-800 tracking-tight leading-none">{s.media_count}</span>
                        </div>
                    </div>
                </div>

                {/* Main Management Action Tiles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 select-none animate-in slide-in-from-bottom-4 duration-500">
                    {/* Card 1: Jadwal */}
                    <Link
                        href="/admin/schedules"
                        className="group bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-64 hover:shadow-xl hover:border-[#7a9d54]/40 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
                    >
                        <div className="flex items-start justify-between">
                            <div className="w-14 h-14 bg-blue-50/60 text-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                <Calendar className="w-7 h-7" />
                            </div>
                            <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                Management
                            </span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-extrabold text-slate-800 tracking-tight group-hover:text-[#7a9d54] transition-colors duration-300 leading-tight">
                                Jadwal Ibadah Mingguan
                            </h3>
                            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                                Kelola jam, tipe pelayanan ibadah, dan pelayan firman untuk jemaat GKI.
                            </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-black text-[#7a9d54] uppercase tracking-wider pt-2 border-t border-slate-50">
                            Kelola Sekarang <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </div>
                    </Link>

                    {/* Card 2: E-Warta */}
                    <Link
                        href="/admin/bulletins"
                        className="group bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-64 hover:shadow-xl hover:border-[#7a9d54]/40 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
                    >
                        <div className="flex items-start justify-between">
                            <div className="w-14 h-14 bg-amber-50/60 text-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                <FileText className="w-7 h-7" />
                            </div>
                            <span className="text-xs font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                Management
                            </span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-extrabold text-slate-800 tracking-tight group-hover:text-[#7a9d54] transition-colors duration-300 leading-tight">
                                File E-Warta Jemaat
                            </h3>
                            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                                Unggah file PDF warta mingguan terbaru yang dapat diunduh langsung.
                            </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-black text-[#7a9d54] uppercase tracking-wider pt-2 border-t border-slate-50">
                            Kelola Sekarang <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </div>
                    </Link>

                    {/* Card 3: Kegiatan */}
                    <Link
                        href="/admin/events"
                        className="group bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-64 hover:shadow-xl hover:border-[#7a9d54]/40 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
                    >
                        <div className="flex items-start justify-between">
                            <div className="w-14 h-14 bg-emerald-50/60 text-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                <Award className="w-7 h-7" />
                            </div>
                            <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                Events
                            </span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-extrabold text-slate-800 tracking-tight group-hover:text-[#7a9d54] transition-colors duration-300 leading-tight">
                                Kegiatan & Acara Mendatang
                            </h3>
                            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                                Tambahkan pengumuman kegiatan komisi remaja, anak, atau pelayanan umum.
                            </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-black text-[#7a9d54] uppercase tracking-wider pt-2 border-t border-slate-50">
                            Kelola Sekarang <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </div>
                    </Link>

                    {/* Card 4: Media */}
                    <Link
                        href="/admin/media"
                        className="group bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-64 hover:shadow-xl hover:border-[#7a9d54]/40 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
                    >
                        <div className="flex items-start justify-between">
                            <div className="w-14 h-14 bg-purple-50/60 text-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                <Film className="w-7 h-7" />
                            </div>
                            <span className="text-xs font-black text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                Video & Gallery
                            </span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-extrabold text-slate-800 tracking-tight group-hover:text-[#7a9d54] transition-colors duration-300 leading-tight">
                                Galeri & Video Media
                            </h3>
                            <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                                Kelola link video ibadah YouTube, SAMAS, serta dokumentasi galeri foto.
                            </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-black text-[#7a9d54] uppercase tracking-wider pt-2 border-t border-slate-50">
                            Kelola Sekarang <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

import AdminLayout from '@/layouts/admin-layout';

AdminDashboard.layout = (page: any) => (
    <AdminLayout>
        {page}
    </AdminLayout>
);
