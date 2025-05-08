import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Games from "./pages/Games";
import Experience from "./pages/Experience";
import Stack from "./pages/Stack";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  const [showComingSoon, setShowComingSoon] = useState(true);
  const switchy = () => {
    setShowComingSoon((prev) => !prev);
  };

  if (showComingSoon) {
    return <ComingSoon onContinue={switchy} />;
  }

  return (
    <div className="App">
      <Navbar onContinue={switchy} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
