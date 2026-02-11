
import React, { useEffect } from 'react';
// Use namespace import and cast to any to resolve "no exported member" errors in this environment
import * as ReactRouterDOM from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import HSE from './pages/HSE';
import Contact from './pages/Contact';

const { HashRouter, Routes, Route, useLocation } = ReactRouterDOM as any;
const Router = HashRouter;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Adjusted padding: 16 (4rem) for mobile, 20 (5rem) for md, 24 (6rem) for lg */}
        <main className="flex-grow pt-16 md:pt-20 lg:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/hse" element={<HSE />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
