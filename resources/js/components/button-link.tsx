import { Link } from '@inertiajs/react';
import type { ComponentProps } from 'react';

type ButtonStyle = {
    variant?: 'solid' | 'outline';
    size?: 'default' | 'wide';
};

const variants = {
    solid: 'bg-brand text-white hover:bg-brand-dark',
    outline: 'border-4 border-brand font-bold text-white hover:bg-brand/20',
};

const sizes = {
    default: 'h-14 rounded-xl px-16',
    wide: 'h-[55px] w-full max-w-[281px] rounded-2xl',
};

/**
 * The button of the design ("Button" in Figma): 56 px high with 64 px side padding, or the
 * 281 x 55 version of the hero and Tentang Kami. Also used by actions that are not links.
 */
export function buttonClasses({
    variant = 'solid',
    size = 'default',
}: ButtonStyle = {}) {
    return `type-button inline-flex items-center justify-center transition-colors ${variants[variant]} ${sizes[size]}`;
}

export function ButtonLink({
    variant,
    size,
    className = '',
    ...props
}: ButtonStyle & Omit<ComponentProps<typeof Link>, 'size'>) {
    return (
        <Link
            {...props}
            className={`${buttonClasses({ variant, size })} ${className}`}
        />
    );
}
