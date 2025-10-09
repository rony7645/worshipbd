import bg_shape from "@/public/img/bg-shape.png";
import counter_shape from "@/public/img/counter-shape.png";
import text_circlw from "@/public/img/text-circlw.png";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
export default function CtaCounter() {
  return (
    <section className="cta-counter-section fix section-padding pt-0">
      <div className="bg-shape">
        <Image src={bg_shape} alt="img" />
      </div>
      <div className="container">
        <div
          className="cta-counter-wrapper bg-cover"
          style={{ backgroundImage: "url('/img/bg-002.jpg')" }}
        >
          <div className="shape-img">
            <Image src={counter_shape} alt="img" />
          </div>
          <div className="counter-box-area">
            <div className="counter-text wow fadeInUp" data-wow-delay=".3s">
              <h2>
                <span className="count">4000</span>+
              </h2>
              <p>Projects Done</p>
            </div>
            <div className="counter-text wow fadeInUp" data-wow-delay=".5s">
              <h2>
                <span className="count">2500</span>+
              </h2>
              <p>Happy Clients</p>
            </div>
            <div className="counter-text wow fadeInUp" data-wow-delay=".7s">
              <h2>
                <span className="count">21</span>
              </h2>
              <p>Team Members</p>
            </div>
            <a href="service.html" className="circle-button">
              <ArrowUpRight />
              <span className="text-circle">
                <Image src={text_circlw} alt="img" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
