import Image from "next/image";

// Import all team images
import team7 from "@/public/img/team/7.jpg";
import team6 from "@/public/img/team/6.jpeg";
import team3 from "@/public/img/team/3.png";
import team4 from "@/public/img/team/4.jpg";
import team5 from "@/public/img/team/5.jpg";
import team10 from "@/public/img/team/10.jpg";
import team8 from "@/public/img/team/8.jpg";
import team9 from "@/public/img/team/9.jpg";
import team11 from "@/public/img/team/11.jpg";
import team12 from "@/public/img/team/12.jpg";
import team13 from "@/public/img/team/13.jpg";
import team15 from "@/public/img/team/15.png";
import team16 from "@/public/img/team/16.jpg";
import team17 from "@/public/img/team/17.jpeg";
import team18 from "@/public/img/team/18.jpeg";
import team20 from "@/public/img/team/20.jpg";
import team19 from "@/public/img/team/19.jpg";
import team14 from "@/public/img/team/14.jpg";

export default function TeamMember() {
  const developers = [
    { img: team6, name: "Mehedi Hasan Mithun", role: "Senior Full-Stack Developer", delay: ".2s" },
    { img: team7, name: "Roni Mia", role: "Senior Full-Stack Developer", delay: ".4s" },
    { img: team3, name: "Shakhawat Hosen", role: "Senior Web Developer", delay: ".6s" },
    { img: team4, name: "Imran Hossain", role: "Senior Web Developer", delay: ".8s" },
    { img: team5, name: "Sumon Chandra Nath", role: "Senior Web Developer", delay: ".2s" },
    { img: team10, name: "Israt Jahan Ripa", role: "Senior Web Developer", delay: ".4s" },
    { img: team8, name: "Md. Muhit Khan", role: "Senior Web Developer", delay: ".6s" },
    { img: team9, name: "Siam Ahamed", role: "Senior Web Developer", delay: ".8s" },
    { img: team11, name: "Akash Ahmed", role: "Web Developer", delay: ".2s" },
    { img: team12, name: "Al-Amin", role: "Web Developer", delay: ".4s" },
    { img: team13, name: "Hadis Khan", role: "Web Developer", delay: ".6s" },
    { img: team15, name: "Tasrif Siddiki", role: "Web Developer", delay: ".8s" },
    { img: team16, name: "Sampad Biswas", role: "Web Developer", delay: ".2s" },
  ];

  const creatives = [
    { img: team17, name: "Mafiya Momo", role: "Digital Marketer", delay: ".2s" },
    { img: team18, name: "Mst Rukaia Tanha", role: "SEO Specialist", delay: ".4s" },
    { img: team20, name: "Shamim Khan", role: "Video Editor", delay: ".6s" },
    { img: team19, name: "Ebrahim Hosen Iqbal", role: "Graphics Designer", delay: ".2s" },
    { img: team14, name: "Anamul Haque", role: "Video Editor", delay: ".4s" },
  ];

  const renderTeam = (teamArray) =>
    teamArray.map((member, i) => (
      <div key={i} className="col-xl-3 col-lg-4 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay={member.delay}>
        <div className="team-card-items mt-0">
          <div className="team-image">
            <Image src={member.img} alt={member.name} />
          </div>
          <div className="team-content">
            <h6>{member.name}</h6>
            <p>{member.role}</p>
          </div>
        </div>
      </div>
    ));

  return (
    <section className="team-section-3 fix mt-5">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title mb-4">
            <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay=".3s">Meet Our Developers</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-4">
          {renderTeam(developers)}
        </div>
      </div>

      <div className="container mt-5">
        <div className="section-title-area">
          <div className="section-title mb-4">
            <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay=".3s">Creative & Multimedia</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-4 mb-4">
          {renderTeam(creatives)}
        </div>
      </div>
    </section>
  );
}
