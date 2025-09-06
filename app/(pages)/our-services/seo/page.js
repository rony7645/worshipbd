import Breadcrumb from "@/app/components/layout/Breadcrumb";
import ServiceSidebar from "@/app/components/layout/ServiceSidebar";
import seoImg from "@/public/img/service/seo.jpg";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Search Engine Optimization (SEO)",
};

export default function Seo() {
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
                  <h3>Search Engine Optimization (SEO)</h3>
                  <p className="mb-4">
                    In todays digital landscape, visibility is everything. At
                    Worshipbd, our Search Engine Optimization (SEO) services are
                    designed to help your business rank higher, attract quality
                    traffic, and turn visitors into loyal customers.
                  </p>
                  <p className="mb-4">
                    We don’t just chase rankings—we focus on sustainable,
                    long-term growth through ethical SEO practices,
                    comprehensive keyword research, and data-driven strategies
                    that align with your business objectives.
                  </p>

                  <h3>What We Provide</h3>
                  <p className="mb-5">
                    Our SEO service package is structured to enhance every
                    element of your online presence:
                    <ul>
                      <li>
                        <strong>Technical SEO Audit</strong> – Complete analysis
                        of your website’s performance, crawlability, and
                        structure.
                      </li>
                      <li>
                        <strong>On-Page SEO</strong> – Keyword-rich,
                        user-focused content, optimized meta tags, and
                        structured data implementation.
                      </li>
                      <li>
                        <strong>Off-Page SEO</strong> – High-quality backlinks,
                        brand mentions, and reputation management to build
                        domain authority.
                      </li>
                      <li>
                        <strong>Local SEO</strong> – Optimizing your business
                        for local search, Google Maps, and directory listings.
                      </li>
                      <li>
                        <strong>SEO Reporting & Analytics</strong> – Transparent
                        reporting with keyword tracking, traffic insights, and
                        growth trends.
                      </li>
                    </ul>
                    <span className="mb-4 d-block">
                      We help you stand out in crowded search results and
                      dominate your niche with precision and performance.
                    </span>
                  </p>

                  <div className="thumb pt-3">
                    <Image src={seoImg} alt="SEO Services" placeholder="blur" />
                  </div>

                  <h3>The Challenges</h3>
                  <p>
                    SEO is not a one-time effort—it’s a dynamic, ever-evolving
                    challenge. Businesses often struggle with:
                  </p>

                  <div className="details-list-items mb-5">
                    <ul className="details-list">
                      <li>
                        <CheckCircle /> Poor search rankings despite great
                        content
                      </li>
                      <li>
                        <CheckCircle /> Lack of technical understanding of SEO
                      </li>
                    </ul>
                    <ul className="details-list">
                      <li>
                        <CheckCircle /> Outdated tactics penalized by search
                        engines
                      </li>
                      <li>
                        <CheckCircle /> Difficulty tracking ROI from SEO
                        campaigns
                      </li>
                    </ul>
                  </div>

                  <h3>Why Choose Us?</h3>
                  <div className="details-list-items">
                    <ul className="details-list">
                      <li>
                        🔍 <strong>White Hat Techniques</strong> –
                        Google-compliant strategies that protect your site’s
                        integrity.
                      </li>
                      <li>
                        📈 <strong>Results-Driven</strong> – Focused on
                        increasing leads, conversions, and visibility.
                      </li>
                    </ul>
                    <ul className="details-list">
                      <li>
                        ⏱️ <strong>Timely Updates</strong> – Monthly progress
                        reports and continuous optimization.
                      </li>
                      <li>
                        🤝 <strong>Client-Centric Approach</strong> – Your goals
                        shape our strategy, every step of the way.
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
                              How long does it take to see SEO results?
                            </button>
                          </h5>
                          <div
                            id="faq1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              SEO is a long-term investment. Typically, you’ll
                              start seeing significant improvements within 3–6
                              months.
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
                              Do you guarantee #1 rankings?
                            </button>
                          </h5>
                          <div
                            id="faq2"
                            className="accordion-collapse show"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              No one can guarantee rankings, but we guarantee
                              industry-best practices and steady performance
                              growth.
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
                              Can you help with local SEO?
                            </button>
                          </h5>
                          <div
                            id="faq3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Absolutely! We specialize in local SEO strategies
                              that improve visibility in your specific area or
                              city.
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
                              What industries do you work with?
                            </button>
                          </h5>
                          <div
                            id="faq4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              We’ve worked with clients across e-commerce, SaaS,
                              healthcare, real estate, and more.
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
