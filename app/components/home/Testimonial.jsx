import Image from "next/image";

// Import all images
import testimonialBg from "@/public/img/testimonial/testimonial-bg.jpg";
import t03 from "@/public/img/testimonial/03.png";
import rocket from "@/public/img/testimonial/rocket.png";
import msg from "@/public/img/testimonial/msg.png";
import TestimonialsCarousel from "../carousel/TestimonialsCarousel";

export default function Testimonial() {
  return (
    <section
      className="testimonial-section fix section-padding bg-cover"
      style={{ backgroundImage: `url(${testimonialBg.src})` }}
    >
      <div className="container">
        <div className="testimonial-wrapper-2">
          <div className="row g-4 align-items-center">
            {/* Left Image */}
            <div className="col-lg-6">
              <div className="testimonial-image">
                <Image src={t03} alt="testimonial" className="wow img-custom-anim-left" />
                <div className="rocket-shape">
                  <Image src={rocket} alt="rocket" />
                </div>
                <div className="msg-shape float-bob-y">
                  <Image src={msg} alt="msg" />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <div className="testimonial-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2 wow animate__fadeInUp">
                    <span>TESTIMONIALS</span>
                  </div>
                  <h2 className="wow animate__fadeInUp" data-wow-delay=".3s">
                    What Our Happy Clients Say
                  </h2>
                </div>

                {/* Testimonials Carousel */}
                <TestimonialsCarousel/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
