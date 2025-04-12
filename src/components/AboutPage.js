import About from "./About";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const AboutPage = () => {
  return (
    <>
      <Hero />
      <About margin={true} />
      <Testimonials />
    </>
  );
};

export default AboutPage;
