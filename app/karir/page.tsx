import { CAREERS } from '@/data/careers';
import Section from '@/components/Section';
import CTAButton from '@/components/CTAButton';
import { Briefcase, MapPin } from 'lucide-react';

export default function KarirPage() {
    return (
        <div className="min-h-screen bg-neutral-50">
            <div className="bg-primary pt-24 pb-12 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-black italic mb-4">GABUNG TIM KAMI</h1>
                <p className="text-xl opacity-90">Kerja seru, tim gokil, gaji aman.</p>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CAREERS.map((job) => (
                        <div key={job.id} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-all">
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

                            <div className="mb-8">
                                <h4 className="font-bold mb-2">Syarat:</h4>
                                <ul className="list-disc pl-5 text-neutral-600 space-y-1">
                                    {job.requirements.map((req, idx) => (
                                        <li key={idx}>{req}</li>
                                    ))}
                                </ul>
                            </div>

                            <CTAButton
                                href={`https://wa.me/${job.whatsapp}?text=Halo%20min%20saya%20tertarik%20lamar%20${job.position}`}
                                variant="outline"
                                className="w-full"
                            >
                                Lamar via WhatsApp
                            </CTAButton>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
