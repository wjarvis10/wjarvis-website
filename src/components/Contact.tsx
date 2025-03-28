import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-20 border-t-2 border-grey-300">
      <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
        Contact
      </h2>
      <h3 className="text-3xl font-bold mb-6">Let’s get in touch</h3>

      {status === "sent" && (
        <p className="text-green-600 mb-4">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mb-4">
          Something went wrong. Please try again.
        </p>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6 max-w-2xl"
      >
        <div>
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email
          </label>
          <input
            required
            type="email"
            name="user_email"
            id="user_email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            required
            type="text"
            name="title"
            id="title"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
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
