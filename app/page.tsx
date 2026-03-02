import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialisation from "./components/Specialisation";
import HowWereDifferent from "./components/HowWereDifferent";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Specialisation />
        <HowWereDifferent />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
