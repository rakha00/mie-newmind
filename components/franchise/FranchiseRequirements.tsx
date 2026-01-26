'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { User, Store, MapPin, Wallet, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function FranchiseRequirements() {
    return (
        <Section className="bg-neutral-50 py-8 md:py-12">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black italic text-neutral-900 tracking-tight">
                            SYARAT <span className="text-primary">KEMITRAAN</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-4"></div>
                    </motion.div>
                </div>

                {/* Main Bento Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-3xl shadow-xl shadow-neutral-200/50 overflow-hidden border border-neutral-100"
                >
                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
                        {/* Row 1: 3 Items (2 cols each) */}

                        {/* Item 1: WNI */}
                        <div className="md:col-span-2 p-8 flex flex-col items-center text-center hover:bg-neutral-50/50 transition-colors group">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                <User className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-neutral-800 text-lg leading-tight">Warga Negara Indonesia</h3>
                        </div>

                        {/* Item 2: Izin */}
                        <div className="md:col-span-2 p-8 flex flex-col items-center text-center hover:bg-neutral-50/50 transition-colors group">
                            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                                <Store className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-neutral-800 text-lg leading-tight">Mempunyai Izin Usaha Restoran</h3>
                        </div>

                        {/* Item 3: Lokasi */}
                        <div className="md:col-span-2 p-8 flex flex-col items-center text-center hover:bg-neutral-50/50 transition-colors group">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-neutral-800 text-lg leading-tight">
                                Lokasi Restoran <br />
                                <span className="text-blue-600">Min. 500m²</span>
                            </h3>
                        </div>

                        {/* Row 2: 2 Items (3 cols each) - Bottom Border for visual separation if needed, but grid handles it */}
                        <div className="col-span-full h-px bg-neutral-100 hidden md:block"></div>

                        {/* Item 4: Dana Investasi */}
                        <div className="md:col-span-3 p-8 flex flex-col md:flex-row items-center md:text-left text-center gap-6 hover:bg-neutral-50/50 transition-colors group">
                            <div className="shrink-0 w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                                <Wallet className="w-7 h-7" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-neutral-800 text-lg mb-2">Dana Investasi & Pembukaan</h3>
                                <div className="space-y-1">
                                    <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-neutral-600">
                                        <span className="w-2 h-2 rounded-full bg-neutral-300"></span>
                                        <span>Jawa: <span className="font-bold text-green-600">850 Juta</span></span>
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-neutral-600">
                                        <span className="w-2 h-2 rounded-full bg-neutral-300"></span>
                                        <span>Luar Jawa: <span className="font-bold text-green-600">1.2 Miliar</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Item 5: Entrepreneur */}
                        <div className="md:col-span-3 p-8 flex flex-col md:flex-row items-center md:text-left text-center gap-6 hover:bg-neutral-50/50 transition-colors group border-t md:border-t-0 md:border-l border-neutral-100">
                            <div className="shrink-0 w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                                <Lightbulb className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="font-bold text-neutral-800 text-lg mb-1">Jiwa Entrepreneur</h3>
                                <p className="text-sm text-neutral-500 font-medium">Fokus Mengembangkan Waralaba Mie Newmind</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Ribbon within the card */}
                    <div className="bg-neutral-900 p-6 md:p-8 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-50"></div>
                        <div className="relative z-10 flex flex-col items-center gap-3">
                            <div className="flex items-center gap-2 text-primary/80 mb-1">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-xs font-bold tracking-widest uppercase">All Inclusive</span>
                            </div>
                            <h4 className="text-white font-medium text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                                Dana Investasi <span className="text-primary font-bold">Sudah Termasuk</span> Biaya Bangun, Kebutuhan Luar & Dalam, Hingga Grand Opening
                            </h4>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
