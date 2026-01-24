'use client';

import { useState } from 'react';
import { MENU_ITEMS, CATEGORIES } from '@/data/menu';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { cn } from '@/lib/utils';
import CTAButton from '@/components/CTAButton';

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredItems = activeCategory === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    return (
        <div className="min-h-screen bg-neutral-50">
            <div className="bg-primary pt-24 pb-12 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-black italic mb-4">DAFTAR MENU</h1>
                <p className="text-xl opacity-90">Pilih level pedasmu, jangan nangis di pojokan.</p>
            </div>

            <Section>
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={cn(
                            "px-6 py-2 rounded-full font-bold transition-all",
                            activeCategory === 'all'
                                ? "bg-primary text-white shadow-lg scale-105"
                                : "bg-white hover:bg-neutral-100"
                        )}
                    >
                        Semua
                    </button>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                "px-6 py-2 rounded-full font-bold transition-all",
                                activeCategory === cat.id
                                    ? "bg-primary text-white shadow-lg scale-105"
                                    : "bg-white hover:bg-neutral-100"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item) => (
                        <Card
                            key={item.id}
                            title={item.name}
                            imageSrc={item.image}
                            badge={item.isBestSeller ? "BEST SELLER" : undefined}
                        >
                            <p className="text-neutral-600 mb-2">{item.description}</p>
                            {item.spiciness && (
                                <div className="mb-4 text-sm font-bold text-red-500 flex items-center gap-1">
                                    🌶️ Level 0 - 8 (Pilih Sendiri)
                                </div>
                            )}
                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-xl font-bold">
                                    Rp {item.price.toLocaleString('id-ID')}
                                </span>
                                <CTAButton
                                    href="https://wa.me/6281234567890?text=Halo%20min%20mau%20pesan"
                                    variant="primary"
                                    className="px-4 py-2 text-sm"
                                >
                                    Pesan
                                </CTAButton>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
}
