import Image from "next/image";
import { Instagram, Facebook, Twitter, Linkedin, Share2 } from "lucide-react";

import team1 from "@/public/img/team/1.jpg";
import team2 from "@/public/img/team/2.jpg";
import iconShape from "@/public/img/team/icon-shape.png";

export default function Founder() {
  return (
    <section className="team-section-3 fix mt-5">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="col-md-4">
            <div className="section-title-area">
              <div className="section-title">
                <div className="sub-title wow animate__animated animate__fadeInUp">
                  <span>Meet Our Founders</span>
                </div>
                <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                  The Visionaries Behind Our Journey
                </h2>
              </div>
            </div>
          </div>

          {/* Founder Cards */}
          <div className="col-md-8">
            <div className="row">

              {/* Founder 1 */}
              <div className="col-xl-6 col-lg-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                <div className="team-card-items">
                  <div className="team-image">
                    <Image src={team1} alt="Mizanur Rahman" />
                  </div>
                  <div className="team-content">
                    <h3>Mizanur Rahman</h3>
                    <p>Co-Founder</p>
                  </div>
                  <div className="icon-shape">
                    <Image src={iconShape} alt="Icon Shape" />
                    <div className="social-profile">
                      <ul className="flex gap-2">
                        <li><a href="https://www.instagram.com/mrahman091/" target="_blank" rel="noreferrer"><Instagram size={16} /></a></li>
                        <li><a href="https://www.facebook.com/mizanrahman2369" target="_blank" rel="noreferrer"><Facebook size={16} /></a></li>
                        <li><a href="https://x.com/mrahman091" target="_blank" rel="noreferrer"><Twitter size={16} /></a></li>
                        <li><a href="https://www.linkedin.com/in/mizanurrahman91/" target="_blank" rel="noreferrer"><Linkedin size={16} /></a></li>
                      </ul>
                      <span className="plus-btn"><Share2 size={16} /></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="col-xl-6 col-lg-6 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                <div className="team-card-items">
                  <div className="team-image">
                    <Image src={team2} alt="Mr. Rajib" />
                  </div>
                  <div className="team-content">
                    <h3>Mr. Rajib</h3>
                    <p>Co-Founder</p>
                  </div>
                  <div className="icon-shape">
                    <Image src={iconShape} alt="Icon Shape" />
                    <div className="social-profile">
                      <ul className="flex gap-2">
                        <li><a href="https://www.instagram.com/freelancer.rajib4312/" target="_blank" rel="noreferrer"><Instagram size={16} /></a></li>
                        <li><a href="https://www.facebook.com/freelancer.rajib4312" target="_blank" rel="noreferrer"><Facebook size={16} /></a></li>
                        <li><a href="https://x.com/rajib4312" target="_blank" rel="noreferrer"><Twitter size={16} /></a></li>
                        <li><a href="https://www.linkedin.com/in/rajib4312/" target="_blank" rel="noreferrer"><Linkedin size={16} /></a></li>
                      </ul>
                      <span className="plus-btn"><Share2 size={16} /></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
