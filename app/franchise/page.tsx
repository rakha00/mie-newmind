import Section from '@/components/Section';
import CTAButton from '@/components/CTAButton';
import { BadgeCheck, Banknote, Users } from 'lucide-react';

export default function FranchisePage() {
    const benefits = [
        {
            icon: <Users className="w-12 h-12 text-primary" />,
            title: "Market Luas",
            desc: "Target pasar anak muda & keluarga yang nggak pernah mati. Mie adalah makanan sejuta umat."
        },
        {
            icon: <Banknote className="w-12 h-12 text-primary" />,
            title: "Profit Nendang",
            desc: "HPP rendah, margin tinggi. Balik modal (ROI) relatif cepat dibanding bisnis lain."
        },
        {
            icon: <BadgeCheck className="w-12 h-12 text-primary" />,
            title: "Sistem Auto-Pilot",
            desc: "Kami sediakan SOP, training, dan supply bahan baku. Anda tinggal pantau laporan."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Franchise */}
            <div className="bg-neutral-900 text-white py-24 text-center border-b-8 border-primary">
                <h1 className="text-5xl md:text-7xl font-black italic mb-6">
                    BISNIS MODAL <span className="text-primary">MINIM</span><br />
                    HASIL <span className="text-primary">MAXIMAL</span>
                </h1>
                <p className="text-xl max-w-3xl mx-auto mb-8 px-4 text-neutral-300">
                    Gabung jadi mitra Mie Newmind. Brand viral, sistem teruji, siap cuan!
                </p>
                <CTAButton href="https://wa.me/6281234567890?text=Halo%20min%20tertarik%20franchise" className="text-xl px-10 py-4">
                    Hubungi Tim Franchise
                </CTAButton>
            </div>

            {/* Benefits */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black italic mb-4">KENAPA HARUS MIE NEWMIND?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-neutral-200 text-center hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="flex justify-center mb-6">{benefit.icon}</div>
                            <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                            <p className="text-neutral-600">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Steps */}
            <Section className="bg-neutral-100">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black italic">CARA GABUNG</h2>
                </div>
                <div className="max-w-4xl mx-auto space-y-8">
                    {[
                        "Hubungi WhatsApp Kami",
                        "Diskusi Lokasi & Paket Outlet",
                        "Tanda Tangan Kontrak & Pembayaran",
                        "Renovasi & Training Crew",
                        "Grand Opening & Cuan Melimpah!"
                    ].map((step, idx) => (
                        <div key={idx} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
                                {idx + 1}
                            </div>
                            <div className="text-xl font-bold">{step}</div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <CTAButton href="https://wa.me/6281234567890?text=Halo%20min%20tertarik%20franchise" variant="primary">
                        Daftar Sekarang
                    </CTAButton>
                </div>
            </Section>
        </div>
    );
}
