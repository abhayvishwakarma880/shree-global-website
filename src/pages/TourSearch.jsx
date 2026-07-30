import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import "./TourSearch.css";
import { BASE_URL } from "../api/http.js";

export default function TourSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Read initial filter values from URL params
  const initialQuery = searchParams.get("query") || "";
  const initialCategory = searchParams.get("category") || "All";
  const initialDuration = searchParams.get("duration") || "All";

  const [queryInput, setQueryInput] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDuration, setSelectedDuration] = useState(initialDuration);
  const [sortBy, setSortBy] = useState("recommended");

  // Dynamic Destinations State
  const [destinations, setDestinations] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all active destinations & categories from backend
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [destRes, catRes] = await Promise.all([
          fetch(`${BASE_URL}/api/destination?status=active&limit=100`),
          fetch(`${BASE_URL}/api/destinations-category`)
        ]);
        const destData = await destRes.json();
        const catData = await catRes.json();

        if (destData.success && Array.isArray(destData.data)) {
          setDestinations(destData.data);
        }
        if (catData.success && Array.isArray(catData.data)) {
          setCategoriesList(catData.data);
        }
      } catch (err) {
        console.error('Error fetching destinations for TourSearch:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Keep local states in sync when URL changes
  useEffect(() => {
    setQueryInput(searchParams.get("query") || "");
    setSelectedCategory(searchParams.get("category") || "All");
    setSelectedDuration(searchParams.get("duration") || "All");
  }, [searchParams]);

  // Update URL search parameters when filters change
  const applyFilters = (newQuery, newCat, newDur) => {
    const params = new URLSearchParams();
    if (newQuery.trim()) params.set("query", newQuery.trim());
    if (newCat && newCat !== "All") params.set("category", newCat);
    if (newDur && newDur !== "All") params.set("duration", newDur);
    setSearchParams(params);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    applyFilters(queryInput, selectedCategory, selectedDuration);
  };

  const handleClearFilters = () => {
    setQueryInput("");
    setSelectedCategory("All");
    setSelectedDuration("All");
    setSortBy("recommended");
    setSearchParams(new URLSearchParams());
  };

  // Filter & Sort Logic for Destinations
  const filteredDestinations = destinations.filter((dest) => {
    const q = initialQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      dest.title?.toLowerCase().includes(q) ||
      dest.description?.toLowerCase().includes(q) ||
      dest.nearestAirport?.toLowerCase().includes(q) ||
      dest.bestTimeToVisit?.toLowerCase().includes(q) ||
      dest.destinationsCategory?.title?.toLowerCase().includes(q);

    const matchesCategory =
      initialCategory === "All" ||
      dest.destinationsCategory?._id === initialCategory ||
      dest.destinationsCategory?.title === initialCategory;

    return matchesQuery && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === "recommended") return 0;
    if (sortBy === "title") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="tour-search-page">
      {/* Search Page Banner */}
      <section className="search-page-hero">
        <div className="container text-center">
          <span className="search-hero-badge">
            <i className="fa-solid fa-compass"></i> Explore All Travel Destinations
          </span>
          <h1>
            Find Your Dream <span className="highlight-gold">Destination</span>
          </h1>
          <p className="search-hero-desc">
            Discover top-rated destinations, heritage cities, hill stations, and international wonderlands.
          </p>

          {/* Search Box Form */}
          <form className="search-bar-box" onSubmit={handleSearchSubmit}>
            <div className="search-bar-grid">
              <div className="search-input-field">
                <label><i className="fa-solid fa-location-dot"></i> Search Destination</label>
                <div className="search-input-inner">
                  <input
                    type="text"
                    placeholder="Search by city, region, airport, fort..."
                    value={queryInput}
                    onChange={(e) => setQueryInput(e.target.value)}
                  />
                  {queryInput && (
                    <button
                      type="button"
                      className="clear-input-btn"
                      onClick={() => setQueryInput("")}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  )}
                </div>
              </div>

              <div className="search-select-field">
                <label><i className="fa-solid fa-tags"></i> Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    applyFilters(queryInput, e.target.value, selectedDuration);
                  }}
                >
                  <option value="All">All Categories</option>
                  {categoriesList.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="search-btn-field">
                <button type="submit" className="btn-search-main">
                  <i className="fa-solid fa-magnifying-glass"></i> Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Main Results Section */}
      <section className="section search-results-section">
        <div className="container">
          <div className="results-header-bar">
            <div className="results-count-info">
              <h3>
                {loading ? 'Searching Destinations...' : `${filteredDestinations.length} Destinations Available`}
              </h3>
              {(initialQuery || initialCategory !== "All") && (
                <div className="active-filter-chips">
                  <span>Filtered By:</span>
                  {initialQuery && (
                    <span className="chip">
                      "{initialQuery}"
                      <i
                        className="fa-solid fa-xmark"
                        onClick={() => applyFilters("", selectedCategory, selectedDuration)}
                      ></i>
                    </span>
                  )}
                  {initialCategory !== "All" && (
                    <span className="chip">
                      {categoriesList.find(c => c._id === initialCategory)?.title || initialCategory}
                      <i
                        className="fa-solid fa-xmark"
                        onClick={() => applyFilters(queryInput, "All", selectedDuration)}
                      ></i>
                    </span>
                  )}
                  <button className="btn-clear-all" onClick={handleClearFilters}>
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Results Destination Cards Grid */}
          {loading ? (
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <i className="fa-solid fa-circle-notch fa-spin text-2xl text-[#002D71]"></i>
              <p style={{ marginTop: "12px", color: "#666" }}>Loading destinations...</p>
            </div>
          ) : filteredDestinations.length > 0 ? (
            <div className="tours-search-grid">
              {filteredDestinations.map((dest) => (
                <div key={dest._id} className="search-card-item">
                  <div className="card-thumb-wrap">
                    <img 
                      src={dest.image || dest.mainImage || "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800"} 
                      alt={dest.title} 
                      className="card-img" 
                    />
                    <span className="card-badge">{dest.destinationsCategory?.title || 'Destination'}</span>
                  </div>

                  <div className="card-content-body">
                    <div className="card-category-row">
                      <span className="card-cat">{dest.destinationsCategory?.title || 'Explore'}</span>
                      <span className="card-rating">
                        <i className="fa-solid fa-star"></i> 4.9 (50+)
                      </span>
                    </div>

                    <h3 className="card-title">
                      <Link to={`/destination/${dest.slug || dest._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {dest.title}
                      </Link>
                    </h3>

                    <p className="line-clamp-2 text-xs text-gray-600 mb-3" style={{ color: '#555', fontSize: '0.85rem', lineHeight: '1.4' }}>
                      {dest.description || 'Explore rich heritage, landmarks, and culture with custom holiday plans.'}
                    </p>

                    <div className="card-meta-list">
                      {dest.nearestAirport && (
                        <span>
                          <i className="fa-solid fa-plane"></i> {dest.nearestAirport}
                        </span>
                      )}
                      {dest.ideaDuration && (
                        <span>
                          <i className="fa-regular fa-clock"></i> {dest.ideaDuration}
                        </span>
                      )}
                    </div>

                    <div className="card-bottom-bar" style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #eee' }}>
                      <div className="card-price-box">
                        <span className="price-label">Ideal Stay</span>
                        <span className="price-val" style={{ fontSize: '0.95rem' }}>{dest.ideaDuration || '3 - 5 Days'}</span>
                      </div>
                      <Link to={`/destination/${dest.slug || dest._id}`} className="btn-view-package">
                        View Details <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-tours-found">
              <i className="fa-solid fa-compass-slash no-icon"></i>
              <h2>No Destinations Found</h2>
              <p>We couldn't find any destinations matching your search filters.</p>
              <button className="btn-reset-search" onClick={handleClearFilters}>
                View All Available Destinations
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
