import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <h1>
        Hello, I'm <span id="name">Richard Gabelman</span>
      </h1>
      <section className="subtext">
        <p>B.S. in Computer Science from San Diego State University</p>
        <p>Aspiring Software Developer</p>
      </section>
      <nav className="contact-links">
        <a
          href="https://github.com/RichardGabelman"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/richard-gabelman/"
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </header>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project Placeholder",
      description: "Description Placeholder",
      technologies: ["Tech1", "Tech2", "Tech3"],
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Richard Gabelman. All rights reserved.
      </p>
    </footer>
  );
};

function App() {
  return (
    <main className="App">
      <Header />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
