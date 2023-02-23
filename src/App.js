import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About  />} />
                <Route path="/movie/:id" element={<Detail  />} />
            </Routes>
        </Router>
    );
}

export default App;
