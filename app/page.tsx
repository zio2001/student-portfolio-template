import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HomeSection from "../components/HomeSection";
import NavBar from "../components/NavBar";
import ProjectsSection from "../components/ProjectsSection";

const mainStyle: React.CSSProperties = {
  fontFamily: "Arial, sans-serif",
  color: "#111827",
  backgroundColor: "#f9fafb",
  minHeight: "100vh",
};

const contentStyle: React.CSSProperties = {
  maxWidth: "860px",
  margin: "0 auto",
  padding: "0 24px",
};

export default function Home() {
  return (
    <main style={mainStyle}>
      <NavBar />
      <div style={contentStyle}>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
