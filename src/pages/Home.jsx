import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Lightbox from "../components/Lightbox";

export default function Home() {
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

  // Gallery Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200",
      title: "Taj Mahal at Sunrise",
      caption: "Agra, Uttar Pradesh",
    },
    {
      src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1200",
      title: "Havelis of Jaisalmer",
      caption: "Golden City, Rajasthan",
    },
    {
      src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1200",
      title: "Rajasthan Camel Safari",
      caption: "Thar Desert, Rajasthan",
    },
    {
      src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200",
      title: "Kerala Houseboat",
      caption: "Alleppey, Kerala",
    },
    {
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200",
      title: "Varanasi Ganga Aarti",
      caption: "Varanasi, Uttar Pradesh",
    },
    {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
      title: "Himalayan Trekking",
      caption: "Himachal Pradesh",
    },
  ];

  // Refs for Swiper cleanup
  const packageSwiperRef = useRef(null);
  const fleetSwiperRef = useRef(null);
  const testimonialSwiperRef = useRef(null);

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
    };
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

        <div className="hero-side-label">Since 2010 · New Delhi</div>

        <div className="hero-body">
          <div className="hero-copy">
            <div className="eyebrow on-dark">Handcrafted Indian Journeys</div>
            <h1>
              Travel deeper into <span className="italic">India's</span> story
            </h1>
            <p>
              Private guides, heritage stays and a premium fleet — itineraries
              built around the way you actually like to travel.
            </p>
            <div className="hero-actions">
              <a href="#packages" className="btn btn-brand">
                <i className="fa-regular fa-compass"></i> View Packages
              </a>
              <a href="#contact" className="btn btn-line">
                <i className="fa-regular fa-message"></i> Talk to an Expert
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>4.9★</strong>
                <span>Google Rating</span>
              </div>
              <div>
                <strong>8,000+</strong>
                <span>Travelers</span>
              </div>
              <div>
                <strong>100+</strong>
                <span>Destinations</span>
              </div>
              <div>
                <strong>24×7</strong>
                <span>Concierge</span>
              </div>
            </div>
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
            <Link to="/destinations#north" className="b1">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=900"
                alt="Taj Mahal"
              />
              <div className="ov"></div>
              <div className="info">
                <span className="tag">Bestseller</span>
                <h3>New Delhi &amp; Agra</h3>
                <span className="meta">
                  Capital city · Home of the Taj Mahal
                </span>
              </div>
            </Link>
            <Link to="/destinations#west" className="b2">
              <img
                src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=900"
                alt="Jaipur city palace"
              />
              <div className="ov"></div>
              <div className="info">
                <span className="tag">Heritage</span>
                <h3>Jaipur — Pink City</h3>
                <span className="meta">Forts, palaces &amp; royal culture</span>
              </div>
            </Link>
            <Link to="/destinations#south" className="b4">
              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=700"
                alt="Kerala backwaters"
              />
              <div className="ov"></div>
              <div className="info">
                <span className="tag">Backwaters</span>
                <h3>Kerala</h3>
                <span className="meta">Houseboats &amp; coastline</span>
              </div>
            </Link>
            <Link to="/destinations#east" className="b5">
              <img
                src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&q=80&w=700"
                alt="Varanasi ghats"
              />
              <div className="ov"></div>
              <div className="info">
                <span className="tag">Spiritual</span>
                <h3>Varanasi</h3>
                <span className="meta">Ganga Aarti &amp; ghats</span>
              </div>
            </Link>
            <Link to="/destinations#north" className="b6">
              <img
                src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=900"
                alt="Ladakh"
              />
              <div className="ov"></div>
              <div className="info">
                <span className="tag">High Altitude</span>
                <h3>Ladakh &amp; Leh</h3>
                <span className="meta">Monasteries &amp; mountain passes</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* ================= INTERNATIONAL DESTINATIONS ================= */}
      <section className="intl-section" id="international">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">International Travel</div>
              <h2>Beyond borders, <span className="italic">beyond expectations</span></h2>
            </div>
            <p>Handcrafted international itineraries with visa assistance, premium stays &amp; seamless transfers.</p>
          </div>

          <div className="intl-dest-grid reveal">

            {/* Dubai */}
            <Link to="/destinations#international" className="intl-dest-card">
              <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=700" alt="Dubai skyline" />
              <div className="intl-overlay"></div>
              <div className="intl-info">
                <span className="intl-badge" style={{ background: 'var(--cyan)' }}>🇦🇪 UAE</span>
                <h3>Dubai &amp; Abu Dhabi</h3>
                <span className="intl-meta">Burj Khalifa · Desert Safari · Luxury Shopping</span>
              </div>
            </Link>

            {/* Bali */}
            <Link to="/destinations#international" className="intl-dest-card">
              <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=700" alt="Bali rice terraces" />
              <div className="intl-overlay"></div>
              <div className="intl-info">
                <span className="intl-badge" style={{ background: 'var(--green)' }}>🇮🇩 Indonesia</span>
                <h3>Bali</h3>
                <span className="intl-meta">Rice Terraces · Temples · Beach Clubs</span>
              </div>
            </Link>

            {/* Thailand */}
            <Link to="/destinations#international" className="intl-dest-card">
              <img src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&q=80&w=700" alt="Thailand temples" />
              <div className="intl-overlay"></div>
              <div className="intl-info">
                <span className="intl-badge" style={{ background: '#e05c1a' }}>🇹🇭 Thailand</span>
                <h3>Thailand</h3>
                <span className="intl-meta">Bangkok · Chiang Mai · Phuket Islands</span>
              </div>
            </Link>

            {/* Singapore */}
            <Link to="/destinations#international" className="intl-dest-card">
              <img src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=700" alt="Singapore skyline" />
              <div className="intl-overlay"></div>
              <div className="intl-info">
                <span className="intl-badge" style={{ background: '#b5163e' }}>🇸🇬 Singapore</span>
                <h3>Singapore</h3>
                <span className="intl-meta">Marina Bay · Gardens · Universal Studios</span>
              </div>
            </Link>

          </div>

          <div className="intl-cta reveal">
            <Link to="/packages" className="btn-intl">
              View All International Packages <i className="fa-solid fa-arrow-right"></i>
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
            <h2 style={{ marginBottom: "22px" }}>
              Built by people who{" "}
              <span className="italic">actually road-trip</span> this country
            </h2>
            <p>
              We're a New Delhi–based team that's spent over fifteen years
              mapping India by road — the shortcuts, the right season for every
              pass, the guesthouse owners worth knowing. Every itinerary is
              drawn from that ground knowledge, not a template.
            </p>
            <div className="about-strengths">
              <div className="strength-item">
                <div className="strength-icon">
                  <i className="fa-solid fa-route"></i>
                </div>
                <div>
                  <h4>15+ Years Ground Expertise</h4>
                  <p>Every route is personally mapped and verified by our travel team.</p>
                </div>
              </div>
              <div className="strength-item">
                <div className="strength-icon">
                  <i className="fa-solid fa-car-rear"></i>
                </div>
                <div>
                  <h4>Premium Verified Fleet</h4>
                  <p>Meticulously maintained, sanitised luxury SUVs and sedans.</p>
                </div>
              </div>
              <div className="strength-item">
                <div className="strength-icon">
                  <i className="fa-solid fa-user-shield"></i>
                </div>
                <div>
                  <h4>Professional Chauffeurs</h4>
                  <p>Experienced local drivers who double as friendly trip guides.</p>
                </div>
              </div>
              <div className="strength-item">
                <div className="strength-icon">
                  <i className="fa-solid fa-clock-rotate-left"></i>
                </div>
                <div>
                  <h4>24/7 Live Assistance</h4>
                  <p>Dedicated round-the-clock concierge support during your travel.</p>
                </div>
              </div>
            </div>
            <div className="stat-row">
              <div>
                <strong>15+</strong>
                <span>Years on the road</span>
              </div>
              <div>
                <strong>100+</strong>
                <span>Destinations </span>
              </div>
              <div>
                <strong>8,000+</strong>
                <span>Travelers guided</span>
              </div>
              <div>
                <strong>49</strong>
                <span>Vehicles in fleet</span>
              </div>
            </div>
            {/* <Link to="/contact" className="btn btn-dark">
              <i className="fa-regular fa-compass"></i> Start Planning
            </Link> */}
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
          backgroundImage: "url(images/pattern-bg.png)",
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
            {/* Slide 1 */}
            <div className="swiper-slide">
              <div className="pkg-card">
                <img
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=700"
                  alt="Golden Triangle tour"
                />
                <div className="ov"></div>
                <div className="top">
                  <span className="badge">Best Seller</span>
                  <span className="fav">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
                <div className="bottom">
                  <div className="meta">
                    <span>
                      <i className="fa-regular fa-clock"></i> 5D / 4N
                    </span>
                    <span>
                      <i className="fa-solid fa-hotel"></i> 4★ Hotels
                    </span>
                  </div>
                  <h3>Golden Triangle Tour</h3>
                  <div className="row">
                    <div className="price">
                      ₹14,500 <span>/ person</span>
                    </div>
                    <Link to="/package/1" className="go">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="swiper-slide">
              <div className="pkg-card">
                <img
                  src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=700"
                  alt="Shimla Manali escape"
                />
                <div className="ov"></div>
                <div className="top">
                  <span className="badge">Honeymoon</span>
                  <span className="fav">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
                <div className="bottom">
                  <div className="meta">
                    <span>
                      <i className="fa-regular fa-clock"></i> 6D / 5N
                    </span>
                    <span>
                      <i className="fa-solid fa-hotel"></i> 5★ Resorts
                    </span>
                  </div>
                  <h3>Shimla Manali Escape</h3>
                  <div className="row">
                    <div className="price">
                      ₹18,900 <span>/ person</span>
                    </div>
                    <Link to="/package/2" className="go">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="swiper-slide">
              <div className="pkg-card">
                <img
                  src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=700"
                  alt="Rajasthan heritage tour"
                />
                <div className="ov"></div>
                <div className="top">
                  <span className="badge">Royal</span>
                  <span className="fav">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
                <div className="bottom">
                  <div className="meta">
                    <span>
                      <i className="fa-regular fa-clock"></i> 7D / 6N
                    </span>
                    <span>
                      <i className="fa-solid fa-hotel"></i> Palace Stays
                    </span>
                  </div>
                  <h3>Rajasthan Heritage Trail</h3>
                  <div className="row">
                    <div className="price">
                      ₹22,400 <span>/ person</span>
                    </div>
                    <Link to="/package/3" className="go">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 4 */}
            <div className="swiper-slide">
              <div className="pkg-card">
                <img
                  src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=700"
                  alt="Kerala backwaters houseboat"
                />
                <div className="ov"></div>
                <div className="top">
                  <span className="badge">Coastal</span>
                  <span className="fav">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
                <div className="bottom">
                  <div className="meta">
                    <span>
                      <i className="fa-regular fa-clock"></i> 6D / 5N
                    </span>
                    <span>
                      <i className="fa-solid fa-hotel"></i> Houseboats
                    </span>
                  </div>
                  <h3>Kerala Backwater Trail</h3>
                  <div className="row">
                    <div className="price">
                      ₹19,600 <span>/ person</span>
                    </div>
                    <Link to="/package/4" className="go">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Slide 5 */}
            <div className="swiper-slide">
              <div className="pkg-card">
                <img
                  src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=700"
                  alt="Ladakh high altitude circuit"
                />
                <div className="ov"></div>
                <div className="top">
                  <span className="badge">New</span>
                  <span className="fav">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </div>
                <div className="bottom">
                  <div className="meta">
                    <span>
                      <i className="fa-regular fa-clock"></i> 8D / 7N
                    </span>
                    <span>
                      <i className="fa-solid fa-hotel"></i> Boutique Camps
                    </span>
                  </div>
                  <h3>Ladakh High-Altitude Circuit</h3>
                  <div className="row">
                    <div className="price">
                      ₹27,300 <span>/ person</span>
                    </div>
                    <Link to="/package/5" className="go">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
            <div
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">01</span>
                <div className="svc-i">
                  <i className="fa-solid fa-car"></i>
                </div>
                <h4>Luxury Rentals</h4>
                <p>
                  Premium sedans, SUVs and Tempo Travellers with verified
                  chauffeurs.
                </p>
              </div>
            </div>
            <div
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">02</span>
                <div className="svc-i">
                  <i className="fa-solid fa-hotel"></i>
                </div>
                <h4>Heritage Stays</h4>
                <p>
                  Handpicked 4★ &amp; 5★ hotels, palaces and boutique resorts.
                </p>
              </div>
            </div>
            <div
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">03</span>
                <div className="svc-i">
                  <i className="fa-solid fa-route"></i>
                </div>
                <h4>Custom Itineraries</h4>
                <p>Travel plans shaped around your pace and interests.</p>
              </div>
            </div>
            <div
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">04</span>
                <div className="svc-i">
                  <i className="fa-solid fa-plane-departure"></i>
                </div>
                <h4>Airport Transfers</h4>
                <p>Reliable pick-up and drop across major Indian airports.</p>
              </div>
            </div>
            <div
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">05</span>
                <div className="svc-i">
                  <i className="fa-solid fa-people-group"></i>
                </div>
                <h4>Group &amp; Corporate</h4>
                <p>Exclusive packages for families, retreats and weddings.</p>
              </div>
            </div>
            <div
              className="svc-card"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=800')",
              }}
            >
              <div className="svc-overlay"></div>
              <div className="svc-content">
                <span className="svc-num">06</span>
                <div className="svc-i">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <h4>Pilgrimage Support</h4>
                <p>End-to-end arrangements for Char Dham and Vaishno Devi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FLEET ================= */}
      <section className="section" id="fleet">
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

          {/* Fleet Swiper */}
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
      </section>

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
          <div className="gallery-strip reveal">
            {galleryItems.map((item, idx) => (
              <a key={idx} href="#" onClick={(e) => openGalleryImage(e, idx)}>
                <img src={item.src} alt={item.title} />
              </a>
            ))}
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
              <h2>Stories from the <span className="italic">back seat</span></h2>
            </div>
            <p>Real experiences from real travelers — unfiltered and straight from the road.</p>
          </div>

          {/* Google Reviews Trust Strip */}
          <div className="google-reviews-strip reveal">
            <div className="gr-logo">
              <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
                <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/>
                <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/>
                <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/>
                <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
              </svg>
              <div className="gr-text">
                <span className="gr-label">Google Reviews</span>
                <div className="gr-stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
            <div className="gr-score">
              <span className="gr-rating">4.9</span>
              <span className="gr-count">Based on <strong>1,200+</strong> Google Reviews</span>
            </div>
            <Link
              to="/reviews"
              className="gr-cta"
            >
              <i className="fa-brands fa-google"></i> See All Reviews
            </Link>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="test-cards-grid reveal">

            {/* Card 1 */}
            <div className="test-card">
              <div className="test-card-header">
                <div className="test-avatar-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
                    alt="Ritu Malhotra"
                    className="test-avatar"
                  />
                  <div className="test-verified-badge" title="Verified Review">
                    <i className="fa-brands fa-google"></i>
                  </div>
                </div>
                <div className="test-person-info">
                  <strong>Ritu Malhotra</strong>
                  <span className="test-date">October 2024</span>
                  <div className="test-stars">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="test-destination-tag">
                <i className="fa-solid fa-location-dot"></i> Golden Triangle — Delhi · Agra · Jaipur
              </div>
              <p className="test-body">
                "Our Golden Triangle trip was planned down to the hour — punctual driver, gorgeous heritage hotels, and a guide who clearly loved the history he was sharing. Absolutely worth every rupee!"
              </p>
            </div>

            {/* Card 2 */}
            <div className="test-card">
              <div className="test-card-header">
                <div className="test-avatar-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
                    alt="Vikram Singh"
                    className="test-avatar"
                  />
                  <div className="test-verified-badge" title="Verified Review">
                    <i className="fa-brands fa-google"></i>
                  </div>
                </div>
                <div className="test-person-info">
                  <strong>Vikram Singh</strong>
                  <span className="test-date">August 2024</span>
                  <div className="test-stars">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="test-destination-tag">
                <i className="fa-solid fa-location-dot"></i> Ladakh High-Altitude Circuit
              </div>
              <p className="test-body">
                "The Ladakh trip was life-changing! Our driver knew every twist and turn of those mountain roads. The campsites were breathtaking and the local guides were incredibly knowledgeable."
              </p>
            </div>

            {/* Card 3 */}
            <div className="test-card">
              <div className="test-card-header">
                <div className="test-avatar-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
                    alt="Priya Sharma"
                    className="test-avatar"
                  />
                  <div className="test-verified-badge" title="Verified Review">
                    <i className="fa-brands fa-google"></i>
                  </div>
                </div>
                <div className="test-person-info">
                  <strong>Priya Sharma</strong>
                  <span className="test-date">November 2024</span>
                  <div className="test-stars">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="test-destination-tag">
                <i className="fa-solid fa-location-dot"></i> Kerala Backwaters — Alleppey
              </div>
              <p className="test-body">
                "The houseboat experience in Alleppey was magical! The team arranged everything perfectly — from the welcome drink to the sunset cruise. Pure luxury and tranquility."
              </p>
            </div>

            {/* Card 4 */}
            <div className="test-card">
              <div className="test-card-header">
                <div className="test-avatar-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
                    alt="Amit Patel"
                    className="test-avatar"
                  />
                  <div className="test-verified-badge" title="Verified Review">
                    <i className="fa-brands fa-google"></i>
                  </div>
                </div>
                <div className="test-person-info">
                  <strong>Amit Patel</strong>
                  <span className="test-date">December 2024</span>
                  <div className="test-stars">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="test-destination-tag">
                <i className="fa-solid fa-location-dot"></i> Rajasthan Heritage — Jaipur · Udaipur
              </div>
              <p className="test-body">
                "Staying in palaces and exploring forts — this was a dream come true! The attention to detail in every heritage hotel was impeccable. Thank you for this royal experience."
              </p>
            </div>

            {/* Card 5 */}
            <div className="test-card">
              <div className="test-card-header">
                <div className="test-avatar-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=200&h=200"
                    alt="Sneha Reddy"
                    className="test-avatar"
                  />
                  <div className="test-verified-badge" title="Verified Review">
                    <i className="fa-brands fa-google"></i>
                  </div>
                </div>
                <div className="test-person-info">
                  <strong>Sneha Reddy</strong>
                  <span className="test-date">January 2025</span>
                  <div className="test-stars">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="test-destination-tag">
                <i className="fa-solid fa-location-dot"></i> Varanasi Pilgrimage Tour
              </div>
              <p className="test-body">
                "The Ganga Aarti experience was deeply spiritual. Our guide arranged the best boat and we had a front-row view. Everything was handled with such care and respect."
              </p>
            </div>

            {/* Card 6 */}
            <div className="test-card">
              <div className="test-card-header">
                <div className="test-avatar-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=200&h=200"
                    alt="Rohan Mehta"
                    className="test-avatar"
                  />
                  <div className="test-verified-badge" title="Verified Review">
                    <i className="fa-brands fa-google"></i>
                  </div>
                </div>
                <div className="test-person-info">
                  <strong>Rohan Mehta</strong>
                  <span className="test-date">March 2025</span>
                  <div className="test-stars">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="test-destination-tag">
                <i className="fa-solid fa-location-dot"></i> Shimla Manali Honeymoon Escape
              </div>
              <p className="test-body">
                "Planned our honeymoon with Shree Global and it was absolutely perfect. Every detail was taken care of — from the candle-light dinners to the cozy mountain resorts. Highly recommend!"
              </p>
            </div>

          </div>

          {/* View More CTA */}
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link
              to="/reviews"
              className="btn btn-dark"
            >
              <i className="fa-solid fa-star"></i> Read All 1,200+ Reviews
            </Link>
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
            <a href="tel:+919811022334" className="btn btn-line">
              <i className="fa-solid fa-phone"></i> +91 98110 22334
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
                    <i className="fa-solid fa-phone"></i> +91 98110 22334
                  </div>
                  <div>
                    <i className="fa-solid fa-envelope"></i> hello@Shree Global
                    Holidays.com
                  </div>
                  <div>
                    <i className="fa-solid fa-location-dot"></i> Connaught
                    Place, New Delhi
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <h4>What's your dream trip?</h4>
              <p className="sub">Fill this in and we'll take it from here.</p>
              <form onSubmit={handleFormSubmit}>
                <div className="f-row">
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="f-row">
                  <input type="tel" placeholder="Phone Number" required />
                  <select>
                    <option>Select Budget</option>
                    <option>Standard</option>
                    <option>Luxury</option>
                  </select>
                </div>
                <textarea
                  placeholder="Destinations, dates, travelers, vehicle preference…"
                  required
                ></textarea>
                <button type="submit" className="btn btn-brand">
                  <i className="fa-solid fa-arrow-right"></i> Get Free Quote
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

          <div className="blog-grid reveal">
            {[
              {
                img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800&h=500",
                cat: "Destination Guide",
                date: "15 Jan 2026",
                time: "6 min read",
                title:
                  "The Ultimate Golden Triangle Itinerary: Delhi, Agra & Jaipur",
                desc: "Everything you need to know before exploring India's most iconic circuit — from the best time to visit to hidden gems.",
              },
              {
                img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800&h=500",
                cat: "Adventure",
                date: "8 Jan 2026",
                time: "8 min read",
                title:
                  "Ladakh on Two Wheels: A Motorcycle Adventure Through the High Himalayas",
                desc: "Conquering the world's highest motorable passes — a first-hand account of riding through Ladakh's breathtaking landscape.",
              },
              {
                img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800&h=500",
                cat: "Luxury Travel",
                date: "2 Jan 2026",
                time: "5 min read",
                title:
                  "Houseboat Heaven: Experiencing Kerala's Backwaters in Style",
                desc: "From traditional rice boats to luxury cruises — here's how to do Kerala's backwaters like a true connoisseur.",
              },
              {
                img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800&h=500",
                cat: "Heritage",
                date: "28 Dec 2025",
                time: "7 min read",
                title:
                  "Inside Rajasthan's Royal Palaces: A Guide to India's Living Heritage",
                desc: "Step into the world of maharajas — exploring the forts, palaces and stories that make Rajasthan truly regal.",
              },
              {
                img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800&h=500",
                cat: "Spiritual",
                date: "20 Dec 2025",
                time: "5 min read",
                title:
                  "The Magic of Varanasi: Witnessing the Ganga Aarti at Dawn",
                desc: "An immersive experience of spirituality, culture and timeless rituals along the banks of the holy Ganges.",
              },
              {
                img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800&h=500",
                cat: "Trekking",
                date: "15 Dec 2025",
                time: "9 min read",
                title: "Top 5 Himalayan Treks for Every Fitness Level",
                desc: "From easy day hikes to challenging multi-day expeditions — find the perfect Himalayan trek for your ability.",
              },
            ].map((post, idx) => (
              <article key={idx} className="blog-card">
                <Link to="/blog" className="blog-img">
                  <img src={post.img} alt={post.title} />
                  <span className="blog-category">{post.cat}</span>
                </Link>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span>
                      <i className="fa-regular fa-calendar"></i> {post.date}
                    </span>
                    <span>
                      <i className="fa-regular fa-clock"></i> {post.time}
                    </span>
                  </div>
                  <h3>
                    <Link to="/blog">{post.title}</Link>
                  </h3>
                  <p>{post.desc}</p>
                  <Link to="/blog" className="blog-readmore">
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

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
