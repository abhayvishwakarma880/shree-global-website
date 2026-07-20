import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Fleet.css';

const allVehicles = [
  {
    id: 1,
    name: 'Toyota Fortuner',
    category: 'suv',
    seats: '4+1',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600',
    badge: 'Premium',
    features: ['AC', 'Music System', 'Leather Seats', 'GPS'],
    description: 'Premium SUV perfect for families and small groups. Spacious, comfortable, and loaded with luxury features.',
    price: 8500,
    rating: 4.9
  },
  {
    id: 2,
    name: 'Mercedes-Benz E-Class',
    category: 'sedan',
    seats: '3+1',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
    badge: 'Luxury',
    features: ['AC', 'Ambient Lighting', 'Premium Audio', 'WiFi'],
    description: 'Luxury sedan for executive travel. Experience comfort, style, and prestige on every journey.',
    price: 12000,
    rating: 4.8
  },
  {
    id: 3,
    name: 'Tempo Traveller',
    category: 'tempo',
    seats: '12+1',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600',
    badge: 'Popular',
    features: ['AC', 'Screen', 'Reclining Seats', 'USB Charging'],
    description: 'Perfect for group travel. Spacious, comfortable, and equipped with all modern amenities.',
    price: 15000,
    rating: 4.7
  },
  {
    id: 4,
    name: 'Luxury Coach',
    category: 'coach',
    seats: '40+1',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600',
    badge: 'Featured',
    features: ['AC', 'WiFi', 'Premium Audio', 'TV', 'Toilet'],
    description: 'Luxury coach for large groups. Ideal for corporate events, weddings, and group tours.',
    price: 25000,
    rating: 4.6
  },
  {
    id: 5,
    name: 'Mahindra Scorpio',
    category: 'suv',
    seats: '4+1',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=600',
    badge: 'Adventure',
    features: ['AC', 'Music System', 'Off-road Capable', 'GPS'],
    description: 'Rugged SUV for adventure travel. Perfect for mountain roads and off-road expeditions.',
    price: 7500,
    rating: 4.5
  },
  {
    id: 6,
    name: 'Honda City',
    category: 'sedan',
    seats: '3+1',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
    badge: 'Comfort',
    features: ['AC', 'Music System', 'Spacious', 'Fuel Efficient'],
    description: 'Comfortable sedan for city travel and airport transfers. Smooth ride with premium features.',
    price: 6500,
    rating: 4.4
  }
];

export default function Fleet() {
  const [category, setCategory] = useState('all');
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredVehicles = category === 'all'
    ? allVehicles
    : allVehicles.filter(v => v.category === category);

  return (
    <>
      {/* ================= FLEET HERO ================= */}
      <section className="fleet-hero">
        <div className="fleet-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="fleet-hero-scrim"></div>
        <div className="fleet-hero-content">
          {/* <span className="sub-badge"><i className="fa-solid fa-car"></i> Premium Fleet</span> */}
          <h1>Comfort for <span className="italic">Every Group Size</span></h1>
          <p>Meticulously maintained, sanitised and driven by locals who know the route</p>
          <div className="fleet-breadcrumb">
            <Link to="/">Home</Link> / <span>Fleet</span>
          </div>
        </div>
      </section>

      {/* ================= FLEET STATS ================= */}
      <div className="container">
        <div className="fleet-stats-grid reveal">
          <div className="fleet-stat-card">
            <span className="number">49</span>
            <span className="label">Vehicles in Fleet</span>
          </div>
          <div className="fleet-stat-card">
            <span className="number">4</span>
            <span className="label">Vehicle Categories</span>
          </div>
          <div className="fleet-stat-card">
            <span className="number">100%</span>
            <span className="label">Sanitised &amp; Maintained</span>
          </div>
          <div className="fleet-stat-card">
            <span className="number">4.9★</span>
            <span className="label">Driver Rating</span>
          </div>
        </div>
      </div>

      {/* ================= FLEET CATEGORY TABS ================= */}
      <section className="section" style={{ paddingTop: '30px', paddingBottom: 0 }}>
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Our Fleet</div>
              <h2>Choose Your <span className="italic">Perfect Ride</span></h2>
            </div>
            <p>Premium vehicles for every journey, from intimate getaways to group adventures.</p>
          </div>

          <div className="fleet-tabs reveal">
            {[
              { label: 'All Vehicles', value: 'all', icon: 'fa-solid fa-asterisk' },
              { label: 'SUVs', value: 'suv', icon: 'fa-solid fa-car' },
              { label: 'Sedans', value: 'sedan', icon: 'fa-solid fa-car-side' },
              { label: 'Tempo Traveller', value: 'tempo', icon: 'fa-solid fa-van-shuttle' },
              { label: 'Luxury Coaches', value: 'coach', icon: 'fa-solid fa-bus' }
            ].map(tab => (
              <button 
                key={tab.value}
                className={`fleet-tab ${category === tab.value ? 'active' : ''}`}
                onClick={() => setCategory(tab.value)}
              >
                <i className={tab.icon}></i> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FLEET GRID ================= */}
      <section className="section" style={{ padding: '10px' }}>
        <div className="container">
          <div className="fleet-grid reveal">
            {filteredVehicles.length === 0 ? (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px 20px' }}>
                <i className="fa-solid fa-car" style={{ fontSize: '3rem', color: 'var(--ink-faint)', display: 'block', marginBottom: '16px' }}></i>
                <h3 style={{ color: 'var(--ink-soft)' }}>No vehicles in this category</h3>
                <p style={{ color: 'var(--ink-faint)' }}>Try selecting a different category.</p>
              </div>
            ) : (
              filteredVehicles.map(v => (
                <div key={v.id} className="fleet-vehicle-card" data-category={v.category}>
                  <div className="image-wrap">
                    <img src={v.image} alt={v.name} loading="lazy" />
                    <span className={`badge ${v.badge === 'Featured' ? 'featured' : ''}`}>{v.badge}</span>
                    <span className="seat-count"><i className="fa-regular fa-user"></i> {v.seats}</span>
                    <span 
                      className={`wishlist ${wishlist.includes(v.id) ? 'liked' : ''}`}
                      onClick={() => toggleWishlist(v.id)}
                      style={{ background: wishlist.includes(v.id) ? '#e74c3c' : 'rgba(255,255,255,0.2)' }}
                    >
                      <i className={wishlist.includes(v.id) ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
                    </span>
                  </div>
                  <div className="content">
                    <h3>{v.name}</h3>
                    <div className="subtitle"><i className="fa-solid fa-star" style={{ color: 'var(--gold)' }}></i> {v.rating} ★</div>
                    <div className="features">
                      {v.features.map((feat, i) => (
                        <span key={i}><i className="fa-solid fa-check"></i> {feat}</span>
                      ))}
                    </div>
                    <p>{v.description}</p>
                    <div className="footer">
                      <div className="price">₹{v.price.toLocaleString()} <span>/ day</span></div>
                      <Link to="/contact" className="btn btn-brand btn-sm">Book Now</Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ================= FEATURED VEHICLE BANNER ================= */}
      <section className="section" style={{ padding: 0 }}>
        <div className="container">
          <div className="featured-vehicle reveal">
            <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200" alt="Luxury SUV" />
            <div className="ov"></div>
            <div className="content">
              <span className="tag">⭐ Featured Vehicle</span>
              <h2>Premium SUV – Luxury Edition</h2>
              <p>Experience comfort and style with our premium SUVs. Perfect for families and small groups seeking luxury on the road.</p>
              <div className="specs">
                <span>👥 4+1 Seats</span>
                <span>❄️ Premium AC</span>
                <span>🎵 Bose Audio</span>
                <span>📶 WiFi Enabled</span>
              </div>
              <Link to="/contact" className="btn btn-brand"><i className="fa-regular fa-calendar-check"></i> Book This Vehicle</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE OUR FLEET ================= */}
      <section className="section sand tight">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Why Choose Our Fleet</div>
              <h2>Travel with <span className="italic">Confidence</span></h2>
            </div>
            <p>Every vehicle is maintained to the highest standards for your safety and comfort.</p>
          </div>

          <div className="benefits-grid reveal">
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-shield-halved"></i></div>
              <h4>Safety First</h4>
              <p>Regular maintenance and safety checks on all vehicles</p>
            </div>
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-spray-can-sparkles"></i></div>
              <h4>Sanitised &amp; Clean</h4>
              <p>Thoroughly sanitised before every journey</p>
            </div>
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-user-tie"></i></div>
              <h4>Expert Drivers</h4>
              <p>Experienced, courteous, and route-savvy chauffeurs</p>
            </div>
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-headset"></i></div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock assistance for all your travel needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="cta-strip">
        <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1600" alt="Mountain road" />
        <div className="ov"></div>
        <div className="container content">
          <div className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Ready to Ride?</div>
          <h2>Book your <span className="italic">premium vehicle</span> today</h2>
          <div className="actions">
            <Link to="/contact" className="btn btn-brand"><i className="fa-regular fa-paper-plane"></i> Get a Quote</Link>
            <a href="tel:+919811022334" className="btn btn-line"><i className="fa-solid fa-phone"></i> +91 98110 22334</a>
          </div>
        </div>
      </section>
    </>
  );
}
