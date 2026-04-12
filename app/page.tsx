import AboutSection from "@/components/AboutSection";
import CareerSection from "@/components/CareerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ececec] text-zinc-900">
      <NavBar />
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CareerSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
