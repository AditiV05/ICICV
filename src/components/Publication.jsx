import React from "react";
import "./publication.css";

const Publication = () => {
  return (
    <section id="publication">
      <div className="container">
        <h2>Publication</h2>
        <p>
          The proceedings of ICICV-2024 will be published in the Lecture Notes
          in Networks and Systems (LNNS) series by Springer. LNNS is indexed in
          databases such as SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, and
          SCImago.
        </p>
        <div className="publication-logos">
          <img
            src="https://icicv.co.in/wp-content/uploads/2023/11/springer.png"
            alt="Springer Logo"
          />
          <img
            src="https://icicv.co.in/wp-content/uploads/2023/10/scopus-logo-300x94.png"
            alt="Scopus Logo"
          />
        </div>

        <div className="publication-links">
          <a
            href="https://link.springer.com/book/9789819769940"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://icicv.co.in/wp-content/uploads/2024/08/vol1.webp"
              alt="Volume 1"
            />
          </a>
          <a
            href="https://link.springer.com/book/9789819769919"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://icicv.co.in/wp-content/uploads/2024/08/vol2.webp"
              alt="Volume 2"
            />
          </a>
          <a
            href="https://link.springer.com/book/10.1007/978-981-99-2602-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://icicv.co.in/wp-content/uploads/2023/09/ICICV2022_LNNS.jpg"
              alt="ICICV 2022"
            />
          </a>
          <a
            href="https://link.springer.com/book/10.1007/978-981-19-0475-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://icicv.co.in/wp-content/uploads/2023/09/bookimage.webp"
              alt="Book Image 1"
            />
          </a>
          <a
            href="https://link.springer.com/book/10.1007/978-981-15-6067-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://icicv.co.in/wp-content/uploads/2023/09/bookimage20.webp"
              alt="Book Image 2"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publication;
