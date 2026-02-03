import { CAREERS } from '@/data/careers';
import Section from '@/components/ui/Section';
import CTAButton from '@/components/ui/CTAButton';
import { Briefcase, MapPin } from 'lucide-react';

export default function KarirPage() {
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
                        GABUNG TIM KAMI
                    </h1>
                    <p className="text-base md:text-xl font-semibold text-neutral-300">
                        Kerja seru, tim gokil, gaji aman.
                    </p>
                </div>
            </div>

            <Section className="relative z-20 -mt-10 pt-20 pb-8 md:pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CAREERS.map((job) => (
                        <div key={job.id} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-all flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">{job.position}</h3>
                                    <div className="flex items-center gap-2 text-primary font-medium">
                                        <MapPin size={18} />
                                        {job.location} ({job.type})
                                    </div>
                                </div>
                                <div className="bg-neutral-100 p-3 rounded-full">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                            </div>

                            <p className="text-neutral-600 mb-6">
                                {job.description}
                            </p>

                            <div className="mb-8 flex-grow">
                                <h4 className="font-bold mb-2">Syarat:</h4>
                                <ul className="list-disc pl-5 text-neutral-600 space-y-1">
                                    {job.requirements.map((req, idx) => (
                                        <li key={idx}>{req}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <CTAButton
                                    href={`https://wa.me/${job.whatsapp}?text=Halo%20min%20saya%20tertarik%20lamar%20${job.position}`}
                                    variant="outline"
                                    className="w-full justify-center"
                                >
                                    Lamar via WhatsApp
                                </CTAButton>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
