import "./App.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">Richard Gabelman</h1>
      </nav>
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
      <Footer />
    </div>
  );
}

export default App;
