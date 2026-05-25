import FeatureSection from "../../components/landing/FeatureSection";
import HeroSection from "../../components/landing/HeroSection";
import LandingNav from "../../components/landing/LandingNav";
import Button from "../../components/ui/Button";

const Home = () => {
  return (
    <main>
      <LandingNav />
      <HeroSection />
      <FeatureSection />
    </main>
  );
};
export default Home;
