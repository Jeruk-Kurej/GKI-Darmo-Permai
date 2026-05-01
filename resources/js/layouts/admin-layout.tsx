import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { Home, Calendar, FileText, Film, Award, LayoutDashboard, LogOut, ExternalLink } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { url } = usePage();
    const currentPath = url.split('?')[0];

    const navigation = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Jadwal Ibadah', href: '/admin/schedules', icon: Calendar },
        { name: 'E-Warta', href: '/admin/bulletins', icon: FileText },
        { name: 'Kegiatan', href: '/admin/events', icon: Award },
        { name: 'Media & Video', href: '/admin/media', icon: Film },
    ];

    return (
        <div className="min-h-screen bg-[#f4f6ef] text-slate-800 flex antialiased select-none font-sans">
            {/* Elegant Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between sticky top-0 h-screen z-40 select-none flex-shrink-0 shadow-sm">
                <div className="flex flex-col flex-1">
                    {/* Brand Header */}
                    <div className="h-20 flex items-center px-6 border-b border-slate-100">
                        <Link href="/admin" className="flex items-center gap-2.5">
                            <div className="w-9 h-9 bg-[#7a9d54] text-white rounded-xl flex items-center justify-center font-black text-lg shadow-sm">
                                G
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-black tracking-wider text-slate-800 leading-none">
                                    GKI DAMAI
                                </span>
                                <span className="text-[10px] font-bold tracking-widest text-[#7a9d54] uppercase leading-relaxed">
                                    Admin Portal
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
                        {navigation.map((item) => {
                            const Icon = item.icon;
                            const isActive = currentPath === item.href || (item.href !== '/admin' && currentPath.startsWith(item.href));

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 group ${
                                        isActive
                                            ? 'bg-[#7a9d54]/10 text-[#4c6336] shadow-sm border-l-4 border-l-[#7a9d54] pl-3.5'
                                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-l-transparent'
                                    }`}
                                >
                                    <div className="flex items-center gap-3.5">
                                        <Icon
                                            className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                                                isActive ? 'text-[#7a9d54]' : 'text-slate-400 group-hover:text-slate-600'
                                            }`}
                                            strokeWidth={isActive ? 2.5 : 2}
                                        />
                                        {item.name}
                                    </div>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Sidebar Bottom Footer */}
                <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex flex-col gap-2">
                    <Link
                        href="/"
                        target="_blank"
                        className="flex items-center justify-between px-4 py-2.5 rounded-xl font-bold text-xs text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm border border-transparent hover:border-slate-200/60 transition-all cursor-pointer"
                    >
                        <span className="flex items-center gap-2">
                            <Home className="w-4 h-4 text-slate-400" />
                            Ke Web Publik
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </Link>

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-bold text-xs text-red-600 hover:bg-red-50/60 transition-all cursor-pointer text-left select-none"
                    >
                        <LogOut className="w-4 h-4 text-red-500" />
                        Keluar
                    </Link>
                </div>
            </aside>

            {/* Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
                {/* Top Header bar */}
                <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-8 flex items-center justify-between flex-shrink-0 sticky top-0 z-30 shadow-sm">
                    <div className="flex flex-col">
                        <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase leading-none">
                            Halo Admin
                        </span>
                        <span className="text-lg font-extrabold text-slate-800 tracking-tight leading-normal">
                            Panel Kontrol GKI Damai
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-right flex flex-col justify-center">
                            <span className="text-xs font-bold text-slate-800">Administrator</span>
                            <span className="text-[10px] font-semibold text-[#7a9d54]">Status: Aktif</span>
                        </div>
                        <div className="w-10 h-10 bg-slate-100 border border-slate-200/60 text-slate-600 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-sm select-none">
                            AD
                        </div>
                    </div>
                </header>

                {/* Main page content area */}
                <main className="flex-1 p-8 pb-16 animate-in fade-in duration-300">
                    {children}
                </main>
            </div>
        </div>
    );
}
