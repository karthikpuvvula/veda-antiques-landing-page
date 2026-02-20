"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-veda-beige flex flex-col items-center justify-center px-4 text-center">
            <p className="font-cinzel text-veda-gold tracking-[0.3em] text-xs uppercase mb-4">
                Something Went Wrong
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl text-veda-charcoal mb-4">
                Error
            </h1>
            <p className="font-montserrat text-veda-charcoal/70 text-lg max-w-md mb-10 leading-relaxed">
                An unexpected error has occurred. Please try again.
            </p>
            <button
                onClick={reset}
                className="font-cinzel text-sm tracking-widest uppercase border border-veda-charcoal px-8 py-3 text-veda-charcoal hover:bg-veda-charcoal hover:text-white transition-colors duration-300 cursor-pointer"
            >
                Try Again
            </button>
        </div>
    );
}
