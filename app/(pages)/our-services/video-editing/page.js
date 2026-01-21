import Breadcrumb from "@/app/components/layout/Breadcrumb";
import Image from "next/image";
import serviceImage from "@/public/img/service/video-edting.jpg";
import { CheckCircle } from "lucide-react";
import ServiceSidebar from "@/app/components/layout/ServiceSidebar";

export const metadata = {
  title: "Video Editing"
};

export default function VideoEditingPage() {
  return (
    <>
      <Breadcrumb title={metadata.title} />

      <section className="service-details-section section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5">
              {/* Sidebar */}
              <ServiceSidebar/>

              {/* Main Content */}
              <div className="col-12 col-lg-8">
                <div className="service-details-content">
                  <h3>Web Design & Development</h3>
                  <p className="mb-4">
                    At Worshipbd, we specialize in crafting seamless, scalable,
                    and high-performing web solutions tailored to your business
                    needs. Whether youre a startup seeking a digital foundation
                    or an enterprise looking to revamp your web infrastructure,
                    our web development services are built to drive results.
                  </p>

                  <p className="mb-4">
                    Our experienced team leverages cutting-edge technologies to
                    build websites that are not only visually stunning but also
                    optimized for performance, security, and user experience.
                    From responsive design to robust backend systems, we ensure
                    your online presence sets the benchmark in your industry.
                  </p>

                  <h3>What We Provide</h3>
                  <p className="mb-5">
                    We deliver end-to-end web development solutions that cover
                    every aspect of building a successful website. Our services
                    include:
                    <ul>
                      <li>
                        <strong>Custom Website Development</strong> – Fully
                        tailored solutions that align with your brand and
                        business goals.
                      </li>
                      <li>
                        <strong>E-Commerce Development </strong> – Powerful
                        platforms built for performance and sales conversion.
                      </li>
                      <li>
                        <strong>CMS Integration</strong> – Manage your content
                        effortlessly with WordPress, Joomla, or custom-built CMS.
                      </li>
                      <li>
                        <strong>Responsive Design</strong> – Mobile-first
                        approach to ensure a flawless experience across devices.
                      </li>
                      <li>
                        <strong>Performance Optimization</strong> – Fast-loading
                        pages, optimized assets, and SEO-ready code.
                      </li>
                    </ul>
                    Every line of code is written with precision and purpose,
                    ensuring your site is fast, secure, and scalable.
                  </p>

                  <div className="thumb pt-3">
                    <Image src={serviceImage} alt="Web Development Service" />
                  </div>

                  <h3>The Challenges</h3>
                  <p>
                    Developing a website that balances performance, aesthetics,
                    and usability is a multi-layered challenge. Businesses often
                    face:
                  </p>

                  <div className="details-list-items mb-5">
                    <ul className="details-list">
                      <li>
                        <CheckCircle size={16} /> Poor loading times and server
                        latency
                      </li>
                      <li>
                        <CheckCircle size={16} /> Compatibility issues across
                        devices and browsers
                      </li>
                    </ul>
                    <ul className="details-list">
                      <li>
                        <CheckCircle size={16} /> Lack of scalability as the
                        business grows
                      </li>
                      <li>
                        <CheckCircle size={16} /> Security vulnerabilities and
                        outdated frameworks
                      </li>
                    </ul>
                  </div>

                  <h3>Why Choose Us?</h3>
                  <div className="details-list-items">
                    <ul className="details-list">
                      <li>
                        🔧<strong> Modular Architecture</strong> – Easy
                        maintenance and future scalability.
                      </li>
                      <li>
                        🧪<strong> Continuous Testing</strong> – QA-driven
                        development for bug-free launches.
                      </li>
                    </ul>
                    <ul className="details-list">
                      <li>
                        🚀 <strong>SEO-Ready Code</strong> – Technical
                        foundations optimized for search engines.
                      </li>
                      <li>
                        📈 <strong>Analytics & Tracking</strong> – Built-in data
                        insights to measure performance and user engagement.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* FAQ */}
                <div className="faq-wrapper mt-5">
                  <div className="faq-accordion-items">
                    <div className="faq-accordion">
                      <div className="accordion" id="accordion">
                        <div
                          className="accordion-item mb-3 wow animate__animated animate__fadeInUp"
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
                              Why is custom web development better than using
                              templates?
                            </button>
                          </h5>
                          <div
                            id="faq1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Custom development gives you complete control over
                              your brand identity, performance, and user
                              experience.
                            </div>
                          </div>
                        </div>

                        <div
                          className="accordion-item mb-3 wow animate__animated animate__fadeInUp"
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
                              How do you ensure website security?
                            </button>
                          </h5>
                          <div
                            id="faq2"
                            className="accordion-collapse show"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              We follow OWASP guidelines, use secure coding
                              practices, and implement SSL, firewall protection,
                              and regular updates.
                            </div>
                          </div>
                        </div>

                        <div
                          className="accordion-item mb-3 wow animate__animated animate__fadeInUp"
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
                              Do you offer website maintenance?
                            </button>
                          </h5>
                          <div
                            id="faq3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Yes! We provide ongoing maintenance, updates, and
                              support to keep your site running smoothly
                              post-launch.
                            </div>
                          </div>
                        </div>

                        <div
                          className="accordion-item mb-0 wow animate__animated animate__fadeInUp"
                          data-wow-delay=".9s"
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
                              How long does it take to develop a website?
                            </button>
                          </h5>
                          <div
                            id="faq4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Depending on complexity, most web projects are
                              completed between 4 to 10 weeks.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End FAQ */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
