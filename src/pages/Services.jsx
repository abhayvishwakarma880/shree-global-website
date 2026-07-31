import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  return (
    <>
      {/* ================= SERVICES HERO ================= */}
      <section className="services-hero">
        <div className="services-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="services-hero-scrim"></div>
        <div className="services-hero-content">
          {/* <span className="sub-badge"><i className="fa-regular fa-star"></i> Premium Services</span> */}
          <h1>Every Detail, <span className="italic">Sorted</span></h1>
          <p>From airport pickup to the last night's dinner reservation — we handle it all</p>
          <div className="services-breadcrumb">
            <Link to="/">Home</Link> / <span>Services</span>
          </div>
        </div>
      </section>

      {/* ================= SERVICES STATS ================= */}
      <div className="container">
        <div className="services-stats reveal">
          <div className="services-stat-card">
            <span className="number">15+</span>
            <span className="label">Years of Excellence</span>
          </div>
          <div className="services-stat-card">
            <span className="number">8,000+</span>
            <span className="label">Happy Travelers</span>
          </div>
          <div className="services-stat-card">
            <span className="number">100+</span>
            <span className="label">Destinations Covered</span>
          </div>
          <div className="services-stat-card">
            <span className="number">24/7</span>
            <span className="label">Support Available</span>
          </div>
        </div>
      </div>

      {/* ================= SERVICES GRID ================= */}
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">What We Handle</div>
              <h2>Comprehensive <span className="italic">Travel Solutions</span></h2>
            </div>
            <p>End-to-end services designed to make your journey seamless and memorable.</p>
          </div>

          <div className="services-grid reveal">
            {/* Service 1: Domestic Holidays */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-map-location-dot"></i></div>
              <span className="number-badge">01</span>
              <h3>Domestic Holidays</h3>
              <p>Discover India's breathtaking destinations with customized itineraries.</p>
              <Link to="/packages" className="btn btn-dark btn-sm">Explore Packages</Link>
            </div>

            {/* Service 2: International Holidays */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-earth-americas"></i></div>
              <span className="number-badge">02</span>
              <h3>International Holidays</h3>
              <p>Explore the world's most beautiful countries with expertly planned vacations.</p>
              <Link to="/destinations" className="btn btn-dark btn-sm">Explore Destinations</Link>
            </div>

            {/* Service 3: Visa Assistance */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-passport"></i></div>
              <span className="number-badge">03</span>
              <h3>Visa Assistance</h3>
              <p>Professional visa documentation and application support for major destinations.</p>
              <Link to="/service/visa-assistance" className="btn btn-dark btn-sm">Explore Details</Link>
            </div>

            {/* Service 4: Flight Booking */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-plane-departure"></i></div>
              <span className="number-badge">04</span>
              <h3>Flight Booking</h3>
              <p>Domestic and international air ticketing with the best available fares.</p>
              <Link to="/contact" className="btn btn-dark btn-sm">Inquire Flights</Link>
            </div>

            {/* Service 5: Hotel Reservations */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-hotel"></i></div>
              <span className="number-badge">05</span>
              <h3>Hotel Reservations</h3>
              <p>Budget, premium, boutique, luxury, and resort stays worldwide.</p>
              <Link to="/contact" className="btn btn-dark btn-sm">Book Stays</Link>
            </div>

            {/* Service 6: Honeymoon Packages */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-heart"></i></div>
              <span className="number-badge">06</span>
              <h3>Honeymoon Packages</h3>
              <p>Romantic holidays designed for unforgettable memories.</p>
              <Link to="/packages" className="btn btn-dark btn-sm">View Packages</Link>
            </div>

            {/* Service 7: Family Holidays */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-people-roof"></i></div>
              <span className="number-badge">07</span>
              <h3>Family Holidays</h3>
              <p>Stress-free vacations designed for every generation.</p>
              <Link to="/packages" className="btn btn-dark btn-sm">View Packages</Link>
            </div>

            {/* Service 8: Group Tours */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-users"></i></div>
              <span className="number-badge">08</span>
              <h3>Group Tours</h3>
              <p>Corporate groups, schools, colleges, social clubs, and customized group departures.</p>
              <Link to="/service/group-tours" className="btn btn-dark btn-sm">Explore Details</Link>
            </div>

            {/* Service 9: Corporate Travel & MICE */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-briefcase"></i></div>
              <span className="number-badge">09</span>
              <h3>Corporate Travel &amp; MICE</h3>
              <p>Meetings, conferences, incentive tours, exhibitions, and business travel solutions.</p>
              <Link to="/service/mice" className="btn btn-dark btn-sm">Explore Details</Link>
            </div>

            {/* Service 10: Cruise Holidays */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599640842229-0064a523595e?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-ship"></i></div>
              <span className="number-badge">10</span>
              <h3>Cruise Holidays</h3>
              <p>Luxury cruise vacations across Asia, Europe, the Middle East, and beyond.</p>
              <Link to="/service/cruise-management" className="btn btn-dark btn-sm">Explore Details</Link>
            </div>

            {/* Service 11: Travel Insurance */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-shield-halved"></i></div>
              <span className="number-badge">11</span>
              <h3>Travel Insurance</h3>
              <p>Comprehensive travel protection for complete peace of mind.</p>
              <Link to="/contact" className="btn btn-dark btn-sm">Get Insurance</Link>
            </div>

            {/* Service 12: Airport Transfers & Car Rentals */}
            <div className="service-card">
              <div className="card-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800')" }}></div>
              <div className="card-hover-overlay"></div>
              <div className="icon-wrap"><i className="fa-solid fa-car-side"></i></div>
              <span className="number-badge">12</span>
              <h3>Airport Transfers &amp; Car Rentals</h3>
              <p>Comfortable and reliable transportation worldwide.</p>
              <Link to="/contact" className="btn btn-dark btn-sm">Book Transport</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PREMIUM EXPERIENCES ================= */}
      <section className="section sand tight">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Premium Experiences</div>
              <h2>Featured <span className="italic">Services</span></h2>
            </div>
            <p>Our most sought-after services for luxury travelers.</p>
          </div>

          <div className="featured-services reveal">
            <div className="featured-service">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" alt="Luxury Stay" />
              <div className="ov"></div>
              <div className="content">
                <span className="tag">⭐ Luxury</span>
                <h3>Royal Palace Stays</h3>
                <p>Experience the grandeur of India's royal heritage with stays in authentic palaces and heritage hotels.</p>
                <Link to="/packages" className="btn btn-brand btn-sm">Explore</Link>
              </div>
            </div>

            <div className="featured-service">
              <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800" alt="Adventure" />
              <div className="ov"></div>
              <div className="content">
                <span className="tag">🏔️ Adventure</span>
                <h3>Himalayan Expeditions</h3>
                <p>Conquer mountain passes, explore monasteries, and experience the thrill of the Himalayas.</p>
                <Link to="/packages" className="btn btn-brand btn-sm">Explore</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">How It Works</div>
              <h2>Simple <span className="italic">Process</span></h2>
            </div>
            <p>Three easy steps to your perfect Indian journey.</p>
          </div>

          <div className="services-process-grid reveal">
            <div className="process-item">
              <span className="step">1</span>
              <h4>Tell Us Your Dream</h4>
              <p>Share your destinations, dates, and preferences with our travel experts</p>
              <span className="arrow-line"><i className="fa-solid fa-chevron-right"></i></span>
            </div>
            <div className="process-item">
              <span className="step">2</span>
              <h4>Get Custom Itinerary</h4>
              <p>We create a personalized plan with hotels, transport, and experiences</p>
              <span className="arrow-line"><i className="fa-solid fa-chevron-right"></i></span>
            </div>
            <div className="process-item">
              <span className="step">3</span>
              <h4>Review &amp; Confirm</h4>
              <p>Review your itinerary, make changes, and confirm your booking</p>
              <span className="arrow-line"><i className="fa-solid fa-chevron-right"></i></span>
            </div>
            <div className="process-item">
              <span className="step">4</span>
              <h4>Enjoy Your Journey</h4>
              <p>Travel seamlessly with our 24/7 support and expert guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL SNIPPET ================= */}
      <section className="section sand tight">
        <div className="container">
          <div className="testimonial-snippet reveal">
            <div>
              <div className="quote">
                <span className="mark">"</span>
                Our trip was planned down to the hour — punctual driver, gorgeous heritage hotels, and a guide who clearly loved the history he was sharing.
              </div>
              <div className="author">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="Ritu Malhotra" />
                <div>
                  <div className="name">Ritu Malhotra</div>
                  <div className="role">Golden Triangle Tour, 2026</div>
                </div>
              </div>
            </div>
            <div className="stats">
              <div className="stat">
                <div className="num">4.9★</div>
                <div className="label">Google Rating</div>
              </div>
              <div className="stat">
                <div className="num">98%</div>
                <div className="label">Satisfaction Rate</div>
              </div>
              <div className="stat">
                <div className="num">1,200+</div>
                <div className="label">Reviews</div>
              </div>
              <div className="stat">
                <div className="num">100%</div>
                <div className="label">Customizable</div>
              </div>
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
          <h2>Ready to <span className="italic">experience</span> India with us?</h2>
          <div className="actions">
            <Link to="/contact" className="btn btn-brand"><i className="fa-regular fa-paper-plane"></i> Get Free Quote</Link>
            <a href="tel:+919335649404" className="btn btn-line"><i className="fa-solid fa-phone"></i> +91 93356 49404</a>
          </div>
        </div>
      </section>
    </>
  );
}
