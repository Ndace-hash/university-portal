import { Header } from "../header";
import { HeroSection } from "../hero-section";
import { LatestNews } from "../latest-news";
import { UpcomingEvents } from "../upcoming-events";
import { Footer } from "../footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LatestNews />
      <UpcomingEvents />
      <Footer/>
    </main>
  );
}
