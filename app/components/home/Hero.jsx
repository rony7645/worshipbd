import hero_img from "@/public/img/hero/hero-image-3.png";
import line_shape from "@/public/img/hero/line-shape.png";
import Image from "next/image";
import Button from "../button/Button";


export default function Hero() {
  return (
    <>
      <section
        className="hero-section hero-3"
        style={{
          backgroundImage: "url(/img/hero/hero-bg-3.jpg)",
        }}
      >
        <div className="line-shape">
          <Image src={line_shape} alt="img" />
        </div>
        <div className="container-fluid">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h6 className="wow animate__fadeInUp">
                  Your Trusted Full-Service IT Partner{" "}
                </h6>
                <h1 className="wow animate__fadeInUp" data-wow-delay=".3s">
                  END-TO-END <br />
                  <span>DEVELOPMENT </span>
                </h1>
                <p className="wow animate__fadeInUp" data-wow-delay=".5s">
                  You are designing tomorrow's online presence today with
                  Worshipbd Web Design Agency – because your website design
                  should be as remarkable as your business.
                </p>
                <Button className="hero-button" link="google.com">Get Started</Button>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="hero-image wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <Image src={hero_img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
