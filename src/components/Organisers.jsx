import React from "react";
import "./organisers.css";

const Organisers = () => {
  return (
    <section id="organisers">
      <div className="container">
        <h2>About the Organisers</h2>
        <div className="organisers-content">
          <div className="text-section">
            <p>
              The Manipal Education and Medical Group is an established leader
              in the field of education, research and healthcare. In a span of
              over six decades, it has transformed the lives of more than
              3,00,000 students from over 59 countries. The group includes five
              Universities – Manipal Academy of Higher Education (MAHE,
              Karnataka), Sikkim Manipal University (Sikkim), American
              University of Antigua (Caribbean Islands), Manipal International
              University (Malaysia) and Manipal University Jaipur (Jaipur).
            </p>
            <p>
              Manipal University Jaipur (MUJ) was launched in 2011 on an
              invitation from the Government of Rajasthan, as a self-financed
              State University. MUJ has redefined academic excellence in the
              region, with the Manipal way of learning; one that inspires
              students of all disciplines to learn and innovate through hands-on
              practical experience.
            </p>
            <a
              href="https://jaipur.manipal.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Read More
            </a>
          </div>
          <div className="image-section">
            <img
              src="https://icicv.co.in/wp-content/uploads/2023/08/muj-small-2048x1366.jpg"
              alt="Manipal University Jaipur"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organisers;
