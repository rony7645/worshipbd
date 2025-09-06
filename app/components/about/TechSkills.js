import React from "react";

export default function TechSkills() {
  const skills = [
    { name: "Web Development", value: 98 },
    { name: "Website Maintenance", value: 97 },
    { name: "Graphics Design", value: 96 },
    { name: "Video Editing", value: 93 },
    { name: "Digital Marketing", value: 95 },
  ];

  return (
    <section className="team-section-33 section-padding">
      <div className="container">
        <div className="row g-4">

          {/* Left Side */}
          <div className="col-lg-6">
            <div className="team-left-content sticky-style">
              <div className="section-title">
                <div className="sub-title bg-color-2 wow animate__animated animate__fadeInUp">
                  <span>technology index</span>
                </div>
                <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                  Improve and Innovate <br />with the Tech Trends
                </h2>
              </div>
            </div>
          </div>

          {/* Right Side Skills */}
          <div className="col-lg-6">
            {skills.map((skill, i) => (
              <div className="skill" key={i}>
                <div className="skill-title">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                {/* <div
                  className="progress-bar"
                  style={{ "--bar-width": `${skill.value}%` } as React.CSSProperties}
                >
                  <span></span>
                </div> */}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
