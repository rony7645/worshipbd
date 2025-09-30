"use client"

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
                <h2
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-delay=".3s"
                >
                  Improve and Innovate <br />
                  with the Tech Trends
                </h2>
              </div>
            </div>
          </div>

          {/* Right Side Skills */}
          <div className="col-lg-6">
            {skills.map((skill, i) => (
              <div className="skill" key={i}>
                <div className="skill-title mb-3">
                  <div className="d-flex justify-content-between">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="progress mt-1">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${skill.value}%`,
                        backgroundColor: "#40C0C4",
                      }}
                      aria-valuenow={skill.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
