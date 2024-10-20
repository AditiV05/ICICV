import React from "react";
import "./previousSpeakers.css";

const PreviousSpeakers = () => {
  const previousSpeakers = [
    {
      name: "Ajoy Kumar Ray",
      image:
        "https://icicv.co.in/wp-content/uploads/2023/08/ajoy-kumar-ray.jpg",
      link: "https://jisiasr.org/prof-ajoy-kumar-ray/",
      description:
        "JIS Institute of Advanced Studies & research, Kolkata, India",
    },
    {
      name: "NTNU, Norway",
      image:
        "https://icicv.co.in/wp-content/uploads/2023/09/Ibrahim-A-Hameed.jpg",
      link: "https://www.ntnu.edu/employees/ibib",
      description: "Ibrahim A. Hameed, NTNU, Norway",
    },
    {
      name: "Saroj",
      image:
        "https://icicv.co.in/wp-content/uploads/2023/08/prof.saroj_-300x300.jpg",
      link: "https://gjust.irins.org/profile/385204",
      description:
        "Guru Jambheshwar University of Science and Technology, India",
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
      name: "R Balasubramanian",
      image: "https://icicv.co.in/wp-content/uploads/2023/09/Bala-R.png",
      link: "https://faculty.iitr.ac.in/cs/bala/",
      description: "Indian Institute of Technology Roorkee, India",
    },
    {
      name: "Yi Pan",
      image: "https://icicv.co.in/wp-content/uploads/2023/09/Yi-Pan.jpg",
      link: "https://cas.gsu.edu/profile/yi-pan/",
      description: "Professor, Georgia State University, USA",
    },
    {
      name: "Arun Baran Samaddar",
      image:
        "https://icicv.co.in/wp-content/uploads/2023/09/Arun-Baran-Samadar.jpeg",
      link: "https://in.linkedin.com/in/arun-baran-samaddar-349204255",
      description: "Advisor, JIS Group, India",
    },
    {
      name: "Robin T Bye",
      image:
        "https://icicv.co.in/wp-content/uploads/2024/01/Robin-Trulssen_Bye.jpg",
      link: "https://www.ntnu.edu/employees/robin.t.bye",
      description: "NTNU, Ålesund, NTNU",
    },
    {
      name: "Swagatam Das",
      image:
        "https://icicv.co.in/wp-content/uploads/2024/01/swagatam-768x750.jpg",
      link: "https://www.isical.ac.in/~swagatam.das/",
      description: "Indian Statistical Institute, Kolkata, India",
    },
    {
      name: "Ottar Laurits Osen",
      image: "https://icicv.co.in/wp-content/uploads/2024/01/ottar.png",
      link: "https://www.ntnu.edu/employees/ottar.osen",
      description: "NTNU, Ålesund, NTNU",
    },
    {
      name: "Karm Veer Arya",
      image: "https://icicv.co.in/wp-content/uploads/2024/01/kvarya1.jpg",
      link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.KVArya",
      description: "ABV-IIITM, Gwalior, India",
    },
    {
      name: "Rajeev Srivastava",
      image:
        "https://icicv.co.in/wp-content/uploads/2024/01/Rajeev_Srivastava.jpeg",
      link: "https://www.iitbhu.ac.in/dept/cse/people/rajeevcse",
      description: "Indian Institute of Technology (BHU) Varanasi, India",
    },
    {
      name: "Dharm Singh Jat",
      image: "https://icicv.co.in/wp-content/uploads/2024/01/DSJ.jpeg",
      link: "https://fci.nust.na/prof-dharm-singh-jat",
      description: "Namibia University of Science and Technology, Namibia",
    },
    {
      name: "Rajesh Kumar",
      image: "https://icicv.co.in/wp-content/uploads/2023/12/Rajesh-1.png",
      link: "https://www.mnit.ac.in/dept_ee/profile?fid=RKiJ",
      description: "MNIT Jaipur, India",
    },
    {
      name: "Bhabani Shankar Prasad Mishra",
      image:
        "https://icicv.co.in/wp-content/uploads/2024/01/BSP_profile-photo.jpg",
      link: "https://cse.kiit.ac.in/profiles/bhabani-shankar-prasad-mishra/",
      description: "KIIT University, India",
    },
  ];

  return (
    <section id="previous-speakers">
      <div className="container">
        <h2>Previous Speakers</h2>
        <div className="speakers-grid">
          {previousSpeakers.map((speaker, index) => (
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

export default PreviousSpeakers;
