export function Gallery() {
  const images = [
    'https://placehold.co/600x600/e0e0e0/333333?text=Lifestyle+1',
    'https://placehold.co/600x600/d4d4d4/333333?text=Accessories',
    'https://placehold.co/600x600/c9c9c9/333333?text=Workspace',
    'https://placehold.co/600x600/bdbdbd/333333?text=Lifestyle+2',
  ];

  return (
    <section className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 md:mb-20 text-center">
          <p className="mb-3 md:mb-4 text-xs font-bold uppercase tracking-[0.2em] text-veda-charcoal/60">
            FOLLOW OUR
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-veda-gold-dark tracking-tight">
            LAUNCH
          </h2>
          <p className="mt-6 md:mt-8 mx-auto max-w-2xl text-center text-veda-charcoal/80 font-light leading-relaxed text-sm md:text-base">
            Grounds beans extraction, chicory, that, whipped dark
            acerbic in steamed kopi-luwak.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="aspect-square w-full overflow-hidden bg-gray-100 group">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-veda-charcoal/40">@USERNAME</p>
        </div>

      </div>
    </section>
  );
}
