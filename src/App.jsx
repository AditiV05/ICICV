import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ConferenceDetails from "./components/ConferenceDetails";
import Publication from "./components/Publication";
import InvitedSpeakers from "./components/InvitedSpeakers";
import PreviousSpeakers from "./components/PreviousSpeakers";
import Organisers from "./components/Organisers";
import OrganizingPartners from "./components/OrganizingPartners";
import Footer from "./components/Footer";
import Committees from "./components/Committees";
import Schedule from "./components/Schedule";
import Workshop from "./components/Workshop";
import SpecialSession from "./components/Specialsession";
import InstructionsForAuthors from "./components/InstructionsAuthors";
import CallForPapers from "./components/CallForPapers";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <ConferenceDetails />
                <Publication />
                <InvitedSpeakers />
                <PreviousSpeakers />
                <Organisers />
                <OrganizingPartners />
              </>
            }
          />
          <Route path="/committees" element={<Committees />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/special-session" element={<SpecialSession />} />
          <Route
            path="/instructions-for-authors"
            element={<InstructionsForAuthors />}
          />
          <Route path="/call-for-papers" element={<CallForPapers />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
