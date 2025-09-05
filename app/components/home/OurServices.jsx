import bg_shape_2 from "@/public/img/service/bg-shape-2.png";
import Image from "next/image";
import ServiceCard from "../card/ServiceCard";
import Button from "../button/Button";

export default function OurServices() {
  const services = [
    {
      icon: "/img/service/icon-01.png",
      name: "Web Design & Development",
      desc: "Custom websites built for performance and creativity.",
      link: "services/web-development.html",
      delay: ".3s",
    },
    {
      icon: "/img/service/icon-3.png",
      name: "Graphics Design",
      desc: "Engaging visuals for web, print, and branding.",
      link: "services/graphics-design.html",
      delay: ".5s",
    },
    {
      icon: "/img/service/icon-1.png",
      name: "Digital Marketing",
      desc: "Boost traffic and sales with smart strategies.",
      link: "services/social-media-marketing.html",
      delay: ".7s",
    },
    {
      icon: "/img/service/icon-2.png",
      name: "Search Engine Optimization",
      desc: "Rank higher and grow with expert SEO.",
      link: "services/seo.html",
      delay: ".3s",
    },
    {
      icon: "/img/service/icon-5.png",
      name: "Video Editing",
      desc: "Captivating videos to elevate your brand online.",
      link: "services/video-editing.html",
      delay: ".5s",
    },
    {
      icon: "/img/service/icon-6.png",
      name: "Data Entry",
      desc: "Accurate data handling for smooth digital operations.",
      link: "services/data-entry.html",
      delay: ".7s",
    },
  ];

  return (
    <section className="service-section fix section-bg section-padding pt-0">
      <div className="bg-shape-2">
        <Image src={bg_shape_2} alt="bg-shape" />
      </div>

      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title bg-color-2 wow fadeInUp">
              <span>OUR SERVICES</span>
            </div>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We Offer a Wide <br />
              Range of Services
            </h2>
          </div>
        </div>

        <div className="row g-4">

          {services.map((service, i) => (
            <ServiceCard service={service} key={i} />
          ))}

        </div>

        <Button className="about-button text-center pt-5" link="contact.html">Talk to an Expert</Button>
        
      </div>
    </section>
  );
}
