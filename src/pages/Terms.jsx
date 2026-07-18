import { Link } from 'react-router-dom';
import './Legal.css';

export default function Terms() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="legal-hero">
        <div className="legal-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="legal-hero-scrim"></div>
        <div className="legal-hero-content">
          <span className="sub-badge"><i className="fa-solid fa-file-lines"></i> Legal</span>
          <h1>Terms &amp; <span className="italic">Conditions</span></h1>
          <p>Our terms of service for booking travel with us</p>
          <div className="legal-breadcrumb">
            <Link to="/">Home</Link> / <span>Terms &amp; Conditions</span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="legal-content reveal">
            <span className="last-updated"><i className="fa-regular fa-calendar"></i> Last Updated: 1 July 2026</span>

            <h2>1. Acceptance of Terms</h2>
            <p>By using our services and booking tours with Shree Global Holidays, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>

            <div className="highlight-box">
              <p><strong>📌 Quick Summary:</strong> These terms govern your relationship with Shree Global Holidays. By booking with us, you agree to our payment, cancellation, and liability policies.</p>
            </div>

            <h2>2. Booking Process</h2>
            <p>To confirm a booking, we require:</p>
            <ul>
              <li><strong>Deposit:</strong> An advance payment of 25-50% of the total package cost</li>
              <li><strong>Balance:</strong> Full payment must be completed at least 15 days before departure</li>
              <li><strong>Documentation:</strong> Valid ID proof and any required travel documents</li>
            </ul>

            <h2>3. Payment Terms</h2>
            <p>All payments must be made in Indian Rupees (₹) or as agreed upon. We accept:</p>
            <ul>
              <li>Bank Transfers (NEFT/RTGS/IMPS)</li>
              <li>Credit/Debit Cards (Visa, Mastercard, Amex)</li>
              <li>UPI (Google Pay, PhonePe, Paytm)</li>
              <li>PayPal (for international clients)</li>
            </ul>

            <h2>4. Cancellation Policy</h2>
            <p>Cancellation charges apply as follows:</p>
            <ul>
              <li><strong>30+ days before departure:</strong> Full refund (minus administrative fee)</li>
              <li><strong>15-29 days before departure:</strong> 80% refund</li>
              <li><strong>7-14 days before departure:</strong> 50% refund</li>
              <li><strong>Less than 7 days:</strong> No refund</li>
            </ul>

            <h2>5. Modifications</h2>
            <p>If you wish to modify your booking, please contact us at least 7 days before departure. Changes are subject to availability and may incur additional costs.</p>

            <h2>6. Travel Insurance</h2>
            <p>We strongly recommend that all travelers purchase comprehensive travel insurance covering medical expenses, trip cancellation, and loss of baggage. Shree Global Holidays is not liable for any losses or damages not covered by insurance.</p>

            <h2>7. Liabilities</h2>
            <p>Shree Global Holidays acts as an intermediary between you and service providers (hotels, transport, guides). We are not liable for:</p>
            <ul>
              <li>Delays, cancellations, or changes caused by third-party providers</li>
              <li>Loss, injury, or damage to personal property</li>
              <li>Medical expenses or illness during travel</li>
              <li>Natural disasters, political unrest, or unforeseen events</li>
            </ul>

            <h2>8. Code of Conduct</h2>
            <p>We expect all travelers to:</p>
            <ul>
              <li>Respect local customs, traditions, and laws</li>
              <li>Treat guides, drivers, and fellow travelers with courtesy</li>
              <li>Protect the environment and cultural heritage</li>
              <li>Follow safety instructions provided by our team</li>
            </ul>

            <h2>9. Intellectual Property</h2>
            <p>All content on our website, including text, images, logos, and designs, is the property of Shree Global Holidays and is protected by copyright laws. You may not reproduce or distribute any content without our written permission.</p>

            <h2>10. Complaints</h2>
            <p>If you have any complaints during your journey, please contact our 24/7 helpline at <strong>+91 98110 22334</strong>. We will make every effort to resolve the issue promptly.</p>

            <div className="highlight-box">
              <p><strong>📧 Questions?</strong> If you have any questions about these terms, please <Link to="/contact" style={{ color: 'var(--green-dk)', fontWeight: 600 }}>contact us</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
