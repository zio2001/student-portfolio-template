import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HomeSection from "../components/HomeSection";
import NavBar from "../components/NavBar";
import ProjectsSection from "../components/ProjectsSection";
import StrengthSection from "../components/StrengthSection";
import VisualKeywordsSection from "../components/VisualKeywordsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-zinc-900">
      <NavBar />
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-10">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <VisualKeywordsSection />
        <StrengthSection />
        <ContactSection />
      </div>
    </main>
  );
}
