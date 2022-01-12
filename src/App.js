import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
    <h1>hi rashmi</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
