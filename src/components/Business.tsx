import React from "react";
import Contact from "./Contact";

const Business: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans">
      <main className="pt-32 px-6 md:px-16 max-w-screen-xl mx-auto space-y-24">
        <section>
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Web Design & Development
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Custom websites and apps <br /> built to perform.
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            I build sleek, responsive, and functional websites and mobile apps
            tailored to your goals — whether you're launching a business,
            showcasing your work, or creating a product.
          </p>
        </section>

        <section className="space-y-16">
          {/* Core Packages */}
          {[
            {
              title: "Starter Site",
              price: "$750–$1,200",
              who: "Individuals who need a professional online presence fast — without the need for a complex full website.",
              perfect: [
                "Personal websites",
                "Resumes or portfolios",
                "Events, weddings, or launches",
                "Coaches, consultants, or freelancers starting out",
              ],
              why: "A sleek, modern 1–2 page site that communicates who you are, what you do, and how to get in touch. It’s the fastest, most affordable way to go from idea to online — no templates, just clean, custom code built for you.",
              includes: [
                "1–2 responsive pages (React frontend)",
                "Fast performance, clean design",
                "Contact form & social links",
                "Deployed to production (Netlify/Vercel)",
                "Quick build time",
              ],
            },
            {
              title: "Business Website",
              price: "$1,500–$2,500",
              who: "Small businesses, startups, or solo professionals who need a multi-page website that establishes credibility and drives action.",
              perfect: [
                "Local businesses (restaurants, gyms, law firms)",
                "Creators or entrepreneurs with multiple offerings",
                "Startups building their brand",
                "Real estate agents, service providers, etc.",
              ],
              why: "A 3–6 page site tailored to your brand and optimized to convert visitors into customers. Built with speed, responsiveness, and SEO in mind — everything you need to look professional and grow your business online.",
              includes: [
                "3–6 custom pages (Home, About, Services, Contact, etc.)",
                "Responsive UI, branded design",
                "Contact forms, map, calendar links",
                "SEO best practices",
                "Deployment & basic analytics setup",
              ],
            },
            {
              title: "Custom Web App",
              price: "Starts at $3,500+",
              who: "Clients who need more than just a brochure — they need real functionality, interactivity, and database integration.",
              perfect: [
                "Internal dashboards or client portals",
                "SaaS MVPs or startups",
                "Booking or scheduling platforms",
                "Job boards, marketplaces, etc.",
              ],
              why: "Full-stack development to bring your web-based idea to life. Custom-built React frontends connected to powerful backends with Node.js or Spring Boot — scalable, secure, and built to grow with your product.",
              includes: [
                "React frontend + Node.js or Spring Boot backend",
                "Auth/login, CRUD features, dashboards, APIs",
                "Database integration (PostgreSQL, MongoDB, etc.)",
                "Deployment to production (Render, Heroku, AWS)",
              ],
            },
            {
              title: "Mobile App Development",
              price: "Starts at $4,000+",
              who: "Entrepreneurs or businesses ready to reach users on iOS and Android with a polished mobile experience.",
              perfect: [
                "MVPs or early-stage startups",
                "Fitness, social, or utility apps",
                "Companion apps for existing platforms",
                "Client tools, loyalty apps, or directories",
              ],
              why: "Cross-platform mobile apps built with React Native — one codebase, two platforms. You get a beautifully designed mobile experience, full functionality, and support through the App Store and Play Store submission process.",
              includes: [
                "Cross-platform development",
                "Clean UI/UX based on brand needs",
                "Authentication, push notifications, API integrations",
                "App Store / Play Store deployment assistance",
              ],
            },
          ].map((pkg, i) => (
            <div key={i} className="border-t pt-12">
              <h2 className="text-2xl font-bold mb-2">{pkg.title}</h2>
              <p className="text-gray-600 italic mb-1">{pkg.price}</p>
              <p className="text-gray-700 mb-4">{pkg.who}</p>
              <div className="mb-2">
                <span className="font-semibold text-gray-700">
                  Perfect for:
                </span>
                <ul className="list-disc list-inside text-gray-600">
                  {pkg.perfect.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-700">
                  Why it’s valuable:
                </span>
                <p className="text-gray-600 mt-1">{pkg.why}</p>
              </div>
              <div className="mb-2">
                <span className="font-semibold text-gray-700">Includes:</span>
                <ul className="list-disc list-inside text-gray-600">
                  {pkg.includes.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Add-ons */}
          <div className="pt-16 border-t">
            <h2 className="text-2xl font-bold mb-4">Add-Ons</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>SEO Setup & Meta Tagging</li>
              <li>Logo Design & Branding Kit</li>
              <li>Monthly Maintenance Plans – keep your site up to date</li>
            </ul>
          </div>
        </section>

        {/* Reused Contact Form */}
        <Contact />
      </main>
    </div>
  );
};

export default Business;
