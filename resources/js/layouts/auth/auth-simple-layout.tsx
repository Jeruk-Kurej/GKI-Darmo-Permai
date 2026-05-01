import { Link } from '@inertiajs/react';
import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import type { AuthLayoutProps } from '@/types';
import { useEffect } from 'react';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: AuthLayoutProps) {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
    }, []);

    return (
        <div 
            className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 select-none !bg-[#f7f9f0] !text-slate-800"
            style={{ backgroundColor: '#f7f9f0', color: '#1f2937' }}
        >
            <div 
                className="w-full max-w-md bg-white border border-slate-200/80 p-8 rounded-xl shadow-lg backdrop-blur-sm"
                style={{ backgroundColor: '#ffffff', color: '#1f2937' }}
            >
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href={home()}
                            className="flex flex-col items-center gap-2 font-medium"
                        >
                            <span className="text-2xl font-black tracking-wider text-[#7a9d54]">
                                GKI DAMAI
                            </span>
                            <span className="sr-only">{title}</span>
                        </Link>

                        <div className="space-y-2 text-center">
                            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">{title}</h1>
                            <p className="text-center text-sm text-slate-500 font-medium leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
