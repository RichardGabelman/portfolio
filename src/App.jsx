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

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Richard Gabelman. All rights reserved.</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
