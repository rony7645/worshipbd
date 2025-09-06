import bg_shape_2 from "@/public/img/bg-shape-2.png";
import feature_img from "@/public/img/feature-img.png";
import Image from "next/image";
export default function WhyChoose() {
  return (
    <>
      <section className="feature-secton section-padding fix">
        <div className="bg-shape">
          <Image src={bg_shape_2} alt="img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title wow animate__fadeInUp">
                <span>why choose us</span>
              </div>
              <h2 className="wow animate__fadeInUp" data-wow-delay=".3s">
                We turn your dream <br />
                <span> into reality Now </span>
              </h2>
            </div>
            <p className="wow animate__fadeInUp" data-wow-delay=".5s">
              We work to win the hearts of our partners
            </p>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow animate__fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="feature-box-items">
                <div className="icon">
                  <i className="icon-01"></i>
                </div>
                <div className="content">
                  <h3>Task Analysis</h3>
                  <p>
                    We carefully evaluate each project to ensure it aligns with
                    our expertise and client goals. Our commitment to client
                    satisfaction drives our approach to every web project.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 wow animate__fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="feature-box-items">
                <div className="icon">
                  <i className="icon-02"></i>
                </div>
                <div className="content">
                  <h3>Strategic Approach</h3>
                  <p>
                    We tailor our team to each client's specific needs and
                    develop a comprehensive project roadmap. This strategic
                    approach has been a key factor in our success.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 wow animate__fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="feature-box-items">
                <div className="icon">
                  <i className="icon-03"></i>
                </div>
                <div className="content">
                  <h3>Quality in time</h3>
                  <p>
                    Time efficiency is crucial for delivering high-quality work.
                    We prioritize effective project management for timely
                    delivery and maximum client satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 wow animate__fadeInUp"
              data-wow-delay=".8s"
            >
              <div
                className="feature-box-image bg-cover"
                style={{ backgroundImage: "url('img/feature-bg.jpg')" }}
              >
                <Image src={feature_img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
