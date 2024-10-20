import React from "react";
import "./specialSession.css";

const specialSessions = [
  {
    title: "Special Session-1: AI Innovations for the Marginalised",
    organizer:
      "Dr. Anju Pratap, Department of Computer Science and Engineering, Saintgits College of Engineering, Kerala",
    link: "#",
  },
  {
    title: "Special Session-2: Enabling Technologies for AIoT",
    organizer:
      "Dr. Gaurav Singal, Dr. Vipin Pal, Dr. Abhinav Tomar, Department of Computer Science and Engineering, Netaji Subhas University of Technology, Delhi, India",
    link: "#",
  },
  {
    title:
      "Special Session-3: Envisioning Sustainable Futures: Exploring Next-Gen Computing Solutions",
    organizer:
      "Dr. Saurabh Bilgaiyan, School of Computer Engineering, Kalinga Institute of Industrial Technology Deemed to be University, Bhubaneswar, Odisha",
    link: "#",
  },
  {
    title:
      "Special Session-4: Machine Learning Fusion: Empowering Future Data Analytics Across Real-World Domains",
    organizer:
      "Dr. Jai Prakash V. Verma, Department of Computer Science & Engineering, Institute of Technology, Nirma University, Ahmedabad",
    link: "#",
  },
  {
    title: "Special Session-5: Intelligent Solutions for Industry Automation",
    organizer:
      "Dr. Prakash Choudhary, Central University of Rajasthan, and Dr. Vijay Kumar, Dr B R Ambedkar National Institute of Technology, Jalandhar, India",
    link: "#",
  },
  {
    title:
      "Special Session-6: Traversing the Digital Era: Integrating Artificial Intelligence and Leadership",
    organizer:
      "Prof. Dr. Krishnaraj Ramaswamy, Principal Scientific Advisor, Ministry of Innovation and Technology, Ethiopia",
    link: "#",
  },
  {
    title:
      "Special Session-7: Computational Intelligence in Real Domain Applications",
    organizer:
      "Eugenio Vocaturo, Tommaso Ruga, and Ester Zumpano, University of Calabria (DIMES), Italy",
    link: "#",
  },
];

const SpecialSession = () => {
  return (
    <section id="special-session" className="special-session-section">
      <div className="container">
        <h2>Call for Special Sessions</h2>
        <p>Submissions open for the following Special Sessions:</p>
        <div className="special-sessions-list">
          {specialSessions.map((session, index) => (
            <div key={index} className="session-card">
              <h3>{session.title}</h3>
              <p>{session.organizer}</p>
              <a href={session.link} className="session-link">
                To know more click here
              </a>
            </div>
          ))}
        </div>
        <h3>Special Session Proposal Guidelines</h3>
        <p>
          All Special Sessions will be held either at the conference venue or
          online. To conduct a special session, the organizer of the session
          needs to send a proposal containing the following items to{" "}
          <a href="mailto:icicv.muj@gmail.com">icicv.muj@gmail.com</a>:
        </p>
        <ul>
          <li>Title</li>
          <li>Aim & Scope/ Objectives</li>
          <li>Sub-topics of interest</li>
          <li>Contact information of the Organizer</li>
          <li>Organizers’ short biography</li>
          <li>
            List of potential reviewers/ TPC capable of reviewing papers
            submitted to the special session
          </li>
          <li>Tentative number of paper submissions</li>
        </ul>
        <p>
          Proposals will be evaluated by the ICICV-2024 Technical Committee
          based on novelty and impact. Organizers will receive guidelines via
          email.
        </p>
        <h4>Important Dates:</h4>
        <ul>
          <li>Notification of acceptance: at the earliest</li>
          <li>
            Full length paper submission and registration: As per Conference
            Timeline
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SpecialSession;
