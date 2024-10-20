import React from "react";
import "./registration.css";

const Registration = () => {
  return (
    <section className="registration">
      <div className="container">
        <h2>Registration</h2>
        <p>
          The authors agree that if the paper is accepted for oral/poster
          presentation, at least one of the authors will register for the
          conference and present the paper at the conference venue. The
          registration fee (inclusive of 18% GST) is given below for your
          reference:
        </p>
        <h3>Registration Fees</h3>
        <table className="registration-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>INDIAN</th>
              <th>INTERNATIONAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Students/ Research Scholars</td>
              <td>10000 INR</td>
              <td>200 USD</td>
            </tr>
            <tr>
              <td>Academicians</td>
              <td>12000 INR</td>
              <td>250 USD</td>
            </tr>
            <tr>
              <td>Industry Participants</td>
              <td>14000 INR</td>
              <td>300 USD</td>
            </tr>
            <tr>
              <td>Attendee Only</td>
              <td>2500 INR</td>
              <td>100 USD</td>
            </tr>
            <tr>
              <td>Extra Page Charges</td>
              <td>1500 INR</td>
              <td>20 USD</td>
            </tr>
          </tbody>
        </table>
        <h3>Important Instructions:</h3>
        <ul>
          <li>
            For successful registration, at least one author should register
            before the deadline.
          </li>
          <li>
            Registration fee includes participation at the conference, food, and
            conference kit.
          </li>
          <li>Boarding and lodging will be borne by the participant only.</li>
          <li>
            Standard page limit of 15 pages (in Springer Format) will be
            applicable to all submitted manuscripts.
          </li>
          <li>
            After payment, note down the transaction ID and save a snapshot of
            the payment. Transaction ID and snapshots are required for
            registration.
          </li>
          <li>
            Presentation certificate will be issued to the presenter only. The
            certificate will also include the name of all authors, but the
            affiliation of the presenter only will be included.
          </li>
          <li>
            If multiple papers are accepted for publication and presentation by
            the same author(s), each paper requires a registration fee to be
            included in the proceedings.
          </li>
          <li>
            Once registration is confirmed, the corresponding author will
            receive a copy of the publishing agreement from us. The
            corresponding author needs to submit the signed and scanned copy of
            the publishing agreement. The details regarding the submission of
            the agreement will be sent via email.
          </li>
          <li>
            Do not inquire about registration status via email/phone. You will
            be notified via email once the payment information is updated with
            us from the finance section.
          </li>
        </ul>
        <h3>Registration Steps:</h3>
        <ul>
          <li>
            Step 1:{" "}
            <a
              href="https://pay.webfront.in/#/merchantinfo/manipal-university-jaipur/6171"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fee Payment (Indian)
            </a>
          </li>
          <li>
            Step 1:{" "}
            <a
              href="https://pages.razorpay.com/pl_NfsSZyANR7JgnB/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fee Payment (International)
            </a>
          </li>
          <li>
            Step 2:{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdoxXDSOaDH8mUSzJa_6Croc8iOkdBzq7NuA4S23Nzlks_Hhg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fill Registration Form
            </a>
          </li>
          <li>
            Step 2:{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-r24umyBQK49AZbNEq_tIG4Ztbe1psVlFc7G-BRp7iF9GUA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Attendee Registration Form
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Registration;
