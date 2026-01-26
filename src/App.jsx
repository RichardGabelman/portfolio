import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Richard Gabelman</h1>
    </header>
  );
};

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          Hello, I am Richard Gabelman III. I am a newgrad with a B.S. in
          Computer Science from San Diego State University. I am open to tech
          opportunities.
        </p>
      </div>
    </section>
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

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact-links">
          <a href="https://github.com/RichardGabelman" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/richard-gabelman/" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
