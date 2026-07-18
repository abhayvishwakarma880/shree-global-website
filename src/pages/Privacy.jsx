import { Link } from 'react-router-dom';
import './Legal.css';

export default function Privacy() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="legal-hero">
        <div className="legal-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="legal-hero-scrim"></div>
        <div className="legal-hero-content">
          <span className="sub-badge"><i className="fa-solid fa-shield-halved"></i> Legal</span>
          <h1>Privacy <span className="italic">Policy</span></h1>
          <p>How we protect and handle your personal information</p>
          <div className="legal-breadcrumb">
            <Link to="/">Home</Link> / <span>Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="legal-content reveal">
            <span className="last-updated"><i className="fa-regular fa-calendar"></i> Last Updated: 1 July 2026</span>

            <h2>1. Introduction</h2>
            <p>Welcome to Shree Global Holidays. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>

            <div className="highlight-box">
              <p><strong>📌 Quick Summary:</strong> We collect only the information you provide to us. We use it to deliver our travel services, communicate with you, and improve your experience. We never sell your data to third parties.</p>
            </div>

            <h2>2. Information We Collect</h2>
            <p>We collect information that you voluntarily provide to us when you:</p>
            <ul>
              <li><strong>Book a tour or package:</strong> Name, email, phone number, travel preferences, and payment details</li>
              <li><strong>Contact us:</strong> Name, email, phone number, and message content</li>
              <li><strong>Subscribe to our newsletter:</strong> Email address</li>
              <li><strong>Use our website:</strong> Cookies and usage data (see Section 6)</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li><strong>Process bookings:</strong> Confirm reservations, send itineraries, and manage payments</li>
              <li><strong>Communicate:</strong> Send booking confirmations, updates, and respond to inquiries</li>
              <li><strong>Personalize:</strong> Tailor travel recommendations based on your preferences</li>
              <li><strong>Improve services:</strong> Analyze feedback to enhance our offerings</li>
              <li><strong>Marketing:</strong> Send promotional offers (only with your consent)</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li><strong>Service Partners:</strong> Hotels, transport providers, and guides (to fulfill your booking)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information, including:</p>
            <ul>
              <li><strong>Encryption:</strong> SSL encryption for data transmission</li>
              <li><strong>Access Control:</strong> Limited access to personal data</li>
              <li><strong>Secure Storage:</strong> Protected servers with regular security audits</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>We use cookies to enhance your browsing experience. Cookies help us understand how you use our website and improve our services. You can control cookie preferences through your browser settings.</p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Update:</strong> Correct or update your information</li>
              <li><strong>Delete:</strong> Request deletion of your data (subject to legal requirements)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
            </ul>

            <h2>8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to review their privacy policies before providing any information.</p>

            <h2>9. Children's Privacy</h2>
            <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.</p>

            <h2>10. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page. We encourage you to review this policy periodically.</p>

            <div className="highlight-box">
              <p><strong>📧 Questions?</strong> If you have any questions about this Privacy Policy, please <Link to="/contact" style={{ color: 'var(--green-dk)', fontWeight: 600 }}>contact us</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
