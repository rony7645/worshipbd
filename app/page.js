import About from "./components/home/About";
import Blog from "./components/home/Blog";
import CtaCounter from "./components/home/CtaCounter";
import Faq from "./components/home/Faq";
import Hero from "./components/home/Hero";
import OurServices from "./components/home/OurServices";
import Testimonial from "./components/home/Testimonial";
import WhyChoose from "./components/home/WhyChoose";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <CtaCounter />
      <OurServices />
      <About />
      <Faq />
      <Testimonial />
      <Blog />
    </>
  );
}
