import { FeedbackSection, HeroSection, Projects, Services } from "@/components";

export default function Home() {
  return (
    <main className="m-10 mx-auto w-full lg:max-w-7xl">
      <HeroSection />

      <Projects />

      <Services />

      <FeedbackSection />
    </main>
  );
}
