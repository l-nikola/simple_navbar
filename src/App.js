import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
