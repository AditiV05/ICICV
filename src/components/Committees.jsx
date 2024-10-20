import React from "react";
import "./committees.css";

const committeeMembers = [
  {
    image:
      "https://icicv.co.in/wp-content/uploads/2023/08/Mr.-S.-Vaitheeswaran.jpg",
    description: "Chief Patron, Sh. S. Vaitheeswaran, Chairperson, MUJ",
  },
  {
    image:
      "https://icicv.co.in/wp-content/uploads/2023/08/Dr.-Gopalakrishna-Prabhu.jpg",
    description: "Patron, Prof. G.K Prabhu, President, MUJ",
  },
  {
    image:
      "https://icicv.co.in/wp-content/uploads/2023/10/cmde-Jawahar-M-Jangir-150x150.jpg",
    description: "Co-Patron, Cmde (Dr.) Jawahar M Jangir, Pro-President, MUJ",
  },
  {
    image:
      "https://icicv.co.in/wp-content/uploads/2023/08/Dr-Neetu-Bhatnagar.jpg",
    description: "Co-Patron, Prof.Nitu Bhatnagar, Registrar, MUJ",
  },
  {
    image:
      "https://icicv.co.in/wp-content/uploads/2023/08/Dr-Arun-Shanbhag.jpg",
    description: "General Chair, Prof.Arun Shanbhag, Dean - Foe, MUJ",
  },
  {
    image: "https://icicv.co.in/wp-content/uploads/2024/03/VSD-150x150.jpg",
    description:
      "Program Chair, Prof. Vijaypal Singh Dhaka, Director-SCIS, MUJ",
  },
  {
    image: "https://icicv.co.in/wp-content/uploads/2023/08/Sunil_Kumar.jpg",
    description: "Program Co-Chair, Prof. Sunil Kumar, HOD-CCE, MUJ",
  },
  {
    image: "https://icicv.co.in/wp-content/uploads/2024/03/Geeta_Rani.jpg",
    description: "Program Co-Chair, Dr. Geeta Rani, HOD-IOT & IS, MUJ",
  },
  {
    image: "https://icicv.co.in/wp-content/uploads/2024/03/ds-150x150.jpg",
    description: "Convener, Dr. Deepak Sinwar, Associate Prof-IOT & IS, MUJ",
  },
  {
    image: "https://icicv.co.in/wp-content/uploads/2024/03/SR-150x150.jpg",
    description: "Convener, Dr. Satyabrata Roy, Associate Prof-CSE, MUJ",
  },
];

const Committees = () => {
  return (
    <section id="committees" className="committees-section">
      <div className="container">
        <h2>Committees</h2>
        <div className="committee-grid">
          {committeeMembers.map((member, index) => (
            <div key={index} className="committee-card">
              <img src={member.image} alt={member.description} />
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committees;
