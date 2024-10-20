import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import "./header.css";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header>
      <nav>
        <a href="http://localhost:5173/">
          {" "}
          <h1>ICICV-2024</h1>
        </a>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/committees">Committees</NavLink>
          </li>
          <li>
            <NavLink to="/schedule">Schedule</NavLink>
          </li>
          <li
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="dropdown-title">Authors</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/instructions-for-authors">
                    Instructions for Authors
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/call-for-papers">Call for Papers</NavLink>
                </li>
                <li>
                  <NavLink to="/registration">Registration</NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/workshop">Workshop</NavLink>
          </li>
          <li>
            <NavLink to="/special-session">Special Session</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
