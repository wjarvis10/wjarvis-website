import React from "react";
import bfan_image from "../assets/images/bfan_demo.png";
import webscraping_image from "../assets/images/web_scraping_2.png";

interface Project {
  title: string;
  description: string;
  details: string;
  technologies: string[];
  imageUrl?: string | ImportMeta["url"];
}

const projects: Project[] = [
  {
    title: "BFAN – Brown Football Alumni Network",
    description:
      "Built a private professional networking platform from scratch for Brown University's football team, connecting current players and alumni.",
    details:
      "Full-stack web application with React frontend, Spring Boot Java backend, and a MySQL database. Deployed on AWS EC2 & RDS. Led a team of 2 from ideation to launch.",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Spring Boot",
      "Java",
      "MySQL",
      "AWS",
      "Ubuntu",
      "Linux",
      "Apache",
    ],
    imageUrl: bfan_image,
  },
  {
    title: "Pentair Pools Web Scraping",
    description:
      "Worked on a strategic pricing project for $4.1B pool company, gathering, standardizing, and cross-referencing competitive data.",
    details:
      "Built a Python web scraper, cleaned and matched product SKUs, and supported the implementation of a value-based pricing strategy.",
    technologies: ["Python", "Selenium", "Excel", "PowerPoint"],
    imageUrl: webscraping_image,
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 space-y-24">
      <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        Projects
      </div>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-8 items-start md:items-center"
        >
          {project.imageUrl && (
            <div className="w-full flex justify-center md:w-1/2">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full max-h-80 object-contain rounded-xl"
              />
            </div>
          )}
          <div className="w-full md:w-1/2 pl-6 md:pl-12 pt-10 md:pt-0 border-t md:border-t-0 md:border-l-2 border-gray-300">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-gray-500 text-sm mb-4">{project.details}</p>
            <div>
              <span className="text-xs uppercase font-medium text-emerald-600 tracking-wider">
                Technologies Used:
              </span>
              <ul className="flex flex-wrap mt-1 gap-2 text-sm text-gray-600">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="bg-gray-100 px-2 py-1 rounded-md">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
