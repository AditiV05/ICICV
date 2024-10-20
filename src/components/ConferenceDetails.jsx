import React from "react";
import "./conferenceDetails.css";

const ConferenceDetails = () => {
  return (
    <section id="conference-details">
      <div className="container">
        <h2>Conference Details</h2>
        <div className="grid">
          <div className="card">
            <h3>Paper Submission</h3>
            <p>Submit your research papers by Jan. 15, 2024.</p>
          </div>
          <div className="card">
            <h3>Acceptance Notification</h3>
            <p>Get notified by Feb. 15, 2024.</p>
          </div>
          <div className="card">
            <h3>Conference Dates</h3>
            <p>Mark your calendars for 10-11 April, 2024.</p>
          </div>
          <div className="card">
            <h3>Camera Ready Copy</h3>
            <p>Submit the final version by Feb. 29, 2024.</p>
          </div>
          <div className="card">
            <h3>Registration Deadline</h3>
            <p>Complete your registration by Feb. 29, 2024.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceDetails;
