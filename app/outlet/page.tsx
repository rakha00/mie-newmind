'use client';

import { OUTLETS } from '@/data/outlets';
import Section from '@/components/ui/Section';
import CTAButton from '@/components/ui/CTAButton';
import { MapPin, Clock, Phone, Navigation, ArrowUpRight, Search, SortAsc, SortDesc } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OutletPage() {
    const [currentTime, setCurrentTime] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        // Update time on load to calculate status
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        setCurrentTime(`${hours}:${minutes}`);
    }, []);

    const isOpen = (open: string, close: string) => {
        if (!currentTime) return false;
        return currentTime >= open && currentTime < close;
    };

    // Filter and Sort Logic
    const filteredOutlets = OUTLETS.filter((outlet) =>
        outlet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        outlet.address.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => {
        if (sortOrder === 'asc') return a.name.localeCompare(b.name);
        return b.name.localeCompare(a.name);
    });

    return (
        <div className="min-h-screen bg-neutral-950">
            {/* Header Section */}
            <div className="relative bg-neutral-900 text-white pt-24 pb-8 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/0 via-neutral-900/50 to-neutral-950"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 px-4"
                >
                    <h1 className="text-3xl md:text-5xl font-black italic mb-4 tracking-tight">
                        LOKASI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">OUTLET</span>
                    </h1>
                    <p className="text-neutral-400 text-lg">Temukan outlet Mie Newmind terdekat dengan lokasi Anda.</p>
                </motion.div>
            </div>

            <Section className="relative z-20 -mt-10 pb-8 md:pb-8">
                {/* Search and Sort Controls */}
                <div className="max-w-7xl mx-auto px-4 mb-8">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-4 rounded-2xl">
                        <div className="relative w-full sm:max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                            <input
                                type="text"
                                placeholder="Cari outlet (nama atau alamat)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-neutral-950 border border-neutral-800 text-sm rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            />
                        </div>
                        <button
                            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                            className="flex items-center gap-2 px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors w-full sm:w-auto justify-center"
                        >
                            {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                            <span>Urutkan {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-4">
                    <AnimatePresence mode="popLayout">
                        {filteredOutlets.length > 0 ? (
                            filteredOutlets.map((outlet, index) => {
                                const open = isOpen(outlet.openTime, outlet.closeTime);
                                return (
                                    <motion.div
                                        key={outlet.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="group relative"
                                    >
                                        {/* Glow Effect */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-500"></div>

                                        <div className="relative h-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl p-5 hover:border-neutral-700 transition-colors flex flex-col">
                                            {/* Header */}
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
                                                        {outlet.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2 mt-1.5">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${open ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                                                        <span className={`text-xs font-medium ${open ? 'text-green-400' : 'text-red-400'}`}>
                                                            {open ? 'Buka Sekarang' : 'Tutup'}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <a
                                                        href={outlet.googleMapsUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white transition-colors"
                                                        title="Open in Maps"
                                                    >
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="space-y-3 mb-5 flex-grow">
                                                <div className="flex items-start gap-3">
                                                    <MapPin className="shrink-0 w-4 h-4 mt-0.5 text-neutral-500" />
                                                    <span className="text-sm text-neutral-300 leading-snug line-clamp-2">
                                                        {outlet.address}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-3">
                                                        <Clock className="shrink-0 w-4 h-4 text-neutral-500" />
                                                        <span className="text-sm text-neutral-300">
                                                            {outlet.openTime} - {outlet.closeTime} WIB
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="grid grid-cols-2 gap-3 mt-auto border-t border-neutral-800 pt-4">
                                                <CTAButton
                                                    href={outlet.googleMapsUrl}
                                                    variant="outline"
                                                    className="w-full text-xs font-medium h-9 bg-transparent border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600"
                                                >
                                                    <Navigation className="w-3.5 h-3.5 mr-1.5" />
                                                    Rute
                                                </CTAButton>
                                                <CTAButton
                                                    href={`https://wa.me/${outlet.phone}`}
                                                    className="w-full text-xs font-medium h-9"
                                                >
                                                    <Phone className="w-3.5 h-3.5 mr-1.5" />
                                                    Hubungi
                                                </CTAButton>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-20 text-neutral-500"
                            >
                                <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p>Outlet tidak ditemukan</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <p className="text-neutral-500 text-sm">
                        *Jam operasional dapat berubah sewaktu-waktu pada hari libur nasional
                    </p>
                </motion.div>
            </Section>
        </div>
    );
}
