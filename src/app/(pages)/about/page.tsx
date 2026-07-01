import AiLabSection from "@/src/app/_shared/components/AiLabSection";
import WhoAreWe from "@/src/app/_shared/components/WhoAreWe";
import OurMissions from "./_components/OurMissions/OurMissions";
import OurValues from "./_components/OurValues";

function Page() {
  return (
    <main className="min-h-screen bg-black pt-10 overflow-hidden">
      <WhoAreWe />
      <AiLabSection />
      <OurMissions />
      <OurValues />
    </main>
  );
}

export default Page;
