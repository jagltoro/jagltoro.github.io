import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-base text-primary">
      <Header />
      <main>
        <Hero />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-24 md:gap-20">
          <ExperienceSection />
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
