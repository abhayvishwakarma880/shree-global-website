import { Link } from 'react-router-dom';
import './Careers.css';

export default function Careers() {
  return (
    <>
      {/* ================= CAREERS HERO ================= */}
      <section className="careers-hero">
        <div className="careers-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="careers-hero-scrim"></div>
        <div className="careers-hero-content">
          <span className="sub-badge"><i className="fa-solid fa-briefcase"></i> Careers</span>
          <h1>Join Our <span className="italic">Expert Team</span></h1>
          <p>We're looking for passionate travel experts to help design unique Indian journeys.</p>
          <div className="careers-breadcrumb">
            <Link to="/">Home</Link> / <span>Careers</span>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <div className="container">
        <div className="careers-stats reveal" style={{ display: 'grid' }}>
          <div className="careers-stat-card">
            <span className="number">50+</span>
            <span className="label">Team Members</span>
          </div>
          <div className="careers-stat-card">
            <span className="number">15+</span>
            <span className="label">Years of Excellence</span>
          </div>
          <div className="careers-stat-card">
            <span className="number">8,000+</span>
            <span className="label">Happy Travelers</span>
          </div>
          <div className="careers-stat-card">
            <span className="number">100%</span>
            <span className="label">Employee Satisfaction</span>
          </div>
        </div>
      </div>

      {/* ================= WHY JOIN US ================= */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Why Join Us</div>
              <h2>Work with <span className="italic">Passion</span></h2>
            </div>
            <p>Join a team that's passionate about travel and creating amazing experiences.</p>
          </div>
          <div className="benefits-grid reveal">
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-plane"></i></div>
              <h4>Travel Perks</h4>
              <p>Free and discounted travel opportunities across India</p>
            </div>
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-graduation-cap"></i></div>
              <h4>Learning &amp; Growth</h4>
              <p>Continuous training and career development programs</p>
            </div>
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-heart"></i></div>
              <h4>Great Culture</h4>
              <p>Collaborative, supportive, and fun work environment</p>
            </div>
            <div className="benefit-item">
              <div className="icon"><i className="fa-solid fa-medal"></i></div>
              <h4>Recognition</h4>
              <p>Performance bonuses and employee recognition programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOB OPENINGS ================= */}
      <section className="section sand tight">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Open Positions</div>
              <h2>Current <span className="italic">Opportunities</span></h2>
            </div>
            <p>Join our growing team and help travelers discover India.</p>
          </div>
          <div className="job-listings reveal">
            <div className="job-card">
              <span className="badge urgent">Urgent</span>
              <h3>Senior Travel Consultant</h3>
              <div className="location"><i className="fa-solid fa-location-dot"></i> New Delhi (On-site)</div>
              <div className="meta">
                <span><i className="fa-regular fa-clock"></i> Full-time</span>
                <span><i className="fa-regular fa-calendar"></i> Experience: 3-5 years</span>
              </div>
              <p>Design custom itineraries, manage bookings, and provide exceptional service to our luxury clients.</p>
              <div className="footer">
                <span className="salary">₹6L - ₹9L <span>/ year</span></span>
                <Link to="/contact" className="btn btn-brand btn-sm">Apply Now</Link>
              </div>
            </div>

            <div className="job-card">
              <span className="badge hybrid">Hybrid</span>
              <h3>Tour Operations Manager</h3>
              <div className="location"><i className="fa-solid fa-location-dot"></i> Mumbai (Hybrid)</div>
              <div className="meta">
                <span><i className="fa-regular fa-clock"></i> Full-time</span>
                <span><i className="fa-regular fa-calendar"></i> Experience: 5-7 years</span>
              </div>
              <p>Oversee tour operations, manage vendor relationships, and ensure seamless travel experiences.</p>
              <div className="footer">
                <span className="salary">₹8L - ₹12L <span>/ year</span></span>
                <Link to="/contact" className="btn btn-brand btn-sm">Apply Now</Link>
              </div>
            </div>

            <div className="job-card">
              <span className="badge remote">Remote</span>
              <h3>Digital Marketing Specialist</h3>
              <div className="location"><i className="fa-solid fa-location-dot"></i> Remote (India)</div>
              <div className="meta">
                <span><i className="fa-regular fa-clock"></i> Full-time</span>
                <span><i className="fa-regular fa-calendar"></i> Experience: 2-4 years</span>
              </div>
              <p>Manage social media, content creation, SEO, and digital campaigns to grow our brand presence.</p>
              <div className="footer">
                <span className="salary">₹4L - ₹7L <span>/ year</span></span>
                <Link to="/contact" className="btn btn-brand btn-sm">Apply Now</Link>
              </div>
            </div>

            <div className="job-card">
              <span className="badge new">New</span>
              <h3>Customer Experience Executive</h3>
              <div className="location"><i className="fa-solid fa-location-dot"></i> Bengaluru (On-site)</div>
              <div className="meta">
                <span><i className="fa-regular fa-clock"></i> Full-time</span>
                <span><i className="fa-regular fa-calendar"></i> Experience: 1-3 years</span>
              </div>
              <p>Handle customer inquiries, resolve issues, and ensure every traveler has a memorable experience.</p>
              <div className="footer">
                <span className="salary">₹3L - ₹5L <span>/ year</span></span>
                <Link to="/contact" className="btn btn-brand btn-sm">Apply Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CULTURE ================= */}
      <section className="section">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">Our Culture</div>
              <h2>Life at <span className="italic">Shree Global</span></h2>
            </div>
            <p>We believe in creating a workplace where everyone thrives.</p>
          </div>
          <div className="culture-grid reveal">
            <div className="culture-item">
              <span className="icon"><i className="fa-solid fa-people-group"></i></span>
              <h4>Collaborative Team</h4>
              <p>Work with passionate travel enthusiasts who support each other</p>
            </div>
            <div className="culture-item">
              <span className="icon"><i className="fa-solid fa-lightbulb"></i></span>
              <h4>Innovation First</h4>
              <p>Encourage new ideas and creative approaches to travel</p>
            </div>
            <div className="culture-item">
              <span className="icon"><i className="fa-solid fa-handshake"></i></span>
              <h4>Work-Life Balance</h4>
              <p>Flexible hours, remote options, and a healthy work-life balance</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATION PROCESS ================= */}
      <section className="section sand tight">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">How to Apply</div>
              <h2>Simple <span className="italic">Application</span> Process</h2>
            </div>
            <p>Four easy steps to join our team.</p>
          </div>
          <div className="process-grid reveal">
            <div className="process-step">
              <span className="step-num">1</span>
              <h4>Submit Application</h4>
              <p>Send your resume and cover letter through our contact form</p>
              <span className="arrow"><i className="fa-solid fa-chevron-right"></i></span>
            </div>
            <div className="process-step">
              <span className="step-num">2</span>
              <h4>Initial Screening</h4>
              <p>Our HR team will review your application and reach out</p>
              <span className="arrow"><i className="fa-solid fa-chevron-right"></i></span>
            </div>
            <div className="process-step">
              <span className="step-num">3</span>
              <h4>Interview</h4>
              <p>Meet our team and discuss your experience and goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORKPLACE TESTIMONIAL ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="testimonial-wrap reveal">
            <div>
              <div className="quote">
                <span className="mark">"</span>
                Working at Shree Global Holidays has been a rewarding journey. The emphasis on custom travel means we get to show real creativity and passion daily.
              </div>
              <div className="author">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" alt="Neha Sen" />
                <div>
                  <div className="name">Neha Sen</div>
                  <div className="role">Senior Tour Planner (joined 2021)</div>
                </div>
              </div>
            </div>
            <div className="stats-grid">
              <div className="stat">
                <div className="num">4.7★</div>
                <div className="label">Glassdoor Rating</div>
              </div>
              <div className="stat">
                <div className="num">92%</div>
                <div className="label">Recommend to Friend</div>
              </div>
              <div className="stat">
                <div className="num">5 yrs</div>
                <div className="label">Average Tenure</div>
              </div>
              <div className="stat">
                <div className="num">100%</div>
                <div className="label">Growth Opportunity</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
