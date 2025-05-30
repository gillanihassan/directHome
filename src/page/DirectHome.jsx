import AuthenticProperties from "./components/authenticProperties/AuthenticProperties";
import BottomSearchSection from "./components/bottomSearchSection/BottomSearchSection ";
import BusinessSection from "./components/businessSection/BusinessSection";
import EstateProcess from "./components/estateProcess/EstateProcess";
import Footer from "./components/footerSection/FooterSection";
import FormCalculator from "./components/formCalculator/FormCalculator";
import HeroSection from "./components/heroSection/HeroSection";
import MarketIndex from "./components/marketIndex/MarketIndex";
import MedalSection from "./components/medalSection/MedalSection ";
import CustomNav from "./components/navbar/CustomNav";
import OverviewSection from "./components/overviewSection/OverviewSection";
import ProductionSection from "./components/productSection/ProductionSection";
import SellingSection from "./components/sellingSection/SellingSection";
import TestimonialSection from "./components/testimonialSection/TeatimonialSection";
import ThreeStepGuide from "./components/threeStepGuide/ThreeStepGuide";
import TopSection from "./components/topSection/TopSection";

function DirectHome() {
  return (
    <div>
      <TopSection />
      <CustomNav />
      <HeroSection />
      <BottomSearchSection />
      <BusinessSection />
      <AuthenticProperties />
      <EstateProcess />
      <SellingSection />
      <ProductionSection />
      <FormCalculator />
      <ThreeStepGuide />
      <MedalSection />
      <MarketIndex />
      <TestimonialSection />
      <OverviewSection />
      <Footer />
    </div>
  );
}

export default DirectHome;
