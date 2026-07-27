import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import shreeGlobalLogo from '../assets/shreeGlobalLogo.jpeg';
import { useWishlist } from '../context/WishlistContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [headerSearch, setHeaderSearch] = useState('');
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);

  const { wishlist, wishlistCount, removeFromWishlist } = useWishlist();
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleHeaderSearchSubmit = (e) => {
    e.preventDefault();
    if (headerSearch.trim()) {
      navigate(`/search?query=${encodeURIComponent(headerSearch.trim())}`);
      setHeaderSearch('');
    } else {
      navigate('/search');
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
            <img src={shreeGlobalLogo} alt="Shree Global Holidays" className="mark" />
          </Link>

          {/* Header Search Bar (Mobile & Desktop Middle Space) */}
          <form className="header-search-bar" onSubmit={handleHeaderSearchSubmit}>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Search tours..."
              value={headerSearch}
              onChange={(e) => setHeaderSearch(e.target.value)}
            />
            <button type="submit" aria-label="Search Tours">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>

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
              {/* <li><NavLink to="/search" className={({ isActive }) => isActive ? 'active' : ''}><i className="fa-solid fa-magnifying-glass" style={{ fontSize: '0.82rem', marginRight: '4px' }}></i> Search</NavLink></li> */}
              <li><NavLink to="/packages" className={({ isActive }) => isActive ? 'active' : ''}>Packages</NavLink></li>
              <li className={`has-dropdown ${servicesMenuOpen ? 'open' : ''}`}>
                <Link to="/services" onClick={handleServicesClick}>
                  Services <i className="fa-solid fa-chevron-down"></i>
                </Link>
                <ul className="dropdown-menu">
                  <li><Link to="/service/group-tours"><i className="fa-solid fa-users service-icon"></i> Group Tours</Link></li>
                  <li><Link to="/service/mice"><i className="fa-solid fa-briefcase service-icon"></i> MICE</Link></li>
                  <li><Link to="/service/incentive-tours"><i className="fa-solid fa-trophy service-icon"></i> Incentive Tours</Link></li>
                  <li><Link to="/service/visa-assistance"><i className="fa-solid fa-passport service-icon"></i> Visa Assistance</Link></li>
                  <li><Link to="/service/cruise-management"><i className="fa-solid fa-ship service-icon"></i> Cruise Management</Link></li>
                  <li><Link to="/service/crisis-management"><i className="fa-solid fa-shield-halved service-icon"></i> Crisis Management</Link></li>
                </ul>
              </li>
              {/* <li><NavLink to="/fleet" className={({ isActive }) => isActive ? 'active' : ''}>Fleet</NavLink></li> */}
              <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
              <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="wishlist-header-box">
              {/* <button
                className="header-wishlist-btn"
                onClick={() => setWishlistDrawerOpen(!wishlistDrawerOpen)}
                title="View Saved Wishlist Packages"
              >
                <i className="fa-solid fa-heart wishlist-icon"></i>
                <span className="wishlist-label">Wishlist</span>
                {wishlistCount > 0 && (
                  <span className="wishlist-badge-count">{wishlistCount}</span>
                )}
              </button> */}

              {/* Header Search Button (Search Icon + Label, navigates to /search) */}
              <Link to="/search" className="header-search-btn" title="Search Tours">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <span className="search-label">Search</span>
              </Link>

              {/* Wishlist Dropdown Drawer */}
              {wishlistDrawerOpen && (
                <div className="wishlist-dropdown-drawer">
                  <div className="wishlist-drawer-header">
                    <h4>
                      <i className="fa-solid fa-heart"></i> Saved Wishlist ({wishlistCount})
                    </h4>
                    <button
                      className="close-drawer-btn"
                      onClick={() => setWishlistDrawerOpen(false)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  <div className="wishlist-drawer-body">
                    {wishlist.length > 0 ? (
                      wishlist.map((item) => (
                        <div key={item.id} className="wishlist-item-card">
                          {item.image && (
                            <img src={item.image} alt={item.title} className="wishlist-item-img" />
                          )}
                          <div className="wishlist-item-info">
                            <h5>{item.title}</h5>
                            <span className="wishlist-item-price">{item.price}</span>
                          </div>
                          <button
                            className="remove-wishlist-btn"
                            onClick={() => removeFromWishlist(item.id)}
                            title="Remove from wishlist"
                          >
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="wishlist-empty">
                        <i className="fa-regular fa-heart empty-heart"></i>
                        <p>Your Wishlist is empty</p>
                        <span>Tap the heart icon on any tour package to save it here!</span>
                      </div>
                    )}
                  </div>

                  {wishlist.length > 0 && (
                    <div className="wishlist-drawer-footer">
                      <Link
                        to="/packages"
                        className="btn btn-brand btn-sm"
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={() => setWishlistDrawerOpen(false)}
                      >
                        Explore Packages
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

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
