import React from "react";
import "./schedule.css";

const Schedule = () => {
  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        <h2>Schedule</h2>
        <div className="schedule-details">
          <h3>Schedule of Paper Presentation:</h3>
          <ul>
            <li>
              <strong>April 10, 2024 (Offline/ in-person):</strong> 64, 69, 75,
              153, 162, 170, 260, 261, 272, 276, 281, 292, 294, 316, 347, 359,
              368, 440, 444, 485, 492
            </li>
            <li>
              <strong>April 10, 2024 (Online/ Virtual):</strong> 29, 55, 71, 96,
              100, 113, 155, 174, 187, 201, 216, 226, 233, 243, 268, 298, 318,
              319, 325, 346, 365, 443, 466, 495
            </li>
            <li>
              <strong>April 11, 2024 (Offline/ in-person):</strong> 28, 103,
              159, 263, 278, 432, 433
            </li>
            <li>
              <strong>April 11, 2024 (Online/ Virtual):</strong> 09, 67, 81, 84,
              115, 173, 183, 192, 229, 239, 240, 250, 262, 269, 287, 288, 392,
              437, 454, 463, 470, 471, 472, 475, 486, 488, 490, 491, 493
            </li>
          </ul>
          <div className="downloads">
            <p>
              <a
                href="https://icicv.co.in/wp-content/uploads/2024/04/ICICV-2024-Program-Schedule-with-links.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Program Schedule with links: Download
              </a>
            </p>
            <p>
              <a
                href="https://icicv.co.in/wp-content/uploads/2024/04/ICICV-2024-Paper-presentation-schedule-v2.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Paper Presentation Schedule: Download
              </a>
            </p>
            <p>
              <a
                href="https://icicv.co.in/wp-content/uploads/2024/04/ICICV-2024-Detailed-paper-presentation-schedule-v3.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Detailed Paper Presentation Schedule: Download
              </a>
            </p>
            <p>
              <a href="#" target="_blank" rel="noopener noreferrer">
                PPT Template: Download
              </a>
            </p>
          </div>
        </div>

        <div className="accommodation-details">
          <h3>Accommodation:</h3>
          <p>
            As mentioned earlier, boarding and lodging will be borne by
            participant only. We regret to inform you that in-campus
            accommodation is not available, however, plenty of Hostels/ Guest
            Houses/ PGs are available nearby MUJ campus. We are in a process to
            contact some nearby vendors for availing rooms at reasonable prices.
            The details of some selected vendors are mentioned herewith for the
            convenience and ready reference for the participants. Participants
            may contact these or any other vendors for booking of rooms at their
            own.
          </p>
          <ul>
            <li>
              Golden Homes boy’s pg & hostel, Near Manipal University Jaipur
              (Contact: +91-9828018850)
            </li>
            <li>
              Shiv Shakti Hostels, Near Manipal University Jaipur (Contact:
              +91-8559855477)
            </li>
            <li>
              Youngistan, Near Manipal University Jaipur (Contact: Sourabh
              +91-9772397223, Suresh +91-9828300038)
            </li>
            <li>
              Hotel Highway King Bagru, Near Manipal University Jaipur (Contact:
              +91-9828879222)
            </li>
            <li>
              Details of other vendors will be updated soon (on availability
              basis).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
