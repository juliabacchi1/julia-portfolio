import React from "react";
import Certificate1 from "../assets/images/Certificate1.png";
import Certificate2 from "../assets/images/Certificate2.png";
import Certificate3 from "../assets/images/Certificate3.png";
import Certificate4 from "../assets/images/Certificate4.png";
import Certificate5 from "../assets/images/Certificate5.png";
import Certificate6 from "../assets/images/Certificate6.png";

const certifications = [
  {
    link: "https://cursos.alura.com.br/immersion/certificate/2314ef33-f47b-4097-9984-7b0750adc068",
    image: Certificate1,
  },
  {
    link: "https://www.shecodes.io/diplomas/87401d4aded5ac4616ac4b08ee041d3f",
    image: Certificate2,
  },
  {
    link: "https://www.shecodes.io/certificates/5c10d79c325c7d7c1710406081f9a2ba?_gl=1*1fc7df0*_gcl_au*MTAyNzc0MjE0MC4xNzMyOTEzMjUx",
    image: Certificate3,
  },
  {
    link: "https://www.shecodes.io/certificates/4e4ce86eb863258b8eae61cfbc5ae76a?_gl=1*y7r36g*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0LjIwNTU5NDU5NzMuMTcyMzQyOTg3Ni4xNzIzNDI5ODc1",
    image: Certificate4,
  },

  {
    link: "https://www.shecodes.io/certificates/901bc2c68769648786a04148d4d45145?_gl=1*nupcai*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
    image: Certificate5,
  },
  {
    link: "https://www.shecodes.io/certificates/b96795c7273611609e63070dd0ba0d7d?_gl=1*1iizvm2*_gcl_au*MTE1Nzg3MTA2Ni4xNzE5MjMwNDU0",
    image: Certificate6,
  },
];

const CertificateList = () => {
  return (
    <div className="About-certificates">
      <h4>Certifications</h4>
      <p>
        Certified in Junior Front-End Development, with
        bootcamps and specialization courses.
      </p>
      <div className="About-certificates-grid">
        {certifications.map((cert, index) => (
          <div className="Certificate-card" key={index}>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="Certificate-link"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="Certificate-image"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateList;
