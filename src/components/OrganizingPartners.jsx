import React from "react";
import "./organizingPartners.css";

const OrganizingPartners = () => {
  const partners = [
    {
      name: "CNR Nanotec – Institute of nanotechnology, Italy",
      image: "https://icicv.co.in/wp-content/uploads/2023/11/image.gif",
      link: "https://www.cnr.it/en/institute/054/institute-of-nanotechnology-nanotec",
    },
    {
      name: "University of Malta, Malta",
      image: "https://icicv.co.in/wp-content/uploads/2023/11/malta.png",
      link: "https://www.um.edu.mt/",
    },
    {
      name: "DIMES, University of Calabria, Italy",
      image: "https://icicv.co.in/wp-content/uploads/2023/11/della.jpg",
      link: "https://dimes.unical.it/",
    },
  ];

  return (
    <section id="organizing-partners">
      <div className="container">
        <h2>Organizing Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <img src={partner.image} alt={partner.name} />
              </a>
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
        <div className="brochure-link">
          <p>
            Download ICICV-2024 Brochure from{" "}
            <a
              href="https://icicv.co.in/wp-content/uploads/2024/03/ICICV-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrganizingPartners;
