import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend or EmailJS
    console.log("Form submitted:", formData);
    alert("Message sent (demo only)");
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 border-t mt-12">
      <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        Contact
      </h2>
      <h3 className="text-3xl font-bold mb-6">Let’s get in touch</h3>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            required
            type="text"
            name="subject"
            id="subject"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            required
            name="message"
            id="message"
            rows={5}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
