"use client";

import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-900 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
          <a
            href="#home"
            className="text-2xl font-bold select-none bg-gradient-to-r from-gray-100 to-purple-300 bg-clip-text text-transparent animate-logo-shine"
          >
            azain.
          </a>

          <style jsx>{`
            @keyframes logo-shine {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }

            .animate-logo-shine {
              background-size: 400% auto;
              animation: logo-shine 8s linear infinite;
            }
          `}</style>

          <ul className="hidden md:flex space-x-8 text-gray-400 font-semibold text-sm tracking-wide">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-purple-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main
        className="bg-black text-white font-sans tracking-wide selection:bg-purple-600 selection:text-white pt-16"
        id="home"
      >
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-6 md:space-y-10"
          aria-label="Hero Introduction"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-purple-800 opacity-20 blur-[220px] pointer-events-none"
          />
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl drop-shadow-lg">
            Hey, I'm{" "}
            <span className="text-white font-bold">
              {"Azain".split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block text-purple-300 animate-fade-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl max-w-3xl text-gray-300 leading-relaxed">
            UI/UX Designer — crafting minimal, human-first interfaces that blend form and function seamlessly.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block bg-purple-500 px-6 py-3 rounded-full font-semibold tracking-wide shadow-lg hover:bg-purple-700 transition-colors duration-300"
            aria-label="Contact Azain"
          >
            Let’s Create Together
          </a>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="max-w-3xl mx-auto py-16 px-6 text-center text-gray-300 prose prose-invert prose-sm sm:prose-base md:prose-lg"
          aria-label="About Azain"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white tracking-tight">Less, but better.</h2>
          <div className="space-y-4">
            <p className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              I believe good design is invisible. My focus is on clarity, usability, and meaningful interaction. I
              design clean, intuitive experiences for web and mobile that put the user first.
            </p>
            <p className="opacity-0 animate-fade-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              Whether it&apos;s a product dashboard or a landing page, I combine modern aesthetics with functional
              structure.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-16" aria-label="Recent Projects">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-white tracking-tight">
            Recent Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            {[...Array(9)].map((_, idx) => {
              const imgSrc = `/images/${idx + 1}.png`;
              return (
                <div
                  key={idx}
                  className="relative flex items-center justify-center bg-gray-400 rounded-lg cursor-pointer shadow-md hover:shadow-purple-300 transition-shadow duration-500 p-2"
                  tabIndex={0}
                  aria-label={`Project visual ${idx + 1}`}
                  onClick={() => {
                    if (window.innerWidth >= 768) setSelectedImage(imgSrc);
                  }}
                  onKeyDown={(e) => {
                    if ((e.key === "Enter" || e.key === " ") && window.innerWidth >= 768) {
                      setSelectedImage(imgSrc);
                    }
                  }}
                >
                  <img
                    src={imgSrc}
                    alt={`Project ${idx + 1} visual preview`}
                    className="w-full h-48 sm:h-56 md:h-56 object-contain transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

          {/* Modal Overlay */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
              role="dialog"
              aria-modal="true"
              aria-label="Enlarged project image"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative bg-black rounded-lg shadow-lg w-full max-w-[90vw] max-h-[85vh] p-4 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close modal"
                  className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <span className="text-black text-2xl leading-none select-none">&#10005;</span>
                </button>

                <img
                  src={selectedImage}
                  alt="Enlarged project visual"
                  className="max-w-full max-h-[75vh] rounded object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative bg-black text-white px-6 py-20 overflow-hidden" aria-label="Skills and Tools">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-purple-800 opacity-20 blur-[220px] pointer-events-none"
          />

          <div className="relative max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-16 tracking-tight">A Multidisciplinary Skill Set</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Interface Design", desc: "Captivating UI for your websites & products" },
                { title: "Development", desc: "Products with clean code & cutting-edge tools" },
                { title: "SEO", desc: "Skyrocket your search engine visibility" },
                { title: "Analytics", desc: "Gain actionable insights on user behavior" },
                { title: "Optimization", desc: "Fine-tune for speed and performance" },
                { title: "Micro-Interactions", desc: "Subtle animations that elevate UX and delight users" },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900 rounded-xl p-6 md:p-8 text-left shadow-md hover:shadow-purple-300 transition duration-500 cursor-default group"
                >
                  <div className="mb-4 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-purple-300 transition duration-300"></div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-black text-white px-6 py-20" aria-label="Client Testimonials">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-16 tracking-tight">What Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  quote: "Azain completely transformed our product interface. Clean, intuitive, and exactly what our users needed.",
                  name: "Brian Canvan",
                  title: "BSJ, Dota Coach",
                },
                {
                  quote: "The UX overhaul Azain did helped increase our engagement by 40%. Highly recommend his work!",
                  name: "Arshad Kazi",
                  title: "CEO, Creatix",
                },
              ].map((testimonial, idx) => (
                <blockquote
                  key={idx}
                  className="bg-neutral-900 p-8 rounded-3xl shadow hover:shadow-purple-300 transition-shadow duration-700 cursor-default"
                >
                  <p className="text-gray-300 italic mb-6 leading-relaxed">“{testimonial.quote}”</p>
                  <footer>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-black text-white px-6 py-20" aria-label="Contact Azain">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-10 tracking-tight">Get in Touch</h2>
            <p className="mb-8 text-lg max-w-xl mx-auto text-gray-400">
              Have a project or idea you'd like to discuss? I'd love to hear from you.
            </p>
            <a
              href="mailto:azainxc@gmail.com"
              className="inline-block bg-purple-600 px-12 py-4 rounded-full text-white font-semibold tracking-wide shadow-lg hover:bg-purple-800 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-700 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-base md:text-sm space-y-6 md:space-y-0">
            <p className="select-none">© 2025 Azain</p>
            <div className="flex flex-wrap gap-10 md:gap-8 justify-center md:justify-start">
              <a
                href="mailto:azainxc@gmail.com"
                className="hover:text-purple-400 transition-colors duration-300 text-lg"
                aria-label="Send email to Azain"
              >
                azainxc@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
