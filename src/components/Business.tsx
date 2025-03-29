import { useEffect, useRef, useState } from "react";
import Contact from "./Contact";

const Business: React.FC = () => {
  const [showContactButton, setShowContactButton] = useState(true);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowContactButton(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white text-black font-sans">
      <main className="pt-32 px-6 md:px-16 max-w-screen-xl mx-auto space-y-20">
        <section>
          <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Web Design & Development
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Custom websites and apps <br /> built to perform.
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            I build sleek, responsive, and functional websites and mobile apps
            tailored to your goals — whether you're launching a business,
            showcasing your work, or creating a product.
          </p>
        </section>

        <section className="space-y-16 pt-20 border-t-2 border-gray-300">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              Core Packages
            </h2>
            <h3 className="text-3xl font-bold">What I Offer</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* Starter Site */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Starter Site</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Price:</strong> $750–$1,200
              </p>
              <p className="mb-2">
                For individuals who need a professional online presence fast —
                without the need for a complex full website.
              </p>
              <p className="text-sm mb-2 text-gray-600">Perfect for:</p>
              <ul className="list-disc pl-5 mb-2 text-sm text-gray-700">
                <li>Personal websites</li>
                <li>Resumes or portfolios</li>
                <li>Events, weddings, or launches</li>
                <li>Coaches, consultants, or freelancers</li>
              </ul>
              <p className="text-sm text-gray-600 mb-2">Includes:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>1–2 responsive pages (React)</li>
                <li>Clean design, fast performance</li>
                <li>Contact form & social links</li>
                <li>Deployment (Netlify/Vercel)</li>
              </ul>
            </div>

            {/* Business Website */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Business Website</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Price:</strong> $1,500–$2,500
              </p>
              <p className="mb-2">
                For small businesses, startups, or solo professionals who need a
                multi-page website that establishes credibility and drives
                action.
              </p>
              <p className="text-sm mb-2 text-gray-600">Perfect for:</p>
              <ul className="list-disc pl-5 mb-2 text-sm text-gray-700">
                <li>Local businesses</li>
                <li>Creators or entrepreneurs</li>
                <li>Startups building their brand</li>
                <li>Real estate agents, etc.</li>
              </ul>
              <p className="text-sm text-gray-600 mb-2">Includes:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>3–6 pages (Home, About, Services, etc.)</li>
                <li>Responsive UI, contact forms</li>
                <li>SEO optimization</li>
                <li>Deployment & analytics</li>
              </ul>
            </div>

            {/* Custom Web App */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Custom Web App</h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Starts at:</strong> $3,500+
              </p>
              <p className="mb-2">
                For clients who need real functionality, interactivity, and
                database integration — not just a brochure site.
              </p>
              <p className="text-sm mb-2 text-gray-600">Perfect for:</p>
              <ul className="list-disc pl-5 mb-2 text-sm text-gray-700">
                <li>Dashboards or client portals</li>
                <li>SaaS MVPs or startups</li>
                <li>Booking or scheduling platforms</li>
                <li>Job boards or marketplaces</li>
              </ul>
              <p className="text-sm text-gray-600 mb-2">Includes:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>React frontend + Node/Spring backend</li>
                <li>Auth/login, CRUD, dashboards</li>
                <li>Database (Postgres, MongoDB, etc.)</li>
                <li>Deployment (Render, AWS, etc.)</li>
              </ul>
            </div>

            {/* Mobile App Development */}
            <div className="border border-gray-300 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Mobile App Development
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Starts at:</strong> $4,000+
              </p>
              <p className="mb-2">
                For entrepreneurs or businesses ready to build polished mobile
                apps for iOS and Android.
              </p>
              <p className="text-sm mb-2 text-gray-600">Perfect for:</p>
              <ul className="list-disc pl-5 mb-2 text-sm text-gray-700">
                <li>MVPs and early-stage startups</li>
                <li>Fitness, social, or utility apps</li>
                <li>Companion apps or tools</li>
              </ul>
              <p className="text-sm text-gray-600 mb-2">Includes:</p>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li>React Native cross-platform build</li>
                <li>Auth, push notifications, APIs</li>
                <li>App Store & Play Store deployment</li>
              </ul>
            </div>
          </div>

          {/* Add-ons */}
          <div className="pt-16 border-t-2 border-gray-300">
            <h2 className="text-2xl font-bold mb-4">Add-Ons</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>SEO Setup & Meta Tagging</li>
              <li>Logo Design & Branding Kit</li>
              <li>Monthly Maintenance Plans – keep your site up to date</li>
            </ul>
          </div>
        </section>

        {/* Reused Contact Form */}
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
      {showContactButton && (
        <button
          onClick={() => {
            const section = document.getElementById("contact");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full shadow-lg transition"
        >
          Contact Me
        </button>
      )}
    </div>
  );
};

export default Business;
