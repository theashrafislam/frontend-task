import HeroSection from "./Components/HeroSection";
import Partners from "./Components/Partners";
import PopularProperties from "./Components/PopularProperties";
import PropertyFeatured from "./Components/PropertyFeatured";
import Subscribe from "./Components/Subscribe";

export default function Home() {
  return (
    <div>
      {/* Constrained width sections */}
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <Partners />
        <PopularProperties />
      </div>

      {/* Full width section */}
      <div className="w-full overflow-x-hidden">
        <PropertyFeatured />
      </div>
      <div className="max-w-7xl mx-auto">
        <Subscribe />
      </div>
    </div>
  );
}