import React from "react";

const certifications = [
  { date: "November 2024", title: "Advanced React Development", link: "#" },
  { date: "October 2024", title: "React Development", link: "#" },
  { date: "September 2024", title: "Advanced Responsive Web Dev", link: "#" },
  { date: "August 2024", title: "Responsive Web Development", link: "#" },
  {
    date: "July 2024",
    title: "Introduction to Artificial Intelligence",
    link: "#",
  },
  { date: "June 2024", title: "Advanced Web Development", link: "#" },
  { date: "May 2024", title: "Web Development", link: "#" },
  { date: "April 2024", title: "Introduction to Web Development", link: "#" },
  { date: "March 2024", title: "Introduction to Coding", link: "#" },
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
              <a href={cert.link}>Link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateList;
