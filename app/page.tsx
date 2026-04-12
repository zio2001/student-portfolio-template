import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";
import StrengthSection from "@/components/StrengthSection";
import VisualKeywordsSection from "@/components/VisualKeywordsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-10 md:px-8 md:pt-14 lg:px-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <VisualKeywordsSection />
        <StrengthSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
