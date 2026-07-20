import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSuccess(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      budget: '',
      message: ''
    });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <>
      {/* ================= CONTACT HERO ================= */}
      <section className="contact-hero">
        <div className="contact-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="contact-hero-scrim"></div>
        <div className="contact-hero-content">
          {/* <span className="sub-badge"><i className="fa-solid fa-headset"></i> Contact Us</span> */}
          <h1>Let's Start <span className="italic">Planning</span></h1>
          <p>Have questions or ready to book? Reach out to our travel specialists today.</p>
          <div className="contact-breadcrumb">
            <Link to="/">Home</Link> / <span>Contact</span>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO CARDS ================= */}
      <div className="container">
        <div className="contact-info-grid reveal">
          <div className="contact-info-card">
            <div className="icon"><i className="fa-solid fa-phone"></i></div>
            <h4>Call Us</h4>
            <p>Speak to our travel expert</p>
            <a href="tel:+919811022334">+91 98110 22334</a>
          </div>
          <div className="contact-info-card">
            <div className="icon"><i className="fa-brands fa-whatsapp"></i></div>
            <h4>WhatsApp Us</h4>
            <p>Immediate support chat</p>
            <a href="https://wa.me/919811022334" target="_blank" rel="noreferrer">+91 98110 22334</a>
          </div>
          <div className="contact-info-card">
            <div className="icon"><i className="fa-regular fa-envelope"></i></div>
            <h4>Email Us</h4>
            <p>Send your tour inquiries</p>
            <a href="mailto:info@shreeglobalholidays.com">info@shreeglobal.com</a>
          </div>
          <div className="contact-info-card">
            <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
            <h4>Visit Office</h4>
            <p>Connaught Place</p>
            <a href="#map">Get Directions</a>
          </div>
        </div>
      </div>

      {/* ================= CONTACT FORM + MAP ================= */}
      <section className="section" id="contact-form" style={{ padding: '20px 0' }}>
        <div className="container">
          <div className="contact-main-wrap reveal">
            {/* Form */}
            <div className="contact-form-wrap">
              <div className="form-header">
                <div className="eyebrow">Get a Free Quote</div>
                <h3>Tell us about your <span className="italic">dream trip</span></h3>
                <p>Fill in the details and we'll get back to you within 2 hours with a personalized itinerary.</p>
              </div>

              {success && (
                <div style={{ background: 'var(--green-light)', color: 'var(--green-dk)', padding: '12px 16px', borderRadius: 'var(--r-s)', marginBottom: '20px', fontSize: '0.9rem', fontWeight: 600 }}>
                  <i className="fa-solid fa-circle-check"></i> Thank you! Your request has been received. Our team will get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name <span className="required">*</span></label>
                    <input 
                      type="text" 
                      id="fullName" 
                      placeholder="Your full name" 
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address <span className="required">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="Your email address" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number <span className="required">*</span></label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="Your phone number" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Budget Range</label>
                    <select id="budget" value={formData.budget} onChange={handleChange}>
                      <option value="">Select your budget</option>
                      <option value="standard">Standard (₹10,000 - ₹20,000)</option>
                      <option value="premium">Premium (₹20,000 - ₹40,000)</option>
                      <option value="luxury">Luxury (₹40,000 - ₹75,000)</option>
                      <option value="ultra">Ultra Luxury (₹75,000+)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Travel Details</label>
                  <textarea 
                    id="message" 
                    placeholder="Destinations, dates, number of travelers, vehicle preference, special requests..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-brand">
                  <i className="fa-regular fa-paper-plane"></i> Get Free Quote
                </button>

                <p className="form-note">
                  <i className="fa-regular fa-lock"></i> Your information is secure and will not be shared
                </p>
              </form>
            </div>

            {/* Map */}
            <div className="contact-map-wrap" id="map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.234567890123!2d77.216721!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce24e8d8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Shree Global Holidays Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OFFICE LOCATIONS ================= */}
      <section className="section sand tight">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Our Offices</div>
              <h2>Find Us <span className="italic">Across India</span></h2>
            </div>
            <p>Visit our offices for a personalized travel consultation.</p>
          </div>

          <div className="offices-grid reveal">
            <div className="office-card">
              <span className="icon"><i className="fa-solid fa-building"></i></span>
              <h4>New Delhi (Headquarters)</h4>
              <p>Connaught Place,<br />New Delhi - 110001</p>
            </div>
            <div className="office-card">
              <span className="icon"><i className="fa-solid fa-city"></i></span>
              <h4>Mumbai</h4>
              <p>Bandra Kurla Complex,<br />Mumbai - 400051</p>
            </div>
            <div className="office-card">
              <span className="icon"><i className="fa-solid fa-building-columns"></i></span>
              <h4>Bengaluru</h4>
              <p>Indiranagar,<br />Bengaluru - 560038</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUSINESS HOURS ================= */}
      <section className="section">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Business Hours</div>
              <h2>When to <span className="italic">Reach Us</span></h2>
            </div>
            <p>Our team is available to assist you with your travel needs.</p>
          </div>

          <div className="hours-wrap reveal">
            <div className="hours-card">
              <span className="icon"><i className="fa-regular fa-clock"></i></span>
              <h4>Office Hours</h4>
              <div className="day">
                <span>Monday - Friday</span>
                <span className="time">9:00 AM - 7:00 PM</span>
              </div>
              <div className="day">
                <span>Saturday</span>
                <span className="time">10:00 AM - 5:00 PM</span>
              </div>
              <div className="day">
                <span>Sunday</span>
                <span className="time">Closed</span>
              </div>
            </div>
            <div className="hours-card">
              <span className="icon"><i className="fa-solid fa-headset"></i></span>
              <h4>24×7 Support</h4>
              <div className="day">
                <span>Emergency Helpline</span>
                <span className="time">📞 +91 98110 22334</span>
              </div>
              <div className="day">
                <span>WhatsApp Support</span>
                <span className="time">💬 24×7 Available</span>
              </div>
              <div className="day">
                <span>Email Support</span>
                <span className="time">✉️ 2-Hour Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
