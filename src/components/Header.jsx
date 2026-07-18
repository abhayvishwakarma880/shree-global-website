import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docH > 0) {
        setScrollProgress((window.scrollY / docH) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location]);

  const handleDestinationsClick = (e) => {
    if (window.innerWidth <= 860) {
      e.preventDefault();
      setMegaMenuOpen(!megaMenuOpen);
    }
  };

  return (
    <>
      <div 
        className="scroll-progress" 
        id="progressBar" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-row">
          <Link to="/" className="logo">
            <svg className="mark" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#1E9E55" />
                  <stop offset="1" stopColor="#0DA0C7" />
                </linearGradient>
              </defs>
              <mask id="mk1">
                <circle cx="50" cy="50" r="48" fill="#fff" />
              </mask>
              <g mask="url(#mk1)">
                <rect width="100" height="100" fill="url(#lg1)" />
                <path d="M-20 20 Q10 5 30 20 T80 20" stroke="#fff" strokeWidth="7" fill="none" opacity=".55" />
                <path d="M-20 45 Q10 30 30 45 T80 45" stroke="#fff" strokeWidth="7" fill="none" opacity=".4" />
                <path d="M-20 70 Q10 55 30 70 T80 70" stroke="#fff" strokeWidth="7" fill="none" opacity=".55" />
              </g>
            </svg>
            Shree Global <span className="cyanpart">Holidays</span>
          </Link>

          <nav className={`mainnav ${mobileMenuOpen ? 'show' : ''}`}>
            <ul>
              {/* Destinations with Mega Menu */}
              <li className={megaMenuOpen ? 'open' : ''}>
                <Link to="/destinations" onClick={handleDestinationsClick}>
                  Destinations <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <div className="mega">
                  <div className="mega-inner">
                    <div className="mega-col">
                      <h5>North &amp; Himalayas</h5>
                      <ul>
                        <li><Link to="/destinations#north"><span className="dot"></span>Manali &amp; Shimla</Link></li>
                        <li><Link to="/destinations#north"><span className="dot"></span>Ladakh &amp; Leh</Link></li>
                        <li><Link to="/destinations#north"><span className="dot"></span>Rishikesh</Link></li>
                        <li><Link to="/destinations#north"><span className="dot"></span>Kashmir Valley</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h5>Heritage &amp; Royal</h5>
                      <ul>
                        <li><Link to="/destinations#west"><span className="dot"></span>Jaipur — Pink City</Link></li>
                        <li><Link to="/destinations#west"><span className="dot"></span>Udaipur Lakes</Link></li>
                        <li><Link to="/destinations#north"><span className="dot"></span>Agra &amp; Taj Mahal</Link></li>
                        <li><Link to="/destinations#west"><span className="dot"></span>Jodhpur — Blue City</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <h5>Coast &amp; South</h5>
                      <ul>
                        <li><Link to="/destinations#south"><span className="dot"></span>Kerala Backwaters</Link></li>
                        <li><Link to="/destinations#south"><span className="dot"></span>Goa Beaches</Link></li>
                        <li><Link to="/destinations#east"><span className="dot"></span>Varanasi Ghats</Link></li>
                        <li><Link to="/destinations#south"><span className="dot"></span>Andaman Islands</Link></li>
                      </ul>
                    </div>
                    <div className="mega-col">
                      <div className="mega-feature">
                        <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=700" alt="Ladakh mountains" />
                        <div className="ov"></div>
                        <div className="cap">
                          <span className="tag">New for 2026</span>
                          <h4>Ladakh High-Altitude Circuit</h4>
                          <span className="arrow">Explore route <i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Main Navigation Links */}
              <li><NavLink to="/packages" className={({ isActive }) => isActive ? 'active' : ''}>Packages</NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
              <li><NavLink to="/fleet" className={({ isActive }) => isActive ? 'active' : ''}>Fleet</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
              <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="tel:+919811022334" className="tel">
              <i className="fa-solid fa-phone"></i> <span>+91 98110 22334</span>
            </a>
            <Link to="/contact" className="btn btn-brand btn-sm">
              <i className="fa-regular fa-paper-plane"></i> Plan My Trip
            </Link>
            <div 
              className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} 
              id="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
