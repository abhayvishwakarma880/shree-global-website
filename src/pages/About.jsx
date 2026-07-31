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
        
        // Animate Years (0 to 20)
        const yearsTarget = 20;
        let yCurrent = 0;
        const yearsInterval = setInterval(() => {
          yCurrent += 1;
          if (yCurrent >= yearsTarget) {
            setYears(yearsTarget);
            clearInterval(yearsInterval);
          } else {
            setYears(yCurrent);
          }
        }, 80);

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

        // Animate Travelers (0 to 15000)
        const travelersTarget = 15000;
        let tCurrent = 0;
        const travelersInterval = setInterval(() => {
          tCurrent += 600;
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
          <span className="sub-badge"><i className="fa-regular fa-star"></i> Since 2005</span>
          <h1>About <span className="italic">Shree Global</span> Holidays</h1>
          <p>Your Trusted Travel Partner Since 2005</p>
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
              <div className="eyebrow">About Us</div>
              <h2>Your Trusted Travel Partner <span className="italic">Since 2005</span></h2>
              <p>Shree Global Holidays is one of Lucknow's leading travel companies, committed to delivering personalized travel experiences with professionalism, transparency, and exceptional customer service.</p>
              <p>We specialize in designing customized domestic and international holidays, MICE events, educational tours, honeymoon packages, luxury vacations, cruises, and visa services. Our experienced travel consultants ensure every journey is comfortable, memorable, and hassle-free.</p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                <Link to="/contact" className="btn btn-brand"><i className="fa-regular fa-paper-plane"></i> Plan Your Holiday</Link>
                <a href="https://wa.me/919335649404" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: '#FFF', border: 'none' }}><i className="fa-brands fa-whatsapp"></i> WhatsApp Us</a>
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
              <div className="icon"><i className="fa-solid fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--navy)', fontWeight: 500 }}>
                To become India's most trusted travel brand by inspiring people to explore the world through exceptional travel experiences.
              </p>
            </div>
            <div className="mv-card">
              <div className="icon"><i className="fa-solid fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--navy)' }}><i className="fa-solid fa-circle-check" style={{ color: 'var(--gold)' }}></i> Customer satisfaction above everything</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--navy)' }}><i className="fa-solid fa-circle-check" style={{ color: 'var(--gold)' }}></i> Honest pricing with complete transparency</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--navy)' }}><i className="fa-solid fa-circle-check" style={{ color: 'var(--gold)' }}></i> Personalized holiday planning</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--navy)' }}><i className="fa-solid fa-circle-check" style={{ color: 'var(--gold)' }}></i> World-class travel experiences</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.92rem', color: 'var(--navy)' }}><i className="fa-solid fa-circle-check" style={{ color: 'var(--gold)' }}></i> Long-term customer relationships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Why Choose Us</div>
              <h2>Why Choose <span className="italic">Shree Global Holidays?</span></h2>
            </div>
            <p>10 reasons why thousands of travelers trust us for their dream vacations.</p>
          </div>

          <div className="why-choose-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 reveal">
            <div className="why-card p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full bg-[#DA9F27]/15 text-[#DA9F27] flex items-center justify-center font-bold text-base"><i className="fa-solid fa-award"></i></div>
              <h4 className="font-bold text-sm text-[#002D71] mt-1">20+ Years Experience</h4>
              <p className="text-xs text-gray-500">Decades of industry expertise crafting seamless travel solutions.</p>
            </div>
            <div className="why-card p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full bg-[#DA9F27]/15 text-[#DA9F27] flex items-center justify-center font-bold text-base"><i className="fa-solid fa-[#25D366] fa-smile"></i></div>
              <h4 className="font-bold text-sm text-[#002D71] mt-1">10,000+ Happy Travellers</h4>
              <p className="text-xs text-gray-500">Thousands of delighted families, couples &amp; corporate groups.</p>
            </div>
            <div className="why-card p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full bg-[#DA9F27]/15 text-[#DA9F27] flex items-center justify-center font-bold text-base"><i className="fa-solid fa-sliders"></i></div>
              <h4 className="font-bold text-sm text-[#002D71] mt-1">Customized Planning</h4>
              <p className="text-xs text-gray-500">Itineraries tailored 100% around your preferences &amp; budget.</p>
            </div>
            <div className="why-card p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full bg-[#DA9F27]/15 text-[#DA9F27] flex items-center justify-center font-bold text-base"><i className="fa-solid fa-tag"></i></div>
              <h4 className="font-bold text-sm text-[#002D71] mt-1">Best Value Packages</h4>
              <p className="text-xs text-gray-500">Top-tier inclusions and hotels at unbeatable market prices.</p>
            </div>
            <div className="why-card p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full bg-[#DA9F27]/15 text-[#DA9F27] flex items-center justify-center font-bold text-base"><i className="fa-solid fa-passport"></i></div>
              <h4 className="font-bold text-sm text-[#002D71] mt-1">Visa Experts</h4>
              <p className="text-xs text-gray-500">Hassle-free documentation &amp; high success visa processing.</p>
            </div>
            <div className="why-card p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full bg-[#DA9F27]/15 text-[#DA9F27] flex items-center justify-center font-bold text-base"><i className="fa-solid fa-user-gear"></i></div>
              <h4 className="font-bold text-sm text-[#002D71] mt-1">Dedicated Consultants</h4>
              <p className="text-xs text-gray-500">Personalized travel experts guiding you from start to finish.</p>
            </div>
            <div className="why-card p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full bg-[#DA9F27]/15 text-[#DA9F27] flex items-center justify-center font-bold text-base"><i className="fa-solid fa-headset"></i></div>
              <h4 className="font-bold text-sm text-[#002D71] mt-1">24×7 Customer Support</h4>
              <p className="text-xs text-gray-500">Round-the-clock live assistance throughout your trip.</p>
            </div>
            <div className="why-card p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full bg-[#DA9F27]/15 text-[#DA9F27] flex items-center justify-center font-bold text-base"><i className="fa-solid fa-globe"></i></div>
              <h4 className="font-bold text-sm text-[#002D71] mt-1">Global Travel Partners</h4>
              <p className="text-xs text-gray-500">Direct tie-ups with premium airlines, hotels &amp; cruise liners.</p>
            </div>
            <div className="why-card p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full bg-[#DA9F27]/15 text-[#DA9F27] flex items-center justify-center font-bold text-base"><i className="fa-solid fa-lock"></i></div>
              <h4 className="font-bold text-sm text-[#002D71] mt-1">Safe &amp; Secure Bookings</h4>
              <p className="text-xs text-gray-500">Encrypted payment gateways and complete traveler safety.</p>
            </div>
            <div className="why-card p-4 bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow-md transition-all flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full bg-[#DA9F27]/15 text-[#DA9F27] flex items-center justify-center font-bold text-base"><i className="fa-solid fa-[#002D71] fa-receipt"></i></div>
              <h4 className="font-bold text-sm text-[#002D71] mt-1">Transparent Pricing</h4>
              <p className="text-xs text-gray-500">No hidden costs or surprise fees — 100% clear billing.</p>
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
            <a href="tel:+919335649404" className="btn btn-line"><i className="fa-solid fa-phone"></i> +91 93356 49404</a>
          </div>
        </div>
      </section>
    </>
  );
}
