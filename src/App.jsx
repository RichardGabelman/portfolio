import "./App.css";
import TrainHeader from "./TrainHeader";

const TenantMark = () => (
  <svg
    viewBox="0 0 100 104"
    xmlns="http://www.w3.org/2000/svg"
    className="project-mark"
  >
    <polygon points="50,4 8,36 92,36" fill="rgb(122, 69, 32)" />
    <rect
      x="14"
      y="36"
      width="72"
      height="58"
      rx="3"
      fill="rgb(196, 114, 58)"
    />
    <rect x="38" y="68" width="24" height="26" rx="2" fill="rgb(122, 69, 32)" />
    <rect
      x="19"
      y="44"
      width="18"
      height="16"
      rx="2"
      fill="rgb(240, 235, 225)"
      opacity="0.85"
    />
    <rect
      x="63"
      y="44"
      width="18"
      height="16"
      rx="2"
      fill="rgb(240, 235, 225)"
      opacity="0.85"
    />
    <path
      d="M50,52 C50,52 32,58 32,72 C32,84 40,91 50,94 C60,91 68,84 68,72 C68,58 50,52 50,52 Z"
      fill="rgb(168, 94, 42)"
    />
    <polyline
      points="41,73 47,80 59,66"
      fill="none"
      stroke="rgb(240, 235, 225)"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const WhiteboardMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="project-mark"
  >
    <circle cx="18" cy="22" r="10" fill="#ef4444" />
    <circle cx="40" cy="22" r="10" fill="#22c55e" />
    <circle cx="62" cy="22" r="10" fill="#3b82f6" />
    <path
      d="M 10 68 C 30 44, 58 86, 80 60"
      fill="none"
      stroke="#6366f1"
      strokeWidth="7"
      strokeLinecap="round"
    />
    <g transform="translate(76,54) rotate(-40)">
      <rect x="-5" y="-18" width="10" height="20" rx="2" fill="#374151" />
      <polygon points="0,8 -5,2 5,2" fill="#f59e0b" />
      <rect x="-5" y="-18" width="10" height="7" rx="1.5" fill="#9ca3af" />
    </g>
  </svg>
);

const DevThreadsMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="project-mark"
  >
    <rect fill="#1a1a2e" x="1" y="1" width="22" height="22" rx="4" ry="4" />
    <rect
      fill="none"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="0.5"
      x="1"
      y="1"
      width="22"
      height="22"
      rx="4"
      ry="4"
    />
    <g transform="translate(12, 12) scale(0.8) translate(-12, -12)">
      <path
        fill="#FFFFFF"
        d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z"
      />
    </g>
  </svg>
);

const WikipediaMark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 208"
    className="project-mark"
    role="img"
  >
    <title>Wikipedia Traverse mark</title>
    <desc>
      A globe with a red arc arrow traversing from one side to the other
    </desc>

    <defs>
      <marker
        id="arr-red"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="5"
        markerHeight="5"
        orient="auto-start-reverse"
      >
        <path
          d="M2 1L8 5L2 9"
          fill="none"
          stroke="#e53e3e"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </marker>
      <clipPath id="globe-clip">
        <circle cx="100" cy="104" r="72" />
      </clipPath>
    </defs>

    <circle
      cx="100"
      cy="104"
      r="72"
      fill="#1a2744"
      stroke="#3a5296"
      strokeWidth="1.5"
    />

    <g
      clipPath="url(#globe-clip)"
      fill="none"
      stroke="#3a5296"
      strokeWidth="0.8"
      opacity="0.7"
    >
      <line x1="28" y1="104" x2="172" y2="104" />
      <ellipse cx="100" cy="104" rx="72" ry="22" />
      <ellipse cx="100" cy="104" rx="72" ry="46" />
      <ellipse cx="100" cy="78" rx="55" ry="16" />
      <ellipse cx="100" cy="130" rx="55" ry="16" />
    </g>

    <g
      clipPath="url(#globe-clip)"
      fill="none"
      stroke="#3a5296"
      strokeWidth="0.8"
      opacity="0.7"
    >
      <line x1="100" y1="32" x2="100" y2="176" />
      <ellipse cx="100" cy="104" rx="28" ry="72" />
      <ellipse cx="100" cy="104" rx="52" ry="72" />
    </g>

    <circle
      cx="100"
      cy="104"
      r="72"
      fill="none"
      stroke="#4a6bc4"
      strokeWidth="1.5"
    />

    <circle cx="52" cy="88" r="5" fill="#68d391" />

    <path
      d="M 54 86 C 68 44, 138 44, 148 86"
      fill="none"
      stroke="#e53e3e"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeDasharray="5,3"
      markerEnd="url(#arr-red)"
    />

    <circle cx="148" cy="88" r="5" fill="#e53e3e" />
  </svg>
);

const projects = [
  {
    id: 1,
    title: "CA Tenant Rights RAG",
    description:
      "Makes California tenant law accessible in plain English. Describe your situation and get a cited AI-generated answer, pulled from the actual Civil Code via ChromaDB vector search and synthesized by a Groq LLM at query time.",
    stack: "Python · FastAPI · ChromaDB · Sentence Transformers · Groq · React",
    github: "https://github.com/RichardGabelman/ca-tenant-law-rag",
    live: "https://calitenantrights.richardgabelman.com",
    mark: <TenantMark />,
  },
  {
    id: 2,
    title: "Real-Time Whiteboard",
    description:
      "Collaborative canvas with live cursors and sticky notes. Redis pub/sub keeps multiple server instances in sync; PostgreSQL persists board state across sessions.",
    stack: "React · Node.js · Socket.io · Redis · PostgreSQL · Docker",
    github: "https://github.com/RichardGabelman/real-time-whiteboard",
    live: "https://whiteboard.richardgabelman.com",
    mark: <WhiteboardMark />,
  },
  {
    id: 3,
    title: "DevThreads",
    description:
      "Social platform where developers share projects and follow each other's work. GitHub OAuth, nested threads, and an integration test suite covering auth and social graph operations.",
    stack: "React · Express · Prisma · PostgreSQL · Vitest · GitHub OAuth",
    github: "https://github.com/RichardGabelman/social-network-fullstack",
    live: "https://devthreads.richardgabelman.com",
    mark: <DevThreadsMark />,
  },
  {
    id: 4,
    title: "Wikipedia Traverse",
    description:
      "Beam search that navigates Wikipedia's link graph toward a target article using spaCy word vector similarity to score candidates at each hop.",
    stack: "Python · spaCy · BeautifulSoup",
    github: "https://github.com/RichardGabelman/wikipedia-traverse",
    live: null,
    mark: <WikipediaMark />,
  },
  {
    id: 5,
    title: "while (rhythm) { dance(); }",
    description:
      "2D rhythm game prototype built in Unity. Hit notes timed to music with real-time visual feedback. Won 2nd place in a class competition.",
    stack: "Unity · C#",
    github: "https://github.com/RichardGabelman/when-rhythm-dance-",
    live: null,
    mark: null,
  },
];

const Projects = () => (
  <section className="projects">
    <p className="section-label">Projects</p>
    <div className="projects-list">
      {projects.map((p) => (
        <article key={p.id} className="project-entry">
          {p.mark ?? <div className="project-mark-placeholder" />}
          <div className="project-body">
            <div className="project-title-row">
              <h2 className="project-title">{p.title}</h2>
              <div className="project-links">
                {p.github && (
                  <a
                    href={p.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
            <p className="project-description">{p.description}</p>
            <p className="project-stack">{p.stack}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Richard Gabelman</p>
  </footer>
);

function App() {
  return (
    <main className="App">
      <TrainHeader />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
