import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-24">
      <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        About
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        I'm a creative developer and engineer
        <br />
        with a passion for building meaningful products.
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        I’m currently a senior at Brown University studying Computer Science. I
        have a background in full-stack development, and I’m especially
        passionate about creating thoughtful, user-centered digital experiences.
      </p>
    </section>
  );
};

export default About;
