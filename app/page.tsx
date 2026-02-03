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
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/bg1.webp"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 pt-16 max-w-5xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-8xl font-black italic text-yellow-400 tracking-tighter drop-shadow-2xl">
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

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl -z-10" />
            <p className="text-lg md:text-xl text-white font-medium px-5 py-3 leading-relaxed drop-shadow-md border border-white/10 rounded-2xl shadow-xl">
              <span className="font-bold text-yellow-400">Mie viral</span> yang menghadirkan perpaduan sempurna <span className="font-bold text-red-500">pedas</span> bikin nagih, rasa bikin puas, dan harga tetap <span className="font-bold text-green-400">hemat</span>!
            </p>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            {/* Primary CTA with Icon */}
            <a
              href="/menu"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 text-xl font-black rounded-2xl bg-primary text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(228,59,138,0.6)] active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Lihat Menu</span>
              <svg className="relative w-6 h-6 transition-transform translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Secondary CTA with Icon */}
            <a
              href="/outlet"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 text-xl font-black rounded-2xl bg-white/10 backdrop-blur-md text-white border-2 border-white/30 overflow-hidden transition-all duration-300 hover:bg-white hover:text-neutral-900 hover:scale-105 hover:border-white active:scale-95"
            >
              <svg className="relative w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="relative">Cari Outlet</span>
            </a>
          </div>

          {/* Decorative Bottom Line */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-white/50 rounded-full" />
            <div className="h-2 w-2 bg-primary rounded-full shadow-[0_0_20px_rgba(228,59,138,0.5)]" />
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-white/50 rounded-full" />
          </div>
        </div>
      </div>

      {/* Product Highlight Section */}
      <Section className="bg-neutral-900 border-b py-10 md:py-10 border-neutral-800">
        <div className="text-center mb-8 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black italic text-white">
            Paling <span className="text-primary">Dicari</span>
          </h2>
          <p className="text-lg text-neutral-400">
            Awas, menu ini menyebabkan kecanduan akut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {bestSellers.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              badge="BEST SELLER"
              imageSrc={item.image}
              isDark={true}
            >
              {item.description}
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton href="/menu" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            Lihat Semua Menu
          </CTAButton>
        </div>
      </Section>

      {/* Instagram Feed Section */}
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

      {/* Franchise CTA Section */}
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
