import "./App.css";
import devthreadsImg from "../assets/devthreads.png";
import caRagImg from "../assets/caRag.png";
import wikipediatraverseImg from "../assets/wikipediatraverse.png";
import rhythmImg from "../assets/rhythm.png";
import whiteboardImg from "../assets/whiteboard.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-eyebrow">Available for work</div>
      <h1>
        Hi, I'm <span id="name">Richard Gabelman</span>
      </h1>
      <p className="subtext">
        CS grad from SDSU. I build full-stack web apps and like working at the
        intersection of technology and public policy.
      </p>
      <nav className="contact-links">
        <a
          href="mailto:richardgabelman@gmail.com"
          className="contact-link email-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1.1rem"
            height="1.1rem"
          >
            <path
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
              fill="currentColor"
            />
          </svg>
          Email
        </a>
        <a
          href="https://github.com/RichardGabelman"
          className="contact-link github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 98 96"
            width="1.1rem"
            height="1.1rem"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              fill="currentColor"
            />
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/richard-gabelman/"
          className="contact-link linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.1rem"
            height="1.1rem"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fill="currentColor"
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
      title: "CA Tenant Rights RAG",
      subtitle: "AI-Powered Legal Search",
      description:
        "An LLM-powered web app that makes California tenant law searchable in plain English. Describe your situation, get ranked and cited legal results, backed by a full RAG pipeline with ChromaDB, Sentence Transformers, and a Groq LLM.",
      technologies: [
        "Python",
        "FastAPI",
        "ChromaDB",
        "Sentence Transformers",
        "Groq",
        "React",
      ],
      github_link: "https://github.com/RichardGabelman/ca-tenant-law-rag",
      live_link: "https://calitenantrights.richardgabelman.com",
      accent: "#C4723A",
      image: caRagImg,
      image_placeholder_label: "tenant rights app screenshot",
    },
    {
      id: 2,
      title: "Real-Time Whiteboard",
      subtitle: "Multiplayer Collaborative Canvas",
      description:
        "A full-stack collaborative whiteboard where users draw, place sticky notes, and see each other's cursors live. Features Redis pub/sub to sync events across multiple server instances, WebSocket communication via Socket.io, and PostgreSQL persistence so board history survives page refreshes.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Socket.io",
        "Redis",
        "PostgreSQL",
        "Prisma",
        "Docker",
      ],
      github_link: "https://github.com/RichardGabelman/real-time-whiteboard",
      live_link: "https://whiteboard.richardgabelman.com",
      accent: "#6366f1",
      image: whiteboardImg,
      image_placeholder_label: "whiteboard screenshot",
    },
    {
      id: 3,
      title: "DevThreads",
      subtitle: "Developer Social Platform",
      description:
        "A full-stack social platform where developers share projects and follow each other's work. Features GitHub OAuth, nested threads, a REST API with Prisma, and an integration test suite covering auth and social graph operations.",
      technologies: [
        "React",
        "Express",
        "Prisma",
        "PostgreSQL",
        "Node.js",
        "Vitest",
        "GitHub OAuth",
      ],
      github_link:
        "https://github.com/RichardGabelman/social-network-fullstack",
      live_link: "https://devthreads.richardgabelman.com",
      accent: "#64edf1",
      image: devthreadsImg,
      image_placeholder_label: "devthreads screenshot",
    },
    {
      id: 4,
      title: "Wikipedia Traverse",
      subtitle: "Semantic Graph Navigation CLI",
      description:
        "A beam search algorithm that navigates Wikipedia's link graph autonomously. Uses spaCy word vector embeddings to score candidate articles by semantic similarity to the target, with rate-limit-compliant scraping and cycle prevention.",
      technologies: [
        "Python",
        "spaCy",
        "BeautifulSoup",
        "NLP",
        "Beam Search",
        "Cosine Similarity",
      ],
      github_link: "https://github.com/RichardGabelman/wikipedia-traverse",
      live_link: "",
      accent: "#ffffff",
      image: wikipediatraverseImg,
      image_placeholder_label: "wikipedia traverse demo",
    },
    {
      id: 5,
      title: "while (rhythm) { dance(); }",
      subtitle: "2D Rhythm Game · 2nd Place",
      description:
        "A rhythm game prototype built in Unity that won 2nd place in a class competition. Players hit notes timed to music with real-time visual feedback and score tracking.",
      technologies: ["Unity", "C#", "Game Design", "2D"],
      github_link: "https://github.com/RichardGabelman/when-rhythm-dance-",
      live_link: "",
      accent: "#30f729",
      image: rhythmImg,
      image_placeholder_label: "rhythm game screenshot",
    },
  ];

  return (
    <section className="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <p className="section-subtitle">Things I've built on my own time</p>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            style={{ "--card-accent": project.accent }}
          >
            <div className="card-image-wrapper">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="card-image"
                />
              ) : (
                <div className="card-image-placeholder">
                  <span>{project.image_placeholder_label}</span>
                  {/* 
                    TO ADD YOUR SCREENSHOT:
                    1. Put the image in src/assets/ (e.g. src/assets/devthreads.png)
                    2. Import it at the top of this file:
                         import devthreadsImg from "./assets/devthreads.png"
                    3. Set image: devthreadsImg on this project object
                    4. The <img> tag above will render automatically
                  */}
                </div>
              )}
            </div>

            <div className="card-body">
              <div className="card-title-row">
                <div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-subtitle">{project.subtitle}</p>
                </div>
                <div className="card-links">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 98 96"
                        width="1.1rem"
                        height="1.1rem"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  )}
                  {project.live_link && (
                    <a
                      href={project.live_link}
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live demo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="1.1rem"
                        height="1.1rem"
                      >
                        <path
                          d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <p className="card-description">{project.description}</p>

              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
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
      <p>&copy; {new Date().getFullYear()} Richard Gabelman</p>
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
