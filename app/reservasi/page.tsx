'use client';

import { REGIONS } from '@/data/regions';
import Section from '@/components/ui/Section';
import CTAButton from '@/components/ui/CTAButton';
import { MessageSquareText, MapPin } from 'lucide-react';

export default function ReservasiPage() {
    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900">
            {/* Dark Themed Header from Menu Page Template */}
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

                <div
                    className="relative z-10 container mx-auto px-4"
                >
                    <h1 className="text-4xl md:text-6xl font-black italic mb-3 drop-shadow-lg">
                        RESERVASI TEMPAT
                    </h1>
                    <p className="text-base md:text-xl font-semibold text-neutral-300">
                        Jangan sampai kehabisan tempat! Pilih lokasi, langsung chat admin buat booking meja favoritmu.
                    </p>
                </div>
            </div>

            <Section className="relative z-20 -mt-10 pt-20 pb-8 md:pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                    {REGIONS.map((region) => (
                        <div
                            key={region.id}
                            className="group bg-white rounded-3xl p-6 shadow-sm border border-neutral-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">{region.name}</h3>
                                    <p className="text-neutral-500 text-sm">
                                        Reservasi untuk outlet wilayah {region.name} dan sekitarnya.
                                    </p>
                                </div>

                                <div className="mt-auto">
                                    <CTAButton
                                        href={`https://wa.me/${region.whatsapp}?text=Halo%20min%20mau%20reservasi%20di%20${region.name}`}
                                        className="w-full justify-center shadow-lg shadow-primary/20 hover:shadow-primary/30"
                                    >
                                        <MessageSquareText className="w-5 h-5 mr-2" />
                                        Chat Admin
                                    </CTAButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
