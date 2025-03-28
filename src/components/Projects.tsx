import React from "react";

interface Project {
  title: string;
  description: string;
  details: string;
  technologies: string[];
  imageUrl?: string;
}

const projects: Project[] = [
  {
    title: "BFAN – Brown Football Alumni Network",
    description:
      "Built a private professional networking platform from scratch for Brown University's football team, connecting current players and alumni.",
    details:
      "Full-stack app with React frontend, Spring Boot Java backend, and a MySQL database. Deployed on AWS EC2 & RDS. Led a team of 2 from ideation to launch.",
    technologies: [
      "ReactJS",
      "TypeScript",
      "Spring Boot",
      "Java",
      "MySQL",
      "AWS",
    ],
    imageUrl: "/images/bfan.png", // Replace with your actual image path
  },
  {
    title: "Pentair Pools Web Scraping",
    description:
      "Worked on a strategic pricing project for $4.1B pool company, gathering, standardizing, and cross-referencing competitive data.",
    details:
      "Built a Python web scraper, cleaned and matched product SKUs, and supported the implementation of a value-based pricing strategy.",
    technologies: ["Python", "Selenium", "Excel", "PowerPoint"],
    imageUrl: "/images/pentair.png", // Replace with your actual image path
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 space-y-24">
      <div className="text-sm uppercase tracking-widest text-gray-500">
        Projects
      </div>
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-8 items-start md:items-center"
        >
          {project.imageUrl && (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full md:w-1/2 rounded-xl shadow-md"
            />
          )}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-gray-500 text-sm mb-4">{project.details}</p>
            <div>
              <span className="text-xs uppercase text-gray-400 tracking-wider">
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
