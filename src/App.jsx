// App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./pages/Navbar";
import "./App.css"
function App() {
    return (
        <Router>
          <Navbar />
            <Routes>
                <Route path="/Assg2/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
