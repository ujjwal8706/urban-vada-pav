import Hero from "../components/Hero";
import FeaturedMenu from "../components/FeaturedMenu";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FranchiseCTA from "../components/FranchiseCTA";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <WhyChooseUs />
      <Testimonials />
      <FranchiseCTA />
    </>
  );
}

export default Home;