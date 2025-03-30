import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 border-b-2 border-grey-300">
      <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        About
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        I'm a creative developer and engineer
        <br />
        with a passion for building meaningful products.
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        I’m currently a senior at Brown University studying Computer Science and
        Business Economics. I have experience in full-stack development, web
        scraping, data science, and AI/ML/DL. I’m especially passionate about
        creating thoughtful, user-centered digital experiences to deliver
        AI-powered insights.
      </p>
      <div className="mt-10">
        <a
          href="/business"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-md transition"
        >
          See how I can help you
        </a>
      </div>
    </section>
  );
};

export default About;
