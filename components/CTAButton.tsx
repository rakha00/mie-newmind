import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'outline' | 'ghost';
    children: ReactNode;
    className?: string;
}

export default function CTAButton({
    href,
    variant = 'primary',
    children,
    className,
    ...props
}: CTAButtonProps) {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-bold text-lg transition-transform active:scale-95 duration-200 rounded-full";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-xl hover:-translate-y-1",
        outline: "border-2 border-primary text-primary hover:bg-primary/10",
        ghost: "text-primary hover:bg-primary/5",
    };

    const combinedClassName = cn(baseStyles, variants[variant], className);

    if (href) {
        const isExternal = href.startsWith('http') || href.startsWith('wa.me');
        return (
            <Link
                href={href}
                className={combinedClassName}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
            >
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
