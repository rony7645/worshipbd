import Breadcrumb from "@/app/components/layout/Breadcrumb";
import ServiceSidebar from "@/app/components/layout/ServiceSidebar";
import graphicsImg from "@/public/img/service/grapics.jpg";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Web Design & Development",
};

export default function GraphicsDesignPage() {
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
                  <h3>Graphics Design</h3>
                  <p className="mb-4">
                    At Worshipbd, we believe great design is more than just
                    aesthetics—its about communication, emotion, and experience.
                    Our Graphic Design services turn ideas into compelling
                    visuals that capture attention, build trust, and elevate
                    your brand.
                  </p>
                  <p className="mb-4">
                    From eye-catching social media creatives to polished
                    corporate branding, we design with strategy and intention.
                    Every color, font, and element is chosen to reflect your
                    brand’s voice and resonate with your audience.
                  </p>

                  <h3>What We Provide</h3>
                  <p className="mb-5">
                    Our Graphic Design offerings are built to support every
                    stage of your brand’s visual journey:
                    <ul>
                      <li>
                        <strong>Brand Identity Design</strong> – Logos, brand
                        colors, and typography that leave a lasting impression.
                      </li>
                      <li>
                        <strong>Marketing Collateral</strong> – Brochures,
                        flyers, posters, banners, and more.
                      </li>
                      <li>
                        <strong>Social Media Graphics</strong> – Visually
                        consistent, high-impact content for all major platforms.
                      </li>
                      <li>
                        <strong>UI/UX Design Assets</strong> – Custom icons,
                        buttons, illustrations, and wireframes that enhance
                        digital experiences.
                      </li>
                      <li>
                        <strong>Presentation & Pitch Decks</strong> –
                        Professional, polished slide designs for business
                        meetings and investors.
                      </li>
                    </ul>
                    We mix creativity with clarity—ensuring every design
                    delivers your message with power and precision.
                  </p>

                  <div className="thumb pt-3">
                    <Image
                      src={graphicsImg}
                      alt="Graphics Design"
                      placeholder="blur"
                    />
                  </div>

                  <h3>The Challenges</h3>
                  <p>
                    Design is about more than making things look good—it’s about
                    solving problems visually. Common challenges businesses face
                    include:
                  </p>

                  <div className="details-list-items mb-5">
                    <ul className="details-list">
                      <li>
                        <CheckCircle /> Inconsistent branding across channels
                      </li>
                      <li>
                        <CheckCircle /> Lack of visual engagement and customer
                        interest
                      </li>
                    </ul>
                    <ul className="details-list">
                      <li>
                        <CheckCircle /> Designs that fail to communicate core
                        messages
                      </li>
                      <li>
                        <CheckCircle /> Outdated graphics that don’t match
                        current trends
                      </li>
                    </ul>
                  </div>

                  <h3>Why Choose Us?</h3>
                  <div className="details-list-items">
                    <ul className="details-list">
                      <li>
                        🎨<strong> Creative Strategy First</strong> – We design
                        with your audience and goals in mind.
                      </li>
                      <li>
                        🧩<strong> Brand Consistency</strong> – Cohesive visuals
                        across all platforms.
                      </li>
                    </ul>
                    <ul className="details-list">
                      <li>
                        🖥️ <strong>Digital & Print Expertise</strong> –
                        Versatility in both online and offline mediums.
                      </li>
                      <li>
                        🚀<strong> Fast Turnaround</strong> – Agile process for
                        quick and quality deliveries.
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
                              What tools do your designers use?
                            </button>
                          </h5>
                          <div
                            id="faq1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              We work with industry-standard tools like Adobe
                              Photoshop, Illustrator, InDesign, Figma, and Canva
                              Pro.
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
                              Can you design a complete brand package?
                            </button>
                          </h5>
                          <div
                            id="faq2"
                            className="accordion-collapse show"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Yes! From logo to business cards, social templates
                              to brand guidelines—we do it all.
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
                              Do I get the source files?
                            </button>
                          </h5>
                          <div
                            id="faq3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Absolutely. We provide high-resolution assets and
                              editable source files for every project.
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
                              How involved can I be in the design process?
                            </button>
                          </h5>
                          <div
                            id="faq4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              We welcome collaboration! You can be involved in
                              reviews, feedback rounds, and style selections.
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
