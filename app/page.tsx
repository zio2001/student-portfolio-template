import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e9e9e9] text-zinc-900">
      <NavBar />
      <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
        <HeroSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
