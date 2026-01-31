import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
// import { Gallery } from "@/components/landing/gallery";
import { Notify } from "@/components/landing/notify";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <About />
      {/* <Gallery /> */}
      <Notify />
    </main>
  );
}
