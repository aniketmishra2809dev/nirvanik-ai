import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WebsiteDev from './pages/WebsiteDev';
import StudyAssets from './pages/StudyAssets';
import AiAvatars from './pages/AiAvatars';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    // Force Tailwind Refresh (Just in case, though the Primer handles 99% of it)
    if (window.tailwind && window.tailwind.css && window.tailwind.css.refresh) {
      window.tailwind.css.refresh();
    }

    // Hide the HTML Loader
    const loader = document.getElementById('app-loader');
    if (loader) {
      // Small buffer to ensure visual smoothness
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        // Optional: Remove from DOM after fade out
        setTimeout(() => {
           loader.remove();
        }, 500);
      }, 500);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-primary font-sans selection:bg-accent-lime selection:text-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/website" element={<WebsiteDev />} />
            <Route path="/study-assets" element={<StudyAssets />} />
            <Route path="/ai-avatars" element={<AiAvatars />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;