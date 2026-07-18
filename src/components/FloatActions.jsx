import { useState, useEffect } from 'react';

export default function FloatActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="float-actions">
      <a 
        href="https://wa.me/919811022334" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="float-btn whatsapp" 
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <a 
        href="tel:+919811022334" 
        className="float-btn call" 
        aria-label="Call"
      >
        <i className="fa-solid fa-phone"></i>
      </a>
      <button 
        onClick={scrollToTop} 
        className="float-btn totop" 
        id="backToTop" 
        aria-label="Back to top"
        style={{ display: showBackToTop ? 'flex' : 'none' }}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
}
