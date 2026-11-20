import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import type { ComponentProps } from 'react';

export function ArrowLink({
    children,
    className = '',
    ...props
}: ComponentProps<typeof Link>) {
    return (
        <Link
            {...props}
            className={`group inline-flex items-center gap-2 text-xl leading-8 transition-colors ${className}`}
        >
            {children}
            <ArrowRight
                size={22}
                className="transition-transform group-hover:translate-x-1"
            />
        </Link>
    );
}
