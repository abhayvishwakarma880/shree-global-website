import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Destinations.css';

const allDestinations = [
  { id: 1, name: 'Ladakh', region: 'north', subregion: 'himalayan', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600', rating: 4.9, tours: 8, price: 27300, description: 'Land of high passes, Buddhist monasteries, and breathtaking landscapes.', badge: 'Himalayan' },
  { id: 2, name: 'Manali', region: 'north', subregion: 'himalayan', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600', rating: 4.7, tours: 6, price: 18900, description: 'Valley of Gods with pine forests, snow-capped peaks, and adventure sports.', badge: 'Adventure' },
  { id: 3, name: 'Shimla', region: 'north', subregion: 'himalayan', image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=600', rating: 4.6, tours: 5, price: 16500, description: 'Queen of Hills with colonial charm, scenic views, and toy train rides.', badge: 'Heritage' },
  { id: 4, name: 'Jaipur', region: 'west', subregion: 'desert', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600', rating: 4.8, tours: 12, price: 14500, description: 'Pink City with magnificent forts, palaces, and vibrant bazaars.', badge: 'Royal' },
  { id: 5, name: 'Udaipur', region: 'west', subregion: 'desert', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600', rating: 4.9, tours: 9, price: 19500, description: 'City of Lakes with romantic palaces, boat rides, and sunset views.', badge: 'Romantic' },
  { id: 6, name: 'Jodhpur', region: 'west', subregion: 'desert', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600', rating: 4.7, tours: 7, price: 16800, description: 'Blue City with the majestic Mehrangarh Fort and blue-painted houses.', badge: 'Heritage' },
  { id: 7, name: 'Kerala', region: 'south', subregion: 'coastal', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600', rating: 4.9, tours: 14, price: 19600, description: "God's Own Country with backwaters, beaches, and lush greenery.", badge: 'Backwaters' },
  { id: 8, name: 'Goa', region: 'south', subregion: 'coastal', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600', rating: 4.5, tours: 10, price: 15200, description: 'Beach paradise with Portuguese heritage, nightlife, and seafood.', badge: 'Beach' },
  { id: 9, name: 'Varanasi', region: 'east', subregion: 'cultural', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600', rating: 4.6, tours: 6, price: 12800, description: 'Spiritual capital with ancient ghats, Ganga Aarti, and timeless rituals.', badge: 'Spiritual' },
  { id: 10, name: 'Rishikesh', region: 'north', subregion: 'himalayan', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600', rating: 4.7, tours: 4, price: 11200, description: 'Yoga capital with serene Ganges, adventure sports, and ashrams.', badge: 'Adventure' },
  { id: 11, name: 'Agra', region: 'north', subregion: 'cultural', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600', rating: 4.8, tours: 10, price: 15800, description: 'Home of the Taj Mahal, Mughal heritage, and rich history.', badge: 'Iconic' },
  { id: 12, name: 'Jaisalmer', region: 'west', subregion: 'desert', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600', rating: 4.6, tours: 5, price: 18200, description: 'Golden City with sand dunes, camel safaris, and ancient havelis.', badge: 'Desert' },
  { id: 13, name: 'Darjeeling', region: 'east', subregion: 'himalayan', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600', rating: 4.5, tours: 4, price: 14200, description: 'Queen of Hills with tea gardens, toy train, and Himalayan views.', badge: 'Tea' },
  { id: 14, name: 'Coorg', region: 'south', subregion: 'himalayan', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600', rating: 4.7, tours: 4, price: 16500, description: 'Scotland of India with coffee plantations, waterfalls, and misty hills.', badge: 'Nature' },
  { id: 15, name: 'Kashmir', region: 'north', subregion: 'himalayan', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600', rating: 4.8, tours: 7, price: 22400, description: 'Paradise on Earth with beautiful valleys, gardens, and houseboats.', badge: 'Paradise' },
  { id: 16, name: 'Mysore', region: 'south', subregion: 'cultural', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600', rating: 4.6, tours: 4, price: 13800, description: 'City of Palaces with rich heritage, gardens, and grand Dasara festival.', badge: 'Heritage' },
  { id: 17, name: 'Shillong', region: 'east', subregion: 'himalayan', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600', rating: 4.4, tours: 3, price: 15200, description: 'Scotland of the East with waterfalls, caves, and lush landscapes.', badge: 'Nature' },
  { id: 18, name: 'Gangtok', region: 'east', subregion: 'himalayan', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600', rating: 4.6, tours: 4, price: 17800, description: 'Mountain city with monasteries, views of Kanchenjunga, and Tibetan culture.', badge: 'Mountain' },
  { id: 19, name: 'Pushkar', region: 'west', subregion: 'desert', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600', rating: 4.5, tours: 3, price: 12500, description: 'Holy city with sacred lake, camel fair, and spiritual atmosphere.', badge: 'Spiritual' },
  { id: 20, name: 'Kaziranga', region: 'east', subregion: 'cultural', image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=600', rating: 4.7, tours: 3, price: 18500, description: 'Wildlife paradise with one-horned rhinos, elephants, and rich biodiversity.', badge: 'Wildlife' }
];

export default function Destinations() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [searchInputVal, setSearchInputVal] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState('grid');
  const [wishlist, setWishlist] = useState([]);
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);

  const itemsPerPage = 6;

  // React to hash route modifications
  useEffect(() => {
    if (location.hash) {
      const region = location.hash.replace('#', '');
      const validRegions = ['north', 'south', 'east', 'west', 'himalayan', 'coastal'];
      if (validRegions.includes(region)) {
        setFilter(region);
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

  // Filter & Search Logic
  const filteredDestinations = allDestinations.filter((dest) => {
    // 1. Filter by region / subregion
    if (filter !== 'all') {
      if (dest.region !== filter && dest.subregion !== filter) return false;
    }
    // 2. Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return (
        dest.name.toLowerCase().includes(q) ||
        dest.description.toLowerCase().includes(q) ||
        dest.region.toLowerCase().includes(q) ||
        dest.subregion.toLowerCase().includes(q) ||
        dest.badge.toLowerCase().includes(q)
      );
    }
    return true;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const pageItems = filteredDestinations.slice(startIdx, startIdx + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* ================= DESTINATION HERO ================= */}
      <section className="dest-hero">
        <div className="dest-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="dest-hero-scrim"></div>
        <div className="dest-hero-content">
          <div className="eyebrow on-dark" style={{ justifyContent: 'center', marginBottom: '16px' }}>Explore India</div>
          <h1>Discover <span className="italic">20+</span> Incredible Destinations</h1>
          <p>From the snowy peaks of Ladakh to the backwaters of Kerala — find your perfect escape</p>
          <div className="dest-search-box">
            <input 
              type="text" 
              placeholder="Search destinations, regions, activities..." 
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
            <span className="number">20+</span>
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
              <h2>Explore by <span className="italic">Region</span></h2>
            </div>
            <p>Filter destinations by region, or browse all 20+ incredible places across India.</p>
          </div>

          <div className="filter-section reveal">
            <div className="filter-buttons">
              {[
                { label: 'All', value: 'all' },
                { label: 'North India', value: 'north' },
                { label: 'South India', value: 'south' },
                { label: 'East India', value: 'east' },
                { label: 'West India', value: 'west' },
                { label: 'Himalayan', value: 'himalayan' },
                { label: 'Coastal', value: 'coastal' }
              ].map((btn) => (
                <button 
                  key={btn.value}
                  className={`filter-btn ${filter === btn.value ? 'active' : ''}`}
                  onClick={() => {
                    setFilter(btn.value);
                    setCurrentPage(1);
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
            <div className="filter-results">
              <span><strong>{filteredDestinations.length}</strong> destinations found</span>
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
          <div className={`dest-grid reveal ${view === 'list' ? 'list-view' : ''}`}>
            {pageItems.map((d) => (
              <div key={d.id} className="dest-card">
                <div className="dest-card-image">
                  <img src={d.image} alt={d.name} loading="lazy" />
                  <span className="dest-card-badge">{d.badge}</span>
                  <span className="dest-card-rating"><i className="fa-solid fa-star"></i> {d.rating}</span>
                  <span 
                    className={`dest-card-wishlist ${wishlist.includes(d.id) ? 'liked' : ''}`}
                    onClick={() => toggleWishlist(d.id)}
                    style={{ background: wishlist.includes(d.id) ? '#e74c3c' : 'rgba(255,255,255,0.2)' }}
                  >
                    <i className={wishlist.includes(d.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
                  </span>
                </div>
                <div className="dest-card-content">
                  <h3><Link to="/packages">{d.name}</Link></h3>
                  <div className="dest-card-meta">
                    <span>
                      <i className="fa-solid fa-location-dot"></i> 
                      {d.region.charAt(0).toUpperCase() + d.region.slice(1)}
                    </span>
                    <span><i className="fa-regular fa-clock"></i> {d.tours} tours</span>
                  </div>
                  <p>{d.description}</p>
                  <div className="dest-card-footer">
                    <span className="dest-card-price">₹{d.price.toLocaleString()} <span>/ person</span></span>
                    <Link to="/packages" className="dest-card-link">Explore <i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination reveal">
              <button className="arrow" onClick={handlePrevPage} disabled={currentPage === 1}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                <button 
                  key={page}
                  className={currentPage === page ? 'active' : ''}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button className="arrow" onClick={handleNextPage} disabled={currentPage === totalPages}>
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
            <a href="tel:+919811022334" className="btn btn-line"><i className="fa-solid fa-phone"></i> +91 98110 22334</a>
          </div>
        </div>
      </section>
    </>
  );
}
