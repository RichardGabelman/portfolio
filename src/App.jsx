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

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
