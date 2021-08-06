import React from "react";
import dynamic from "next/dynamic";

const Header = () => {
  return (
    <header className="header-home">
      <div className="header-content">
        <h1> &#10094; Dayshawn Terry</h1>

        <h1>Frontend Developer / &#10095;</h1>
      </div>
      <div className="py-2 text-center">
        <a
          href="https://github.com/Dayshawn21"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src="/image/github.png" alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/dayshawn-terry/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="mx-4" src="/image/linkedin-app.png" alt="" />
        </a>
        <a href="dayshawn2.pdf" rel="noopener noreferrer" target="_blank">
          <img src="/image/resume.png" />
        </a>
      </div>
    </header>
  );
};

export default Header;
