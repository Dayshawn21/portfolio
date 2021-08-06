import React from "react";

const About = () => {
  return (
    <div className="container text-center py-3">
      <div className="py-2">
        <h1 className="large">About Me</h1>
        <h3>
          A frontend developer with experience in using JAM stack technologies.
          I build quality responsive websites, clean user interfaces and rich
          interactive web apps. Targeting React, Javascript and other web
          development opportunities. I'm always open to adapt to work with team
          and work on new frontend skills and technology.
        </h3>
      </div>
      <div className="py-2">
        <h1 className="large"> Current Skills</h1>
        <div className="grid-4 skills">
          <div>
            <img src="/image/html.png" /> <h2>HTML</h2>
          </div>
          <div>
            <img src="/image/css.png" /> <h2>CSS</h2>
          </div>
          <div>
            <img src="/image/js.png" /> <h2>JavaScript</h2>
          </div>
          <div>
            <img src="/image/sass.png" /> <h2>SASS</h2>
          </div>
          <div>
            <img src="/image/tailwind-css.png" /> <h2>Tailwind CSS</h2>
          </div>
          <div>
            <img src="/image/node-js.png" /> <h2>Node JS</h2>
          </div>
          <div>
            <img src="/image/mongodb.png" /> <h2>MongoDB</h2>
          </div>
          <div>
            <img src="/image/react-js.png" /> <h2>React</h2>
          </div>
          <div>
            <img src="/image/nextjs.png" /> <h2>NextJs</h2>
          </div>
          <div>
            <img src="/image/strapi.png" /> <h2>Strapi</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
