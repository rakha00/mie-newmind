import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
    children?: ReactNode;
    className?: string;
    imageSrc?: string;
    title?: string;
    badge?: string;
    onClick?: () => void;
    isDark?: boolean;
}

export default function Card({
    children,
    className,
    imageSrc,
    title,
    badge,
    onClick,
    isDark = false,
}: CardProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "group relative w-full h-full",
                onClick && "cursor-pointer",
                className
            )}
        >
            <div
                className={cn(
                    "relative overflow-hidden rounded-2xl h-full",
                    "border shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)]",
                    "transition-all duration-300",
                    "active:scale-[0.99] md:hover:-translate-y-1 md:hover:shadow-[0_24px_70px_-35px_rgba(0,0,0,0.95)]",
                    isDark
                        ? "bg-neutral-950 border-white/10"
                        : "bg-white border-black/10"
                )}
            >
                {/* Luxury Gradient Frame + Noise */}
                <div
                    className={cn(
                        "pointer-events-none absolute inset-0 opacity-80",
                        "bg-[radial-gradient(80%_60%_at_20%_0%,rgba(255,105,180,0.18)_0%,transparent_60%),radial-gradient(70%_60%_at_100%_0%,rgba(255,105,180,0.14)_0%,transparent_55%),radial-gradient(60%_60%_at_50%_100%,rgba(255,105,180,0.12)_0%,transparent_55%)]"
                    )}
                />
                <div
                    className={cn(
                        "pointer-events-none absolute inset-0 opacity-[0.06]",
                        "bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')]"
                    )}
                />

                {/* Vertical Layout: Image on top, larger and clearer */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Image - Full width, larger */}
                    {imageSrc && (
                        <div className="relative w-full">
                            <div
                                className={cn(
                                    "relative overflow-hidden rounded-t-2xl",
                                    "aspect-[4/3] w-full",
                                    "ring-1 ring-white/10"
                                )}
                            >
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/8 via-black/5 to-transparent" />

                                <Image
                                    src={imageSrc}
                                    alt={title || "Menu Image"}
                                    fill
                                    className="object-cover transition-transform duration-500 md:group-hover:scale-[1.06]"
                                />
                            </div>

                            {/* Badge at top-left corner of the card */}
                            {badge && (
                                <div className="absolute top-3 left-3 z-20">
                                    <div
                                        className={cn(
                                            "rounded-full px-3 py-1.5",
                                            "text-[10px] font-black uppercase tracking-wider",
                                            "shadow-lg border",
                                            isDark
                                                ? "bg-white/10 text-white border-white/15 backdrop-blur-md"
                                                : "bg-black/80 text-white border-white/10 backdrop-blur-md"
                                        )}
                                    >
                                        {badge}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Text Content - Below image */}
                    <div className="min-w-0 flex-1 p-4 md:p-5 flex flex-col">
                        {/* Title + Accent */}
                        {title && (
                            <div className="flex items-start justify-between gap-2">
                                <h3
                                    className={cn(
                                        "min-w-0 text-lg font-black leading-tight",
                                        "md:text-xl",
                                        isDark ? "text-white" : "text-neutral-900"
                                    )}
                                >
                                    <span className="line-clamp-2">{title}</span>
                                </h3>

                                {/* Decorative spark */}
                                <div
                                    className={cn(
                                        "mt-1 h-2 w-2 rounded-full shrink-0",
                                        "shadow-[0_0_0_4px_rgba(255,255,255,0.06)]",
                                        isDark ? "bg-white/60" : "bg-neutral-900/70"
                                    )}
                                />
                            </div>
                        )}

                        {/* Sub content */}
                        <div
                            className={cn(
                                "mt-2 mb-4 text-sm leading-snug",
                                "opacity-90",
                                isDark ? "text-white/80" : "text-neutral-700"
                            )}
                        >
                            <div className="line-clamp-2 md:line-clamp-3">{children}</div>
                        </div>

                        {/* Bottom micro decorations */}
                        <div className="mt-auto flex items-center gap-2">
                            <div
                                className={cn(
                                    "h-[3px] w-10 rounded-full",
                                    isDark
                                        ? "bg-gradient-to-r from-white/70 to-transparent"
                                        : "bg-gradient-to-r from-neutral-900/60 to-transparent"
                                )}
                            />
                            <div
                                className={cn(
                                    "h-[3px] w-6 rounded-full opacity-70",
                                    isDark
                                        ? "bg-gradient-to-r from-pink-500/50 to-transparent"
                                        : "bg-gradient-to-r from-red-500/40 to-transparent"
                                )}
                            />
                        </div>
                    </div>
                </div>

                {/* Hover shine (desktop) */}
                <div
                    className={cn(
                        "pointer-events-none absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500",
                        "bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.10)_30%,transparent_60%)]"
                    )}
                />
            </div>
        </div>
    );
}
