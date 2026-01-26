'use client';

import { motion, Variants } from 'framer-motion';
import Section from '@/components/ui/Section';
import { BadgeCheck } from 'lucide-react';
import Image from 'next/image';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const scaleUp: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function FranchiseGalleryAndInvestment() {
    return (
        <Section className="py-12 bg-neutral-900 text-white relative overflow-hidden">
            {/* Background Accents (Gold Glows) */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10 space-y-16">

                {/* GALLERY PHOTOS */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            variants={scaleUp}
                            className="aspect-[4/3] bg-neutral-800 rounded-3xl overflow-hidden relative group border border-neutral-700/50 hover:border-yellow-500/50 transition-all"
                        >
                            <Image
                                src={`/images/franchise/image${i}.webp`}
                                alt={`Franchise Mie Newmind ${i}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-all" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* SHARING PROFIT & FEE SECTION */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    <motion.div variants={fadeInUp} className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-3xl border border-neutral-700 hover:border-yellow-500/30 transition-all text-center flex flex-col justify-center">
                        <h3 className="text-xl text-neutral-400 font-bold mb-2 tracking-widest uppercase">SHARING PROFIT</h3>
                        <p className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-600">70 : 30</p>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="bg-neutral-800/50 backdrop-blur-sm p-8 rounded-3xl border border-neutral-700 hover:border-yellow-500/30 transition-all text-center flex flex-col justify-center">
                        <h3 className="text-xl text-neutral-400 font-bold mb-2 tracking-widest uppercase">FEE KEMITRAAN</h3>
                        <p className="text-3xl md:text-4xl font-black text-white uppercase">Termasuk Paket</p>
                    </motion.div>
                </motion.div>

                {/* PACKAGES */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-center mb-10 italic">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">PILIHAN PAKET</span>
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* JAVA 1.5M */}
                        <motion.div variants={fadeInUp} className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700 relative overflow-hidden group hover:border-yellow-500 transition-all flex flex-col">
                            <h4 className="text-lg font-bold text-yellow-500 tracking-wider mb-2 uppercase">Area Pulau Jawa</h4>
                            <div className="text-5xl font-black text-white mb-6">1.5 M</div>
                            <div className="h-px w-full bg-neutral-700 mb-6"></div>
                            <p className="text-neutral-300 flex items-start gap-3">
                                <BadgeCheck className="w-6 h-6 text-yellow-500 shrink-0" />
                                <span className="text-sm">Menyiapkan Lahan Minimal 500m²</span>
                            </p>
                        </motion.div>

                        {/* JAVA 800JT */}
                        <motion.div variants={fadeInUp} className="bg-gradient-to-b from-yellow-900/20 to-neutral-800 rounded-3xl p-8 border-2 border-yellow-600/50 hover:border-yellow-500 relative overflow-hidden shadow-2xl shadow-yellow-900/10 flex flex-col transform md:-translate-y-4">
                            <h4 className="text-lg font-bold text-yellow-400 tracking-wider mb-2 uppercase">Area Pulau Jawa</h4>
                            <div className="text-5xl font-black text-white mb-6">800 JT</div>
                            <div className="h-px w-full bg-yellow-600/30 mb-6"></div>
                            <p className="text-neutral-200 flex items-start gap-3">
                                <BadgeCheck className="w-6 h-6 text-yellow-400 shrink-0" />
                                <span className="text-sm">Lahan bisa lebih kecil</span>
                            </p>
                        </motion.div>

                        {/* LUAR JAWA 2M */}
                        <motion.div variants={fadeInUp} className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700 relative overflow-hidden group hover:border-yellow-500 transition-all flex flex-col">
                            <h4 className="text-lg font-bold text-yellow-500 tracking-wider mb-2 uppercase">Area Luar Jawa</h4>
                            <div className="text-5xl font-black text-white mb-6">2 M</div>
                            <div className="h-px w-full bg-neutral-700 mb-6"></div>
                            <p className="text-neutral-300 flex items-start gap-3">
                                <BadgeCheck className="w-6 h-6 text-yellow-500 shrink-0" />
                                <span className="text-sm">Menyiapkan Lahan Minimal 500m²</span>
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* ESTIMATION TABLE */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={scaleUp}
                    className="bg-neutral-800 border border-neutral-700 rounded-3xl overflow-hidden"
                >
                    <div className="bg-yellow-500 p-6 text-center">
                        <h2 className="text-xl md:text-2xl font-black text-black italic uppercase tracking-wider">ESTIMASI PERFORMANCE</h2>
                    </div>
                    <div className="p-8 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">OMSET HARIAN</p>
                                <p className="text-2xl md:text-3xl font-black text-white">20.000.000</p>
                            </div>
                            <div className="text-center">
                                <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">PERSENTASE PROFIT</p>
                                <p className="text-2xl md:text-3xl font-black text-green-400">40%</p>
                            </div>
                            <div className="text-center">
                                <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">PROFIT HARIAN</p>
                                <p className="text-2xl md:text-3xl font-black text-white">8.000.000</p>
                            </div>
                            <div className="text-center">
                                <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-2">ESTIMASI PROFIT BULANAN</p>
                                <p className="text-2xl md:text-3xl font-black text-yellow-400">240.000.000</p>
                            </div>
                        </div>

                        <div className="border-t border-neutral-700 pt-6 text-center">
                            <p className="text-base md:text-lg text-neutral-300 font-medium uppercase">
                                ROYALTY FEE MIE NEWMIND: <span className="text-yellow-500 font-bold">10% PROFIT/BULAN</span>
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </Section>
    );
}
