"use client"; // Important for DOM and JS

import { useEffect } from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

// Images
import faq_overlay from "@/public/img/faq-overlay.png";
import faq_shape from "@/public/img/faq-shape.png";

export default function Faq() {
  // Dynamically import Bootstrap JS on client
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <section className="faq-section section-padding">
      <div className="faq-overlay">
        <Image src={faq_overlay} alt="faq-overlay" />
      </div>
      <div className="faq-shape">
        <Image src={faq_shape} alt="faq-shape" />
      </div>

      <div className="container">
        <div className="faq-wrapper">
          <div className="row g-4 justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="faq-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>FAQ'</span>
                    <span style={{ textTransform: "lowercase" }}>s</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    What's on your mind
                  </h2>
                </div>

                <p className="wow fadeInUp" data-wow-delay=".5s">
                  We're not just another agency – we're your digital growth partners. With
                  years of industry experience and a passion for innovation, our team is
                  dedicated to delivering measurable results propel your business forward.
                </p>

                <ul className="faq-list">
                  <li className="wow fadeInUp" data-wow-delay=".3s">
                    <i className="fa-regular fa-circle-check"></i> Top quality service
                  </li>
                  <li className="wow fadeInUp" data-wow-delay=".5s">
                    <i className="fa-regular fa-circle-check"></i> 24/7 Services
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="faq-accordion-items">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">

                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                      <h5 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq1"
                          aria-expanded="true"
                          aria-controls="faq1"
                        >
                          What services does your agency provide?
                        </button>
                      </h5>
                      <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          We specialize in custom website design, WordPress development, eCommerce
                          solutions, SEO optimization, UI/UX design, branding, and website
                          maintenance.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                      <h5 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq2"
                          aria-expanded="false"
                          aria-controls="faq2"
                        >
                          How much does a website cost?
                        </button>
                      </h5>
                      <div id="faq2" className="accordion-collapse show" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          The cost of a website varies depending on the project scope, features,
                          and complexity. We offer flexible packages for startups, small
                          businesses, and enterprises. Contact us for a free quote.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                      <h5 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq3"
                          aria-expanded="false"
                          aria-controls="faq3"
                        >
                          How long does it take to build a website?
                        </button>
                      </h5>
                      <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          A basic website can take 1–2 weeks, while larger projects may take 3–8
                          weeks depending on requirements, revisions, and integrations.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".7s">
                      <h5 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq4"
                          aria-expanded="false"
                          aria-controls="faq4"
                        >
                          Will my website be mobile-friendly?
                        </button>
                      </h5>
                      <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                        <div className="accordion-body">
                          Yes, all websites we design are fully responsive and optimized for all
                          devices including mobile phones, tablets, and desktops.
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
