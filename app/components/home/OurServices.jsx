import bg_shape_2 from "@/public/img/service/bg-shape-2.png";
import Image from "next/image";
import Button from "../button/Button";
import Services from "../Services";

export default function OurServices() {

  return (
    <section className="service-section fix section-bg section-padding pt-0">
      <div className="bg-shape-2">
        <Image src={bg_shape_2} alt="bg-shape" />
      </div>

      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title bg-color-2 wow animate__fadeInUp">
              <span>OUR SERVICES</span>
            </div>
            <h2 className="wow animate__fadeInUp" data-wow-delay=".3s">
              We Offer a Wide <br />
              Range of Services
            </h2>
          </div>
        </div>

        <Services/>
        

        <Button className="about-button text-center pt-5" link="/contact-us">Talk to an Expert</Button>
        
      </div>
    </section>
  );
}
