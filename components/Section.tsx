import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    fullWidth?: boolean;
}

export default function Section({ children, className, id, fullWidth = false }: SectionProps) {
    return (
        <section id={id} className={cn("py-12 md:py-20", className)}>
            <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", !fullWidth && "max-w-7xl")}>
                {children}
            </div>
        </section>
    );
}
