import SEO from "../components/SEO";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Player from "../components/Player";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  const streamUrl = "/radioSpot.mp3";
  return (
    <>
      <SEO title="Newtelco Radio" />
      <Header />
      <Hero />
      <Player streamUrl={streamUrl} />
      <Features />
      <Steps />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
