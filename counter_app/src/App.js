import { Link, Route, Routes } from "react-router-dom";
import "./App.test";

function App() {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About Little Lemon</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;