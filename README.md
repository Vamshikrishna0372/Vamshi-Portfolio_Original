# 👨‍💻 Vamshi Krishna Nagula | Portfolio

A modern, interactive **developer portfolio website** showcasing my projects, skills, and experience.
Built with a focus on **clean UI, smooth animations, and real-world functionality**, including a fully integrated **email system with backend support**.

🚀 **Live Website:** https://vamshi-portfolio-original.vercel.app/

---

## ✨ Features

* ⚡ Smooth animations using Framer Motion & GSAP
* 🎯 Interactive and modern UI design
* 🧊 3D tilt effects on project cards
* 🖱️ Custom animated cursor
* 📱 Fully responsive across all devices
* 📬 **Contact Form with Email Integration**

  * Sends messages directly to my inbox
  * Automatically sends a **reply/confirmation email** to the user
* 🔐 Backend integration for handling form submissions securely

---

## 🛠️ Tech Stack

### 🎨 Frontend

* React.js
* TypeScript
* Tailwind CSS

### ⚙️ Backend

* Node.js
* Express.js

### 📬 Email Service

* SendGrid API (for sending & auto-reply emails)

### 🎬 Animations & UI

* Framer Motion
* GSAP
* Shadcn UI (Radix UI)

### 🧰 Tools & Libraries

* React Router DOM
* React Icons
* Git & GitHub

### 🌐 Deployment

* Vercel

---

## 📁 Project Structure

```text id="t7y8u9"
src/
├── components/        # UI sections (Hero, About, Projects, Contact)
│   ├── ui/           # Reusable components
├── pages/            # Page layouts
├── assets/           # Images & static files
├── hooks/            # Custom hooks
└── App.tsx           # Root component

server/               # Backend (Express + SendGrid)
├── routes/           # API routes (contact/email)
├── controllers/      # Logic for handling requests
├── config/           # API keys & environment setup
└── server.js         # Backend entry point
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash id="k9l8m7"
git clone https://github.com/Vamshikrishna0372/Vamshi-Portfolio_Original.git
```

### 2. Navigate to the project

```bash id="n6b5v4"
cd Vamshi-Portfolio_Original
```

### 3. Install dependencies

#### Frontend

```bash id="p3o2i1"
npm install
```

#### Backend

```bash id="z1x2c3"
cd server
npm install
```

### 4. Set up environment variables

Create a `.env` file in the `server/` directory:

```env id="env123"
SENDGRID_API_KEY=your_sendgrid_api_key
EMAIL_FROM=your_verified_email
```

### 5. Run the project

#### Start backend

```bash id="run1"
cd server
npm start
```

#### Start frontend

```bash id="run2"
npm run dev
```

---

## 📬 Contact Feature (How It Works)

* User fills the contact form on the portfolio
* Request is sent to backend API
* Backend uses **SendGrid** to:

  * Send the message to my email
  * Send an automatic **confirmation/reply email** to the user

---

## 🎯 Purpose

* Showcase my **projects and skills**
* Demonstrate **frontend + backend integration**
* Highlight **real-world features like email systems**
* Build a strong **developer portfolio presence**

---

## 🤝 Connect With Me

* 🌐 Portfolio: https://vamshi-portfolio-original.vercel.app/
* 💻 GitHub: https://github.com/Vamshikrishna0372
* 🔗 LinkedIn: https://www.linkedin.com/in/vamshi-krishna-nagula-174b6833a/
* 📧 Email: [nagulavamshi1453@gmail.com](mailto:nagulavamshi1453@gmail.com)

---

## 📄 License

This project is open-source and available under the MIT License.

---

<div align="center">

✨ Built with passion by **Vamshi Krishna Nagula** ✨

</div>
