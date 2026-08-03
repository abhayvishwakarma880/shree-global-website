import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Lightbox from "../components/Lightbox";
import { useWishlist } from "../context/WishlistContext";
import { submitContactApi } from "../api/contactApi.js";
import { getBlogsApi } from "../api/blogApi.js";
import { BASE_URL } from "../api/http.js";

export default function Home() {
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Top Destinations State for Bento Grid
  const [topDestinations, setTopDestinations] = useState([]);
  // International Destinations State
  const [intlDestinations, setIntlDestinations] = useState([]);

  useEffect(() => {
    const fetchTopDestinations = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/destination?status=active&limit=6`);
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setTopDestinations(data.data);
        }
      } catch (err) {
        console.error('Error fetching top destinations for Home page:', err);
      }
    };

    const fetchIntlDestinations = async () => {
      try {
        // 1. Fetch categories to find International category _id
        const catRes = await fetch(`${BASE_URL}/api/destinations-category?status=active&limit=100`);
        const catData = await catRes.json();
        let intlCatId = '';
        if (catData.success && Array.isArray(catData.data)) {
          const intlCat = catData.data.find(c => c.title.toLowerCase().includes('international'));
          if (intlCat) {
            intlCatId = intlCat._id;
          }
        }

        // 2. Fetch destinations filtered by International category
        let url = `${BASE_URL}/api/destination?status=active&limit=20`;
        if (intlCatId) {
          url += `&category=${intlCatId}`;
        }

        const destRes = await fetch(url);
        const destData = await destRes.json();
        if (destData.success && Array.isArray(destData.data)) {
          const filtered = intlCatId
            ? destData.data
            : destData.data.filter(d => d.destinationsCategory?.title?.toLowerCase().includes('international'));
          setIntlDestinations(filtered);
        }
      } catch (err) {
        console.error('Error fetching international destinations:', err);
      }
    };

    fetchTopDestinations();
    fetchIntlDestinations();
  }, []);

  // Destination Categories State for Hero Search Card
  const [destCategoriesList, setDestCategoriesList] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/destinations-category`);
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          setDestCategoriesList(data.data);
        }
      } catch (err) {
        console.error('Error fetching destination categories for hero search:', err);
      }
    };
    fetchCategories();
  }, []);

  // Traveler Gallery State
  const [activeGallerySets, setActiveGallerySets] = useState([]);

  useEffect(() => {
    const fetchActiveGalleries = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/gallery?status=active`);
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          const validSets = data.data.filter(set => Array.isArray(set.images) && set.images.length === 6);
          if (validSets.length > 0) {
            setActiveGallerySets(validSets);
          }
        }
      } catch (err) {
        console.error('Error fetching active gallery sets for Home page:', err);
      }
    };
    fetchActiveGalleries();
  }, []);

  // Offer Packages State
  const [offerPackages, setOfferPackages] = useState([]);

  useEffect(() => {
    const fetchOfferPackages = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/package?status=active`);
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          const offersOnly = data.data.filter((p) => p.isOffer === true);
          setOfferPackages(offersOnly);
        }
      } catch (err) {
        console.error('Error fetching offer packages for Home page:', err);
      }
    };
    fetchOfferPackages();
  }, []);

  // Home Blogs State (API integration)
  const [homeBlogs, setHomeBlogs] = useState([]);
  const [isBlogsLoading, setIsBlogsLoading] = useState(true);

  useEffect(() => {
    const fetchHomeBlogs = async () => {
      try {
        setIsBlogsLoading(true);
        const response = await getBlogsApi('all', '', 1, 6);
        if (response.success && Array.isArray(response.data)) {
          setHomeBlogs(response.data);
        }
      } catch (err) {
        console.error('Error fetching blogs for Home page:', err);
      } finally {
        setIsBlogsLoading(false);
      }
    };
    fetchHomeBlogs();
  }, []);

  // Hero Slider State
  const [heroActiveIndex, setHeroActiveIndex] = useState(0);
  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1920",
      alt: "Himalayan road, Ladakh",
    },
    {
      src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1920",
      alt: "Taj Mahal at sunrise",
    },
    {
      src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1920",
      alt: "Rajasthan fort",
    },
  ];

  // FAQ State
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);

  // Offers State & Data
  const [copiedCode, setCopiedCode] = useState("");
  const handleCopyCode = (code) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
    }
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2500);
  };

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    details: "",
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactError, setContactError] = useState("");
  const [contactLoading, setContactLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactError("");
    setContactLoading(true);

    try {
      const response = await submitContactApi({
        name: contactForm.fullName,
        email: contactForm.email,
        phone: contactForm.phone,
        budget: contactForm.budget,
        details: contactForm.details,
      });

      if (response.success) {
        setContactSuccess(true);
        setContactForm({
          fullName: "",
          email: "",
          phone: "",
          budget: "",
          details: "",
        });
        setTimeout(() => setContactSuccess(false), 6000);
      } else {
        setContactError(response.message || "Failed to submit inquiry.");
      }
    } catch (err) {
      setContactError(err.message || "Server error. Please try again.");
    } finally {
      setContactLoading(false);
    }
  };

  const offersData = [
    {
      id: 1,
      badge: "20% OFF",
      tag: "EARLY BIRD DEAL",
      title: "Golden Triangle & Rajasthan Special",
      desc: "Book your luxury tour 30 days in advance and get flat 20% discount on all private car & guide packages.",
      code: "EARLY20",
      validity: "Valid till end of month",
      icon: "fa-solid fa-plane-departure",
      image:
        "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      badge: "FLAT ₹5,000 OFF",
      tag: "MONSOON ESCAPE",
      title: "Kerala Backwaters & Houseboat Package",
      desc: "Experience luxury houseboats & Munnar tea gardens with flat ₹5,000 off on 5N/6D packages.",
      code: "KERALA5K",
      validity: "Limited slots available",
      icon: "fa-solid fa-water",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      badge: "15% OFF",
      tag: "HIMALAYAN ADVENTURE",
      title: "Himachal & Ladakh Circuit",
      desc: "Get 15% discount + Complimentary airport pickup for group bookings over 4 people.",
      code: "HIMALAYA15",
      validity: "Seasonal Offer",
      icon: "fa-solid fa-mountain",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      badge: "10% OFF FLEET",
      tag: "LUXURY FLEET DEAL",
      title: "Tempo Traveler & Luxury Bus Rentals",
      desc: "Planning a family trip or corporate outing? Enjoy 10% off on all luxury bus and tempo traveler hires.",
      code: "FLEET10",
      validity: "Valid on all bookings",
      icon: "fa-solid fa-bus-simple",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
    },
  ];

  // Tour Search State & Navigation
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");

  const handleHeroSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery.trim()) params.set("query", searchQuery.trim());
    if (selectedCategory && selectedCategory !== "All")
      params.set("category", selectedCategory);
    if (selectedDuration && selectedDuration !== "All")
      params.set("duration", selectedDuration);
    navigate(`/search?${params.toString()}`);
  };

  // Gallery Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const defaultGalleryImages = [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200"
  ];

  const gallerySetsToRender = activeGallerySets.length > 0 
    ? activeGallerySets 
    : [{ _id: 'default', images: defaultGalleryImages }];

  const galleryItems = gallerySetsToRender.flatMap((set, setIdx) =>
    set.images.map((imgUrl, imgIdx) => ({
      src: imgUrl,
      title: `Traveler Moment #${setIdx * 6 + imgIdx + 1}`,
      caption: 'Shree Global Holidays Traveler Memories'
    }))
  );

  // Refs for Swiper cleanup
  const packageSwiperRef = useRef(null);
  const fleetSwiperRef = useRef(null);
  const testimonialSwiperRef = useRef(null);
  const intlSwiperRef = useRef(null);

  // Hero Slider Timer
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Swipers Initialization
  useEffect(() => {
    // We delay slightly to make sure the elements are fully painted in the DOM
    const timer = setTimeout(() => {
      if (window.Swiper) {
        // Packages Swiper
        packageSwiperRef.current = new window.Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          },
        });

        // Fleet Swiper
        fleetSwiperRef.current = new window.Swiper(".fleetSwiper", {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".fleet-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".fleet-next",
            prevEl: ".fleet-prev",
          },
          breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 24 },
          },
        });

        // Testimonials Swiper
        if (document.querySelector(".testimonialSwiper")) {
          testimonialSwiperRef.current = new window.Swiper(".testimonialSwiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
              delay: 6000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".test-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".test-next",
              prevEl: ".test-prev",
            },
            effect: "fade",
            fadeEffect: { crossFade: true },
            breakpoints: {
              1024: { slidesPerView: 1, spaceBetween: 0 },
            },
          });
        }

        // International Travel Swiper initialization handled in dedicated useEffect
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      if (
        packageSwiperRef.current &&
        typeof packageSwiperRef.current.destroy === "function"
      ) {
        packageSwiperRef.current.destroy();
      }
      if (
        fleetSwiperRef.current &&
        typeof fleetSwiperRef.current.destroy === "function"
      ) {
        fleetSwiperRef.current.destroy();
      }
      if (
        testimonialSwiperRef.current &&
        typeof testimonialSwiperRef.current.destroy === "function"
      ) {
        testimonialSwiperRef.current.destroy();
      }
      if (
        intlSwiperRef.current &&
        typeof intlSwiperRef.current.destroy === "function"
      ) {
        intlSwiperRef.current.destroy();
      }
    };
  }, []);

  // Dedicated useEffect for International Swiper to ensure proper slide recalculation
  useEffect(() => {
    if (!window.Swiper) return;
    const timer = setTimeout(() => {
      const el = document.querySelector(".intlSwiper");
      if (!el) return;

      if (intlSwiperRef.current && typeof intlSwiperRef.current.destroy === "function") {
        intlSwiperRef.current.destroy(true, true);
      }

      intlSwiperRef.current = new window.Swiper(".intlSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".intl-pagination",
          clickable: true,
        },
        breakpoints: {
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
        },
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [intlDestinations]);

  // Ensure Elfsight Google Reviews widget initializes on mount/navigation
  useEffect(() => {
    if (window.ElfsightApp && typeof window.ElfsightApp.init === "function") {
      window.ElfsightApp.init();
    }
  }, []);

  const openGalleryImage = (e, index) => {
    e.preventDefault();
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleFAQClick = (index) => {
    setFaqOpenIndex(faqOpenIndex === index ? -1 : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your quote request has been submitted successfully.");
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero" id="top">
        <div className="hero-slides">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === heroActiveIndex ? "active" : ""}`}
            >
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        <div className="hero-scrim"></div>

        <svg
          className="hero-ribbon"
          viewBox="0 0 280 280"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-30 90 Q60 40 150 90 T330 90"
            stroke="url(#lg1)"
            strokeWidth="16"
            fill="none"
            opacity=".5"
          />
          <path
            d="M-30 150 Q60 100 150 150 T330 150"
            stroke="url(#lg1)"
            strokeWidth="16"
            fill="none"
            opacity=".35"
          />
          <path
            d="M-30 210 Q60 160 150 210 T330 210"
            stroke="url(#lg1)"
            strokeWidth="16"
            fill="none"
            opacity=".5"
          />
        </svg>

        <div className="hero-side-label">Since 2005 · Lucknow</div>

        <div className="hero-body">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow on-dark">Welcome to Shree Global Holidays</div>
              <h1>
                Explore the World <span className="italic">with Confidence</span>
              </h1>
              <h2 style={{ fontSize: '1.2rem', color: '#DA9F27', margin: '8px 0 16px', fontWeight: 600 }}>
                Your Journey Begins Here — <span style={{ fontStyle: 'italic', opacity: 0.9 }}>"Travel Beyond Expectations."</span>
              </h2>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '24px', opacity: 0.9 }}>
                For over 20 years, Shree Global Holidays has been creating unforgettable travel experiences for families, couples, corporate travelers, students, and groups. From weekend getaways to luxury international vacations, we deliver seamless travel solutions tailored to your dreams.
              </p>
              <div className="hero-actions" style={{ flexWrap: 'wrap', gap: '12px' }}>
                <Link to="/contact" className="btn btn-brand">
                  <i className="fa-regular fa-paper-plane"></i> Plan Your Holiday
                </Link>
               
                <a 
                  href="https://wa.me/919335649404" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn" 
                  style={{ background: '#25D366', color: '#FFF', border: 'none' }}
                >
                  <i className="fa-brands fa-whatsapp"></i> WhatsApp Us
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <strong>20+ Years</strong>
                  <span>Excellence</span>
                </div>
                <div>
                  <strong>4.9★</strong>
                  <span>Google Rating</span>
                </div>
                <div>
                  <strong>15,000+</strong>
                  <span>Happy Travelers</span>
                </div>
                <div>
                  <strong>24×7</strong>
                  <span>Concierge</span>
                </div>
              </div>
            </div>

            {/* Right Side Tour Search Card - Submits to dedicated /search page */}
            <form
              className="hero-search-card"
              onSubmit={handleHeroSearchSubmit}
            >
              <div className="search-card-header">
                <span className="search-badge">
                  <i className="fa-solid fa-compass"></i> Quick Tour Finder
                </span>
                <h3>Search &amp; Explore Tours</h3>
                <p>
                  Find luxury packages, heritage trips &amp; custom itineraries
                </p>
              </div>

              <div className="search-card-body">
                {/* Location / Keyword Input */}
                <div className="search-field">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> Destination or
                    Package
                  </label>
                  <div className="search-input-wrap">
                    <input
                      type="text"
                      placeholder="e.g. Rajasthan, Kerala, Delhi..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        className="search-clear-btn"
                        onClick={() => setSearchQuery("")}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    )}
                  </div>
                </div>

                {/* Filters Grid */}
                <div className="search-filters-grid">
                  <div className="search-field">
                    <label>
                      <i className="fa-solid fa-layer-group"></i> Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="All">All Categories</option>
                      {destCategoriesList.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="search-field">
                    <label>
                      <i className="fa-regular fa-clock"></i> Duration
                    </label>
                    <select
                      value={selectedDuration}
                      onChange={(e) => setSelectedDuration(e.target.value)}
                    >
                      <option value="All">Any Duration</option>
                      <option value="short">1 - 4 Days</option>
                      <option value="medium">5 - 7 Days</option>
                      <option value="long">8+ Days</option>
                    </select>
                  </div>
                </div>

                {/* Submit Search Button */}
                <button type="submit" className="btn-hero-search">
                  <i className="fa-solid fa-magnifying-glass"></i> Search Tours
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="hero-dots" id="heroDots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={idx === heroActiveIndex ? "active" : ""}
              onClick={() => setHeroActiveIndex(idx)}
            ></button>
          ))}
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="marquee-strip">
        <div className="marquee-track">
          <span>
            <i className="fa-solid fa-diamond"></i> Golden Triangle
          </span>
          <span>
            <i className="fa-solid fa-diamond"></i> Kerala Backwaters
          </span>
          <span>
            <i className="fa-solid fa-diamond"></i> Ladakh Circuit
          </span>
          <span>
            <i className="fa-solid fa-diamond"></i> Rajasthan Royal Trail
          </span>
          <span>
            <i className="fa-solid fa-diamond"></i> Varanasi Pilgrimage
          </span>
          <span>
            <i className="fa-solid fa-diamond"></i> Himalayan Escapes
          </span>
          <span>
            <i className="fa-solid fa-diamond"></i> Golden Triangle
          </span>
          <span>
            <i className="fa-solid fa-diamond"></i> Kerala Backwaters
          </span>
          <span>
            <i className="fa-solid fa-diamond"></i> Ladakh Circuit
          </span>
          <span>
            <i className="fa-solid fa-diamond"></i> Rajasthan Royal Trail
          </span>
          <span>
            <i className="fa-solid fa-diamond"></i> Varanasi Pilgrimage
          </span>
          <span>
            <i className="fa-solid fa-diamond"></i> Himalayan Escapes
          </span>
        </div>
      </div>

      {/* ================= OFFERS SECTION ================= */}
      <section className="offers-section" id="offers">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow">Exclusive Deals & Savings</div>
            <h2>
              Special Travel <span className="highlight-gold">Offers</span> for
              You
            </h2>
            <p className="section-subtitle">
              Grab our limited-time promotional deals and enjoy premium luxury
              travel at unbeatable prices.
            </p>
          </div>

          <div className="offers-grid">
            {offerPackages.length === 0 ? (
              <div style={{ textStyle: 'center', gridColumn: '1 / -1', padding: '40px 20px', textAlign: 'center', color: '#666' }}>
                <i className="fa-solid fa-tags" style={{ fontSize: '2rem', color: '#DA9F27', marginBottom: '12px', display: 'block' }}></i>
                <p>No special offer packages currently active. Check back soon!</p>
              </div>
            ) : (
              offerPackages.map((p) => {
                const isOffer = p.isOffer && p.offerPercentage > 0;
                const originalPrice = p.pricePerPerson;
                const finalPrice = isOffer 
                  ? Math.round(originalPrice - (originalPrice * p.offerPercentage) / 100) 
                  : originalPrice;

                return (
                  <div key={p._id} className="offer-card">
                    <div className="offer-image-wrap">
                      <img
                        src={p.image || "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&q=80&w=800"}
                        alt={p.title}
                        className="offer-image"
                      />
                      <div className="offer-image-overlay"></div>
                      <span className="offer-badge">{isOffer ? `${p.offerPercentage}% OFF` : 'SPECIAL DEAL'}</span>
                      <div className="offer-icon-floating">
                        <i className="fa-solid fa-plane-departure"></i>
                      </div>
                    </div>
                    <div className="offer-card-body">
                      <div className="offer-tag" style={{ textTransform: 'uppercase' }}>{p.packageTag || p.regionType || 'SPECIAL TOUR'}</div>
                      <h3 className="offer-title">
                        <Link to={`/package/${p.slug || p._id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {p.title}
                        </Link>
                      </h3>
                      <p className="offer-desc line-clamp-2">{p.offerDescription || p.description}</p>

                      <div className="offer-footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                        <div className="promo-box" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', background: 'transparent', padding: 0, border: 'none' }}>
                          <span className="promo-label" style={{ fontSize: '0.68rem', fontWeight: '700', letterSpacing: '0.05em', color: '#DA9F27', marginBottom: '2px' }}>OFFER PRICE</span>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                            {isOffer && (
                              <span style={{ textDecoration: 'line-through', fontSize: '0.8rem', color: '#888', fontWeight: '500' }}>
                                ₹{originalPrice?.toLocaleString('en-IN')}
                              </span>
                            )}
                            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#002D71', fontFamily: 'var(--disp, sans-serif)' }}>
                              ₹{finalPrice?.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                        <Link
                          to={`/package/${p.slug || p._id}`}
                          className="btn-claim"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            textDecoration: 'none',
                            backgroundColor: '#002D71',
                            color: '#fff',
                            padding: '10px 18px',
                            borderRadius: '8px',
                            fontWeight: '700',
                            fontSize: '0.85rem',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <i className="fa-solid fa-calendar-check"></i> Book Now
                        </Link>
                      </div>
                      <div className="offer-validity" style={{ marginTop: '12px' }}>
                        <i className="fa-regular fa-clock"></i> {p.duration || 'Limited Time Offer'}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="offers-banner">
            <div className="banner-content">
              <i className="fa-solid fa-gift banner-icon"></i>
              <div>
                <h4>Looking for a Customized Tour Package Deal?</h4>
                <p>
                  Contact our travel specialists today and get a personalized
                  discount for your group or honeymoon trip!
                </p>
              </div>
            </div>
            <a href="#contact" className="btn btn-gold">
              <i className="fa-solid fa-phone-volume"></i> Claim Custom Offer
            </a>
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS BENTO ================= */}
      <section
        className="section"
        id="destinations"
        style={{
          backgroundImage: "url('images/printed-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          backgroundSize: "100% auto",
          backgroundColor: "#f2f4f4",
        }}
      >
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Top Destinations</div>
              <h2>
                Every landscape, <span className="italic">one country</span>
              </h2>
            </div>
            <p>
              From snow-bound mountain passes to temple-lined riverbanks — pick
              a region and we'll shape the rest.
            </p>
          </div>

          <div className="bento reveal">
            {topDestinations.map((d, idx) => (
              <Link key={d._id} to={`/destination/${d.slug || d._id}`} className={`b${idx + 1}`}>
                <img
                  src={d.image || 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=900'}
                  alt={d.title}
                />
                <div className="ov"></div>
                <div className="info">
                  <span className="tag">{d.destinationsCategory?.title || 'Destination'}</span>
                  <h3>{d.title}</h3>
                  <span className="meta">
                    {d.description ? d.description.replace(/<[^>]*>?/gm, '') : (d.nearestAirport || d.ideaDuration || 'Explore destination details')}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* ================= INTERNATIONAL DESTINATIONS ================= */}
      <section className="intl-section" id="international">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">International Travel</div>
              <h2>
                Beyond borders,{" "}
                <span className="italic">beyond expectations</span>
              </h2>
            </div>
            <p>
              Handcrafted international itineraries with visa assistance,
              premium stays &amp; seamless transfers.
            </p>
          </div>

          <div className="swiper intlSwiper reveal">
            <div className="swiper-wrapper">
              {intlDestinations.map((d) => (
                <div className="swiper-slide" key={d._id}>
                  <Link to={`/destination/${d.slug || d._id}`} className="intl-dest-card">
                    <img
                      src={d.image || 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=700'}
                      alt={d.title}
                    />
                    <div className="intl-overlay"></div>
                    <div className="intl-info">
                      <span
                        className="intl-badge"
                        style={{ background: 'var(--cyan)' }}
                      >
                        ✈️ {d.destinationsCategory?.title || 'International'}
                      </span>
                      <h3>{d.title}</h3>
                      <span className="intl-meta">
                        {d.description ? d.description.replace(/<[^>]*>?/gm, '') : (d.nearestAirport || d.ideaDuration || 'Explore international tour details')}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="swiper-pagination intl-pagination"></div>
          </div>

          <div className="intl-cta reveal">
            <Link to="/destinations" className="btn-intl">
              View All International Packages{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section sand" id="about">
        <div className="container about-wrap">
          <div className="collage reveal">
            <img
              className="c1"
              src="https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=800"
              alt="Travel guide with map"
            />
            <img
              className="c2"
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=600"
              alt="Local driver and guest"
            />
            <div className="ribbon-tag">
              <div className="ic">
                <i className="fa-solid fa-thumbs-up"></i>
              </div>
              <div>
                <strong>4.9 / 5</strong>
                <span>1,200+ reviews</span>
              </div>
            </div>
          </div>
          <div className="about-copy reveal">
            <div className="eyebrow highlight-eyebrow">
              <i className="fa-solid fa-shield-halved"></i> Why Choose Us
            </div>
            <h2 style={{ marginBottom: "16px" }}>
              Why Choose <span className="italic">Shree Global Holidays?</span>
            </h2>
            <p style={{ marginBottom: "22px", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Shree Global Holidays is committed to delivering personalized travel experiences with professionalism, transparency, and exceptional customer service.
            </p>

            <div className="why-choose-list grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="why-badge flex items-center gap-2.5 p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60">
                <i className="fa-solid fa-circle-check text-[#DA9F27] text-base"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#002D71]">20+ Years of Experience</span>
              </div>
              <div className="why-badge flex items-center gap-2.5 p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60">
                <i className="fa-solid fa-circle-check text-[#DA9F27] text-base"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#002D71]">10,000+ Happy Travellers</span>
              </div>
              <div className="why-badge flex items-center gap-2.5 p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60">
                <i className="fa-solid fa-circle-check text-[#DA9F27] text-base"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#002D71]">Customized Holiday Planning</span>
              </div>
              <div className="why-badge flex items-center gap-2.5 p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60">
                <i className="fa-solid fa-circle-check text-[#DA9F27] text-base"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#002D71]">Best Value Packages</span>
              </div>
              <div className="why-badge flex items-center gap-2.5 p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60">
                <i className="fa-solid fa-circle-check text-[#DA9F27] text-base"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#002D71]">Visa &amp; Documentation Experts</span>
              </div>
              <div className="why-badge flex items-center gap-2.5 p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60">
                <i className="fa-solid fa-circle-check text-[#DA9F27] text-base"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#002D71]">Dedicated Travel Consultants</span>
              </div>
              <div className="why-badge flex items-center gap-2.5 p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60">
                <i className="fa-solid fa-circle-check text-[#DA9F27] text-base"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#002D71]">24×7 Customer Support</span>
              </div>
              <div className="why-badge flex items-center gap-2.5 p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60">
                <i className="fa-solid fa-circle-check text-[#DA9F27] text-base"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#002D71]">Trusted Global Travel Partners</span>
              </div>
              <div className="why-badge flex items-center gap-2.5 p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60">
                <i className="fa-solid fa-circle-check text-[#DA9F27] text-base"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#002D71]">Safe &amp; Secure Bookings</span>
              </div>
              <div className="why-badge flex items-center gap-2.5 p-2.5 bg-slate-50/80 rounded-lg border border-slate-200/60">
                <i className="fa-solid fa-circle-check text-[#DA9F27] text-base"></i>
                <span className="text-xs sm:text-sm font-semibold text-[#002D71]">Transparent Pricing</span>
              </div>
            </div>

            <div className="stat-row">
              <div>
                <strong>20+ Years</strong>
                <span>Experience</span>
              </div>
              <div>
                <strong>10,000+</strong>
                <span>Happy Travelers</span>
              </div>
              <div>
                <strong>100+</strong>
                <span>Destinations</span>
              </div>
              <div>
                <strong>24×7</strong>
                <span>Support Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section
        className="section"
        id="packages"
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Popular Packages</div>
              <h2>
                Itineraries worth{" "}
                <span className="italic">clearing your calendar</span> for
              </h2>
            </div>
            <p>
              Fixed routes, fully flexible dates — every package below can be
              tailored to your pace and budget.
            </p>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="swiper mySwiper reveal container">
          <div className="swiper-wrapper">
            {offerPackages.map((pkg, idx) => {
              const finalPrice = pkg.isOffer && pkg.offerPercentage > 0 
                ? Math.round(pkg.pricePerPerson - (pkg.pricePerPerson * pkg.offerPercentage) / 100)
                : pkg.pricePerPerson;

              return (
                <div key={pkg._id || idx} className="swiper-slide font-sans">
                  <div className="pkg-card">
                    <img
                      src={pkg.image || "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=700"}
                      alt={pkg.title}
                    />
                    <div className="ov"></div>
                    <div className="top">
                      <span className="badge" style={{ backgroundColor: pkg.isOffer ? '#DA9F27' : '#002D71', color: '#FFFFFF', fontWeight: 'bold' }}>
                        {pkg.isOffer && pkg.offerPercentage > 0 ? `${pkg.offerPercentage}% OFF` : (pkg.packageTag || 'Special')}
                      </span>
                    </div>
                    <div className="bottom">
                      <div className="meta">
                        <span>
                          <i className="fa-regular fa-clock"></i> {pkg.duration || '5D / 4N'}
                        </span>
                        <span className="capitalize">
                          <i className="fa-solid fa-tag"></i> {pkg.packageTag || 'Tour'}
                        </span>
                      </div>
                      <h3 className="line-clamp-1">{pkg.title}</h3>
                      <div className="row">
                        <div className="price">
                          {pkg.isOffer && pkg.offerPercentage > 0 && (
                            <span style={{ textDecoration: 'line-through', color: '#9CA3AF', fontSize: '0.85rem', marginRight: '6px' }}>
                              ₹{pkg.pricePerPerson?.toLocaleString('en-IN')}
                            </span>
                          )}
                          ₹{finalPrice?.toLocaleString('en-IN')} <span>/ person</span>
                        </div>
                        <Link to={`/package/${pkg.slug || pkg._id}`} className="go">
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section sand tight" id="services">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">What We Handle</div>
              <h2>
                Every detail, <span className="italic">sorted</span>
              </h2>
            </div>
            <p>
              From the airport pickup to the last night's dinner reservation.
            </p>
          </div>
          <div className="svc-grid reveal">
            <Link
              to="/service/group-tours"
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">01</span>
                <div className="svc-i">
                  <i className="fa-solid fa-people-group"></i>
                </div>
                <h4>Group Tours</h4>
                <p>
                  Specially curated itineraries for families, friends and social
                  groups.
                </p>
              </div>
            </Link>
            <Link
              to="/service/mice"
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">02</span>
                <div className="svc-i">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h4>MICE</h4>
                <p>
                  End-to-end corporate event planning, logistics and execution.
                </p>
              </div>
            </Link>
            <Link
              to="/service/incentive-tours"
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">03</span>
                <div className="svc-i">
                  <i className="fa-solid fa-award"></i>
                </div>
                <h4>Incentive Tours</h4>
                <p>
                  Curated luxury travel rewards for top performers and partners.
                </p>
              </div>
            </Link>
            <Link
              to="/service/visa-assistance"
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">04</span>
                <div className="svc-i">
                  <i className="fa-solid fa-passport"></i>
                </div>
                <h4>Visa Assistance</h4>
                <p>
                  Hassle-free visa documentation, guidance and submission
                  support.
                </p>
              </div>
            </Link>
            <Link
              to="/service/cruise-management"
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1599640842229-0064a523595e?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">05</span>
                <div className="svc-i">
                  <i className="fa-solid fa-ship"></i>
                </div>
                <h4>Cruise Management</h4>
                <p>
                  Luxury ocean and river cruise bookings with custom excursions.
                </p>
              </div>
            </Link>
            <Link
              to="/service/crisis-management"
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">06</span>
                <div className="svc-i">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h4>Crisis Management</h4>
                <p>
                  24/7 travel emergency support, rebooking and contingency
                  planning.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FLEET ================= */}
      {/* <section className="section" id="fleet">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Our Fleet</div>
              <h2>
                Comfort for <span className="italic">every group size</span>
              </h2>
            </div>
            <p>
              Meticulously maintained, sanitised and driven by locals who know
              the route.
            </p>
          </div>

          <div className="swiper fleetSwiper reveal">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="fleet-tile">
                  <img
                    src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600"
                    alt="Premium SUV"
                  />
                  <div className="ov"></div>
                  <div className="cap">
                    <span className="seat">4+1</span>
                    <h4>Premium SUV</h4>
                    <span>AC · Music · Leather Seats</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="fleet-tile">
                  <img
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600"
                    alt="Luxury sedan"
                  />
                  <div className="ov"></div>
                  <div className="cap">
                    <span className="seat">3+1</span>
                    <h4>Luxury Sedan</h4>
                    <span>AC · Music · Ambient Lighting</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="fleet-tile">
                  <img
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600"
                    alt="Tempo traveller"
                  />
                  <div className="ov"></div>
                  <div className="cap">
                    <span className="seat">12+1</span>
                    <h4>Tempo Traveller</h4>
                    <span>AC · Screen · Reclining Seats</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="fleet-tile">
                  <img
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600"
                    alt="Luxury coach"
                  />
                  <div className="ov"></div>
                  <div className="cap">
                    <span className="seat">40+1</span>
                    <h4>Luxury Coach</h4>
                    <span>AC · WiFi · Premium Audio</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next fleet-next"></div>
            <div className="swiper-button-prev fleet-prev"></div>
            <div className="swiper-pagination fleet-pagination"></div>
          </div>
        </div>
      </section> */}

      {/* ================= GALLERY ================= */}
      <section className="section sand tight" id="gallery">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">From The Road</div>
              <h2>
                Moments our <span className="italic">travelers</span> caught
              </h2>
            </div>
            <p>Shree Global Holidays to be featured in our journal.</p>
          </div>
          {/* Multi-Row 6-Photo Collage Layout */}
          <div className="flex flex-col gap-12 mt-10">
            {gallerySetsToRender.map((set, setIdx) => {
              const images = set.images;
              const baseIndex = setIdx * 6;

              return (
                <div 
                  key={set._id || setIdx} 
                  className="traveler-moments-collage reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
                >
                  {/* Slot 1: Tall Left */}
                  <div className="md:col-span-1 h-80 rounded-2xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all">
                    <a href="#" onClick={(e) => openGalleryImage(e, baseIndex + 0)} className="block w-full h-full">
                      <img
                        src={images[0]}
                        alt="Moment 1"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  </div>

                  {/* Column 2: Slot 2 (Top Mid 1) & Slot 3 (Bottom Mid 1) */}
                  <div className="flex flex-col justify-between h-80">
                    <div className="rounded-2xl overflow-hidden h-[calc(50%-10px)] relative group shadow-sm hover:shadow-xl transition-all">
                      <a href="#" onClick={(e) => openGalleryImage(e, baseIndex + 1)} className="block w-full h-full">
                        <img
                          src={images[1]}
                          alt="Moment 2"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </a>
                    </div>
                    <div className="rounded-2xl overflow-hidden h-[calc(50%-10px)] relative group shadow-sm hover:shadow-xl transition-all">
                      <a href="#" onClick={(e) => openGalleryImage(e, baseIndex + 2)} className="block w-full h-full">
                        <img
                          src={images[2]}
                          alt="Moment 3"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </a>
                    </div>
                  </div>

                  {/* Column 3: Slot 4 (Top Mid 2) & Slot 5 (Bottom Mid 2) */}
                  <div className="flex flex-col justify-between h-80">
                    <div className="rounded-2xl overflow-hidden h-[calc(50%-10px)] relative group shadow-sm hover:shadow-xl transition-all">
                      <a href="#" onClick={(e) => openGalleryImage(e, baseIndex + 3)} className="block w-full h-full">
                        <img
                          src={images[3]}
                          alt="Moment 4"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </a>
                    </div>
                    <div className="rounded-2xl overflow-hidden h-[calc(50%-10px)] relative group shadow-sm hover:shadow-xl transition-all">
                      <a href="#" onClick={(e) => openGalleryImage(e, baseIndex + 4)} className="block w-full h-full">
                        <img
                          src={images[4]}
                          alt="Moment 5"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </a>
                    </div>
                  </div>

                  {/* Slot 6: Tall Right */}
                  <div className="md:col-span-1 h-80 rounded-2xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all">
                    <a href="#" onClick={(e) => openGalleryImage(e, baseIndex + 5)} className="block w-full h-full">
                      <img
                        src={images[5]}
                        alt="Moment 6"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="section" id="testimonials">
        <div className="container">
          {/* Header */}
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Testimonials</div>
              <h2>
                Stories from the <span className="italic">back seat</span>
              </h2>
            </div>
            <p>
              Real experiences from real travelers — verified directly on Google Reviews.
            </p>
          </div>

          {/* Elfsight Google Reviews Widget */}
          <div className="reveal" style={{ marginTop: "32px" }}>
            <div
              className="elfsight-app-dd156326-2e70-448f-ac87-3434db483b76"
              data-elfsight-app-lazy="true"
            ></div>
          </div>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="cta-strip">
        <img
          src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1600"
          alt="Mountain road"
        />
        <div className="ov"></div>
        <div className="container content">
          <div className="eyebrow on-dark" style={{ justifyContent: "center" }}>
            Ready When You Are
          </div>
          <h2>Let's put a route on the map</h2>
          <div className="actions">
            <a href="#contact" className="btn btn-brand">
              <i className="fa-regular fa-paper-plane"></i> Get a Free Itinerary
            </a>
            <a href="tel:+919335649404" className="btn btn-line">
              <i className="fa-solid fa-phone"></i> +91 93356 49404
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section" id="contact">
        <div className="container">
          <div className="contact-wrap reveal">
            <div className="contact-visual">
              <img
                src="https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=800"
                alt="Travel planning desk"
              />
              <div className="ov"></div>
              <div className="content">
                <div>
                  <h2>
                    Start your <span className="italic">luxury journey</span>
                  </h2>
                  <p>
                    Tell us where and when — we usually reply within two hours
                    with a free personalized itinerary.
                  </p>
                </div>
                <div className="contact-detail-list">
                  <div>
                    <i className="fa-solid fa-phone"></i> <a href="tel:+919335649404">+91 93356 49404</a>
                  </div>
                  <div>
                    <i className="fa-solid fa-envelope"></i>{" "}
                    <a href="mailto:shreeglobalholidays@gmail.com">shreeglobalholidays@gmail.com</a>
                  </div>
                  <div>
                    <i className="fa-solid fa-location-dot"></i> <a href="https://maps.app.goo.gl/Gd5iBAJ6pZaEdRCj9" target="_blank">Malhaur Railway Station Road, Gomti Nagar, Lucknow 226028</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h4>What's your dream trip?</h4>
              <p className="sub">Fill this in and we'll take it from here.</p>

              {contactSuccess && (
                <div style={{ background: '#e6f4ea', color: '#137333', padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.88rem', fontWeight: 600 }}>
                  <i className="fa-solid fa-circle-check"></i> Thank you! Your inquiry has been submitted.
                </div>
              )}

              {contactError && (
                <div style={{ background: '#fce8e6', color: '#c5221f', padding: '12px 16px', borderRadius: '8px', marginBottom: '16px', fontSize: '0.88rem', fontWeight: 600 }}>
                  <i className="fa-solid fa-circle-exclamation"></i> {contactError}
                </div>
              )}

              <form onSubmit={handleContactSubmit}>
                <div className="f-row">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={contactForm.fullName}
                    onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>
                <div className="f-row">
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  />
                  <select
                    value={contactForm.budget}
                    onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
                  >
                    <option value="">Select Budget</option>
                    <option value="Standard">Standard (₹10,000 - ₹20,000)</option>
                    <option value="Premium">Premium (₹20,000 - ₹40,000)</option>
                    <option value="Luxury">Luxury (₹40,000 - ₹75,000)</option>
                    <option value="Ultra Luxury">Ultra Luxury (₹75,000+)</option>
                  </select>
                </div>
                <textarea
                  placeholder="Destinations, dates, travelers, vehicle preference…"
                  value={contactForm.details}
                  onChange={(e) => setContactForm({ ...contactForm, details: e.target.value })}
                ></textarea>
                <button type="submit" className="btn btn-brand" disabled={contactLoading}>
                  {contactLoading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <i className="fa-solid fa-arrow-right"></i> Get Free Quote
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="section sand tight" id="faq">
        <div className="container">
          <div className="eyebrow reveal">Help Center</div>
          <h2
            className="reveal"
            style={{ maxWidth: "560px", marginBottom: "30px" }}
          >
            Questions, <span className="italic">answered</span>
          </h2>
          <div className="faq-wrap reveal">
            <div className="side">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=700"
                alt="Person planning a trip with a map and laptop"
              />
            </div>
            <div className="faq-list">
              {[
                {
                  q: "What travel documents are required?",
                  a: "A government photo ID (Aadhaar, passport, driving licence) is enough for domestic trips. Foreign nationals need their passport and visa.",
                },
                {
                  q: "What's the best time to visit North India?",
                  a: "October to March is ideal for the plains and heritage circuits. April to June suits Himalayan hill stations.",
                },
                {
                  q: "Can I customise a fixed package?",
                  a: "Yes — every listed package is a starting template. Share your dates and needs and we'll rebuild it around you.",
                },
                {
                  q: "How do I book with you?",
                  a: "Call, WhatsApp, or fill out the quote form above. We confirm the itinerary and take a small advance to lock your dates.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`faq-item ${faqOpenIndex === idx ? "active" : ""}`}
                >
                  <button
                    className="faq-q"
                    type="button"
                    onClick={() => handleFAQClick(idx)}
                  >
                    <span>
                      <span className="num">0{idx + 1}</span> {item.q}
                    </span>
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

      {/* ================= BLOG SECTION ================= */}
      <section className="section" id="blog" style={{ background: "#fff" }}>
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Travel Journal</div>
              <h2>
                Stories from the <span className="italic">road</span>
              </h2>
            </div>
            <p>
              Insider tips, destination guides and travel stories from our team.
            </p>
          </div>

          {isBlogsLoading ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#002D71" }}>
              <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
              <p style={{ marginTop: "12px", fontWeight: 600 }}>Loading travel stories...</p>
            </div>
          ) : homeBlogs.length > 0 ? (
            <div className="blog-grid reveal">
              {homeBlogs.map((post) => {
                const categoryTitle = post.category?.title || "Travel Guide";
                const formattedDate = post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "";
                const blogLink = `/blog/${post.slug || post._id}`;
                const excerpt = post.details
                  ? post.details.replace(/<[^>]*>?/gm, "").substring(0, 110) + "..."
                  : "";

                return (
                  <article key={post._id} className="blog-card">
                    <Link to={blogLink} className="blog-img">
                      <img
                        src={
                          post.image ||
                          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800"
                        }
                        alt={post.title}
                      />
                      <span className="blog-category">{categoryTitle}</span>
                    </Link>
                    <div className="blog-body">
                      <div className="blog-meta">
                        {formattedDate && (
                          <span>
                            <i className="fa-regular fa-calendar"></i> {formattedDate}
                          </span>
                        )}
                        <span>
                          <i className="fa-regular fa-clock"></i> {post.readMinutes || 5} min read
                        </span>
                      </div>
                      <h3>
                        <Link to={blogLink}>{post.title}</Link>
                      </h3>
                      <p>{excerpt}</p>
                      <Link to={blogLink} className="blog-readmore">
                        Read More <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#666" }}>
              <p>No travel articles available at the moment.</p>
            </div>
          )}

          <div
            className="blog-cta reveal"
            style={{ textAlign: "center", marginTop: "30px" }}
          >
            <Link to="/blog" className="btn btn-dark">
              <i className="fa-regular fa-newspaper"></i> View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Reusable Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={galleryItems}
        initialIndex={lightboxIndex}
      />
    </>
  );
}
