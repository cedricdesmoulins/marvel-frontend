import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// Pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";

// Components
// import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
