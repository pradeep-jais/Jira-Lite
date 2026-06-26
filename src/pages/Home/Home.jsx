import FeatureSection from "../../components/landing/FeatureSection";
import FinalCTA from "../../components/landing/FinalCTA";
import Footer from "../../components/landing/Footer";
import HeroSection from "../../components/landing/HeroSection";
import HowItWorks from "../../components/landing/HowItWorks";
import LandingNav from "../../components/landing/LandingNav";
import TechStack from "../../components/landing/TechStack";
import Button from "../../components/ui/Button";

const Home = () => {
  return (
    <main>
      <LandingNav />
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <TechStack />
      <FinalCTA />
      <Footer />
    </main>
  );
};
export default Home;
