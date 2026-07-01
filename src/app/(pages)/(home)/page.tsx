import HomeHero from "./_components/HomeHero";
import HomeStats from "./_components/HomeStats";
import AiLabSection from "../../_shared/components/AiLabSection";
import WhoAreWe from "../../_shared/components/WhoAreWe";
import Projects from "./_components/Projects";
import LatestNews from "./_components/LatestNews/LatestNews";
import ApplicationForm from "./_components/apply/ApplicationForm/ApplicationForm";
import Links from "./_components/Links/Links";

export default function Home() {
  return (
    <main className="min-h-screen bg-black pt-10 overflow-hidden">
      <HomeHero />
      <HomeStats />
      <AiLabSection />
      <WhoAreWe />
      <Projects />
      <LatestNews />
      <ApplicationForm />
      <Links />
    </main>
  );
}
