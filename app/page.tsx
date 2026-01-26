import Section from '@/components/ui/Section';
import CTAButton from '@/components/ui/CTAButton';
import Card from '@/components/ui/Card';
import { MENU_ITEMS } from '@/data/menu';
import Image from 'next/image';
import InstagramFeed from '@/components/sections/InstagramFeed';
import { INSTAGRAM_POSTS } from '@/data/instagram';
import BackgroundAccessories from '@/components/ui/BackgroundAccessories';

export default function Home() {
  // Get 3 best seller items
  const bestSellers = MENU_ITEMS.filter(item => item.isBestSeller).slice(0, 3);

  // Use static Instagram posts
  const instagramPosts = INSTAGRAM_POSTS;

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900 border-b-8 border-primary pt-10 md:pt-0">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/bg1.webp"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <h1 className="text-6xl md:text-8xl font-black italic text-yellow-400 tracking-tighter drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-400 from-40% to-yellow-600">
              RASANYA
            </span><br />
            <span className="px-3 text-transparent bg-clip-text bg-gradient-to-b from-primary from-40% to-pink-600">
              TIDAK
            </span><br className='md:hidden' />
            <span className="px-3 text-transparent bg-clip-text bg-gradient-to-b from-primary from-40% to-pink-600">
              KORUPSI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-200 font-medium max-w-2xl mx-auto text-shadow-sm text-shadow-black">
            <span className="font-bold text-yellow-500">Mie viral</span> yang menghadirkan perpaduan sempurna: <span className="font-bold text-red-500">pedas</span> bikin nagih, rasa bikin puas, dan harga tetap <span className="font-bold text-green-500">hemat</span>!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
      <Section className="bg-neutral-900 border-b py-10 md:py-10 border-neutral-800">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black italic text-white">
            Paling <span className="text-primary">Dicari</span>
          </h2>
          <p className="text-lg text-neutral-400">
            Awas, menu ini menyebabkan kecanduan akut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              badge="BEST SELLER"
              imageSrc={item.image}
              className="hover:scale-105 bg-neutral-800 border-neutral-700 hover:shadow-primary/20"
            >
              <p className="text-neutral-300 mb-4 line-clamp-2">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">
                  Rp {item.price.toLocaleString('id-ID')}
                </span>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton href="/menu" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            Lihat Semua Menu
          </CTAButton>
        </div>
      </Section>

      {/* Instagram Feed */}
      <Section className="bg-primary text-white py-10 md:py-10 relative overflow-hidden">
        <BackgroundAccessories />

        <div className="text-center mb-12 space-y-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black italic">
            Pantau Terus <span className="text-white drop-shadow-md">Keseruan Kami!</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Jangan sampai ketinggalan promo gila-gilaan dan momen seru di outlet kami. Intip langsung di Instagram!
          </p>
        </div>

        {/* Feed Grid */}
        <div className="container mx-auto max-w-6xl px-4 mb-10">
          <InstagramFeed posts={instagramPosts} />
        </div>

        <div className="text-center">
          <a
            href="https://instagram.com/mienewmind/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-full font-bold hover:bg-neutral-100 transition-colors shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            Follow @mienewmind
          </a>
        </div>
      </Section>

      {/* Franchise CTA */}
      <Section className="text-center py-24 bg-neutral-900 text-white">
        <h2 className="text-4xl md:text-6xl font-black italic mb-6">
          Mau Cuan Bareng?
        </h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
          Gabung jadi mitra Mie Newmind sekarang. Peluang Usaha FnB yang Terbukti Dapat Bertumbuh dengan Baik
        </p>
        <CTAButton href="/franchise" className="text-xl px-12 py-5 shadow-2xl shadow-primary/50 animate-bounce">
          Pengen Punya Franchise!
        </CTAButton>
      </Section>

    </div>
  );
}
