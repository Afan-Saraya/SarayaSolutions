import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Products from "@/components/sections/Products";
import Technologies from "@/components/sections/Technologies";
import CTA from "@/components/sections/CTA";
import Partners from "@/components/sections/Partners";
import HomeAnimations from "@/components/animations/HomeAnimations";

export default function Home() {
  return (
    <>
      <HomeAnimations />
      <Hero />
      <Features />
      <Products />
      <Technologies />
      <Partners />
      <CTA />
    </>
  );
}
