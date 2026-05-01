import React from 'react';

interface Props {
    category: string;
    title: string;
    description?: string;
    children?: React.ReactNode;
}

export default function AdminPageHeader({ category, title, description, children }: Props) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 select-none animate-in fade-in duration-300">
            <div>
                <span className="text-[10px] bg-[#7a9d54]/15 font-black text-[#4c6336] px-3 py-1 rounded-full uppercase tracking-widest">
                    {category}
                </span>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-3 leading-snug">
                    {title}
                </h1>
                {description && (
                    <p className="text-slate-500 text-sm mt-1 max-w-lg leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
            {children && (
                <div className="flex-shrink-0 flex items-center gap-3">
                    {children}
                </div>
            )}
        </div>
    );
}
