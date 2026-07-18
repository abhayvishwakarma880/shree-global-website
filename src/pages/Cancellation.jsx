import { Link } from 'react-router-dom';
import './Legal.css';

export default function Cancellation() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="legal-hero">
        <div className="legal-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="legal-hero-scrim"></div>
        <div className="legal-hero-content">
          <span className="sub-badge"><i className="fa-solid fa-rotate-left"></i> Policy</span>
          <h1>Cancellation <span className="italic">Policy</span></h1>
          <p>Clear guidelines on cancellations, refunds, and modifications</p>
          <div className="legal-breadcrumb">
            <Link to="/">Home</Link> / <span>Cancellation Policy</span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="legal-content reveal">
            <span className="last-updated"><i className="fa-regular fa-calendar"></i> Last Updated: 1 July 2026</span>

            <h2>1. Overview</h2>
            <p>We understand that plans can change. Our cancellation policy is designed to be fair and transparent. Please read the following guidelines carefully before booking with us.</p>

            <div className="highlight-box">
              <p><strong>📌 Quick Summary:</strong> Cancellations made 30+ days before departure receive a full refund. Cancellations within 7 days of departure are non-refundable. We're flexible with emergencies.</p>
            </div>

            <h2>2. Cancellation Timeline &amp; Refunds</h2>
            <p>The following cancellation charges apply based on the time of cancellation before the scheduled departure date:</p>

            <table className="cancellation-table">
              <thead>
                <tr>
                  <th>Cancellation Period</th>
                  <th>Refund Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>30+ days</strong> before departure</td>
                  <td>100% refund</td>
                  <td><span className="refund-badge full">Full Refund</span></td>
                </tr>
                <tr>
                  <td><strong>15-29 days</strong> before departure</td>
                  <td>80% refund</td>
                  <td><span className="refund-badge partial">Partial Refund</span></td>
                </tr>
                <tr>
                  <td><strong>7-14 days</strong> before departure</td>
                  <td>50% refund</td>
                  <td><span className="refund-badge partial">Partial Refund</span></td>
                </tr>
                <tr>
                  <td><strong>Less than 7 days</strong> before departure</td>
                  <td>No refund</td>
                  <td><span className="refund-badge none">Non-Refundable</span></td>
                </tr>
              </tbody>
            </table>

            <p><em>Note: A small administrative fee (₹500) may be deducted from all refunds to cover processing costs.</em></p>

            <h2>3. Emergency Cancellations</h2>
            <p>We understand that emergencies happen. If you need to cancel due to:</p>
            <ul>
              <li><strong>Medical emergencies:</strong> Hospitalization or serious illness (documentation required)</li>
              <li><strong>Family emergencies:</strong> Death or serious illness of an immediate family member</li>
              <li><strong>Natural disasters:</strong> Government advisories or travel bans</li>
            </ul>
            <p>Please contact us immediately. We will review your case and may offer a full or partial refund at our discretion.</p>

            <h2>4. Modifications &amp; Date Changes</h2>
            <p>If you wish to change your travel dates or modify your itinerary:</p>
            <ul>
              <li><strong>30+ days before departure:</strong> Free of charge (subject to availability)</li>
              <li><strong>15-29 days before departure:</strong> ₹1,000 modification fee</li>
              <li><strong>7-14 days before departure:</strong> ₹2,000 modification fee</li>
              <li><strong>Less than 7 days:</strong> Modifications are not possible</li>
            </ul>

            <h2>5. Refund Process</h2>
            <p>Refunds are processed within 7-10 business days after the cancellation request is approved. Refunds will be made using the original payment method. Please note that bank processing times may vary.</p>

            <h2>6. No-Show Policy</h2>
            <p>If you do not show up for your tour without prior communication, no refund will be provided. Please inform us at least 24 hours in advance if you are unable to join.</p>

            <h2>7. Cancellation by Shree Global Holidays</h2>
            <p>In the unlikely event that we need to cancel your tour due to operational reasons, natural disasters, or government restrictions, you will receive:</p>
            <ul>
              <li><strong>Full refund</strong> of all payments made</li>
              <li><strong>Alternative dates</strong> at no additional cost (subject to availability)</li>
              <li><strong>Upgrade options</strong> for future travel</li>
            </ul>

            <div className="highlight-box">
              <p><strong>📧 Questions?</strong> If you have any questions about our cancellation policy, please <Link to="/contact" style={{ color: 'var(--green-dk)', fontWeight: 600 }}>contact us</Link> or call <strong>+91 98110 22334</strong>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
