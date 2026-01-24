import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ReactNode } from 'react';

interface CardProps {
    children?: ReactNode;
    className?: string;
    imageSrc?: string;
    title?: string;
    badge?: string;
    onClick?: () => void;
}

export default function Card({ children, className, imageSrc, title, badge, onClick }: CardProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-100",
                onClick && "cursor-pointer",
                className
            )}
        >
            {imageSrc && (
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={title || 'Card Image'}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {badge && (
                        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md rotate-3 group-hover:rotate-6 transition-transform">
                            {badge}
                        </div>
                    )}
                </div>
            )}
            <div className="p-6">
                {title && <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>}
                {children}
            </div>
        </div>
    );
}
