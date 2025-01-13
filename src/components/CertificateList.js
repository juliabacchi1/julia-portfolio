import React from "react";

const certifications = [
  {
    date: "December 2024",
    title: "Junior Front-End Graduation",
    link: "https://www.shecodes.io/diplomas/87401d4aded5ac4616ac4b08ee041d3f",
  },
  {
    date: "November 2024",
    title: "Advanced React Development",
    link: "https://www.shecodes.io/certificates/5c10d79c325c7d7c1710406081f9a2ba?_gl=1*1fc7df0*_gcl_au*MTAyNzc0MjE0MC4xNzMyOTEzMjUx",
  },
  {
    date: "September 2024",
    title: "React Development",
    link: "https://www.shecodes.io/certificates/32cca132cccc818562a13d3f3a316856?_gl=1*igg9ra*_gcl_au*MTU4MTI4ODkuMTcyOTI1MjAyNw",
  },
  {
    date: "August 2024",
    title: "Advanced Responsive Web Dev",
    link: "https://www.shecodes.io/certificates/4e4ce86eb863258b8eae61cfbc5ae76a?_gl=1*y7r36g*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0LjIwNTU5NDU5NzMuMTcyMzQyOTg3Ni4xNzIzNDI5ODc1",
  },
  {
    date: "August 2024",
    title: "Responsive Web Development",
    link: "https://www.shecodes.io/certificates/67e0eddd194c9c3fddb3089f6077c1aa?_gl=1*1oyyri6*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
  {
    date: "July 2024",
    title: "Introduction to Artificial Intelligence",
    link: "https://www.shecodes.io/certificates/901bc2c68769648786a04148d4d45145?_gl=1*nupcai*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
  {
    date: "June 2024",
    title: "Advanced Web Development",
    link: "https://www.shecodes.io/certificates/b96795c7273611609e63070dd0ba0d7d?_gl=1*1iizvm2*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
  },
  {
    date: "June 2024",
    title: "Web Development",
    link: "https://www.shecodes.io/certificates/68d8c8ba5dc3e60f79b6089f2293d722?_gl=1*x5esdq*_gcl_au*MjU2NjIzODI5LjE3MTEzNzc5MjQuMTUzMTE4NDU4MS4xNzE2NDMxMDQwLjE3MTY0MzEyODY",
  },
  {
    date: "April 2024",
    title: "Introduction to Web Development",
    link: "https://www.shecodes.io/certificates/b6f22f32dd61e405a598431dfadae14e?_gl=1*1wpvulc*_gcl_au*MjU2NjIzODI5LjE3MTEzNzc5MjQuMTUzMTE4NDU4MS4xNzE2NDMxMDQwLjE3MTY0MzEyODY",
  },
  {
    date: "April 2024",
    title: "Introduction to Coding",
    link: "https://www.shecodes.io/certificates/57626aeb2fa445fed52acb3c7d60b526?_gl=1*1wpvulc*_gcl_au*MjU2NjIzODI5LjE3MTEzNzc5MjQuMTUzMTE4NDU4MS4xNzE2NDMxMDQwLjE3MTY0MzEyODY",
  },
];

const CertificateList = () => {
  return (
    <div className="About-certificates">
      <h4>Certifications</h4>
      <div className="About-certificates-grid">
        {certifications.map((cert, index) => (
          <div className="Map" key={index}>
            <div>
              <p>{cert.date}</p>
            </div>
            <div>
              <p>{cert.title}</p>
            </div>
            <div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                Details ⇲
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateList;
