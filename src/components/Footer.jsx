import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-contact">
            <h3>Contact Us</h3>
            <p>
              Email:{" "}
              <a href="mailto:icicv.muj@gmail.com">icicv.muj@gmail.com</a>
            </p>
            <p>+91-9416164461 (Deepak Sinwar)</p>
            <p>+91-8890257867 (Satyabrata Roy)</p>
          </div>
          <div className="footer-section footer-address">
            <h3>Address</h3>
            <p>Manipal University Jaipur</p>
            <p>Dehmi Kalan, Off Jaipur-Ajmer Expressway</p>
            <p>Jaipur, Rajasthan, India-303007</p>
          </div>
          <div className="footer-section footer-logo">
            <img
              src="https://icicv.co.in/wp-content/uploads/2023/08/ICICV-Logo-300x257.png"
              alt="ICICV Logo"
            />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 ICICV-2024 | Developed & Maintained by{" "}
          <a
            href="https://stackguru.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            StackGuru Solutions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
