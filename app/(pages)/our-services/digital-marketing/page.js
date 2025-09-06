import Breadcrumb from "@/app/components/layout/Breadcrumb";
import ServiceSidebar from "@/app/components/layout/ServiceSidebar";
import socialImg from "@/public/img/service/digital.jpg";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
export const metadata = {
  title: "Digital Marketing",
};

export default function DigitalMarketing() {
  return (
    <>
      <Breadcrumb title={metadata.title} />

      <section className="service-details-section section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5">
              {/* Sidebar */}
              <ServiceSidebar />

              {/* Main Content */}
              <div className="col-12 col-lg-8">
                <div className="service-details-content">
                  <h3>Digital Marketing</h3>
                  <p className="mb-4">
                    In a digital world driven by conversations and content,
                    Social Media Marketing is no longer optional—its essential.
                    At Worshipbd, we help brands connect, engage, and grow
                    through powerful, strategic, and data-backed social media
                    campaigns.
                  </p>
                  <p className="mb-4">
                    From content creation to paid advertising and community
                    management, we turn your social platforms into
                    revenue-generating assets that build awareness, trust, and
                    loyalty.
                  </p>

                  <h3>What We Provide</h3>
                  <p className="mb-5">
                    Our Social Media Marketing services are tailored to fit your
                    goals, audience, and brand voice:
                    <ul>
                      <li>
                        <strong>Social Media Strategy</strong> –
                        Platform-specific plans based on audience behavior,
                        trends, and analytics.
                      </li>
                      <li>
                        <strong>Content Creation</strong> – Visually stunning
                        graphics, engaging captions, and video reels designed
                        for impact.
                      </li>
                      <li>
                        <strong>Profile Optimization</strong> – Bio, branding,
                        highlights, and post formatting to present a
                        professional image.
                      </li>
                      <li>
                        <strong>Community Management</strong> – Comment replies,
                        message handling, and audience engagement to build
                        trust.
                      </li>
                      <li>
                        <strong>Paid Ad Campaigns</strong> – ROI-driven
                        Facebook, Instagram, LinkedIn & TikTok ads to scale your
                        reach.
                      </li>
                      <li>
                        <strong>Analytics & Reporting</strong> – Detailed
                        insights to track engagement, followers, conversions,
                        and ROI.
                      </li>
                    </ul>
                    <span className="mb-4 d-block">
                      We dont just grow your following—we build meaningful
                      connections that drive business growth.
                    </span>
                  </p>

                  <div className="thumb pt-3">
                    <Image
                      src={socialImg}
                      alt="Social Media Marketing"
                      placeholder="blur"
                    />
                  </div>

                  <h3>The Challenges</h3>
                  <p>
                    Succeeding on social media means more than just posting
                    daily. Brands often struggle with:
                  </p>

                  <div className="details-list-items mb-5">
                    <ul className="details-list">
                      <li>
                        <CheckCircle /> Low engagement and reach despite
                        consistent posting
                      </li>
                      <li>
                        <CheckCircle /> Lack of a cohesive content strategy
                      </li>
                    </ul>
                    <ul className="details-list">
                      <li>
                        <CheckCircle /> Difficulty turning followers into paying
                        customers
                      </li>
                      <li>
                        <CheckCircle /> Inconsistent branding and messaging
                        across platforms
                      </li>
                    </ul>
                  </div>

                  <p className="mb-5">
                    At Digtek, we solve these challenges by combining creativity
                    with marketing expertise and platform algorithms.
                  </p>

                  <h3>Why Choose Us?</h3>
                  <div className="details-list-items">
                    <ul className="details-list">
                      <li>
                        📱 Multi-Platform Expertise – Facebook, Instagram,
                        LinkedIn, YouTube, X (Twitter), TikTok & more.
                      </li>
                      <li>
                        🎯 Goal-Oriented Campaigns – Every post and ad is built
                        to serve your business objectives.
                      </li>
                    </ul>
                    <ul className="details-list">
                      <li>
                        🧠 Trend-Aware Strategy – We stay ahead of digital
                        trends and audience behaviors.
                      </li>
                      <li>
                        📊 Transparent Reporting – You’ll always know what’s
                        working—and what we’re improving.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="faq-wrapper mt-5">
                  <div className="faq-accordion-items">
                    <div className="faq-accordion">
                      <div className="accordion" id="accordion">
                        <div
                          className="accordion-item mb-3 wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq1"
                              aria-expanded="true"
                              aria-controls="faq1"
                            >
                              Which platforms should my business be on?
                            </button>
                          </h5>
                          <div
                            id="faq1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              We’ll guide you based on your industry, goals, and
                              target audience—quality over quantity is key.
                            </div>
                          </div>
                        </div>

                        <div
                          className="accordion-item mb-3 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq2"
                              aria-expanded="false"
                              aria-controls="faq2"
                            >
                              Do you provide content too, or just strategy?
                            </button>
                          </h5>
                          <div
                            id="faq2"
                            className="accordion-collapse show"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              We handle it all—graphics, copywriting,
                              scheduling, engagement, and advertising.
                            </div>
                          </div>
                        </div>

                        <div
                          className="accordion-item mb-3 wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq3"
                              aria-expanded="false"
                              aria-controls="faq3"
                            >
                              Can I see results quickly?
                            </button>
                          </h5>
                          <div
                            id="faq3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Organic growth takes time, but ad campaigns and
                              optimized content can generate results within
                              weeks.
                            </div>
                          </div>
                        </div>

                        <div
                          className="accordion-item mb-0 wow fadeInUp"
                          data-wow-delay=".7s"
                        >
                          <h5 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq4"
                              aria-expanded="false"
                              aria-controls="faq4"
                            >
                              Is there a contract? Is there a minimum monthly
                              budget for ads?
                            </button>
                          </h5>
                          <div
                            id="faq4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              We recommend starting with a budget aligned to
                              your goals. We’ll help you allocate it
                              effectively.
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
        </div>
      </section>
    </>
  );
}
