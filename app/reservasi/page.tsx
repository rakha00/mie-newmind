'use client';

import { REGIONS } from '@/data/regions';
import Section from '@/components/Section';
import CTAButton from '@/components/CTAButton';
import { MessageCircle } from 'lucide-react';

export default function ReservasiPage() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <div className="pt-24 pb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-black italic mb-4">RESERVASI TEMPAT</h1>
                <p className="text-xl opacity-90 max-w-2xl mx-auto px-4">
                    Jangan sampai kehabisan tempat! Pilih lokasi, langsung chat admin buat booking meja.
                </p>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {REGIONS.map((region) => (
                        <div
                            key={region.id}
                            className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 hover:border-primary transition-all hover:scale-105 group"
                        >
                            <h3 className="text-2xl font-bold mb-6">{region.name}</h3>
                            <CTAButton
                                href={`https://wa.me/${region.whatsapp}?text=Halo%20min%20mau%20reservasi%20di%20${region.name}`}
                                className="w-full flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={20} />
                                Chat Admin
                            </CTAButton>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
