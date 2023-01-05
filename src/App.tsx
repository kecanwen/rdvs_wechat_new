import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from "./pages/homePage";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/404" element={<NoMatch />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
