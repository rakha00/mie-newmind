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
    { href: '/franchise', label: 'Franchise' },
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
                <Link href="/" className="hidden md:flex items-center">
                    <Image
                        src="/images/logo.webp"
                        alt="Mie Newmind Logo"
                        width={200}
                        height={60}
                        className="h-16 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "font-medium hover:text-primary transition-colors",
                                pathname === link.href ? "text-primary font-bold" : "text-neutral-300"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <CTAButton href="/reservasi" className="px-5 py-2 text-sm">
                        Reservasi
                    </CTAButton>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-neutral-900 p-6 md:hidden flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "font-medium text-lg py-2",
                                pathname === link.href ? "text-primary font-bold" : "text-neutral-300"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <CTAButton href="/reservasi" className="w-full mt-4">
                        Reservasi Sekarang
                    </CTAButton>
                </div>
            )}
        </nav>
    );
}
