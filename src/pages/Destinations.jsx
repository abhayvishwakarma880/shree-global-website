import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Destinations.css';
import { BASE_URL } from '../api/http';

export default function Destinations() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [categories, setCategories] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [searchInputVal, setSearchInputVal] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState('grid');
  const [wishlist, setWishlist] = useState([]);
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
    totalPages: 1,
    totalCount: 0
  });

  const isInitialMount = useRef(true);

  // Fetch Destination Categories for Filter Buttons
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/destinations-category?status=active&limit=100`);
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setCategories(data.data);
        }
      } catch (err) {
        console.error('Error fetching destination categories:', err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch Destinations from Backend API
  useEffect(() => {
    const fetchDestinations = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        params.append('status', 'active');
        params.append('page', currentPage);
        params.append('limit', 6);

        if (searchQuery.trim()) {
          params.append('search', searchQuery.trim());
        }

        if (filter && filter !== 'all') {
          params.append('category', filter);
        }

        const res = await fetch(`${BASE_URL}/api/destination?${params.toString()}`);
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setDestinations(data.data);
          if (data.pagination) {
            setPagination(data.pagination);
          }
        }
      } catch (err) {
        console.error('Error fetching destinations:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDestinations();
  }, [currentPage, filter, searchQuery]);

  // Smooth scroll on page change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    const element = document.querySelector('.dest-grid') || document.querySelector('.filter-section');
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage]);

  // React to hash route modifications
  useEffect(() => {
    if (location.hash) {
      const hashVal = location.hash.replace('#', '');
      if (hashVal) {
        setFilter(hashVal);
        setCurrentPage(1);
      }
    }
  }, [location.hash]);

  const handleSearch = () => {
    setSearchQuery(searchInputVal);
    setCurrentPage(1);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleFAQClick = (index) => {
    setFaqOpenIndex(faqOpenIndex === index ? -1 : index);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < pagination.totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* ================= DESTINATION HERO ================= */}
      <section className="dest-hero">
        <div className="dest-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="dest-hero-scrim"></div>
        <div className="dest-hero-content">
          <div className="eyebrow on-dark" style={{ justifyContent: 'center', marginBottom: '16px' }}>Explore India & World</div>
          <h1>Discover Incredible Destinations</h1>
          <p>From majestic mountains to serene backwaters — find your perfect holiday destination</p>
          <div className="dest-search-box">
            <input 
              type="text" 
              placeholder="Search destinations, regions, categories..." 
              value={searchInputVal}
              onChange={(e) => setSearchInputVal(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}><i className="fa-solid fa-search"></i> Explore</button>
          </div>
          <div className="dest-breadcrumb">
            <Link to="/">Home</Link> / <span>Destinations</span>
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <div className="container">
        <div className="dest-stats-strip">
          <div className="dest-stat-item">
            <span className="number">{pagination.totalCount || destinations.length}+</span>
            <span className="label">Destinations</span>
          </div>
          <div className="dest-stat-item">
            <span className="number">4.8★</span>
            <span className="label">Average Rating</span>
          </div>
          <div className="dest-stat-item">
            <span className="number">8,000+</span>
            <span className="label">Happy Travelers</span>
          </div>
          <div className="dest-stat-item">
            <span className="number">100+</span>
            <span className="label">Tours Available</span>
          </div>
        </div>
      </div>

      {/* ================= FILTER SECTION ================= */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: 0 }}>
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Find Your Destination</div>
              <h2>Explore by <span className="italic">Category</span></h2>
            </div>
            <p>Filter destinations by category, or search your favorite travel spot across India.</p>
          </div>

          <div className="filter-section reveal">
            <div className="filter-buttons">
              <button
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => {
                  setFilter('all');
                  setCurrentPage(1);
                }}
              >
                All
              </button>

              {categories.map((cat) => (
                <button
                  key={cat._id}
                  className={`filter-btn ${filter === cat._id ? 'active' : ''}`}
                  onClick={() => {
                    setFilter(cat._id);
                    setCurrentPage(1);
                  }}
                >
                  {cat.title}
                </button>
              ))}
            </div>
            <div className="filter-results">
              <span><strong>{pagination.totalCount}</strong> destinations found</span>
            </div>
          </div>

          {/* View Toggle */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-10px' }} className="reveal">
            <div className="view-toggle">
              <button 
                className={view === 'grid' ? 'active' : ''} 
                onClick={() => setView('grid')}
                title="Grid View"
              >
                <i className="fa-solid fa-grip"></i>
              </button>
              <button 
                className={view === 'list' ? 'active' : ''} 
                onClick={() => setView('list')}
                title="List View"
              >
                <i className="fa-solid fa-list"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS GRID ================= */}
      <section className="section" style={{ padding: '10px' }}>
        <div className="container">
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
              <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '2rem', marginBottom: '12px', color: '#002D71' }}></i>
              <p style={{ fontWeight: 600 }}>Loading Destinations...</p>
            </div>
          ) : destinations.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#666' }}>
              <i className="fa-solid fa-location-dot" style={{ fontSize: '2.5rem', marginBottom: '12px', color: '#DA9F27' }}></i>
              <h3>No Destinations Found</h3>
              <p style={{ fontSize: '0.9rem', marginTop: '6px' }}>Try searching with a different keyword or category filter.</p>
            </div>
          ) : (
            <div className={`dest-grid reveal ${view === 'list' ? 'list-view' : ''}`}>
              {destinations.map((d) => (
                <div key={d._id} className="dest-card">
                  <div className="dest-card-image">
                    <Link to={`/destination/${d.slug || d._id}`}>
                      <img 
                        src={d.image || 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600'} 
                        alt={d.title} 
                        loading="lazy" 
                      />
                    </Link>
                    <span className="dest-card-badge">{d.destinationsCategory?.title || 'Destination'}</span>
                  </div>
                  <div className="dest-card-content">
                    <h3><Link to={`/destination/${d.slug || d._id}`}>{d.title}</Link></h3>
                    <div className="dest-card-meta">
                      <span>
                        <i className="fa-solid fa-location-dot"></i> 
                        {d.nearestAirport || d.destinationsCategory?.title || 'India'}
                      </span>
                      {d.ideaDuration && (
                        <span><i className="fa-regular fa-clock"></i> {d.ideaDuration}</span>
                      )}
                    </div>
                    <p>
                      {d.description || (d.about ? d.about.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...' : 'Explore amazing holiday packages and top attractions.')}
                    </p>
                    <div className="dest-card-footer">
                      <span className="dest-card-price">
                        {d.pricePerPerson ? `₹${Number(d.pricePerPerson).toLocaleString('en-IN')}` : 'On Request'}
                        {d.pricePerPerson ? <span> / person</span> : ''}
                      </span>
                      <Link to={`/destination/${d.slug || d._id}`} className="dest-card-link">
                        Explore <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="pagination reveal">
              <button className="arrow" onClick={handlePrevPage} disabled={currentPage === 1}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              {Array.from({ length: pagination.totalPages }, (_, idx) => idx + 1).map((page) => (
                <button 
                  key={page}
                  className={currentPage === page ? 'active' : ''}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button className="arrow" onClick={handleNextPage} disabled={currentPage === pagination.totalPages}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= FEATURED REGION ================= */}
      <section className="section" style={{ padding: 0 }}>
        <div className="container">
          <div className="featured-region reveal">
            <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200" alt="Rajasthan" />
            <div className="ov"></div>
            <div className="content">
              <span className="tag">Featured Region</span>
              <h2>Royal Rajasthan</h2>
              <p>Explore the land of maharajas with magnificent forts, opulent palaces, and vibrant culture. Experience the magic of the Pink City, the lakes of Udaipur, and the golden sands of Jaisalmer.</p>
              <Link to="/packages" className="btn btn-brand"><i className="fa-regular fa-compass"></i> Explore Rajasthan</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section sand tight" id="faq">
        <div className="container">
          <div className="eyebrow reveal">Travel Tips</div>
          <h2 className="reveal" style={{ maxWidth: '560px', marginBottom: '30px' }}>Destination <span className="italic">FAQs</span></h2>
          <div className="faq-wrap reveal">
            <div className="side">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=700" alt="Travel planning" />
            </div>
            <div className="faq-list">
              {[
                { q: "Which is the best destination for first-time visitors?", a: "The Golden Triangle (Delhi, Agra, Jaipur) is perfect for first-timers. It offers a taste of India's rich history, culture, and architecture." },
                { q: "What's the best time to visit the Himalayas?", a: "May to September is ideal for Himalayan destinations. The weather is pleasant and roads are accessible for most mountain passes." },
                { q: "How many days do I need for Kerala?", a: "A minimum of 5-7 days is recommended to experience Kerala's backwaters, beaches, hill stations, and wildlife sanctuaries." },
                { q: "Are these destinations family-friendly?", a: "Absolutely! Most destinations offer family-friendly activities, accommodations, and transport options suitable for all age groups." }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`faq-item ${faqOpenIndex === idx ? 'active' : ''}`}
                >
                  <button 
                    className="faq-q"
                    type="button" 
                    onClick={() => handleFAQClick(idx)}
                  >
                    <span><span className="num">0{idx + 1}</span> {item.q}</span>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <div className="faq-a">
                    <p>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="cta-strip">
        <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1600" alt="Mountain road" />
        <div className="ov"></div>
        <div className="container content">
          <div className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Ready to Explore?</div>
          <h2>Let's plan your <span className="italic">Indian adventure</span></h2>
          <div className="actions">
            <Link to="/contact" className="btn btn-brand"><i className="fa-regular fa-paper-plane"></i> Get a Free Itinerary</Link>
            <a href="tel:+919335649404" className="btn btn-line"><i className="fa-solid fa-phone"></i> +91 93356 49404</a>
          </div>
        </div>
      </section>
    </>
  );
}
