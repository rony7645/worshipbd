"use client";

import Image from "next/image";

// Import all images
import testimonialBg from "@/public/img/testimonial/testimonial-bg.jpg";
import t03 from "@/public/img/testimonial/03.png";
import rocket from "@/public/img/testimonial/rocket.png";
import msg from "@/public/img/testimonial/msg.png";
import pImg from "@/public/img/testimonial/p.png";
import nImg from "@/public/img/testimonial/n.png";
import tImg from "@/public/img/testimonial/t.png";
import aImg from "@/public/img/testimonial/a.png";
import dImg from "@/public/img/testimonial/d.png";
import usImg from "@/public/img/testimonial/us.png";
import canadaImg from "@/public/img/testimonial/canada.png";
import iconImg from "@/public/img/testimonial/icon.png";

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
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>TESTIMONIALS</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    What Our Happy Clients Say
                  </h2>
                </div>

                <div className="swiper testimonial-slider-3">
                  <div className="swiper-wrapper">

                    {/* Slide 1 */}
                    <div className="swiper-slide">
                      <div className="testimonial-card-items">
                        <div className="client-info">
                          <div className="client-img">
                            <Image src={pImg} alt="Pantheonlegacy" />
                          </div>
                          <div className="client-content">
                            <h5>Pantheonlegacy</h5>
                            <span>
                              <Image src={usImg} alt="United States" /> United States
                            </span>
                          </div>
                        </div>
                        <p>
                          Excellent Job on my website. I love the results of my Wordpress website
                          with elementor plugin. I would definitely use his gig again in the near
                          future
                        </p>
                        <div className="icon">
                          <Image src={iconImg} alt="icon" />
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="swiper-slide">
                      <div className="testimonial-card-items">
                        <div className="client-info">
                          <div className="client-img">
                            <Image src={nImg} alt="nayely433" />
                          </div>
                          <div className="client-content">
                            <h5>nayely433</h5>
                            <span>
                              <Image src={usImg} alt="United States" /> United States
                            </span>
                          </div>
                        </div>
                        <p>
                          Mizanur Rahman truly impressed with his impeccable work on our website
                          development project, showcasing professionalism and exceeding expectations
                          with remarkable attention to detail. Working with him was a breeze,
                          thanks to his QUICK responsiveness and excellent understanding of our needs.
                          Highly recommend his services! 👏
                        </p>
                        <div className="icon">
                          <Image src={iconImg} alt="icon" />
                        </div>
                      </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="swiper-slide">
                      <div className="testimonial-card-items">
                        <div className="client-info">
                          <div className="client-img">
                            <Image src={tImg} alt="Triplespark" />
                          </div>
                          <div className="client-content">
                            <h5>Triplespark</h5>
                            <span>
                              <Image src={usImg} alt="United States" /> United States
                            </span>
                          </div>
                        </div>
                        <p>
                          Mizanur Rahman is a top-notch website developer whose professionalism
                          truly EXCEEDED expectations. His work was exceptional, with great
                          communication and FAST delivery, making collaboration effortless.
                          Extremely polite and responsive, you'll feel confident hiring him again! 👍
                        </p>
                        <div className="icon">
                          <Image src={iconImg} alt="icon" />
                        </div>
                      </div>
                    </div>

                    {/* Slide 4 */}
                    <div className="swiper-slide">
                      <div className="testimonial-card-items">
                        <div className="client-info">
                          <div className="client-img">
                            <Image src={pImg} alt="Pjason" />
                          </div>
                          <div className="client-content">
                            <h5>Pjason</h5>
                            <span>
                              <Image src={canadaImg} alt="Canada" /> Canada
                            </span>
                          </div>
                        </div>
                        <p>
                          I have completed multiple gigs with this seller. Always professional,
                          always fast and always great work. I recommend this seller wholeheartedly.
                          Outstanding customer service before during and after. Try him; you won't
                          be disappointed!
                        </p>
                        <div className="icon">
                          <Image src={iconImg} alt="icon" />
                        </div>
                      </div>
                    </div>

                    {/* Slide 5 */}
                    <div className="swiper-slide">
                      <div className="testimonial-card-items">
                        <div className="client-info">
                          <div className="client-img">
                            <Image src={aImg} alt="agency270" />
                          </div>
                          <div className="client-content">
                            <h5>agency270</h5>
                            <span>
                              <Image src={usImg} alt="United States" /> United States
                            </span>
                          </div>
                        </div>
                        <p>
                          Mizanur Rahman truly IMPRESSED in every aspect of our website development project!
                          His professionalism and incredible attention to detail exceeded my expectations, and
                          he consistently went above and beyond with quick responsiveness and outstanding
                          cooperation. I couldn't be happier with his work—HIGHLY RECOMMEND! 😊
                        </p>
                        <div className="icon">
                          <Image src={iconImg} alt="icon" />
                        </div>
                      </div>
                    </div>

                    {/* Slide 6 */}
                    <div className="swiper-slide">
                      <div className="testimonial-card-items">
                        <div className="client-info">
                          <div className="client-img">
                            <Image src={dImg} alt="dineshchand24" />
                          </div>
                          <div className="client-content">
                            <h5>dineshchand24</h5>
                            <span>
                              <Image src={canadaImg} alt="Canada" /> Canada
                            </span>
                          </div>
                        </div>
                        <p>
                          Mizanur Rahman nailed the LOGO DESIGN with absolute professionalism, perfectly aligning
                          with my brand and delivering stunning visuals. He went ABOVE AND BEYOND to ensure
                          everything was on point and delivered right on time. Highly recommend! 👌
                        </p>
                        <div className="icon">
                          <Image src={iconImg} alt="icon" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="array-button">
                  <button className="array-prev">
                    <i className="fa-regular fa-arrow-up-long"></i>
                  </button>
                  <button className="array-next">
                    <i className="fa-regular fa-arrow-down-long"></i>
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
