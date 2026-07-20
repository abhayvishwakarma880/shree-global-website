import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';

const allPackages = [
  { 
    id: 1, 
    name: 'Golden Triangle Tour', 
    category: 'heritage', 
    duration: '5D/4N', 
    price: 14500, 
    originalPrice: 18000, 
    rating: 4.9, 
    reviews: 120, 
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600', 
    description: 'Experience Delhi, Agra & Jaipur with private guides and 4-star stays.', 
    inclusions: ['Breakfast', 'Transport', 'Guide'], 
    badge: 'Best Seller', 
    discount: '20%',
    type: 'domestic',
    months: [10, 11, 12, 1, 2, 3] 
  },
  { 
    id: 2, 
    name: 'Shimla Manali Escape', 
    category: 'honeymoon', 
    duration: '6D/5N', 
    price: 18900, 
    originalPrice: 21000, 
    rating: 4.8, 
    reviews: 95, 
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=600', 
    description: 'Romantic getaway to the Himalayas with luxury resorts and scenic views.', 
    inclusions: ['Breakfast', 'Dinner', 'Sightseeing'], 
    badge: 'Honeymoon', 
    discount: '10%',
    type: 'domestic',
    months: [4, 5, 6, 12, 1]
  },
  { 
    id: 3, 
    name: 'Rajasthan Heritage Trail', 
    category: 'luxury', 
    duration: '7D/6N', 
    price: 22400, 
    originalPrice: 26000, 
    rating: 4.9, 
    reviews: 85, 
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600', 
    description: 'Royal palaces, desert camps, and heritage hotels across Rajasthan.', 
    inclusions: ['Palace Stay', 'Transport', 'Guide', 'Meals'], 
    badge: 'Luxury', 
    discount: '14%',
    type: 'domestic',
    months: [10, 11, 12, 1, 2, 3]
  },
  { 
    id: 4, 
    name: 'Kerala Backwater Trail', 
    category: 'family', 
    duration: '6D/5N', 
    price: 19600, 
    originalPrice: 22000, 
    rating: 4.7, 
    reviews: 110, 
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600', 
    description: 'Houseboat cruise, beaches, and hill stations in God\'s Own Country.', 
    inclusions: ['Houseboat', 'Breakfast', 'Sightseeing'], 
    badge: 'Family', 
    discount: '11%',
    type: 'domestic',
    months: [9, 10, 11, 12, 1, 2, 3]
  },
  { 
    id: 5, 
    name: 'Ladakh High-Altitude Circuit', 
    category: 'adventure', 
    duration: '8D/7N', 
    price: 27300, 
    originalPrice: 31000, 
    rating: 4.9, 
    reviews: 65, 
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600', 
    description: 'Conquer mountain passes, visit monasteries, and camp under the stars.', 
    inclusions: ['Camping', 'Transport', 'Guide', 'Meals'], 
    badge: 'Adventure', 
    discount: '12%',
    type: 'domestic',
    months: [6, 7, 8, 9]
  },
  { 
    id: 6, 
    name: 'Varanasi Pilgrimage Tour', 
    category: 'spiritual', 
    duration: '4D/3N', 
    price: 12800, 
    originalPrice: 15000, 
    rating: 4.6, 
    reviews: 70, 
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600', 
    description: 'Sacred ghats, Ganga Aarti, and spiritual experiences in Varanasi.', 
    inclusions: ['Boat Ride', 'Guide', 'Transport'], 
    badge: 'Spiritual', 
    discount: '15%',
    type: 'domestic',
    months: [10, 11, 12, 1, 2, 3]
  },
  { 
    id: 7, 
    name: 'Goa Beach Getaway', 
    category: 'honeymoon', 
    duration: '5D/4N', 
    price: 15200, 
    originalPrice: 17000, 
    rating: 4.5, 
    reviews: 130, 
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600', 
    description: 'Sun, sand, and sea with luxury beach resorts and water sports.', 
    inclusions: ['Beach Resort', 'Breakfast', 'Water Sports'], 
    badge: 'Honeymoon', 
    discount: '10%',
    type: 'domestic',
    months: [11, 12, 1, 2]
  },
  { 
    id: 8, 
    name: 'Royal Udaipur Package', 
    category: 'luxury', 
    duration: '4D/3N', 
    price: 19500, 
    originalPrice: 23000, 
    rating: 4.9, 
    reviews: 75, 
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600', 
    description: 'Lake palace stays, boat rides, and royal experiences in Udaipur.', 
    inclusions: ['Palace Stay', 'Boat Ride', 'Guide', 'Meals'], 
    badge: 'Luxury', 
    discount: '15%',
    type: 'domestic',
    months: [10, 11, 12, 1, 2, 3]
  },
  { 
    id: 9, 
    name: 'Kashmir Paradise Tour', 
    category: 'honeymoon', 
    duration: '7D/6N', 
    price: 22400, 
    originalPrice: 25000, 
    rating: 4.8, 
    reviews: 60, 
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600', 
    description: 'Houseboat stays, Mughal gardens, and gondola rides in Kashmir.', 
    inclusions: ['Houseboat', 'Sightseeing', 'Transport'], 
    badge: 'Honeymoon', 
    discount: '10%',
    type: 'domestic',
    months: [3, 4, 5, 6, 12, 1]
  },
  { 
    id: 10, 
    name: 'Darjeeling Gangtok Tour', 
    category: 'family', 
    duration: '6D/5N', 
    price: 17800, 
    originalPrice: 20000, 
    rating: 4.6, 
    reviews: 50, 
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600', 
    description: 'Tea gardens, toy train, and Himalayan views in the Northeast.', 
    inclusions: ['Toy Train', 'Breakfast', 'Sightseeing'], 
    badge: 'Family', 
    discount: '11%',
    type: 'domestic',
    months: [3, 4, 5, 6, 10, 11]
  },
  { 
    id: 11, 
    name: 'Rishikesh Adventure', 
    category: 'adventure', 
    duration: '4D/3N', 
    price: 11200, 
    originalPrice: 13000, 
    rating: 4.7, 
    reviews: 80, 
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600', 
    description: 'River rafting, camping, and yoga in the spiritual capital.', 
    inclusions: ['Rafting', 'Camping', 'Meals'], 
    badge: 'Adventure', 
    discount: '14%',
    type: 'domestic',
    months: [9, 10, 11, 3, 4, 5]
  },
  { 
    id: 12, 
    name: 'Mysore Coorg Package', 
    category: 'family', 
    duration: '5D/4N', 
    price: 16500, 
    originalPrice: 19000, 
    rating: 4.6, 
    reviews: 45, 
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600', 
    description: 'Palace heritage, coffee plantations, and waterfalls in Karnataka.', 
    inclusions: ['Palace Visit', 'Breakfast', 'Transport'], 
    badge: 'Family', 
    discount: '13%',
    type: 'domestic',
    months: [10, 11, 12, 1, 2, 3]
  },
  { 
    id: 13, 
    name: 'Bali Luxury Escape', 
    category: 'honeymoon', 
    duration: '6D/5N', 
    price: 32000, 
    originalPrice: 38000, 
    rating: 4.9, 
    reviews: 102, 
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=600', 
    description: 'Private villa stays, beautiful beaches, and temple tours in Bali.', 
    inclusions: ['Private Villa', 'Spa Session', 'Breakfast', 'Transfer'], 
    badge: 'Luxury', 
    discount: '15%',
    type: 'international',
    months: [4, 5, 6, 7, 8, 9, 10]
  },
  { 
    id: 14, 
    name: 'Dubai Desert & City Tour', 
    category: 'family', 
    duration: '5D/4N', 
    price: 29500, 
    originalPrice: 34000, 
    rating: 4.8, 
    reviews: 88, 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600', 
    description: 'Experience the Burj Khalifa, desert safari, and shopping festivals.', 
    inclusions: ['Luxury Hotel', 'Desert Safari', 'Burj Entry', 'Meals'], 
    badge: 'Best Seller', 
    discount: '13%',
    type: 'international',
    months: [11, 12, 1, 2, 3]
  },
  { 
    id: 15, 
    name: 'Thailand Adventure Trip', 
    category: 'adventure', 
    duration: '6D/5N', 
    price: 24900, 
    originalPrice: 28000, 
    rating: 4.7, 
    reviews: 94, 
    image: 'https://images.unsplash.com/photo-1528181304800-2f5353a98ef3?auto=format&fit=crop&q=80&w=600', 
    description: 'Island hopping, jungle trekking, and local market food tours in Phuket & Bangkok.', 
    inclusions: ['Phuket Stay', 'Island Cruise', 'Sightseeing', 'Meals'], 
    badge: 'Adventure', 
    discount: '11%',
    type: 'international',
    months: [11, 12, 1, 2, 3, 4]
  },
  { 
    id: 16, 
    name: 'Singapore City Discoverer', 
    category: 'family', 
    duration: '5D/4N', 
    price: 28000, 
    originalPrice: 32000, 
    rating: 4.8, 
    reviews: 76, 
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=600', 
    description: 'Gardens by the Bay, Universal Studios, and shopping at Marina Bay Sands.', 
    inclusions: ['Hotel Stay', 'Universal Ticket', 'Gardens Pass', 'Breakfast'], 
    badge: 'Family', 
    discount: '12%',
    type: 'international',
    months: [1, 2, 3, 6, 7, 8]
  }
];

export default function Packages() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sort, setSort] = useState('popular');
  const [maxPrice, setMaxPrice] = useState(35000);
  const [wishlist, setWishlist] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const itemsPerPage = 6;

  const toggleWishlist = (id) => {
    setWishlist((prev) => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedDestination('all');
    setSelectedDuration('all');
    setSelectedMonth('all');
    setSelectedType('all');
    setSelectedCategories([]);
    setMaxPrice(35000);
    setCurrentPage(1);
  };

  // Filter, price filter, and sorting logic
  let filtered = allPackages.filter((pkg) => {
    // Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = pkg.name.toLowerCase().includes(q);
      const matchDesc = pkg.description.toLowerCase().includes(q);
      if (!matchName && !matchDesc) return false;
    }

    // Destination select dropdown
    if (selectedDestination !== 'all') {
      const dest = selectedDestination.toLowerCase();
      const matchName = pkg.name.toLowerCase().includes(dest);
      const matchDesc = pkg.description.toLowerCase().includes(dest);
      if (!matchName && !matchDesc) return false;
    }

    // Region Type (Domestic / International)
    if (selectedType !== 'all' && pkg.type !== selectedType) return false;

    // Budget Limit slider
    if (pkg.price > maxPrice) return false;

    // Duration filter
    if (selectedDuration !== 'all') {
      const days = parseInt(pkg.duration) || 0;
      if (selectedDuration === 'short' && days > 4) return false;
      if (selectedDuration === 'medium' && (days < 5 || days > 6)) return false;
      if (selectedDuration === 'long' && days < 7) return false;
    }

    // Month filter
    if (selectedMonth !== 'all') {
      const mNum = parseInt(selectedMonth);
      if (!pkg.months || !pkg.months.includes(mNum)) return false;
    }

    // Categories checked tags
    if (selectedCategories.length > 0) {
      if (!selectedCategories.includes(pkg.category)) return false;
    }

    return true;
  });

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'duration':
        const aDays = parseInt(a.duration) || 0;
        const bDays = parseInt(b.duration) || 0;
        return aDays - bDays;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return b.reviews - a.reviews;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const pageItems = sorted.slice(startIdx, startIdx + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* ================= PACKAGES HERO ================= */}
      <section className="pkg-hero">
        <div className="pkg-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="pkg-hero-scrim"></div>
        <div className="pkg-hero-content">
          <div className="eyebrow on-dark" style={{ justifyContent: 'center', marginBottom: '16px' }}>Curated Experiences</div>
          <h1>Luxury <span className="italic">Tour Packages</span></h1>
          <p>Handcrafted itineraries with premium stays, private guides, and seamless transport across India & international getaways</p>
          <div className="pkg-breadcrumb">
            <Link to="/">Home</Link> / <span>Packages</span>
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <div className="container">
        <div className="pkg-stats-strip">
          <div className="pkg-stat-item">
            <span className="number">16+</span>
            <span className="label">Curated Packages</span>
          </div>
          <div className="pkg-stat-item">
            <span className="number">4.8★</span>
            <span className="label">Average Rating</span>
          </div>
          <div className="pkg-stat-item">
            <span className="number">10,000+</span>
            <span className="label">Happy Travelers</span>
          </div>
          <div className="pkg-stat-item">
            <span className="number">100%</span>
            <span className="label">Customizable</span>
          </div>
        </div>
      </div>

      {/* ================= FILTER & LAYOUT SECTION ================= */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Find Your Package</div>
              <h2>Choose from <span className="italic">16+</span> Luxury Tours</h2>
            </div>
            <p>Filter by region, duration, month, or tags to find your perfect custom journey.</p>
          </div>

          <div className="packages-page-layout reveal" style={{ marginTop: '30px' }}>
            
            {/* Mobile Filter Backdrop */}
            {isMobileFilterOpen && (
              <div className="mobile-filter-backdrop" onClick={() => setIsMobileFilterOpen(false)}></div>
            )}
            
            {/* LEFT SIDEBAR: STICKY FILTERS */}
            <aside className={`packages-sidebar ${isMobileFilterOpen ? 'show-mobile' : ''}`}>
              <div className="sticky-filter-card">
                <div className="filter-header-row">
                  <h3>Filter & Sort</h3>
                  <div className="filter-header-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button className="clear-filters-btn" onClick={clearFilters}>
                      <i className="fa-solid fa-arrow-rotate-left"></i> Reset
                    </button>
                    <button className="close-mobile-filter-btn" onClick={() => setIsMobileFilterOpen(false)} aria-label="Close Filters">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </div>
                
                {/* Search Box */}
                <div className="filter-group">
                  <label>Search Package</label>
                  <div className="filter-search-box">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input 
                      type="text" 
                      placeholder="Search destinations..." 
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                    />
                  </div>
                </div>

                {/* Region Type (Domestic / International) */}
                <div className="filter-group">
                  <label>Region Type</label>
                  <div className="region-filter-options">
                    <label className="radio-container">
                      <input 
                        type="radio" 
                        name="regionType" 
                        value="all" 
                        checked={selectedType === 'all'}
                        onChange={() => {
                          setSelectedType('all');
                          setCurrentPage(1);
                        }}
                      />
                      <span>All</span>
                    </label>
                    <label className="radio-container">
                      <input 
                        type="radio" 
                        name="regionType" 
                        value="domestic" 
                        checked={selectedType === 'domestic'}
                        onChange={() => {
                          setSelectedType('domestic');
                          setCurrentPage(1);
                        }}
                      />
                      <span>Domestic</span>
                    </label>
                    <label className="radio-container">
                      <input 
                        type="radio" 
                        name="regionType" 
                        value="international" 
                        checked={selectedType === 'international'}
                        onChange={() => {
                          setSelectedType('international');
                          setCurrentPage(1);
                        }}
                      />
                      <span>International</span>
                    </label>
                  </div>
                </div>

                {/* Destination Dropdown */}
                <div className="filter-group">
                  <label>Destination</label>
                  <select 
                    className="filter-select"
                    value={selectedDestination}
                    onChange={(e) => {
                      setSelectedDestination(e.target.value);
                      setCurrentPage(1);
                    }}
                  >
                    <option value="all">All Destinations</option>
                    <option value="delhi">Delhi &amp; Agra</option>
                    <option value="shimla">Shimla &amp; Manali</option>
                    <option value="rajasthan">Rajasthan (Jaipur/Udaipur)</option>
                    <option value="kerala">Kerala Backwaters</option>
                    <option value="ladakh">Ladakh</option>
                    <option value="goa">Goa Beaches</option>
                    <option value="kashmir">Kashmir</option>
                    <option value="darjeeling">Darjeeling &amp; Gangtok</option>
                    <option value="rishikesh">Rishikesh</option>
                    <option value="coorg">Mysore &amp; Coorg</option>
                    <option value="bali">Bali (Indonesia)</option>
                    <option value="dubai">Dubai (UAE)</option>
                    <option value="thailand">Thailand</option>
                    <option value="singapore">Singapore</option>
                  </select>
                </div>

                {/* Budget Limit Slider */}
                <div className="filter-group">
                  <label><i className="fa-solid fa-indian-rupee-sign"></i> Budget Limit</label>
                  <div className="price-range-vertical">
                    <input 
                      type="range" 
                      min="10000" 
                      max="35000" 
                      value={maxPrice} 
                      step="1000"
                      onChange={(e) => {
                        setMaxPrice(parseInt(e.target.value));
                        setCurrentPage(1);
                      }}
                    />
                    <span className="price-value">₹{maxPrice.toLocaleString()}</span>
                  </div>
                </div>

                {/* Duration Dropdown */}
                <div className="filter-group">
                  <label>Duration</label>
                  <select 
                    className="filter-select"
                    value={selectedDuration}
                    onChange={(e) => {
                      setSelectedDuration(e.target.value);
                      setCurrentPage(1);
                    }}
                  >
                    <option value="all">All Durations</option>
                    <option value="short">Short (1 - 4 Days)</option>
                    <option value="medium">Medium (5 - 6 Days)</option>
                    <option value="long">Long (7+ Days)</option>
                  </select>
                </div>

                {/* Month Dropdown */}
                <div className="filter-group">
                  <label>Month (Travel Time)</label>
                  <select 
                    className="filter-select"
                    value={selectedMonth}
                    onChange={(e) => {
                      setSelectedMonth(e.target.value);
                      setCurrentPage(1);
                    }}
                  >
                    <option value="all">All Months</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>

                {/* Categories Checkboxes Grid */}
                <div className="filter-group">
                  <label>Package Tags</label>
                  <div className="category-checkboxes-grid">
                    {[
                      { label: 'Honeymoon', value: 'honeymoon' },
                      { label: 'Family', value: 'family' },
                      { label: 'Adventure', value: 'adventure' },
                      { label: 'Luxury', value: 'luxury' },
                      { label: 'Heritage', value: 'heritage' },
                      { label: 'Spiritual', value: 'spiritual' }
                    ].map((cat) => (
                      <label key={cat.value} className="checkbox-container">
                        <input 
                          type="checkbox" 
                          checked={selectedCategories.includes(cat.value)}
                          onChange={() => toggleCategory(cat.value)}
                        />
                        <span>{cat.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sort Option */}
                <div className="filter-group">
                  <label>Sort By</label>
                  <select 
                    className="sort-select" 
                    value={sort}
                    onChange={(e) => {
                      setSort(e.target.value);
                      setCurrentPage(1);
                    }}
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="duration">Duration</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* RIGHT COLUMN: GRID AND PAGINATION */}
            <div className="packages-content-col">
              <div className="results-strip">
                <span>Showing <strong>{sorted.length}</strong> packages found</span>
                <button className="mobile-filter-trigger" onClick={() => setIsMobileFilterOpen(true)}>
                  <i className="fa-solid fa-filter"></i> Filters
                </button>
              </div>

              {sorted.length === 0 ? (
                <div className="no-results-found" style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <i className="fa-solid fa-face-frown" style={{ fontSize: '3rem', color: 'var(--ink-faint)', marginBottom: '16px' }}></i>
                  <h3>No Packages Match Your Filters</h3>
                  <p style={{ color: 'var(--ink-soft)', marginBottom: '20px' }}>Try resetting filters or adjusting search parameters.</p>
                  <button className="btn btn-brand" onClick={clearFilters}>Reset Filters</button>
                </div>
              ) : (
                <>
                  <div className="pkg-grid">
                    {pageItems.map((p) => (
                      <div key={p.id} className="pkg-card">
                        <div className="pkg-card-image">
                          <img src={p.image} alt={p.name} loading="lazy" />
                          <span className={`pkg-badge ${p.badge.toLowerCase().replace(' ', '-')}`}>{p.badge}</span>
                          {p.discount && <span className="pkg-discount">-{p.discount}</span>}
                          <span className="pkg-rating"><i className="fa-solid fa-star"></i> {p.rating} ({p.reviews})</span>
                          <span 
                            className={`pkg-wishlist ${wishlist.includes(p.id) ? 'liked' : ''}`}
                            onClick={() => toggleWishlist(p.id)}
                            style={{ background: wishlist.includes(p.id) ? '#e74c3c' : 'rgba(255,255,255,0.2)' }}
                          >
                            <i className={wishlist.includes(p.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
                          </span>
                        </div>
                        <div className="pkg-card-content">
                          <h3><Link to={`/package/${p.id}`}>{p.name}</Link></h3>
                          <div className="pkg-meta">
                            <span><i className="fa-regular fa-clock"></i> {p.duration}</span>
                            <span><i className="fa-regular fa-user"></i> {p.category.charAt(0).toUpperCase() + p.category.slice(1)}</span>
                          </div>
                          <p>{p.description}</p>
                          <div className="pkg-inclusions">
                            {p.inclusions.map((inc, i) => <span key={i}>{inc}</span>)}
                          </div>
                          <div className="pkg-card-footer">
                            <div className="pkg-price">
                              {p.originalPrice && <span className="original">₹{p.originalPrice.toLocaleString()}</span>}
                              <span className="current">₹{p.price.toLocaleString()}</span>
                              <span className="per">/ person</span>
                            </div>
                            <Link to="/contact" className="btn btn-brand btn-sm">Book Now</Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="pagination">
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
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURED PACKAGE BANNER ================= */}
      <section className="section" style={{ padding: 0 }}>
        <div className="container">
          <div className="featured-package reveal">
            <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200" alt="Golden Triangle" />
            <div className="ov"></div>
            <div className="content">
              <div className="featured-package-grid">
                <div className="featured-main-info">
                  <span className="tag">Best Seller</span>
                  <span className="offer">Limited Time Offer - 20% Off</span>
                  <h2>Luxury Golden Triangle Tour</h2>
                  <p style={{ maxWidth: '100%' }}>Experience the magic of Delhi, Agra, and Jaipur with 5-star stays, private guides, and exclusive experiences. Book now and save ₹3,600!</p>
                  <Link to="/contact" className="btn btn-brand" style={{ marginTop: '10px' }}>
                    <i className="fa-solid fa-calendar-check"></i> Book Now - ₹14,500
                  </Link>
                </div>
                
                <div className="featured-details-box">
                  <div className="featured-details-col inclusions">
                    <h4><i className="fa-solid fa-circle-check"></i> Inclusions</h4>
                    <ul className="featured-details-list">
                      <li><i className="fa-solid fa-check"></i> 5-Star Hotel Stay</li>
                      <li><i className="fa-solid fa-check"></i> Private AC SUV Sedan</li>
                      <li><i className="fa-solid fa-check"></i> Private Tour Guide</li>
                      <li><i className="fa-solid fa-check"></i> Daily Buffet Breakfasts</li>
                      <li><i className="fa-solid fa-check"></i> Monument Entry Fees</li>
                    </ul>
                  </div>
                  <div className="featured-details-col exclusions">
                    <h4><i className="fa-solid fa-circle-xmark"></i> Exclusions</h4>
                    <ul className="featured-details-list">
                      <li><i className="fa-solid fa-xmark"></i> Airfare or Train tickets</li>
                      <li><i className="fa-solid fa-xmark"></i> Lunch &amp; Dinner meals</li>
                      <li><i className="fa-solid fa-xmark"></i> Tips and Gratuities</li>
                      <li><i className="fa-solid fa-xmark"></i> Camera fees at sites</li>
                      <li><i className="fa-solid fa-xmark"></i> Personal Expenses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="section sand tight">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Why Book With Us</div>
              <h2>Your <span className="italic">Trusted</span> Travel Partner</h2>
            </div>
            <p>We make every journey seamless with expert planning and personalized care.</p>
          </div>

          <div className="benefits-grid reveal">
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-star"></i></div>
              <h4>Curated Experiences</h4>
              <p>Handpicked hotels, guides, and activities for authentic travel</p>
            </div>
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-shield-halved"></i></div>
              <h4>Best Price Guarantee</h4>
              <p>Competitive rates with no hidden charges or surprises</p>
            </div>
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-headset"></i></div>
              <h4>24/7 Support</h4>
              <p>Dedicated travel experts available round the clock</p>
            </div>
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-car"></i></div>
              <h4>Premium Fleet</h4>
              <p>Comfortable vehicles with experienced chauffeurs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="cta-strip">
        <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1600" alt="Mountain road" />
        <div className="ov"></div>
        <div className="container content">
          <div className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Ready to Book?</div>
          <h2>Your dream <span className="italic">Indian vacation</span> awaits</h2>
          <div className="actions">
            <Link to="/contact" className="btn btn-brand"><i className="fa-regular fa-paper-plane"></i> Get Free Quote</Link>
            <a href="tel:+919811022334" className="btn btn-line"><i className="fa-solid fa-phone"></i> +91 98110 22334</a>
          </div>
        </div>
      </section>
    </>
  );
}
