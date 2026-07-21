import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
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
    setServicesMenuOpen(false);
  }, [location]);

  const handleDestinationsClick = (e) => {
    if (window.innerWidth <= 860) {
      e.preventDefault();
      setMegaMenuOpen(!megaMenuOpen);
    }
  };

  const handleServicesClick = (e) => {
    if (window.innerWidth <= 860) {
      e.preventDefault();
      setServicesMenuOpen(!servicesMenuOpen);
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
            <img src="/logo.png" alt="Shree Global Holidays Logo" className="mark" />
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
                      <h5>International</h5>
                      <ul>
                        <li><Link to="/destinations#international"><span className="dot"></span>Dubai &amp; Abu Dhabi</Link></li>
                        <li><Link to="/destinations#international"><span className="dot"></span>Bali, Indonesia</Link></li>
                        <li><Link to="/destinations#international"><span className="dot"></span>Thailand</Link></li>
                        <li><Link to="/destinations#international"><span className="dot"></span>Singapore</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Main Navigation Links */}
              <li><NavLink to="/packages" className={({ isActive }) => isActive ? 'active' : ''}>Packages</NavLink></li>
              <li className={`has-dropdown ${servicesMenuOpen ? 'open' : ''}`}>
                <Link to="/services" onClick={handleServicesClick}>
                  Services <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/service/group-tours"><span className="dot"></span>Group Tours</Link></li>
                  <li><Link to="/service/mice"><span className="dot"></span>MICE</Link></li>
                  <li><Link to="/service/incentive-tours"><span className="dot"></span>Incentive Tours</Link></li>
                  <li><Link to="/service/visa-assistance"><span className="dot"></span>Visa Assistance</Link></li>
                  <li><Link to="/service/cruise-management"><span className="dot"></span>Cruise Management</Link></li>
                  <li><Link to="/service/crisis-management"><span className="dot"></span>Crisis Management</Link></li>
                </ul>
              </li>
              {/* <li><NavLink to="/fleet" className={({ isActive }) => isActive ? 'active' : ''}>Fleet</NavLink></li> */}
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
