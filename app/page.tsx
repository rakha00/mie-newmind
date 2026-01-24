import Section from '@/components/Section';
import CTAButton from '@/components/CTAButton';
import Card from '@/components/Card';
import { MENU_ITEMS } from '@/data/menu';
import Image from 'next/image';

export default function Home() {
  // Get 3 best seller items
  const bestSellers = MENU_ITEMS.filter(item => item.isBestSeller).slice(0, 3);

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900 border-b-8 border-primary">
        <div className="absolute inset-0 z-0 opacity-40">
          {/* Placeholder for Hero Image - using gradient for now if no image */}
          <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-black animate-pulse" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <h1 className="text-6xl md:text-8xl font-black italic text-white tracking-tighter drop-shadow-lg">
            PEDASNYA<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-400">
              GA NGOTAK!
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 font-medium max-w-2xl mx-auto">
            Mie viral yang bikin kamu nangis tapi nagih lagi.
            Berani coba level paling ngeri?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <CTAButton href="/menu" className="text-xl px-10 py-4">
              Lihat Menu
            </CTAButton>
            <CTAButton href="/outlet" variant="outline" className="text-xl px-10 py-4 border-white text-white hover:bg-white hover:text-black">
              Cari Outlet
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Produk Highlight */}
      <Section className="bg-neutral-50">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black italic text-neutral-900">
            Paling <span className="text-primary">Dicari</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Awas, menu ini menyebabkan kecanduan akut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              badge="BEST SELLER"
              imageSrc={item.image} // Note: This will need real images or placeholders
              className="hover:scale-105"
            >
              <p className="text-neutral-600 mb-4 line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">
                  Rp {item.price.toLocaleString('id-ID')}
                </span>
                <CTAButton href="/menu" variant="ghost" className="text-sm px-0 hover:bg-transparent hover:text-primary-hover">
                  Detail &rarr;
                </CTAButton>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton href="/menu" variant="outline" className="border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white">
            Lihat Semua Menu
          </CTAButton>
        </div>
      </Section>

      {/* About Section */}
      <Section className="bg-primary text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black italic leading-tight">
              Bukan Sekadar<br />Mie Biasa.
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              Mie Newmind hadir buat lo yang bosen sama makanan yang gitu-gitu aja.
              Kita paduin bumbu rahasia yang rich banget sama cabe pilihan yang pedesnya nampol.
              Tempat nongkrong asik, harga mahasiswa, rasa bintang lima.
            </p>
            <ul className="space-y-3 font-bold text-xl">
              <li className="flex items-center gap-2">🔥 Pedas Berlevel</li>
              <li className="flex items-center gap-2">🎸 Vibes Anak Muda</li>
              <li className="flex items-center gap-2">💰 Dompet Aman</li>
            </ul>
          </div>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden bg-black/20">
            {/* Placeholder for Vibe Image */}
            <div className="absolute inset-0 flex items-center justify-center text-white/50 text-2xl font-bold">
              [FOTO CROWD OUTLET]
            </div>
          </div>
        </div>
      </Section>

      {/* Franchise CTA */}
      <Section className="text-center py-24 bg-neutral-900 text-white">
        <h2 className="text-4xl md:text-6xl font-black italic mb-6">
          Mau Cuan Bareng?
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
          Gabung jadi mitra Mie Newmind sekarang. Sistem gampang, profit nendang.
          Jadilah bos di kotamu sendiri!
        </p>
        <CTAButton href="/franchise" className="text-xl px-12 py-5 shadow-2xl shadow-primary/50 animate-bounce">
          Pengen Punya Outlet!
        </CTAButton>
      </Section>

    </div>
  );
}
