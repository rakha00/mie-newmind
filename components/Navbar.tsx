'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import CTAButton from './CTAButton';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
    { href: '/', label: 'Beranda' },
    { href: '/menu', label: 'Menu' },
    { href: '/outlet', label: 'Outlet' },
    { href: '/reservasi', label: 'Reservasi' },
    // Franchise moved to CTA button
    { href: '/karir', label: 'Karir' },
    { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                "bg-neutral-900 py-3 md:bg-transparent md:backdrop-blur-none md:shadow-none md:py-2",
                scrolled && "md:bg-neutral-900/95 md:backdrop-blur-md md:shadow-sm md:py-1"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.webp"
                        alt="Mie Newmind Logo"
                        width={150}
                        height={45}
                        className="h-10 md:h-16 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Mobile Glowing CTA */}
                <CTAButton
                    href="/franchise"
                    className="md:hidden text-xs px-3 py-1.5 bg-pink-600 text-white border-none rounded-full animate-pulse shadow-[0_0_15px_rgba(219,39,119,0.7)] ml-auto mr-4"
                >
                    Gabung Franchise
                </CTAButton>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "font-medium hover:text-[#fcc600] transition-colors",
                                pathname === link.href ? "text-[#fcc600] font-bold" : "text-neutral-300"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <CTAButton href="/franchise" className="px-5 py-2 text-sm bg-pink-600 hover:bg-pink-700 text-white border-none">
                        Info Franchise
                    </CTAButton>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-neutral-900 p-6 md:hidden flex flex-col gap-4 shadow-xl border-t border-neutral-800">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "font-medium text-lg py-2",
                                pathname === link.href ? "text-[#fcc600] font-bold" : "text-neutral-300"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    {/* <div className="flex flex-col gap-3 mt-4">
                        <CTAButton href="/franchise" className="w-full bg-pink-600 hover:bg-pink-700 text-white border-none">
                            Info Franchise
                        </CTAButton>
                    </div> */}
                </div>
            )}
        </nav>
    );
}
