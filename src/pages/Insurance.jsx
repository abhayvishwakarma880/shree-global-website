import { Link } from 'react-router-dom';
import './Insurance.css';

export default function Insurance() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="insurance-hero">
        <div className="insurance-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="insurance-hero-scrim"></div>
        <div className="insurance-hero-content">
          <span className="sub-badge"><i className="fa-solid fa-shield"></i> Travel Protection</span>
          <h1>Travel <span className="italic">Insurance</span></h1>
          <p>Comprehensive coverage for your peace of mind during your Indian journey</p>
          <div className="insurance-breadcrumb">
            <Link to="/">Home</Link> / <span>Travel Insurance</span>
          </div>
        </div>
      </section>

      {/* ================= COVERAGE ================= */}
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">What's Covered</div>
              <h2>Comprehensive <span className="italic">Protection</span></h2>
            </div>
            <p>Our travel insurance plans cover everything you need for a worry-free journey.</p>
          </div>
          <div className="coverage-grid reveal">
            <div className="coverage-card">
              <span className="icon"><i className="fa-solid fa-hospital"></i></span>
              <h4>Medical Coverage</h4>
              <p>Emergency medical expenses, hospitalization, and doctor visits</p>
            </div>
            <div className="coverage-card">
              <span className="icon"><i className="fa-solid fa-rotate-left"></i></span>
              <h4>Trip Cancellation</h4>
              <p>Refund for canceled trips due to emergencies or unforeseen events</p>
            </div>
            <div className="coverage-card">
              <span className="icon"><i className="fa-solid fa-suitcase"></i></span>
              <h4>Baggage Protection</h4>
              <p>Coverage for lost, damaged, or delayed baggage</p>
            </div>
            <div className="coverage-card">
              <span className="icon"><i className="fa-solid fa-clock"></i></span>
              <h4>Travel Delay</h4>
              <p>Compensation for flight delays and missed connections</p>
            </div>
            <div className="coverage-card">
              <span className="icon"><i className="fa-solid fa-ambulance"></i></span>
              <h4>Emergency Evacuation</h4>
              <p>Medical evacuation and repatriation services</p>
            </div>
            <div className="coverage-card">
              <span className="icon"><i className="fa-solid fa-hand-holding-heart"></i></span>
              <h4>24/7 Assistance</h4>
              <p>Round-the-clock emergency support and travel assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLANS ================= */}
      <section className="section sand tight">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Insurance Plans</div>
              <h2>Choose Your <span className="italic">Coverage</span></h2>
            </div>
            <p>Select the plan that best fits your travel needs and budget.</p>
          </div>
          <div className="plans-grid reveal">
            <div className="plan-card">
              <div className="name">Basic</div>
              <div className="price">₹999 <span>/ trip</span></div>
              <ul>
                <li><i className="fa-solid fa-check"></i> Medical Coverage: ₹50,000</li>
                <li><i className="fa-solid fa-check"></i> Trip Cancellation: ₹25,000</li>
                <li><i className="fa-solid fa-check"></i> Baggage Protection: ₹10,000</li>
                <li><i className="fa-solid fa-check"></i> 24/7 Assistance</li>
              </ul>
              <Link to="/contact" className="btn btn-dark btn-sm">Get Quote</Link>
            </div>

            <div className="plan-card popular">
              <span className="popular-badge">Most Popular</span>
              <div className="name">Standard</div>
              <div className="price">₹1,999 <span>/ trip</span></div>
              <ul>
                <li><i className="fa-solid fa-check"></i> Medical Coverage: ₹1,00,000</li>
                <li><i className="fa-solid fa-check"></i> Trip Cancellation: ₹50,000</li>
                <li><i className="fa-solid fa-check"></i> Baggage Protection: ₹25,000</li>
                <li><i className="fa-solid fa-check"></i> Travel Delay: ₹10,000</li>
                <li><i className="fa-solid fa-check"></i> 24/7 Assistance</li>
              </ul>
              <Link to="/contact" className="btn btn-brand btn-sm">Get Quote</Link>
            </div>

            <div className="plan-card">
              <div className="name">Premium</div>
              <div className="price">₹3,499 <span>/ trip</span></div>
              <ul>
                <li><i className="fa-solid fa-check"></i> Medical Coverage: ₹2,50,000</li>
                <li><i className="fa-solid fa-check"></i> Trip Cancellation: ₹1,00,000</li>
                <li><i className="fa-solid fa-check"></i> Baggage Protection: ₹50,000</li>
                <li><i className="fa-solid fa-check"></i> Travel Delay: ₹25,000</li>
                <li><i className="fa-solid fa-check"></i> Emergency Evacuation</li>
                <li><i className="fa-solid fa-check"></i> 24/7 Priority Assistance</li>
              </ul>
              <Link to="/contact" className="btn btn-dark btn-sm">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW TO CLAIM ================= */}
      <section className="section">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Claims Process</div>
              <h2>How to <span className="italic">File a Claim</span></h2>
            </div>
            <p>Simple and hassle-free claims process for your travel insurance.</p>
          </div>
          <div className="benefits-grid reveal">
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-phone"></i></div>
              <h4>1. Contact Us</h4>
              <p>Call our 24/7 helpline to report the incident</p>
            </div>
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-file"></i></div>
              <h4>2. Submit Documents</h4>
              <p>Upload required documents and medical reports</p>
            </div>
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-circle-check"></i></div>
              <h4>3. Get Reimbursed</h4>
              <p>Receive your claim payment within 7-10 business days</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="cta-strip">
        <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1600" alt="Mountain road" />
        <div className="ov"></div>
        <div className="container content">
          <div className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Start Your Journey</div>
          <h2>Ready to <span className="italic">explore India</span> with us?</h2>
          <div className="actions">
            <Link to="/contact" className="btn btn-brand"><i className="fa-regular fa-paper-plane"></i> Get Free Quote</Link>
            <a href="tel:+919811022334" className="btn btn-line"><i className="fa-solid fa-phone"></i> +91 98110 22334</a>
          </div>
        </div>
      </section>
    </>
  );
}
