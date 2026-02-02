import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <h1>
        Hello, I'm <span id="name">Richard Gabelman</span>
      </h1>
      <section className="subtext">
        <p>
          B.S. in Computer Science from San Diego State University and Aspiring
          Software Developer
        </p>
      </section>
      <nav className="contact-links">
        <a
          href="https://github.com/RichardGabelman"
          className="github contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 98 96"
            width="1.2rem"
            height="1.2rem"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              fill="#fff"
            />
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/richard-gabelman/"
          className="linkedin contact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fill="#FFFFFF"
              d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
            />
          </svg>
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
      title: "DevThread - Developer Social Platform",
      description:
        "A full-stack social media application inspired by Threads, designed for developers to share updates, engage in discussions, and connect with the tech community. Features user authentication, post-feeds, and interactive social features.",
      technologies: [
        "React",
        "Express",
        "Prisma",
        "JWT",
        "Passport",
        "Node.js",
        "PostgreSQL",
      ],
      github_link:
        "https://github.com/RichardGabelman/social-network-fullstack",
      live_link:
        "https://social-network-fullstack-2avnaio8b-richardgabelmans-projects.vercel.app/",
    },
    {
      id: 2,
      title: "Wikipedia Traverse",
      description:
        "A Python script that discovers paths between Wikipedia articles using semantic analysis. Scrapes (while respecting robots.txt!) and parses Wikipedia pages to find connections between a starting article and a target article based on title semantic similarity.",
      technologies: ["Python", "spaCy", "BeautifulSoup", "Web Scraping", "NLP"],
      github_link: "https://github.com/RichardGabelman/wikipedia-traverse",
      live_link: "",
    },
    {
      id: 3,
      title: "while (rhythm) { dance(); }",
      description:
        "A 2D rhythm game prototype built in Unity that won 2nd place in a class competition. Players hit notes timed to music with real-time visual feedback and score tracking. Explores core rhythm game mechanics and Unity's 2D game development mode.",
      technologies: ["Unity", "C#", "Game Design", "2D Game Dev"],
      github_link: "https://github.com/RichardGabelman/when-rhythm-dance-",
      live_link: "",
    },
  ];

  return (
    <section className="projects">
      <h2>Personal Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github_link && (
                <a
                  href={project.github_link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 98 96"
                    width="0.9rem"
                    height="0.9rem"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      fill="#fff"
                    />
                  </svg>
                  GitHub
                </a>
              )}

              {project.live_link && (
                <a
                  href={project.live_link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1rem"
                    height="1rem"
                  >
                    <title>open-in-new</title>
                    <path
                      d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                      fill="#FFF"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
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
