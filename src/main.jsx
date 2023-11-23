import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { useLocation, Routes, Route, BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

import App from './App'
import Projects from './Projects'
import About from './About'
import Gamepage1 from './Gamepage1';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Projects />}>
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/gamepage1" element={<Gamepage1 />} />
      </Routes>
    </AnimatePresence>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)