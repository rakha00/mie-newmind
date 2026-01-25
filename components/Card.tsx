import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ReactNode } from 'react';
import FireEffect from './FireEffect';

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
                "group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-100",
                onClick && "cursor-pointer",
                className
            )}
        >
            {imageSrc && (
                <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                    <Image
                        src={imageSrc}
                        alt={title || 'Card Image'}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            )}

            {badge && (
                <div className="absolute top-4 right-4 z-20 flex items-center justify-center">
                    {/* Fire Effect */}
                    <div className="absolute -top-24 -right-2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-70 transition-all duration-500 ease-out origin-bottom pointer-events-none">
                        <FireEffect />
                    </div>

                    {/* Badge */}
                    <div className="relative z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md group-hover:translate-y-1 transition-transform">
                        {badge}
                    </div>
                </div>
            )}

            <div className="p-6">
                {title && <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>}
                {children}
            </div>
        </div>
    );
}
