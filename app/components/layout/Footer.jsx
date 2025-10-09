"use client";

import Image from "next/image";

// logo
import logo_white from "@/public/img/logo/logo-wihte.png";
import rocket from "@/public/img/rokect.png"
import cta_bg from "@/public/img/cta-bg.jpg"
import cta_img from "@/public/img/cta-img.png"

// recent post images
import post1 from "@/public/img/news/Top-10-front-end-developer-in-Bangladesh.png";
import post2 from "@/public/img/news/Top-10-WordPress-Website-Designers-in-Bangladesh-Unleash-Your-Websites-Potential-in-2024.png";
import { ArrowRight, CalendarDays, ChevronRight, ChevronUp, Clock, Mail, PhoneCall } from "lucide-react";
import Button from "../button/Button";
import Link from "next/link";

export default function Footer() {
  return (

   <>
    {/* Cta Section Start */}
      <section className="cta-section section-padding pb-0">
        <div className="rokect-shape float-bob-y">
          <Image src={rocket} alt="rocket" width={150} height={150} />
        </div>
        <div className="container">
          <div
            className="cta-wrapper bg-cover"
            style={{ backgroundImage: "url('/img/cta-bg.jpg')" }}
          >
            <div className="cta-img img-custom-anim-left">
              <Image src={cta_img} alt="cta" />
            </div>

            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Stay Connected With <br /> Worshipbd
            </h2>

            <div className="main-button wow fadeInUp" data-wow-delay=".5s">
              <Button className="hero-button" link="/contact-us">Get Started</Button>
            </div>
          </div>
        </div>
      </section>


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
                  {/* <div className="social-icon d-flex align-items-center">
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
                  </div> */}
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
                    <Link href="/about-us">
                      <ChevronRight /> About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-services">
                      <ChevronRight /> Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs">
                      <ChevronRight /> Our Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies">
                      <ChevronRight /> Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <ChevronRight /> Contact Us
                    </Link>
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
                        <li className="d-flex gap-2 align-items-center">
                          <CalendarDays size={15} /> 6 Sep, 2024
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
                        <li className="d-flex gap-2 align-items-center">
                          <CalendarDays size={15} /> 6 Sep, 2024
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
                    <li className="d-flex gap-2 align-items-center">
                      <Mail size={20} color="#fff"/>{" "}
                      <a href="mailto:admin@worshipbd.com">admin@worshipbd.com</a>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                      <PhoneCall size={20} color="#fff"/>
                      <a href="tel:+8801784388538">+880 1784-388538</a>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                      <Clock size={20} color="#fff"/>
                      <a href="#">24/7 Support Available</a>
                    </li>
                  </ul>
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
   </>
  );
}
