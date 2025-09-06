"use client";

import Image from "next/image";

// logo
import logo_white from "@/public/img/logo/logo-wihte.png";

// recent post images
import post1 from "@/public/img/news/Top-10-front-end-developer-in-Bangladesh.png";
import post2 from "@/public/img/news/Top-10-WordPress-Website-Designers-in-Bangladesh-Unleash-Your-Websites-Potential-in-2024.png";
import { ArrowRight, ChevronRight, ChevronUp, Mail } from "lucide-react";

export default function Footer() {
  return (
    <section className="footer-section footer-bg fix">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            {/* Logo + About */}
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <a href="../index.html">
                    <Image src={logo_white} width={250} alt="WorshipBD Logo" />
                  </a>
                </div>
                <div className="footer-content">
                  <p>
                    We are passionate digital creators committed to crafting beautiful,
                    functional, and high-performing websites that drive results.
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="https://www.facebook.com/worshipbd19" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/worship-bd/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://x.com/worship_bd" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/worship_BD" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.behance.net/worshipbd" target="_blank">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Quick Links</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <a href="../about.html">
                      <ChevronRight /> About us
                    </a>
                  </li>
                  <li>
                    <a href="../service.html">
                      <ChevronRight /> Our Services
                    </a>
                  </li>
                  <li>
                    <a href="../blog.html">
                      <ChevronRight /> Our Blogs
                    </a>
                  </li>
                  <li>
                    <a href="../case.html">
                      <ChevronRight /> Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="../contact.html">
                      <ChevronRight /> Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Recent Posts</h3>
                </div>
                <div className="recent-post-area">
                  <div className="recent-post-items">
                    <div className="thumb">
                      <Image src={post1} alt="Best 10 Front End Developers in Bangladesh" />
                    </div>
                    <div className="content">
                      <ul className="post-date">
                        <li>
                          <i className="fa-solid fa-calendar-days me-2"></i> 6 Sep, 2024
                        </li>
                      </ul>
                      <h6>
                        <a href="../blog/front-end-developer.html">
                          Best 10 Front End <br /> Developers in Bangladesh
                        </a>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-items mb-0">
                    <div className="thumb">
                      <Image src={post2} alt="Best 10 WordPress Website Designers in Bangladesh" />
                    </div>
                    <div className="content">
                      <ul className="post-date">
                        <li>
                          <i className="fa-solid fa-calendar-days me-2"></i> 6 Sep, 2024
                        </li>
                      </ul>
                      <h6>
                        <a href="../blog/wordpress-website-designer.html">
                          Best 10 WordPress Website <br /> Designers in Bangladesh
                        </a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>Contact Us</h3>
                </div>
                <div className="footer-content">
                  <ul className="contact-info">
                    <li>
                      <Mail />{" "}
                      <a href="mailto:admin@worshipbd.com">admin@worshipbd.com</a>
                    </li>
                    <li>
                      <i className="fa-solid fa-phone-volume"></i>{" "}
                      <a href="tel:+8801784388538">+880 1784-388538</a>
                    </li>
                  </ul>
                  <div className="footer-input">
                    <input type="email" id="email2" placeholder="Your email address" />
                    <button className="newsletter-btn" type="submit">
                      <ArrowRight />
                    </button>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      I agree to the <a href="../privacy-policy.html">Privacy Policy.</a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
              © Worshipbd 2025. All Right Reserved
            </p>
            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
              <li>
                <a href="../terms-and-conditions.html">Terms & Condition</a>
              </li>
              <li>
                <a href="../privacy-policy.html">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" id="scrollUp" className="scroll-icon">
          <ChevronUp />
        </a>
      </div>
    </section>
  );
}
