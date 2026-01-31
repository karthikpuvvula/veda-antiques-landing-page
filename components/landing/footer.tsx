import React from 'react';

export function Footer() {
    return (
        <footer className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-white/20 uppercase tracking-[0.2em] gap-6 font-montserrat">
            <p>© COPYRIGHT 2026 VEDA ANTIQUES</p>
            <div className="flex gap-8">
                <a href="#" className="hover:text-veda-gold transition-colors">Terms</a>
                <a href="#" className="hover:text-veda-gold transition-colors">Privacy</a>
                <a href="#" className="hover:text-veda-gold transition-colors">Credits</a>
            </div>
        </footer>
    );
}
