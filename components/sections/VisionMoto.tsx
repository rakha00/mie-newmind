'use client';

import { motion, Variants } from 'framer-motion';

import Section from '@/components/ui/Section';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};


export default function VisionMoto() {
    return (
        <Section className="bg-neutral-900 text-white relative overflow-hidden py-10 md:py-20">
            {/* Ambient Background Lights - Reduced Intensity */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] mix-blend-screen opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[80px] mix-blend-screen opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <motion.div
                className="max-w-6xl mx-auto px-4 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* VISION & MOTO */}
                <div className="grid sm:grid-cols-2 gap-3 md:gap-8">
                    {/* VISION SECTION */}
                    <motion.div
                        className="relative group p-4 md:p-8 bg-neutral-800/50 backdrop-blur-sm rounded-3xl md:rounded-[2.5rem] border border-neutral-700 hover:border-primary/50 transition-colors duration-500 overflow-hidden"
                        variants={itemVariants}
                    >
                        {/* Watermark V */}
                        <div className="absolute -bottom-4 -left-4 text-[6rem] md:text-[10rem] font-black italic text-neutral-800 pointer-events-none select-none opacity-50 group-hover:text-primary/10 transition-colors duration-500">
                            V
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center h-full justify-start space-y-1">
                            <div>
                                <h2 className="text-xl md:text-3xl font-black italic mb-2 tracking-wide text-primary">VISI</h2>
                                <div className="h-1 w-10 md:w-16 bg-primary mx-auto rounded-full mb-3 md:mb-4"></div>
                                <p className="text-md md:text-xl font-black leading-relaxed text-neutral-200">
                                    "Menjadi Merk Restoran Mie Pedas no 1 dengan kepuasan dan pelayanan terbaik di Indonesia."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* MOTO SECTION */}
                    <motion.div
                        className="relative group p-4 md:p-8 bg-neutral-800/50 backdrop-blur-sm rounded-3xl md:rounded-[2.5rem] border border-neutral-700 hover:border-yellow-500/50 transition-colors duration-500 overflow-hidden"
                        variants={itemVariants}
                    >
                        {/* Watermark M */}
                        <div className="absolute -top-4 -right-4 text-[6rem] md:text-[10rem] font-black italic text-neutral-800 pointer-events-none select-none opacity-50 group-hover:text-yellow-500/10 transition-colors duration-500">
                            M
                        </div>

                        <div className="relative z-10 flex flex-col items-center text-center h-full justify-start space-y-1">
                            <div>
                                <h2 className="text-xl md:text-3xl font-black italic mb-2 tracking-wide text-yellow-500">MOTO</h2>
                                <div className="h-1 w-10 md:w-16 bg-yellow-500 mx-auto rounded-full mb-3 md:mb-4"></div>
                                <p className="text-lg md:text-4xl font-black italic text-white drop-shadow-lg">
                                    "Kenyang & Hemat"
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
}
