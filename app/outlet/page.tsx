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
        <div className="min-h-screen bg-neutral-50">
            {/* Header Section from Menu Template */}
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

                <div className="relative z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-black italic mb-3 tracking-tight drop-shadow-lg">
                        LOKASI OUTLET
                    </h1>
                    <p className="text-base md:text-xl font-semibold text-neutral-300">
                        Temukan outlet Mie Newmind terdekat dengan lokasi Anda.
                    </p>
                </div>
            </div>

            <Section className="relative z-20 -mt-10 pt-16 pb-8 md:pb-8">
                {/* Search and Sort Controls */}
                <div className="max-w-7xl mx-auto px-4 mb-8">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white/80 backdrop-blur-md border border-neutral-200 p-4 rounded-2xl shadow-sm">
                        <div className="relative w-full sm:max-w-md">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                            <input
                                type="text"
                                placeholder="Cari outlet (nama atau alamat)..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-neutral-50 border border-neutral-200 text-sm rounded-xl py-2.5 pl-10 pr-4 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-inner"
                            />
                        </div>
                        <button
                            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm font-medium text-neutral-600 hover:text-primary hover:border-primary/30 transition-colors w-full sm:w-auto justify-center shadow-sm"
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
                                        <div className="relative h-full bg-white border border-neutral-200 rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                            {/* Header */}
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors">
                                                        {outlet.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2 mt-1.5">
                                                        <div className={`w-2 h-2 rounded-full ${open ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                                                        <span className={`text-xs font-bold uppercase tracking-wider ${open ? 'text-green-600' : 'text-red-500'}`}>
                                                            {open ? 'Buka Sekarang' : 'Tutup'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="space-y-4 mb-6 flex-grow">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0">
                                                        <MapPin className="w-4 h-4 text-neutral-500" />
                                                    </div>
                                                    <span className="text-sm text-neutral-600 leading-snug line-clamp-2 mt-1">
                                                        {outlet.address}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0">
                                                        <Clock className="w-4 h-4 text-neutral-500" />
                                                    </div>
                                                    <span className="text-sm text-neutral-600 mt-0.5">
                                                        {outlet.openTime} - {outlet.closeTime} WIB
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="grid grid-cols-2 gap-3 mt-auto border-t border-neutral-100 pt-4">
                                                {outlet.googleMapsUrl ? (
                                                    <CTAButton
                                                        href={outlet.googleMapsUrl}
                                                        variant="outline"
                                                        className="w-full text-xs font-bold h-10 bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-900 shadow-sm"
                                                    >
                                                        <Navigation className="w-3.5 h-3.5 mr-1.5" />
                                                        Rute
                                                    </CTAButton>
                                                ) : (
                                                    <div className="hidden" />
                                                )}

                                                {outlet.phone ? (
                                                    <CTAButton
                                                        href={`https://wa.me/${outlet.phone}`}
                                                        className={`w-full text-xs font-bold h-10 shadow-md shadow-primary/20 ${!outlet.googleMapsUrl ? 'col-span-2' : ''}`}
                                                    >
                                                        <Phone className="w-3.5 h-3.5 mr-1.5" />
                                                        Hubungi
                                                    </CTAButton>
                                                ) : (
                                                    <div className="hidden" />
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-20 text-neutral-400"
                            >
                                <Search className="w-16 h-16 mx-auto mb-4 opacity-20 text-neutral-300" />
                                <p className="text-lg font-medium text-neutral-500">Outlet tidak ditemukan</p>
                                <p className="text-sm text-neutral-400 mt-1">Coba kata kunci lain</p>
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
                    <p className="text-neutral-400 text-xs italic">
                        *Jam operasional dapat berubah sewaktu-waktu pada hari libur nasional
                    </p>
                </motion.div>
            </Section>
        </div>
    );
}
