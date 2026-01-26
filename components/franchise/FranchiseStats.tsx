'use client';

import { motion, Variants } from 'framer-motion';
import Section from '@/components/ui/Section';
import { GridPattern, DotPattern } from '@/components/ui/GridPattern';
import { BadgeCheck } from 'lucide-react';

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

const timelineItemLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const timelineItemRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function FranchiseStats() {
    return (
        <Section className="bg-neutral-50 text-neutral-900 py-10 md:py-10 relative overflow-hidden">
            <div className="absolute inset-0">
                <DotPattern className="opacity-30" width={20} height={20} cx={1} cy={1} cr={1} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* STATS HEADER */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                    className="mb-10"
                >
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-black italic leading-tight mb-4">
                            SPICY NOODLES WITH<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">A SECRET RECIPE</span>
                        </h1>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {/* Card 1: Since */}
                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-200/50 flex flex-col items-center justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
                            <span className="text-sm font-bold tracking-[0.3em] text-neutral-400 mb-2">ESTABLISHED</span>
                            <span className="text-5xl font-black text-neutral-900">2021</span>
                            <div className="mt-4 px-4 py-1 bg-neutral-100 rounded-full text-xs font-bold text-neutral-500">SEJAK TAHUN 2021</div>
                        </motion.div>

                        {/* Card 2: Partners (Featured) */}
                        <motion.div variants={fadeInUp} className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 rounded-3xl shadow-xl shadow-neutral-900/20 flex flex-col items-center justify-center relative overflow-hidden md:-mt-8 md:mb-8 transform md:scale-110 z-10">
                            <div className="absolute inset-0 opacity-20">
                                <GridPattern width={20} height={20} className="stroke-white/20" />
                            </div>
                            <span className="text-sm font-bold tracking-[0.3em] text-yellow-500 mb-2 relative z-10">TOTAL MITRA</span>
                            <span className="text-6xl font-black text-white relative z-10">500++</span>
                            <span className="text-neutral-400 mt-2 font-medium relative z-10">Tersebar di Indonesia</span>
                        </motion.div>

                        {/* Card 3: Growth */}
                        <motion.div variants={fadeInUp} className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-xl shadow-neutral-200/50 flex flex-col items-center justify-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-tr-full -ml-8 -mb-8 opacity-50 group-hover:scale-110 transition-transform"></div>
                            <span className="text-sm font-bold tracking-[0.3em] text-neutral-400 mb-2">ALWAYS GROW</span>
                            <span className="text-5xl font-black text-primary">BIG!</span>
                            <div className="mt-4 px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">SELALU BERKEMBANG</div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* TIMELINE */}
                <div className="max-w-4xl mx-auto mt-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-black italic text-center mb-12 text-neutral-900"
                    >
                        PERJALANAN KAMI
                    </motion.h2>

                    <div className="relative">
                        {/* Vertical Line - Mobile (Left) & Desktop (Center) */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute left-5 top-0 bottom-0 w-1 bg-neutral-200 md:left-1/2 md:-ml-0.5"
                        ></motion.div>

                        <div className="space-y-12 relative">
                            {/* 2021 */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={timelineItemLeft}
                                className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center"
                            >
                                <div className="md:text-right">
                                    <span className="inline-block px-4 py-1 bg-white text-neutral-900 font-bold rounded-full mb-2 border border-neutral-200 shadow-sm">2021</span>
                                    <h3 className="text-2xl font-bold mb-2 text-primary">Awal Perjalanan</h3>
                                </div>
                                <div className="absolute left-[11px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-primary rounded-full border-4 border-neutral-50 z-10"></div>
                                <div>
                                    <p className="text-neutral-600">Mie Newmind berhasil tumbuh dan berinovasi ditengah persaingan ketat dalam Bisnis FnB Indonesia.</p>
                                </div>
                            </motion.div>

                            {/* 2022-2023 */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={timelineItemRight}
                                className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center"
                            >
                                <div className="md:order-2">
                                    <span className="inline-block px-4 py-1 bg-white text-neutral-900 font-bold rounded-full mb-2 border border-neutral-200 shadow-sm">2022 - 2023</span>
                                    <h3 className="text-2xl font-bold mb-2 text-primary">Pertumbuhan & Dominasi</h3>
                                </div>
                                <div className="absolute left-[11px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-primary rounded-full border-4 border-neutral-50 z-10 md:order-1"></div>
                                <div className="md:order-1 md:text-right">
                                    <p className="text-neutral-600">Mie Newmind berhasil tumbuh sesuai target dan mempunyai 500+ kemitraan berbentuk outlet kecil yang tersebar di seluruh Indonesia. Kuota kemitraan outlet kecil habis dan ditutup.</p>
                                </div>
                            </motion.div>

                            {/* 2024 */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={timelineItemLeft}
                                className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center"
                            >
                                <div className="md:text-right">
                                    <span className="inline-block px-4 py-1 bg-white text-neutral-900 font-bold rounded-full mb-2 border border-neutral-200 shadow-sm">2024</span>
                                    <h3 className="text-2xl font-bold mb-2 text-primary">Ekspansi & Scale Up</h3>
                                </div>
                                <div className="absolute left-[11px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-primary rounded-full border-4 border-neutral-50 z-10"></div>
                                <div>
                                    <p className="text-neutral-600">Mie Newmind Scale Up dan membuka peluang kemitraan berbentuk Restoran. Target maksimal hanya dibuka <span className="font-bold text-primary">200 Kuota</span>.</p>
                                </div>
                            </motion.div>

                            {/* 2025-2026 */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={timelineItemRight}
                                className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center"
                            >
                                <div className="md:order-2">
                                    <span className="inline-block px-4 py-1 bg-secondary text-neutral-900 font-bold rounded-full mb-2">2025 - 2026</span>
                                    <h3 className="text-2xl font-bold mb-2 text-yellow-600">Visi Masa Depan</h3>
                                </div>
                                <div className="absolute left-[11px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-secondary rounded-full border-4 border-neutral-50 z-10 md:order-1 animate-pulse"></div>
                                <div className="md:order-1 md:text-right">
                                    <p className="text-neutral-600 italic">"Kami akan terus berinovasi untuk menjadi market leader yang tak tergoyahkan."</p>
                                </div>
                            </motion.div>

                            {/* 2021-2026 Summary - REDESIGNED */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative text-center md:col-span-2"
                            >
                                <div className="p-5 bg-white shadow-2xl shadow-neutral-200/50 border-l-8 border-primary rounded-r-3xl flex flex-col md:flex-row items-center gap-6 relative group hover:-translate-y-1 transition-transform duration-300">
                                    <p className="text-xl md:text-2xl font-bold italic text-neutral-800 leading-relaxed text-left">
                                        "Mie Newmind Berhasil Tumbuh Dan Berinovasi Ditengah Persaingan Ketat Dalam Bisnis FnB Indonesia."
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
