import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Features from "../components/Features";
import Steps from "../components/Steps";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <SEO title="Newtelco Radio" />
      <Header />
      <Hero />
      <Features />
      <Steps />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
