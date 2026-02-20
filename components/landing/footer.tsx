import Link from 'next/link';

type FooterProps = {
    variant?: 'light' | 'dark';
};

export function Footer({ variant = 'dark' }: FooterProps) {
    const isLight = variant === 'light';
    const textColor = isLight ? 'text-veda-charcoal/60' : 'text-white/20';
    const hoverColor = 'hover:text-veda-gold transition-colors';
    const borderColor = isLight ? 'border-veda-gold/20' : 'border-white/5';

    return (
        <footer className={`mt-24 pt-8 pb-4 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs ${textColor} uppercase tracking-[0.2em] gap-4 md:gap-6 font-montserrat`}>
            <p>&copy; COPYRIGHT 2026 VEDA ANTIQUES</p>
            <nav className="flex gap-6 md:gap-8 items-center" aria-label="Footer navigation">
                <Link href="/terms-of-use" className={hoverColor}>Terms</Link>
                <Link href="/privacy-policy" className={hoverColor}>Privacy</Link>
                <span className={hoverColor}>Developed by Karthik Puvvula</span>
            </nav>
        </footer>
    );
}
