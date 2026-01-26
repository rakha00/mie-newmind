'use client';

import { OUTLETS } from '@/data/outlets';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import CTAButton from '@/components/ui/CTAButton';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function OutletPage() {
    const [currentTime, setCurrentTime] = useState<string>('');

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

    return (
        <div className="min-h-screen">
            <div className="bg-neutral-900 text-white pt-24 pb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-black italic mb-4">LOKASI OUTLET</h1>
                <p className="text-xl opacity-90">Cari yang paling deket, langsung gass!</p>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {OUTLETS.map((outlet) => {
                        const open = isOpen(outlet.openTime, outlet.closeTime);
                        return (
                            <Card key={outlet.id} className="border-2 hover:border-primary">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold">{outlet.name}</h3>
                                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${open ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                        {open ? 'BUKA' : 'TUTUP'}
                                    </span>
                                </div>

                                <div className="space-y-3 text-neutral-600 mb-6">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="shrink-0 w-5 h-5 mt-1" />
                                        <span>{outlet.address}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="shrink-0 w-5 h-5" />
                                        <span>{outlet.openTime} - {outlet.closeTime} WIB</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="shrink-0 w-5 h-5" />
                                        <span>+{outlet.phone}</span>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <CTAButton href={outlet.googleMapsUrl} variant="outline" className="flex-1 text-sm">
                                        Gmaps
                                    </CTAButton>
                                    <CTAButton href={`https://wa.me/${outlet.phone}`} className="flex-1 text-sm">
                                        Hubungi
                                    </CTAButton>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </Section>
        </div>
    );
}
