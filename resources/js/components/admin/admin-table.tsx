import React from 'react';

interface Props {
    title: string;
    children: React.ReactNode;
}

export default function AdminTable({ title, children }: Props) {
    return (
        <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm animate-in slide-in-from-bottom-3 duration-500 select-none">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-lg font-black text-slate-800 tracking-tight leading-normal">
                    {title}
                </h2>
            </div>
            <div className="overflow-x-auto">
                {children}
            </div>
        </div>
    );
}
