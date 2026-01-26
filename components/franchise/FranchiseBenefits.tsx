'use client';

import { motion, Variants } from 'framer-motion';
import Section from '@/components/ui/Section';
import { BadgeCheck, ShieldCheck, Users, Box, BarChart3, Scale } from 'lucide-react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function FranchiseBenefits() {
    const benefits = [
        {
            title: "Reputasi Brand",
            desc: "Merek Sudah Terkenal Dan Jelas",
            icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-primary" />,
            color: "bg-primary/10"
        },
        {
            title: "Dukungan Penuh",
            desc: "Mendapatkan Dukungan Dan Pelatihan Dari Pihak Mie Newmind",
            icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />,
            color: "bg-blue-500/10"
        },
        {
            title: "Paket All-In One",
            desc: "Restoran Sudah Siap, Termasuk:",
            icon: <Box className="w-8 h-8 md:w-10 md:h-10 text-green-500" />,
            color: "bg-green-500/10",
            list: [
                "Pembangunan Restoran",
                "Perlengkapan Restoran (Meja, Kursi, Kitchen, Alat Makan, Bahan Baku Mie)",
                "Mural & Dekorasi",
                "Neon Box Besar",
                "Buku Menu & Materi Promosi",
                "Mesin Kasir (POS) & Tab",
                "Seragam Karyawan",
                "Pemasangan Listrik & Air",
                "Peralatan Elektronik & Non Elektronik",
                "Promosi Pembukaan Restoran"
            ]
        },
        {
            title: "Sistem Manajemen",
            desc: "Adanya Support Sistem Manajemen Terpusat",
            icon: <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-purple-500" />,
            color: "bg-purple-500/10"
        },
        {
            title: "Legalitas & Halal",
            desc: "Sudah Ada Sertifikasi Halal Dan Ijin Merek HAKI",
            icon: <Scale className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />,
            color: "bg-orange-500/10"
        },
    ];

    return (
        <Section className="bg-white py-12 md:py-24 overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black italic mb-4 text-neutral-900"
                    >
                        KEUNTUNGAN <span className="text-primary">MITRA</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-neutral-600 text-lg"
                    >
                        Apa saja yang anda dapatkan jika bergabung?
                    </motion.p>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {benefits.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className={`group p-6 rounded-3xl border border-neutral-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-white relative overflow-hidden ${item.list ? 'md:col-span-2' : ''}`}
                        >
                            <div className={`absolute top-0 right-0 p-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${item.color.replace('/10', '/30')}`}></div>

                            <div className="flex flex-col md:flex-row gap-6 relative z-10">
                                <div className={`shrink-0 w-16 h-16 md:w-20 md:h-20 ${item.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl md:text-2xl text-neutral-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-neutral-600 mb-4 text-base md:text-lg leading-relaxed">{item.desc}</p>

                                    {item.list && (
                                        <div className="bg-neutral-50 rounded-2xl p-6 mt-4 border border-neutral-100">
                                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                                {item.list.map((li, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-neutral-600 text-sm md:text-base">
                                                        <BadgeCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>{li}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
