import Image from "next/image";
import bg_shape_2 from "@/public/img/about/bg-shape-2.png";
import right_shape from "@/public/img/case-studies/right-shaape.png";
import about_img from "@/public/img/about/01.jpg";
import box_shape_2 from "@/public/img/about/box-shape-2.png";
import gap_shape_2 from "@/public/img/about/grap-2.png";
import white_text from "@/public/img/about/white-text.png";
import Button from "../button/Button";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="about-section-2 fix section-padding pb-0">
      <div className="bg-shape">
        <Image src={bg_shape_2} alt="bg-shape" />
      </div>

      <div className="right-shape float-bob-x">
        <Image src={right_shape} alt="right-shape" />
      </div>

      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src={about_img}
                  alt="about-img"
                  className="wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                  priority
                />

                <div className="box-shape float-bob-y">
                  <Image src={box_shape_2} alt="box-shape" />
                </div>

                <div className="gap-shape float-bob-x">
                  <Image src={gap_shape_2} alt="gap-shape" />
                </div>

                <a href="service.html" className="circle-button">
                  <ArrowUpRight />
                  <span className="text-circle">
                    <Image src={white_text} alt="white-text" />
                  </span>
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>About Company</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Your Complete Solutions
                  </h2>
                </div>

                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  At Worshipbd, we’re dedicated to helping businesses succeed through innovative WordPress
                  web design and marketing solutions. With a proven track record and a team of experienced
                  professionals, we’ve become a trusted partner for clients seeking to achieve their goals.
                </p>

                <div className="icon-items-area">
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                      <i className="icon-01"></i>
                    </div>
                    <div className="content">
                      <h3>Experience</h3>
                      <p>
                        We keep one of our team members vigilant 24/7 to ensure that each knock from
                        the client's end is responded to quickly.
                      </p>
                    </div>
                  </div>

                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    <div className="icon">
                      <i className="icon-02"></i>
                    </div>
                    <div className="content">
                      <h3>Quick Support</h3>
                      <p>
                        Our completed numerous projects and the subsequent compliments from the
                        clients testify to our noteworthy experience.
                      </p>
                    </div>
                  </div>
                </div>
                <Button className="about-button" link="#">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
