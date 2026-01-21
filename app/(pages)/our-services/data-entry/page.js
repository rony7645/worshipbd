import Breadcrumb from "@/app/components/layout/Breadcrumb";
import ServiceSidebar from "@/app/components/layout/ServiceSidebar";
import dataImg from "@/public/img/service/data-entry.jpg";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Data Entry",
};

export default function DataEntr() {
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
                  <h3>Data Entry</h3>
                  <p className="mb-4">
                    In today’s fast-paced business environment, accurate and
                    timely data entry is essential for informed decision-making.
                    At Worshipbd, we offer efficient and error-free data entry
                    services that help businesses streamline operations and
                    maintain clean, reliable datasets.
                  </p>
                  <p className="mb-4">
                    Whether it’s digitizing paper documents, inputting CRM
                    records, updating databases, or organizing spreadsheets —
                    our skilled team ensures every piece of information is
                    recorded, formatted, and validated with precision.
                    <br />
                    <br />
                    We understand the importance of confidentiality and
                    accuracy, which is why every project goes through a quality
                    assurance process to deliver results you can trust.
                  </p>

                  <h3>What We Provide</h3>
                  <p className="mb-5">
                    Our data entry services are designed to minimize manual
                    workload and maximize accuracy. Here’s what we deliver:
                    <ul>
                      <li>Manual and automated data entry (online/offline)</li>
                      <li>
                        Spreadsheet creation and formatting (Excel, Google
                        Sheets)
                      </li>
                      <li>CRM and ERP data input</li>
                      <li>Product data entry for eCommerce platforms</li>
                      <li>PDF, image, and handwritten document digitization</li>
                      <li>Data cleansing, validation, and deduplication</li>
                    </ul>
                    <span className="mb-4 d-block">
                      We adapt to your workflow, tools, and formats to ensure
                      smooth integration with your business processes.
                    </span>
                  </p>

                  <div className="thumb">
                    <Image src={dataImg} alt="Data Entry" placeholder="blur" />
                  </div>

                  <h3>The Challenges</h3>
                  <p>
                    Most businesses struggle with managing growing volumes of
                    data. Manual errors, inconsistent formats, and lack of time
                    often lead to inaccurate records — which can affect
                    everything from reporting to customer service.
                  </p>

                  <div className="details-list-items mb-5">
                    <ul className="details-list">
                      <li>
                        <CheckCircle /> Manual errors and data inconsistencies
                      </li>
                      <li>
                        <CheckCircle /> Outdated records and duplicated entries
                      </li>
                    </ul>
                    <ul className="details-list">
                      <li>
                        <CheckCircle /> Time-consuming document digitization
                      </li>
                      <li>
                        <CheckCircle /> Platform-specific data formatting issues
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
                              Why Should I Outsource Data Entry Services?
                            </button>
                          </h5>
                          <div
                            id="faq1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Outsourcing saves you time, ensures accuracy,
                              reduces operational cost, and allows your in-house
                              team to focus on more strategic tasks.
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
                              What Type of Data Entry Do You Handle?
                            </button>
                          </h5>
                          <div
                            id="faq2"
                            className="accordion-collapse show"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              We manage both structured and unstructured data —
                              including forms, invoices, customer records,
                              product listings, and handwritten notes.
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
                              Is My Data Secure with You?
                            </button>
                          </h5>
                          <div
                            id="faq3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Yes. We follow strict confidentiality protocols,
                              use secure transfer methods, and ensure that your
                              data is protected at every stage of the process.
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
                              Can You Work With Customized Formats?
                            </button>
                          </h5>
                          <div
                            id="faq4"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">
                              Absolutely. Whether it’s Excel, CSV, Google
                              Sheets, CRM platforms, or proprietary software —
                              we adapt to your preferred format and system.
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
