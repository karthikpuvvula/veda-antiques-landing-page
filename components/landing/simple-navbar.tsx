"use client";

import Link from 'next/link';
import Image from 'next/image';

export function SimpleNavbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 group">
                <Image
                    src="/images/logo.webp"
                    alt="Veda Antiques Logo"
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                />
                <div className="flex flex-col">
                    <span className="font-cinzel text-lg md:text-xl text-veda-charcoal tracking-wide group-hover:text-veda-gold-dark transition-colors">VEDA</span>
                    <span className="font-cinzel text-xs text-veda-gold-dark tracking-[0.2em] -mt-1 group-hover:text-veda-charcoal transition-colors">ANTIQUES</span>
                </div>
            </Link>

            <Link
                href="/"
                className="font-montserrat text-xs md:text-sm font-medium uppercase tracking-widest text-veda-charcoal hover:text-veda-gold-dark transition-colors border-b border-transparent hover:border-veda-gold-dark pb-1"
            >
                Back to Home
            </Link>
        </nav>
    );
}
