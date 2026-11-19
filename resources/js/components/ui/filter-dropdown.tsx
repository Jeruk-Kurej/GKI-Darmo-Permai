import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface Option {
    value: string;
    label: string;
}

interface FilterDropdownProps {
    value: string;
    onValueChange: (val: string) => void;
    options: Option[];
    placeholder?: string;
    className?: string;
}

export function FilterDropdown({ value, onValueChange, options, placeholder, className }: FilterDropdownProps) {
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className={`w-[200px] h-11 !bg-white border-2 border-brand rounded-full text-ink hover:!bg-brand hover:!text-white font-bold px-5 transition-all duration-300 flex justify-between items-center shadow-sm select-none cursor-pointer [&_svg]:text-ink [&_svg]:!opacity-100 hover:[&_svg]:!text-white focus:!ring-0 focus-visible:!ring-0 focus:!ring-offset-0 focus:!border-brand focus-visible:!border-brand focus:!bg-white focus-visible:!bg-white focus:!outline-none focus-visible:!outline-none hover:focus:!bg-brand hover:focus:!text-white hover:focus:[&_svg]:!text-white ${className}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-xl border border-gray-100 shadow-xl z-[70] text-gray-800 min-w-[200px] p-1.5 select-none">
                {options.map((opt) => (
                    <SelectItem 
                        key={opt.value} 
                        value={opt.value} 
                        className="font-semibold text-gray-700 cursor-pointer rounded-lg px-4 py-2 text-sm transition-all focus:!bg-[#f7f9f0] focus:!text-brand data-[state=checked]:!bg-[#f7f9f0] data-[state=checked]:!text-brand mb-1 last:mb-0"
                    >
                        {opt.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
