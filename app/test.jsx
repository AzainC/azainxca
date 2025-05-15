"use client";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
          <a href="#home" className=" text-2xl font-bold select-none">
            Zayn
          </a>
          <ul className="hidden md:flex space-x-10 text-gray-400 font-semibold text-sm tracking-wide">
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
          {/* Mobile Nav Placeholder */}
        </div>
      </nav>

      <main className="bg-black text-white font-sans tracking-wide selection:bg-purple-600 selection:text-white pt-16" id="home">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-6 md:space-y-10"
          aria-label="Hero Introduction"
        >
           <div
    aria-hidden="true"
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-800 opacity-20 blur-[220px] pointer-events-none"
  />
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight max-w-4xl drop-shadow-lg">
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
          <p className="text-xl md:text-2xl max-w-3xl text-gray-300 leading-relaxed">
            UI/UX Designer — crafting minimal, human-first interfaces that blend form and function seamlessly.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block bg-purple-500 px-8 py-3 rounded-full font-semibold tracking-wide shadow-lg hover:bg-purple-700 transition-colors duration-300"
            aria-label="Contact Zayn"
          >
            Let’s Create Together
          </a>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="max-w-3xl mx-auto py-20 px-6 text-center text-gray-300 prose prose-invert prose-lg"
          aria-label="About Zayn"
        >
          
          <h2 className="text-3xl font-semibold mb-6 text-white tracking-tight">Less, but better.</h2>
          <p>
            I believe good design is invisible. My focus is on clarity, usability, and meaningful interaction.
            I design clean, intuitive experiences for web and mobile that put the user first.
          </p>
          <p>
            Whether it&apos;s a product dashboard or a landing page, I combine modern aesthetics with functional structure.
          </p>
        </section>

        {/* Projects Section */}
        
   <section
  id="projects"
  className="max-w-6xl mx-auto px-6 py-20"
  aria-label="Recent Projects"
>
  
  <h2 className="text-4xl font-semibold mb-12 text-center text-white tracking-tight">
    Recent Projects
  </h2>
  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    
    {[...Array(8)].map((_, idx) => (
      <div
        key={idx}
        className="relative overflow-hidden rounded cursor-pointer shadow-md hover:shadow-purple-300 transition-shadow duration-800"
        tabIndex={0}
        aria-label={`Project visual ${idx + 1}`}
      >
        <img
          src={`https://via.placeholder.com/300x200?text=Project+${idx + 1}`}
          alt={`Project ${idx + 1} visual preview`}
          className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>
    ))}
  </div>
</section>


        {/* Skills Section */}
<section
  id="skills"
  className="relative bg-black text-white px-6 py-20 overflow-hidden"
  aria-label="Skills and Tools"
>
  {/* Centered purple glow circle spreading throughout */}
  <div
    aria-hidden="true"
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-purple-800 opacity-20 blur-[220px] pointer-events-none"
  />

  <div className="relative max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-16 tracking-tight">A Multidisciplinary Skill Set</h2>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          title: 'Interface Design',
          desc: 'Captivating UI for your websites & products',
        },
        {
          title: 'Development',
          desc: 'Products with clean code & cutting-edge tools',
        },
        {
          title: 'SEO',
          desc: 'Skyrocket your search engine visibility',
        },
        {
          title: 'Analytics',
          desc: 'Gain actionable insights on user behavior',
        },
        {
          title: 'Optimization',
          desc: 'Fine-tune for speed and performance',
        },
        {
          title: 'Micro-Interactions',
          desc: 'Subtle animations that elevate UX and delight users',
        },
      ].map((skill, idx) => (
        <div
          key={idx}
          className="bg-neutral-900 rounded-xl p-8 text-left shadow-md hover:shadow-purple-300 transition duration-800 cursor-default group"
          role="listitem"
        >
          <div className="mb-4 w-3 h-3 rounded-full bg-gray-600 group-hover:bg-white transition duration-300"></div>
          <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap justify-center gap-8 mt-16 text-gray-400 text-sm tracking-wide">
      <span className="px-3 py-1 rounded-full bg-neutral-800">Adobe Suite</span>
      <span className="px-3 py-1 rounded-full bg-neutral-800">WordPress</span>
      <span className="px-3 py-1 rounded-full bg-neutral-800">Figma</span>
      <span className="px-3 py-1 rounded-full bg-neutral-800">Tailwind CSS</span>
      <span className="px-3 py-1 rounded-full bg-neutral-800">React</span>
    </div>

    <p className="text-gray-400 mt-16 max-w-4xl mx-auto leading-relaxed text-lg">
      My skill set allows me to have a holistic perspective. I believe in the power of blending creativity with precision,
      ensuring that every screen not only meets the eye but also contributes seamlessly to the larger business narrative.
    </p>
  </div>
</section>




        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="bg-black text-white px-6 py-20"
          aria-label="Client Testimonials"
        >
          
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-16 tracking-tight">What Clients Say</h2>

            <div className="grid md:grid-cols-2 gap-12">
              
              {[
                {
                  quote:
                    "Zayn completely transformed our product interface. Clean, intuitive, and exactly what our users needed.",
                  name: "Sarah Martinez",
                  title: "Product Manager, FlowTech",
                },
                {
                  quote:
                    "The UX overhaul Zayn did helped increase our engagement by 40%. Highly recommend his work!",
                  name: "David Chen",
                  title: "Founder, Creatix",
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
        <section
        
          id="contact"
          className="bg-black text-white px-6 py-20"
          aria-label="Contact Zayn"
        >
          
          <div className="max-w-3xl mx-auto text-center">
            
            <h2 className="text-4xl font-semibold mb-10 tracking-tight">Get in Touch</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed text-lg">
              Whether you have a project idea or just want to say hello, feel free to reach out.
            </p>
            <a
              href="mailto:azainxc@gmail.com"
              className="inline-block bg-purple-500 px-8 py-3 rounded-full font-semibold tracking-wide shadow-lg hover:bg-purple-700 transition-colors duration-300"
              aria-label="Send email to Zayn"
            >
              Email Me
            </a>
          </div>
        </section>

         {/* Footer */}
        <footer className="bg-black border-t border-gray-700 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-base md:text-sm space-y-6 md:space-y-0">
            <p className="select-none">© 2025 Zayn</p>
            <div className="flex flex-wrap gap-10 md:gap-8 justify-center md:justify-start">
              <a
                href="mailto:azainxc@gmail.com"
                className="hover:text-purple-400 transition-colors duration-300"
                aria-label="Send email to Zayn"
              >
                azainxc@gmail.com
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
                aria-label="Twitter profile"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors duration-300"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
