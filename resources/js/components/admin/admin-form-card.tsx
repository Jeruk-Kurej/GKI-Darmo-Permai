import React from 'react';
import { Sparkles } from 'lucide-react';

interface Props {
    title: string;
    children: React.ReactNode;
}

export default function AdminFormCard({ title, children }: Props) {
    return (
        <div className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-sm flex flex-col gap-6 animate-in slide-in-from-bottom-2 duration-300 select-none">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center shadow-sm">
                    <Sparkles className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-black text-slate-800 tracking-tight">
                    {title}
                </h2>
            </div>
            {children}
        </div>
    );
}
