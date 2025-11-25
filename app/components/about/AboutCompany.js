import Image from "next/image";
import bgShape from "@/public/img/about/bg-shape-2.png";
import rightShape from "@/public/img/case-studies/right-shaape.png";

export default function AboutComapany() {
  return (
    <section className="about-section-2 fix section-padding">
      <div className="bg-shape">
        <Image src={bgShape} alt="Background Shape" />
      </div>

      <div className="right-shape float-bob-x">
        <Image src={rightShape} alt="Right Shape" />
      </div>

      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">

            {/* Left Side Video */}
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="about-video">
                <iframe  
                style={{
                    width: "750px",
                    height: "500px",
                    borderRadius: "12px",
                    border: "none",
                    pointerEvents: "none",
                  }} 
                  src="https://www.youtube.com/embed/ES22UiYewfE" 
                  title="WORSHIPBD টিম পরিচিতি | Meet Our Team | IT Agency Introduction" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerpolicy="strict-origin-when-cross-origin" 
                  allowfullscreen>
                    
                  </iframe>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2 wow animate__animated animate__fadeInUp">
                    <span>About Company</span>
                  </div>
                  <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                    Your Complete Solutions
                  </h2>
                </div>

                <p className="mt-3 mt-md-0 wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                  We feel really happy and proud while thinking that more than [number] clients have
                  vested the responsibility to work for them providing superior digital solutions and thus
                  be their partner in achieving desired success. The emergence of Worshipbd did not happen
                  all on a sudden, rather it came into being with a lot of plans and strategies to become
                  the real partner for our clients.
                </p>

                <div className="icon-items-area">
                  <div className="icon-items wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                      <i className="icon-01"></i>
                    </div>
                    <div className="content">
                      <h3>Analytics Reporting</h3>
                      <p>Collaboratively formulate principled capital. Progressively evolve user</p>
                    </div>
                  </div>

                  <div className="icon-items wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                    <div className="icon">
                      <i className="icon-02"></i>
                    </div>
                    <div className="content">
                      <h3>Data Guard Sentinel</h3>
                      <p>Collaboratively formulate principled capital. Progressively evolve user</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* End Right Side */}

          </div>
        </div>
      </div>
    </section>
  );
}
