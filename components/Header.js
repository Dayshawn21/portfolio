import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header-home">
      <div className="header-content">
        <h1> &#10094; Dayshawn Terry</h1>

        <h1>Frontend Developer / &#10095;</h1>
      </div>

      <div className="py-2 grid-3 text-center">
        <div>
          <a
            href="https://github.com/Dayshawn21"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src="/image/github.png" alt="" width={500} height={500} />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/dayshawn-terry/"
            rel="noopener noreferrer"
            target="_blank"
            className="mx-4"
          >
            <Image
              src="/image/linkedin-app.png"
              alt=""
              width={500}
              height={500}
            />
          </a>
        </div>
        <div>
          <a href="dayshawn2.pdf" rel="noopener noreferrer" target="_blank">
            <Image src="/image/resume.png" width={500} height={500} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
