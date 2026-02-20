import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-veda-beige flex flex-col items-center justify-center px-4 text-center">
            <p className="font-cinzel text-veda-gold tracking-[0.3em] text-xs uppercase mb-4">
                Page Not Found
            </p>
            <h1 className="font-serif text-6xl sm:text-8xl text-veda-charcoal mb-4">
                404
            </h1>
            <p className="font-montserrat text-veda-charcoal/70 text-lg max-w-md mb-10 leading-relaxed">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                className="font-cinzel text-sm tracking-widest uppercase border border-veda-charcoal px-8 py-3 text-veda-charcoal hover:bg-veda-charcoal hover:text-white transition-colors duration-300"
            >
                Return Home
            </Link>
        </div>
    );
}
