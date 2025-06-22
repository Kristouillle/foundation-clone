import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { CTA1 } from "@/components/sections/cta";
import { News } from "@/components/sections/news";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between w-full">
      <Hero />
      <Features />
      <CTA1 />
      {/*<JobOpenings/>*/}
      {/*<Spotlight/>*/}
      {/*<Testimonials/>*/}
      <News />
      {/*<CTA2/>*/}
    </main>
  );
}
