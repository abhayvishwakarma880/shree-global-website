import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatActions from './components/FloatActions';
import ScrollToTop from './components/ScrollToTop';

function RevealObserver() {
  const location = useLocation();
  useEffect(() => {
    const activate = () => {
      document.querySelectorAll('.reveal:not(.active)').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) el.classList.add('active');
      });
    };
    // Small delay to let page render first
    const t = setTimeout(activate, 100);
    window.addEventListener('scroll', activate, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener('scroll', activate); };
  }, [location.pathname]);
  return null;
}

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Careers from './pages/Careers';
import Gallery from './pages/Gallery';
import Insurance from './pages/Insurance';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cancellation from './pages/Cancellation';
import PackageDetail from './pages/PackageDetail';
import Reviews from './pages/Reviews';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <RevealObserver />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/package/:id" element={<PackageDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cancellation" element={<Cancellation />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <Footer />
      <FloatActions />
    </Router>
  );
}
