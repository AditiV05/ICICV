import React from "react";
import "./invitedSpeakers.css";

const InvitedSpeakers = () => {
  const speakers = [
    {
      name: "Simon Fong James",
      image:
        "https://icicv.co.in/wp-content/uploads/2023/10/Simon-Fong-e1699366107256.jpg",
      link: "https://www.fst.um.edu.mo/people/ccfong/",
      description: "University of Macau",
    },
    {
      name: "Milan Tuba",
      image: "https://icicv.co.in/wp-content/uploads/2024/03/milan_tuba.jpg",
      link: "https://singidunum.ac.rs/profile/mtuba",
      description: "Singidunum University, Serbia",
    },
    {
      name: "Eugenio Vocaturo",
      image:
        "https://icicv.co.in/wp-content/uploads/2024/04/Eugenio-Vocaturo.jpg",
      link: "https://dottorato.dimes.unical.it/students/eugenio-vocaturo",
      description: "CNR – NANOTEC – DIMES – University of Calabria, Italy",
    },
    {
      name: "Sudip Misra",
      image: "https://icicv.co.in/wp-content/uploads/2023/12/suddip_m-1.jpg",
      link: "https://cse.iitkgp.ac.in/~smisra/",
      description: "Indian Institute of Technology, Kharagpur India",
    },
    {
      name: "Rajesh Kumar",
      image: "https://icicv.co.in/wp-content/uploads/2023/12/Rajesh-1.png",
      link: "https://www.mnit.ac.in/dept_ee/profile?fid=RKiJ",
      description: "MNIT Jaipur, India",
    },
    {
      name: "Aninda Bose",
      image: "https://icicv.co.in/wp-content/uploads/2023/09/Aninda-Bose.jpg",
      link: "https://www.springer.com/gp/authors-editors/aninda-bose/5084",
      description: "Executive Editor, Springer Nature, London",
    },
    {
      name: "Nilanjan Dey",
      image: "https://icicv.co.in/wp-content/uploads/2023/09/Nilanjan-Dey.jpg",
      link: "https://sites.google.com/view/drnilanjandey/home",
      description: "Techno International New Town, Kolkata, India",
    },
    {
      name: "Ayan Mondal",
      image: "https://icicv.co.in/wp-content/uploads/2023/12/ayan_m2.png",
      link: "https://www.iiti.ac.in/people/~ayanm/publications.html",
      description: "Indian Institute of Technology, Indore, India",
    },
    {
      name: "Arijit Roy",
      image:
        "https://icicv.co.in/wp-content/uploads/2023/12/arijit_r-768x768.jpg",
      link: "https://arijit-iitkgp.github.io/",
      description: "Indian Institute of Technology, Patna, India",
    },
  ];

  return (
    <section id="invited-speakers">
      <div className="container">
        <h2>Invited Speakers</h2>
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card">
              <a href={speaker.link} target="_blank" rel="noopener noreferrer">
                <img src={speaker.image} alt={speaker.name} />
              </a>
              <h3>{speaker.name}</h3>
              <p>{speaker.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvitedSpeakers;
