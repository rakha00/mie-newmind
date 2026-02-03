'use client';

import { MENU_ITEMS, CATEGORIES } from '@/data/menu';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export default function MenuPage() {
    // Define background themes for each category
    const getCategoryTheme = (categoryId: string, index: number) => {
        // Alternating: white (makanan), black (dimsum), white (minuman)
        const isDark = categoryId === 'dimsum';
        return {
            isDark,
            bgClass: isDark
                ? 'bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900'
                : 'bg-gradient-to-br from-neutral-50 via-white to-neutral-50',
            textClass: isDark ? 'text-white' : 'text-neutral-900',
            patternColor: isDark ? '#e43b8a' : '#171717',
            patternOpacity: isDark ? 'opacity-10' : 'opacity-5'
        };
    };

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Dark Themed Header */}
            <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 pt-28 pb-18 text-center text-white overflow-hidden border-b-4 border-primary">
                {/* Geometric Pattern Background */}
                <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <circle cx="20" cy="20" r="1.5" fill="#e43b8a" />
                                <circle cx="0" cy="0" r="1.5" fill="#e43b8a" />
                                <circle cx="40" cy="0" r="1.5" fill="#e43b8a" />
                                <circle cx="0" cy="40" r="1.5" fill="#e43b8a" />
                                <circle cx="40" cy="40" r="1.5" fill="#e43b8a" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Diagonal Lines Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 10px,
                        #e43b8a 10px,
                        #e43b8a 11px
                    )`
                }}></div>

                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent"></div>

                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-black italic mb-3 drop-shadow-lg">
                        DAFTAR MENU
                    </h1>
                    <p className="text-base md:text-xl font-semibold text-neutral-300">
                        Berani pedas? Ayo buktikan kekuatanmu! 🔥
                    </p>
                </div>
            </div>

            {CATEGORIES.map((category, index) => {
                const items = MENU_ITEMS.filter(item => item.category === category.id);
                if (items.length === 0) return null;

                const theme = getCategoryTheme(category.id, index);

                return (
                    <div
                        key={category.id}
                        className={`relative ${theme.bgClass} py-12 md:py-16`}
                    >
                        {/* Restaurant-style Background Pattern */}
                        <div className={`absolute inset-0 ${theme.patternOpacity}`}>
                            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id={`pattern-${category.id}`} width="60" height="60" patternUnits="userSpaceOnUse">
                                        <circle cx="30" cy="30" r="2" fill={theme.patternColor} />
                                        <circle cx="0" cy="0" r="1.5" fill={theme.patternColor} />
                                        <circle cx="60" cy="60" r="1.5" fill={theme.patternColor} />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill={`url(#pattern-${category.id})`} />
                            </svg>
                        </div>

                        {/* Subtle Texture Overlay */}
                        <div className="absolute inset-0 opacity-5" style={{
                            backgroundImage: theme.isDark
                                ? 'radial-gradient(circle at 20% 50%, rgba(228, 59, 138, 0.3) 0%, transparent 50%)'
                                : 'radial-gradient(circle at 80% 50%, rgba(228, 59, 138, 0.1) 0%, transparent 50%)'
                        }}></div>

                        <Section className="relative z-10 py-0 md:py-0">
                            {/* Category Header */}
                            <div className="text-center mb-10 md:mb-12">
                                <div className="inline-flex flex-col items-center gap-2 mb-3">
                                    <span className="text-5xl md:text-6xl">
                                        {category.id === 'makanan' ? '🍜' : category.id === 'dimsum' ? '🥟' : '🥤'}
                                    </span>
                                    <h2 className={`text-3xl md:text-5xl font-black italic uppercase tracking-tight drop-shadow-md ${theme.isDark ? 'text-white' : 'text-neutral-900'
                                        }`}>
                                        {category.label}
                                    </h2>
                                </div>

                                {/* Decorative Divider */}
                                <div className="flex justify-center items-center gap-2 mt-4">
                                    <div className="h-0.5 w-12 bg-primary"></div>
                                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                                    <div className="h-0.5 w-12 bg-primary"></div>
                                </div>
                            </div>

                            {/* Menu Grid - Mobile First Design */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 px-2 md:px-0 items-stretch">
                                {items.map((item) => (
                                    <Card
                                        key={item.id}
                                        title={item.name}
                                        imageSrc={item.image}
                                        badge={item.isBestSeller ? "BEST SELLER" : undefined}
                                        isDark={theme.isDark}
                                        className="h-full"
                                    >
                                        <div className="flex flex-col h-full">
                                            {/* Description - flexible height */}
                                            <p className={cn(
                                                "text-sm md:text-base leading-relaxed font-medium flex-grow",
                                                theme.isDark ? "text-neutral-200" : "text-neutral-700"
                                            )}>
                                                {item.description}
                                            </p>

                                            {/* Spiciness Section - Only for 'makanan' category */}
                                            {category.id === 'makanan' && (
                                                <div className="mt-4 min-h-[80px] md:min-h-[85px]">
                                                    {item.spiciness ? (
                                                        <div>
                                                            {/* Spiciness Indicator - Matches Card Design */}
                                                            <div className={cn(
                                                                "relative overflow-hidden rounded-xl p-3 md:p-3.5",
                                                                "border backdrop-blur-md",
                                                                "transition-all duration-300",
                                                                theme.isDark
                                                                    ? "bg-white/5 border-white/10"
                                                                    : "bg-black/[0.03] border-black/10"
                                                            )}>
                                                                {/* Subtle Red Accent Gradient */}
                                                                <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-red-500/20 via-orange-500/10 to-transparent" />

                                                                <div className="relative flex items-center gap-3">
                                                                    {/* Chili Icon with decorative ring */}
                                                                    <div className={cn(
                                                                        "relative shrink-0 h-10 w-10 md:h-11 md:w-11",
                                                                        "rounded-lg grid place-items-center",
                                                                        "ring-1 backdrop-blur-sm",
                                                                        theme.isDark
                                                                            ? "bg-white/5 ring-white/15"
                                                                            : "bg-black/5 ring-black/10"
                                                                    )}>
                                                                        <span className="text-2xl">🌶️</span>
                                                                    </div>

                                                                    {/* Text Content */}
                                                                    <div className="flex-1 min-w-0">
                                                                        <p className={cn(
                                                                            "text-[10px] font-bold uppercase tracking-wider",
                                                                            theme.isDark ? "text-white/70" : "text-neutral-600"
                                                                        )}>
                                                                            Level Pedas
                                                                        </p>
                                                                        <p className={cn(
                                                                            "font-black text-sm md:text-base mt-0.5 leading-tight",
                                                                            theme.isDark ? "text-white" : "text-neutral-900"
                                                                        )}>
                                                                            Level 0 - 8
                                                                        </p>
                                                                        <p className={cn(
                                                                            "text-[10px] mt-0.5",
                                                                            theme.isDark ? "text-white/60" : "text-neutral-500"
                                                                        )}>
                                                                            Pilih Sendiri!
                                                                        </p>
                                                                    </div>

                                                                    {/* Decorative accent dot */}
                                                                    <div className={cn(
                                                                        "shrink-0 h-1.5 w-1.5 rounded-full",
                                                                        "shadow-[0_0_0_3px_rgba(239,68,68,0.15)]",
                                                                        "bg-red-500/80"
                                                                    )} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        // Empty space for cards without spiciness - maintains symmetry
                                                        <div aria-hidden="true" />
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </Section>
                    </div>
                );
            })}
        </div>
    );
}

// Helper function for conditional classes
function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}
