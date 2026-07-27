import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import "./TourSearch.css";

const ALL_TOURS = [
  {
    id: "golden-triangle",
    title: "Golden Triangle Classic Heritage Tour",
    category: "Golden Triangle",
    destination: "Delhi, Agra, Jaipur",
    durationDays: 5,
    durationText: "5 Days / 4 Nights",
    priceNum: 18500,
    price: "₹18,500",
    rating: "4.9★",
    reviewsCount: 320,
    badge: "Bestseller",
    discountBadge: "20% OFF",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800",
    highlights: ["Taj Mahal Sunrise Visit", "Amber Fort Elephant Ride", "Private Chauffeur & Guide"],
  },
  {
    id: "royal-rajasthan",
    title: "Royal Rajasthan Forts & Desert Palaces",
    category: "Rajasthan & Royal",
    destination: "Jaipur, Udaipur, Jodhpur, Jaisalmer",
    durationDays: 8,
    durationText: "8 Days / 7 Nights",
    priceNum: 34999,
    price: "₹34,999",
    rating: "4.9★",
    reviewsCount: 450,
    badge: "Heritage",
    discountBadge: "Flat ₹5,000 OFF",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&q=80&w=800",
    highlights: ["Thar Desert Camel Safari", "Udaipur Lake Palace Cruise", "Heritage Hotel Stays"],
  },
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters & Houseboat Escapes",
    category: "Kerala & South India",
    destination: "Cochin, Munnar, Alleppey, Kovalam",
    durationDays: 6,
    durationText: "6 Days / 5 Nights",
    priceNum: 24500,
    price: "₹24,500",
    rating: "4.8★",
    reviewsCount: 280,
    badge: "Nature",
    discountBadge: "15% OFF",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
    highlights: ["Luxury Houseboat Night Stay", "Munnar Tea Plantation Tour", "Ayurvedic Spa"],
  },
  {
    id: "ladakh-expedition",
    title: "Magical Ladakh Himalayan High Passes",
    category: "Himalayan Escapes",
    durationDays: 7,
    destination: "Leh, Nubra Valley, Pangong Tso Lake",
    durationText: "7 Days / 6 Nights",
    priceNum: 29999,
    price: "₹29,999",
    rating: "5.0★",
    reviewsCount: 195,
    badge: "Adventure",
    discountBadge: "Special Group Rate",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800",
    highlights: ["Khardung La Pass Crossing", "Pangong Lake Camping", "Double Humped Camel Ride"],
  },
  {
    id: "shimla-manali",
    title: "Shimla & Manali Snow Peak Escapes",
    category: "Himalayan Escapes",
    destination: "Chandigarh, Shimla, Manali, Solang",
    durationDays: 6,
    durationText: "6 Days / 5 Nights",
    priceNum: 19999,
    price: "₹19,999",
    rating: "4.8★",
    reviewsCount: 310,
    badge: "Hills",
    discountBadge: "10% OFF",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800",
    highlights: ["Solang Valley Adventure", "Rohtang Pass Excursion", "Mall Road Shopping"],
  },
  {
    id: "varanasi-spiritual",
    title: "Varanasi & Ayodhya Sacred Pilgrimage",
    category: "Pilgrimage Journeys",
    destination: "Varanasi, Sarnath, Ayodhya, Prayagraj",
    durationDays: 4,
    durationText: "4 Days / 3 Nights",
    priceNum: 14500,
    price: "₹14,500",
    rating: "4.9★",
    reviewsCount: 510,
    badge: "Spiritual",
    discountBadge: "Popular",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
    highlights: ["Private Ganga Aarti Boat Ride", "Ram Mandir Ayodhya Darshan", "Triveni Sangam Bath"],
  },
  {
    id: "corbett-safari",
    title: "Jim Corbett Tiger Safari & Lake District",
    category: "Wildlife & Safaris",
    destination: "Jim Corbett, Nainital, Bhimtal",
    durationDays: 4,
    durationText: "4 Days / 3 Nights",
    priceNum: 16800,
    price: "₹16,800",
    rating: "4.7★",
    reviewsCount: 220,
    badge: "Wildlife",
    discountBadge: "15% OFF",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
    highlights: ["Jeep Safari in Corbett Jungle", "Nainital Boating", "Resort Stay with Bonfire"],
  },
  {
    id: "kashmir-paradise",
    title: "Kashmir Paradise Valley & Gulmarg Snow",
    category: "Himalayan Escapes",
    destination: "Srinagar, Gulmarg, Pahalgam, Sonmarg",
    durationDays: 6,
    durationText: "6 Days / 5 Nights",
    priceNum: 27500,
    price: "₹27,500",
    rating: "4.9★",
    reviewsCount: 380,
    badge: "Luxury",
    discountBadge: "Free Shikara Ride",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&q=80&w=800",
    highlights: ["Shikara Ride on Dal Lake", "Gulmarg Gondola Ride", "Betaab Valley Excursion"],
  },
  {
    id: "golden-triangle-ranthambore",
    title: "Golden Triangle with Ranthambore Tiger Safari",
    category: "Golden Triangle",
    destination: "Delhi, Agra, Ranthambore, Jaipur",
    durationDays: 7,
    durationText: "7 Days / 6 Nights",
    priceNum: 26900,
    price: "₹26,900",
    rating: "4.9★",
    reviewsCount: 175,
    badge: "Combined Deal",
    discountBadge: "20% OFF",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    highlights: ["Ranthambore Tiger Jeep Safari", "Taj Mahal Guided Tour", "Jaipur Pink City Walk"],
  },
];

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

  // Filter & Sort Logic
  const filteredTours = ALL_TOURS.filter((tour) => {
    const q = initialQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      tour.title.toLowerCase().includes(q) ||
      tour.destination.toLowerCase().includes(q) ||
      tour.category.toLowerCase().includes(q);

    const matchesCategory =
      initialCategory === "All" || tour.category === initialCategory;

    const matchesDuration =
      initialDuration === "All" ||
      (initialDuration === "short" && tour.durationDays <= 4) ||
      (initialDuration === "medium" && tour.durationDays >= 5 && tour.durationDays <= 7) ||
      (initialDuration === "long" && tour.durationDays >= 8);

    return matchesQuery && matchesCategory && matchesDuration;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.priceNum - b.priceNum;
    if (sortBy === "price-high") return b.priceNum - a.priceNum;
    if (sortBy === "rating") return parseFloat(b.rating) - parseFloat(a.rating);
    return 0; // recommended default
  });

  return (
    <div className="tour-search-page">
      {/* Search Page Banner */}
      <section className="search-page-hero">
        <div className="container text-center">
          <span className="search-hero-badge">
            <i className="fa-solid fa-compass"></i> Explore All India Tours
          </span>
          <h1>
            Find Your Dream <span className="highlight-gold">Travel Package</span>
          </h1>
          <p className="search-hero-desc">
            Search top-rated private itineraries, heritage stays, and custom holiday deals.
          </p>

          {/* Search Box Form */}
          <form className="search-bar-box" onSubmit={handleSearchSubmit}>
            <div className="search-bar-grid">
              <div className="search-input-field">
                <label><i className="fa-solid fa-location-dot"></i> Destination / Package</label>
                <div className="search-input-inner">
                  <input
                    type="text"
                    placeholder="Search by city, fort, backwaters..."
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
                <label><i className="fa-solid fa-layer-group"></i> Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    applyFilters(queryInput, e.target.value, selectedDuration);
                  }}
                >
                  <option value="All">All Categories</option>
                  <option value="Golden Triangle">Golden Triangle</option>
                  <option value="Rajasthan & Royal">Rajasthan &amp; Royal</option>
                  <option value="Kerala & South India">Kerala &amp; South India</option>
                  <option value="Himalayan Escapes">Himalayan Escapes</option>
                  <option value="Pilgrimage Journeys">Pilgrimage &amp; Spiritual</option>
                  <option value="Wildlife & Safaris">Wildlife &amp; Safaris</option>
                </select>
              </div>

              <div className="search-select-field">
                <label><i className="fa-regular fa-clock"></i> Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => {
                    setSelectedDuration(e.target.value);
                    applyFilters(queryInput, selectedCategory, e.target.value);
                  }}
                >
                  <option value="All">Any Duration</option>
                  <option value="short">1 - 4 Days</option>
                  <option value="medium">5 - 7 Days</option>
                  <option value="long">8+ Days</option>
                </select>
              </div>

              <div className="search-submit-field">
                <button type="submit" className="btn-search-main">
                  <i className="fa-solid fa-magnifying-glass"></i> Search Tours
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Main Results Container */}
      <section className="search-results-section">
        <div className="container">
          {/* Results Summary Bar */}
          <div className="results-toolbar">
            <div className="results-count-info">
              <h3>
                {filteredTours.length} {filteredTours.length === 1 ? "Tour" : "Tours"} Found
                {initialQuery && <span className="query-highlight"> for "{initialQuery}"</span>}
              </h3>
              {(initialQuery || initialCategory !== "All" || initialDuration !== "All") && (
                <div className="active-filters-pills">
                  {initialQuery && (
                    <span className="filter-pill">
                      Keyword: "{initialQuery}"
                      <button onClick={() => applyFilters("", selectedCategory, selectedDuration)}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </span>
                  )}
                  {initialCategory !== "All" && (
                    <span className="filter-pill">
                      Category: {initialCategory}
                      <button onClick={() => applyFilters(queryInput, "All", selectedDuration)}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </span>
                  )}
                  {initialDuration !== "All" && (
                    <span className="filter-pill">
                      Duration: {initialDuration}
                      <button onClick={() => applyFilters(queryInput, selectedCategory, "All")}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </span>
                  )}
                  <button className="btn-clear-all" onClick={handleClearFilters}>
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>

            <div className="sort-wrapper">
              <label><i className="fa-solid fa-arrow-down-short-wide"></i> Sort By:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated (Stars)</option>
              </select>
            </div>
          </div>

          {/* Results Tour Cards Grid */}
          {filteredTours.length > 0 ? (
            <div className="tours-search-grid">
              {filteredTours.map((tour) => (
                <div key={tour.id} className="search-card-item">
                  <div className="card-thumb-wrap">
                    <img src={tour.image} alt={tour.title} className="card-img" />
                    <span className="card-badge">{tour.badge}</span>
                    {tour.discountBadge && (
                      <span className="card-discount-badge">{tour.discountBadge}</span>
                    )}
                  </div>

                  <div className="card-content-body">
                    <div className="card-category-row">
                      <span className="card-cat">{tour.category}</span>
                      <span className="card-rating">
                        <i className="fa-solid fa-star"></i> {tour.rating} ({tour.reviewsCount})
                      </span>
                    </div>

                    <h3 className="card-title">{tour.title}</h3>

                    <div className="card-meta-list">
                      <span>
                        <i className="fa-solid fa-location-dot"></i> {tour.destination}
                      </span>
                      <span>
                        <i className="fa-regular fa-clock"></i> {tour.durationText}
                      </span>
                    </div>

                    <ul className="card-highlights">
                      {tour.highlights.map((item, idx) => (
                        <li key={idx}>
                          <i className="fa-solid fa-check"></i> {item}
                        </li>
                      ))}
                    </ul>

                    <div className="card-bottom-bar">
                      <div className="card-price-box">
                        <span className="price-label">Starting From</span>
                        <span className="price-val">{tour.price}</span>
                        <span className="price-sub">per person</span>
                      </div>
                      <Link to="/packages" className="btn-view-package">
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
              <h2>No Tour Packages Found</h2>
              <p>We couldn't find any tours matching your search filters.</p>
              <div className="suggested-tags">
                <span>Try popular searches:</span>
                <button onClick={() => applyFilters("Golden Triangle", "All", "All")}>
                  Golden Triangle
                </button>
                <button onClick={() => applyFilters("Rajasthan", "All", "All")}>
                  Rajasthan
                </button>
                <button onClick={() => applyFilters("Kerala", "All", "All")}>
                  Kerala
                </button>
                <button onClick={() => applyFilters("Ladakh", "All", "All")}>
                  Ladakh
                </button>
              </div>
              <button className="btn-reset-search" onClick={handleClearFilters}>
                View All Available Tour Packages
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
