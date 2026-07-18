import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  const statsSectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [years, setYears] = useState(0);
  const [destinations, setDestinations] = useState(0);
  const [travelers, setTravelers] = useState(0);
  const [fleet, setFleet] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        
        // Animate Years (0 to 15)
        const yearsTarget = 15;
        let yCurrent = 0;
        const yearsInterval = setInterval(() => {
          yCurrent += 1;
          if (yCurrent >= yearsTarget) {
            setYears(yearsTarget);
            clearInterval(yearsInterval);
          } else {
            setYears(yCurrent);
          }
        }, 100);

        // Animate Destinations (0 to 100)
        const destTarget = 100;
        let dCurrent = 0;
        const destInterval = setInterval(() => {
          dCurrent += 4;
          if (dCurrent >= destTarget) {
            setDestinations(destTarget);
            clearInterval(destInterval);
          } else {
            setDestinations(dCurrent);
          }
        }, 50);

        // Animate Travelers (0 to 8000)
        const travelersTarget = 8000;
        let tCurrent = 0;
        const travelersInterval = setInterval(() => {
          tCurrent += 320;
          if (tCurrent >= travelersTarget) {
            setTravelers(travelersTarget);
            clearInterval(travelersInterval);
          } else {
            setTravelers(tCurrent);
          }
        }, 50);

        // Animate Fleet (0 to 49)
        const fleetTarget = 49;
        let fCurrent = 0;
        const fleetInterval = setInterval(() => {
          fCurrent += 2;
          if (fCurrent >= fleetTarget) {
            setFleet(fleetTarget);
            clearInterval(fleetInterval);
          } else {
            setFleet(fCurrent);
          }
        }, 50);
      }
    }, { threshold: 0.3 });

    const currentRef = statsSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  return (
    <>
      {/* ================= ABOUT HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="about-hero-scrim"></div>
        <div className="about-hero-content">
          <span className="sub-badge"><i className="fa-regular fa-star"></i> Since 2010</span>
          <h1>About <span className="italic">Shree Global</span> Holidays</h1>
          <p>Your trusted partner for luxury travel experiences across India</p>
          <div className="about-breadcrumb">
            <Link to="/">Home</Link> / <span>About</span>
          </div>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="section">
        <div className="container">
          <div className="about-intro-wrap reveal">
            <div className="about-intro-text">
              <div className="eyebrow">Our Story</div>
              <h2>Built by people who <span className="italic">actually road-trip</span> this country</h2>
              <p>We're a New Delhi–based team that's spent over <span className="highlight">fifteen years</span> mapping India by road — the shortcuts, the right season for every pass, the guesthouse owners worth knowing. Every itinerary is drawn from that ground knowledge, not a template.</p>
              <p>From the <span className="highlight">snowy peaks of Ladakh</span> to the <span className="highlight">backwaters of Kerala</span>, we've explored every corner of this incredible country. Our team of passionate travel experts ensures that every journey is seamless, memorable, and uniquely yours.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                <Link to="/packages" className="btn btn-brand"><i className="fa-regular fa-compass"></i> View Our Packages</Link>
                <Link to="/contact" className="btn btn-dark"><i className="fa-regular fa-message"></i> Talk to Us</Link>
              </div>
            </div>
            <div className="about-intro-image">
              <img src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=800" alt="Travel team" />
              <div className="floating-badge">
                <div className="icon"><i className="fa-solid fa-thumbs-up"></i></div>
                <div className="text">
                  <strong>4.9 / 5</strong>
                  <span>1,200+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION VISION ================= */}
      <section className="section sand tight">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Our Purpose</div>
              <h2>Mission &amp; <span className="italic">Vision</span></h2>
            </div>
            <p>Guiding our journey to create unforgettable travel experiences.</p>
          </div>

          <div className="mv-grid reveal">
            <div className="mv-card">
              <div className="icon"><i className="fa-solid fa-rocket"></i></div>
              <h3>Our Mission</h3>
              <p>To craft personalized, luxury travel experiences that showcase India's rich cultural heritage, diverse landscapes, and warm hospitality to every traveler.</p>
            </div>
            <div className="mv-card">
              <div className="icon"><i className="fa-solid fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>To become India's most trusted luxury travel partner, known for excellence, innovation, and creating lifelong memories for travelers from around the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="section" style={{ padding: 0 }} ref={statsSectionRef}>
        <div className="container">
          <div className="about-stats-wrap reveal" id="statsWrap">
            <div className="stat-card">
              <span className="icon-top"><i className="fa-regular fa-calendar"></i></span>
              <span className="number">
                {years}<span className="suffix">+</span>
              </span>
              <span className="label">Years of Excellence</span>
            </div>
            <div className="stat-card">
              <span className="icon-top"><i className="fa-regular fa-map"></i></span>
              <span className="number">
                {destinations}<span className="suffix">+</span>
              </span>
              <span className="label">Destinations Mapped</span>
            </div>
            <div className="stat-card">
              <span className="icon-top"><i className="fa-regular fa-user"></i></span>
              <span className="number">
                {travelers.toLocaleString()}<span className="suffix">+</span>
              </span>
              <span className="label">Happy Travelers</span>
            </div>
            <div className="stat-card">
              <span className="icon-top"><i className="fa-solid fa-car"></i></span>
              <span className="number">
                {fleet}
              </span>
              <span className="label">Vehicles in Fleet</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      {/* <section className="section sand tight">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Meet Our Team</div>
              <h2>The <span className="italic">People</span> Behind the Journeys</h2>
            </div>
            <p>Passionate travel experts dedicated to creating your perfect Indian adventure.</p>
          </div>

          <div className="team-grid reveal">
            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" alt="Rajesh Sharma" />
                <div className="team-social">
                  <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
              <div className="team-info">
                <h4>Rajesh Sharma</h4>
                <p className="role">Founder &amp; CEO</p>
                <p className="bio">15+ years of experience in luxury travel, passionate about showcasing India's hidden gems.</p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=600" alt="Priya Singh" />
                <div className="team-social">
                  <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
              <div className="team-info">
                <h4>Priya Singh</h4>
                <p className="role">Head of Operations</p>
                <p className="bio">Expert in logistics and guest relations, ensuring every journey runs seamlessly.</p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" alt="Vikram Mehta" />
                <div className="team-social">
                  <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
              <div className="team-info">
                <h4>Vikram Mehta</h4>
                <p className="role">Senior Tour Designer</p>
                <p className="bio">Crafts unique itineraries that blend luxury with authentic local experiences.</p>
              </div>
            </div>

            <div className="team-card">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" alt="Ananya Reddy" />
                <div className="team-social">
                  <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
              <div className="team-info">
                <h4>Ananya Reddy</h4>
                <p className="role">Customer Experience</p>
                <p className="bio">Dedicated to delivering exceptional service and creating lifelong traveler relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ================= VALUES SECTION ================= */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Our Values</div>
              <h2>What <span className="italic">Drives</span> Us</h2>
            </div>
            <p>Core principles that guide everything we do.</p>
          </div>

          <div className="values-grid reveal">
            <div className="value-card">
              <div className="icon"><i className="fa-solid fa-star"></i></div>
              <h4>Quality First</h4>
              <p>We never compromise on quality - from hotels to experiences.</p>
            </div>
            <div className="value-card">
              <div className="icon"><i className="fa-solid fa-handshake"></i></div>
              <h4>Trust &amp; Transparency</h4>
              <p>Honest pricing, clear communication, and no hidden surprises.</p>
            </div>
            <div className="value-card">
              <div className="icon"><i className="fa-solid fa-lightbulb"></i></div>
              <h4>Innovation</h4>
              <p>Constantly creating unique itineraries and fresh experiences.</p>
            </div>
            <div className="value-card">
              <div className="icon"><i className="fa-solid fa-leaf"></i></div>
              <h4>Sustainability</h4>
              <p>Promoting eco-friendly travel and supporting local communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AWARDS ================= */}
      <section className="section">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Recognition</div>
              <h2>Awards &amp; <span className="italic">Certifications</span></h2>
            </div>
            <p>Proud to be recognized for our excellence in travel.</p>
          </div>

          <div className="awards-grid reveal">
            <div className="award-item">
              <span className="icon"><i className="fa-solid fa-trophy"></i></span>
              <h4>Best Travel Agency</h4>
              <p>India Tourism Awards 2022</p>
            </div>
            <div className="award-item">
              <span className="icon"><i className="fa-solid fa-medal"></i></span>
              <h4>Excellence in Service</h4>
              <p>Travel &amp; Hospitality Awards 2023</p>
            </div>
            <div className="award-item">
              <span className="icon"><i className="fa-solid fa-award"></i></span>
              <h4>Luxury Tour Operator</h4>
              <p>Luxury Travel Awards 2024</p>
            </div>
            <div className="award-item">
              <span className="icon"><i className="fa-solid fa-certificate"></i></span>
              <h4>ISO Certified</h4>
              <p>Quality Management Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="cta-strip">
        <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1600" alt="Mountain road" />
        <div className="ov"></div>
        <div className="container content">
          <div className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Let's Plan Together</div>
          <h2>Your dream <span className="italic">Indian journey</span> starts here</h2>
          <div className="actions">
            <Link to="/contact" className="btn btn-brand"><i className="fa-regular fa-paper-plane"></i> Get Free Quote</Link>
            <a href="tel:+919811022334" className="btn btn-line"><i className="fa-solid fa-phone"></i> +91 98110 22334</a>
          </div>
        </div>
      </section>
    </>
  );
}
