import bg_shape_2 from "@/public/img/bg-shape-2.png";
import feature_img from "@/public/img/feature-img.png";
import Image from "next/image";

export default function WhyChoose() {
  const whyChooseUs = [
    {
      icon:"icon-01",
      title: "Task Analysis",
      description: "We carefully evaluate each project to ensure it aligns with our expertise and client goals. Our commitment to client satisfaction drives our approach to every web project."
    },
    {
      icon:"icon-02",
      title: "Strategic Approach",
      description: "We tailor our team to each client's specific needs and develop a comprehensive project roadmap. This strategic approach has been a key factor in our success."
    },
    {
      icon:"icon-03",
      title: "Quality in time",
      description: "Time efficiency is crucial for delivering high-quality work. We prioritize effective project management for timely delivery and maximum client satisfaction."
    }
  ];

  return (
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

        <div className="row g-4 align-items-stretch">
          {whyChooseUs.map((item, i) => (
            <div key={i} className="col-xl-3 col-lg-4 col-md-6 d-flex">
              <div className="feature-box-items flex-fill">
                <div className="icon">
                  <i className={`${item.icon}`}></i>
                </div>
                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
            <div
              className="feature-box-image bg-cover flex-fill"
              style={{ backgroundImage: "url('/img/feature-bg.jpg')" }}
            >
              <Image src={feature_img} alt="img"  style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
