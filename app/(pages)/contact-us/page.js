import Breadcrumb from "@/app/components/layout/Breadcrumb";

export const metadata = {
  title: "Contact Us",
};

export default function CaseStudyPage() {
  return (
    <>
      <Breadcrumb title={metadata.title} />
      <section className="contact-info-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-info-items text-center active">
                <div className="icon">
                  <i className="icon-09"></i>
                </div>
                <div className="content">
                  <h3>Our Address</h3>
                  <p>
                    House: 32, Road: 04, Block: A,
                    <br /> Rampura Banasree 1219
                    Dhaka, Bangladesh.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <i className="icon-10"></i>
                </div>
                <div className="content">
                  <h3>
                    <a
                      href="mailto:admin@worshipbd.com"
                      style={{ textTransform: "lowercase" }}
                    >
                      admin@worshipbd.com
                    </a>
                  </h3>
                  <p>
                    Feel free to contact us via email
                    <br /> at any time with your inquiries.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="contact-info-items text-center">
                <div className="icon">
                  <i className="icon-11"></i>
                </div>
                <div className="content">
                  <h3>
                    <a href="tel:+8801784388538">+880 1784-388538</a>
                  </h3>
                  <p>
                    We are always ready to hear
                    <br />
                    about your project. Call us anytime!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Start */}
      <section className="contact-section-33 fix section-padding pt-0">
        <div className="container">
          <div className="contact-wrapper-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-12">
                <div className="map-items">
                  <div className="googpemap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.532837161702!2d90.42366637605151!3d23.764032988251415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7cc580ee34d%3A0xec9cfe1880b7d32d!2sWorshipBD!5e0!3m2!1sen!2sbd!4v1749030693370!5m2!1sen!2sbd"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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
