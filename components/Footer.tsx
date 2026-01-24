import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-neutral-950 text-white py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

                    <div className="col-span-1 md:col-span-2">
                        <div className="inline-block rounded-2xl bg-transparent">
                            <Image
                                src="/images/logo.webp"
                                alt="Mie Newmind Logo"
                                width={300}
                                height={90}
                                className="h-24 w-auto object-contain"
                            />
                        </div>
                        <p className="text-neutral-400 max-w-sm mb-6">
                            Pelopor mie pedas yang bikin kamu tobat tapi besoknya kumat lagi.
                            Rasanya nendang, harganya nggak bikin nendang dompet.
                        </p>
                        <div className="text-sm text-neutral-500">
                            © {new Date().getFullYear()} Mie Newmind. Hak cipta dilindungi (dari tuyul).
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Menu Favorit</h3>
                        <ul className="space-y-2 text-neutral-400">
                            <li><Link href="/menu" className="hover:text-primary transition-colors">Mie Iblis</Link></li>
                            <li><Link href="/menu" className="hover:text-primary transition-colors">Mie Setan</Link></li>
                            <li><Link href="/menu" className="hover:text-primary transition-colors">Es Genderuwo</Link></li>
                            <li><Link href="/menu" className="hover:text-primary transition-colors">Dimsum</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Info Lain</h3>
                        <ul className="space-y-2 text-neutral-400">
                            <li><Link href="/outlet" className="hover:text-primary transition-colors">Lokasi Outlet</Link></li>
                            <li><Link href="/franchise" className="hover:text-primary transition-colors">Jadi Mitra</Link></li>
                            <li><Link href="/karir" className="hover:text-primary transition-colors">Lowongan Kerja</Link></li>
                            <li><a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Kontak Kami</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}
