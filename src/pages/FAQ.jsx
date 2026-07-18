import { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const faqData = [
  // Booking
  {
    id: 1,
    category: 'booking',
    question: 'How do I book a tour with Shree Global Holidays?',
    answer: 'Booking with us is simple! You can book through our website by filling out the contact form, call us directly at +91 98110 22334, or send us an email at hello@shreeglobalholidays.com. Our team will get back to you within 2 hours with a personalized itinerary.'
  },
  {
    id: 2,
    category: 'booking',
    question: 'Can I customise a fixed package?',
    answer: 'Yes — every listed package is a starting template. Share your dates and needs and we\'ll rebuild it around you. We understand that every traveler is unique, and we pride ourselves on creating personalized experiences.'
  },
  {
    id: 3,
    category: 'booking',
    question: 'What is the booking process?',
    answer: 'Our booking process is simple:\n• Step 1: Share your travel preferences\n• Step 2: We create a custom itinerary\n• Step 3: Review and approve the plan\n• Step 4: Pay a small advance to confirm\n• Step 5: Enjoy your journey!'
  },
  {
    id: 4,
    category: 'booking',
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 2-3 months in advance for peak seasons (October-March) and 1 month for off-season. This ensures availability of preferred hotels and vehicles.'
  },
  // Travel Tips
  {
    id: 5,
    category: 'travel',
    question: 'What travel documents are required for domestic travel?',
    answer: 'A government photo ID (Aadhaar, passport, driving licence) is enough for domestic trips. Foreign nationals need their passport and valid visa. Always carry a copy of your ID and keep the original safe.'
  },
  {
    id: 6,
    category: 'travel',
    question: 'What\'s the best time to visit North India?',
    answer: 'October to March is ideal for the plains and heritage circuits. April to June suits Himalayan hill stations. Monsoon (July-September) is great for lush green landscapes but roads may be challenging in some areas.'
  },
  {
    id: 7,
    category: 'travel',
    question: 'Is India safe for solo female travelers?',
    answer: 'India is generally safe for solo female travelers, especially with a trusted travel partner like us. We provide female-friendly guides, verified drivers, and safe accommodations. We also offer 24/7 support for all travelers.'
  },
  {
    id: 8,
    category: 'travel',
    question: 'What should I pack for a trip to India?',
    answer: 'Pack comfortable cotton clothes for summer, warm layers for winter (especially North India), comfortable walking shoes, sunscreen, a hat, insect repellent, and a first-aid kit. Don\'t forget your camera!'
  },
  // Destinations
  {
    id: 9,
    category: 'destinations',
    question: 'Which is the best destination for first-time visitors?',
    answer: 'The Golden Triangle (Delhi, Agra, Jaipur) is perfect for first-timers. It offers a taste of India\'s rich history, culture, and architecture. You\'ll experience the majestic Taj Mahal, vibrant bazaars, and royal palaces.'
  },
  {
    id: 10,
    category: 'destinations',
    question: 'How many days do I need for Kerala?',
    answer: 'A minimum of 5-7 days is recommended to experience Kerala\'s backwaters, beaches, hill stations, and wildlife sanctuaries. You can extend to 10 days for a more relaxed pace.'
  },
  {
    id: 11,
    category: 'destinations',
    question: 'What\'s the best time to visit the Himalayas?',
    answer: 'May to September is ideal for Himalayan destinations. The weather is pleasant, and roads are accessible for most mountain passes. Winter (December-February) is for snow lovers and adventure seekers.'
  },
  {
    id: 12,
    category: 'destinations',
    question: 'Are these destinations family-friendly?',
    answer: 'Absolutely! Most destinations offer family-friendly activities, accommodations, and transport options suitable for all age groups. We can tailor the itinerary to suit children and elderly travelers.'
  },
  // Payments
  {
    id: 13,
    category: 'payments',
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers, credit/debit cards (Visa, Mastercard, Amex), UPI (Google Pay, PhonePe, Paytm), and PayPal. We also offer flexible installment options for long-duration tours.'
  },
  {
    id: 14,
    category: 'payments',
    question: 'Is there any hidden cost?',
    answer: 'No — we believe in complete transparency. All costs are discussed upfront and clearly mentioned in your itinerary. There are no hidden charges or surprises. Any optional activities are clearly marked.'
  },
  // Cancellation
  {
    id: 15,
    category: 'cancellation',
    question: 'What is your cancellation policy?',
    answer: 'Our cancellation policy is simple:\n• 30+ days before departure: Full refund\n• 15-29 days before departure: 80% refund\n• 7-14 days before departure: 50% refund\n• Less than 7 days: No refund\nHowever, we are flexible and understand emergencies.'
  },
  {
    id: 16,
    category: 'cancellation',
    question: 'Can I change my travel dates after booking?',
    answer: 'Yes, you can change your travel dates based on availability. We charge a small administrative fee for date changes. The fee depends on how close the change is to the original travel date.'
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [activeIndex, setActiveIndex] = useState(0); // Open first item by default

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  // Filter & Search
  const filteredFAQ = faqData.filter((item) => {
    if (activeCategory !== 'all' && item.category !== activeCategory) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <>
      {/* ================= FAQ HERO ================= */}
      <section className="faq-hero">
        <div className="faq-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="faq-hero-scrim"></div>
        <div className="faq-hero-content">
          <span className="sub-badge"><i className="fa-regular fa-circle-question"></i> Help Desk</span>
          <h1>Frequently Asked <span className="italic">Questions</span></h1>
          <p>Find answers to common queries about bookings, itineraries, vehicles, and payment plans.</p>
          <div className="faq-search-box">
            <input 
              type="text" 
              placeholder="Search questions, topics, keywords..." 
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setActiveIndex(-1); // reset accordion active state on search
              }}
            />
            <button><i className="fa-solid fa-search"></i> Search</button>
          </div>
          <div className="faq-breadcrumb">
            <Link to="/">Home</Link> / <span>FAQ</span>
          </div>
        </div>
      </section>

      {/* ================= FAQ CATEGORY TABS ================= */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: 0 }}>
        <div className="container">
          <div className="faq-tabs reveal">
            {[
              { label: 'All Questions', value: 'all', icon: 'fa-solid fa-asterisk' },
              { label: 'Booking', value: 'booking', icon: 'fa-solid fa-calendar-check' },
              { label: 'Travel Tips', value: 'travel', icon: 'fa-solid fa-plane' },
              { label: 'Destinations', value: 'destinations', icon: 'fa-solid fa-location-dot' },
              { label: 'Payments', value: 'payments', icon: 'fa-solid fa-credit-card' },
              { label: 'Cancellation', value: 'cancellation', icon: 'fa-solid fa-rotate-left' }
            ].map(tab => (
              <button 
                key={tab.value}
                className={`faq-tab ${activeCategory === tab.value ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(tab.value);
                  setActiveIndex(0); // Open first item of new category
                }}
              >
                <i className={tab.icon}></i> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ACCORDION ================= */}
      <section className="section" style={{ padding: '10px' }}>
        <div className="container">
          <div className="faq-accordion-wrap reveal">
            {filteredFAQ.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <i className="fa-regular fa-circle-question" style={{ fontSize: '3rem', color: 'var(--ink-faint)', display: 'block', marginBottom: '16px' }}></i>
                <h3 style={{ color: 'var(--ink-soft)' }}>No questions found</h3>
                <p style={{ color: 'var(--ink-faint)' }}>Try adjusting your search or filter.</p>
              </div>
            ) : (
              filteredFAQ.map((item, idx) => (
                <div key={item.id} className={`faq-accordion-item ${activeIndex === idx ? 'active' : ''}`}>
                  <button className="question" onClick={() => toggleAccordion(idx)}>
                    <span className="icon-wrap">
                      <span className="num">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="q-icon"><i className="fa-regular fa-message"></i></span>
                      {item.question}
                    </span>
                    <span className="toggle-icon"><i className="fa-solid fa-plus"></i></span>
                  </button>
                  <div className="answer">
                    {item.answer.split('\n').map((para, pIdx) => {
                      const trimmed = para.trim();
                      if (trimmed.startsWith('•')) {
                        return (
                          <ul key={pIdx}>
                            <li>{trimmed.substring(1).trim()}</li>
                          </ul>
                        );
                      }
                      return <p key={pIdx}>{trimmed}</p>;
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ================= FAQ CONTACT CARD ================= */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '20px' }}>
        <div className="container">
          <div className="faq-contact-card reveal">
            <h3><i className="fa-regular fa-comment-dots"></i> Still Have Questions?</h3>
            <p>Our travel experts are here to help you with any queries about your Indian journey.</p>
            <div className="contact-options">
              <a href="tel:+919811022334"><i className="fa-solid fa-phone"></i> +91 98110 22334</a>
              <a href="https://wa.me/919811022334" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i> WhatsApp</a>
              <Link to="/contact"><i className="fa-regular fa-envelope"></i> Email Us</Link>
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
