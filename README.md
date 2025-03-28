# WJarvis Personal Website 🚀

This is my personal website and portfolio, built with **React**, **TypeScript**, and **TailwindCSS**, powered by **Vite**. It’s a single-page site that displays information about me, my projects, and includes a contact form that sends messages via **EmailJS**.

Live version coming soon (to be deployed via Netlify or Vercel).

---

## Tech Stack

- **React** + **TypeScript**
- **Vite** (for fast dev/build)
- **TailwindCSS** for styling
- **EmailJS** for form submission
- **Deployed with:** (coming soon)

---

## Features

- 🔒 Sticky top header navigation
- 🙋 About section with intro and bio
- 🧠 Project case study sections
- 💬 Contact form with EmailJS
- 📱 Fully responsive layout

---

## Project Structure

src/
├── components/
│ ├── Header.tsx
│ ├── About.tsx
│ ├── Projects.tsx
│ └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css

---

## 🛠️ Setup Instructions

```bash
git clone https://github.com/your-username/wjarvis-website.git
cd wjarvis-website
npm install
npm run dev
```

Make sure src/index.css includes:
@tailwind base;
@tailwind components;
@tailwind utilities;

And tailwind.config.js is set to scan:
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]

## Contact Form Setup (EmailJS)

1. Create an account at https://emailjs.com
2. Set up:

- Email service
- Email template
- Get your service_id, template_id, public_key

3. Replace the values in Contact.tsx where emailjs.sendForm() is called

## Build for Production

npm run build
