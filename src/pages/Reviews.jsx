import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';

const allReviews = [
  {
    id: 1,
    name: 'Ritu Malhotra',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'October 2024',
    destination: 'Golden Triangle — Delhi · Agra · Jaipur',
    category: 'heritage',
    review: 'Our Golden Triangle trip was planned down to the hour — punctual driver, gorgeous heritage hotels, and a guide who clearly loved the history he was sharing. Every city had its own character and the transitions between them were seamless. Absolutely worth every rupee! Will definitely book again.',
    helpful: 24,
    platform: 'google',
  },
  {
    id: 2,
    name: 'Vikram Singh',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'August 2024',
    destination: 'Ladakh High-Altitude Circuit',
    category: 'adventure',
    review: 'The Ladakh trip was life-changing! Our driver knew every twist and turn of those mountain roads. The campsites were breathtaking and the local guides were incredibly knowledgeable. Shree Global handled all the permits and logistics — we just had to enjoy the views.',
    helpful: 31,
    platform: 'google',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'November 2024',
    destination: 'Kerala Backwaters — Alleppey',
    category: 'family',
    review: 'The houseboat experience in Alleppey was magical! The team arranged everything perfectly — from the welcome drink to the sunset cruise. Pure luxury and tranquility. The backwaters were absolutely stunning and the food on board was delicious. A perfect family vacation.',
    helpful: 18,
    platform: 'google',
  },
  {
    id: 4,
    name: 'Amit Patel',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'December 2024',
    destination: 'Rajasthan Heritage — Jaipur · Udaipur',
    category: 'luxury',
    review: 'Staying in palaces and exploring forts — this was a dream come true! The attention to detail in every heritage hotel was impeccable. Thank you for this royal experience. Udaipur was particularly stunning with the lake views from our palace room.',
    helpful: 22,
    platform: 'google',
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    photo: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'January 2025',
    destination: 'Varanasi Pilgrimage Tour',
    category: 'spiritual',
    review: 'The Ganga Aarti experience was deeply spiritual. Our guide arranged the best boat and we had a front-row view. Everything was handled with such care and respect for the sacred nature of our journey. An experience I will never forget.',
    helpful: 15,
    platform: 'google',
  },
  {
    id: 6,
    name: 'Rohan Mehta',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'March 2025',
    destination: 'Shimla Manali Honeymoon Escape',
    category: 'honeymoon',
    review: 'Planned our honeymoon with Shree Global and it was absolutely perfect. Every detail was taken care of — from the candle-light dinners to the cozy mountain resorts. The surprise flower decoration in our first room was a beautiful touch. Highly recommend for couples!',
    helpful: 28,
    platform: 'google',
  },
  {
    id: 7,
    name: 'Neha Kapoor',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'February 2025',
    destination: 'Goa Beach Getaway',
    category: 'honeymoon',
    review: 'Our Goa trip was perfectly organized! The beach resort was stunning, water sports were thrilling, and the local restaurant recommendations from our guide were spot-on. We especially loved the private sunset cruise they arranged. Already planning our next trip with them!',
    helpful: 19,
    platform: 'google',
  },
  {
    id: 8,
    name: 'Suresh Kumar',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'April 2025',
    destination: 'Rishikesh Adventure Trip',
    category: 'adventure',
    review: 'River rafting in Rishikesh was an adrenaline rush! The safety briefing was thorough and the guides were professional and fun. Camping by the Ganga was peaceful and the bonfire sessions were unforgettable. Shree Global made adventure accessible and safe.',
    helpful: 17,
    platform: 'google',
  },
  {
    id: 9,
    name: 'Kavya Nair',
    photo: 'https://images.unsplash.com/photo-1491349174775-aaaefdd81942?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'December 2024',
    destination: 'Kashmir Paradise Tour',
    category: 'honeymoon',
    review: 'Kashmir was everything I dreamed of and more! The shikara ride on Dal Lake at sunset was romantic beyond words. Our houseboat was luxurious and the service was impeccable. The Mughal gardens were breathtaking. Shree Global made our anniversary trip unforgettable.',
    helpful: 33,
    platform: 'google',
  },
  {
    id: 10,
    name: 'Arjun Bose',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 4,
    date: 'January 2025',
    destination: 'Darjeeling Gangtok Tour',
    category: 'family',
    review: 'Amazing family trip to the Northeast! The toy train experience in Darjeeling was a highlight for our kids. The Himalayan views were spectacular. Only minor hitch was a slight delay in one pickup, but the driver was apologetic and made up for it. Overall excellent service.',
    helpful: 11,
    platform: 'google',
  },
  {
    id: 11,
    name: 'Meera Pillai',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'March 2025',
    destination: 'Mysore Coorg Package',
    category: 'family',
    review: 'The Mysore Palace night illumination was absolutely stunning! Coffee plantation tour in Coorg was educational and fun for our kids. The homestay experience was authentic and the family who hosted us were so warm. Shree Global picked only the best experiences.',
    helpful: 14,
    platform: 'google',
  },
  {
    id: 12,
    name: 'Gaurav Chandra',
    photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=200&h=200',
    rating: 5,
    date: 'May 2025',
    destination: 'Royal Udaipur Package',
    category: 'luxury',
    review: 'Udaipur is the most romantic city I\'ve ever visited and Shree Global made it even more special. The lake palace view from our room was straight out of a fairy tale. The private boat ride and the curated dining experiences were exceptional. Truly five-star service.',
    helpful: 26,
    platform: 'google',
  },
];

const categoryColors = {
  heritage: { bg: 'rgba(139, 90, 43, 0.1)', color: '#8B5A2B', border: 'rgba(139, 90, 43, 0.2)' },
  adventure: { bg: 'rgba(230, 126, 34, 0.1)', color: '#d35400', border: 'rgba(230, 126, 34, 0.2)' },
  family: { bg: 'rgba(52, 152, 219, 0.1)', color: '#2980b9', border: 'rgba(52, 152, 219, 0.2)' },
  luxury: { bg: 'rgba(155, 89, 182, 0.1)', color: '#8e44ad', border: 'rgba(155, 89, 182, 0.2)' },
  honeymoon: { bg: 'rgba(231, 76, 60, 0.1)', color: '#c0392b', border: 'rgba(231, 76, 60, 0.2)' },
  spiritual: { bg: 'rgba(243, 156, 18, 0.1)', color: '#d68910', border: 'rgba(243, 156, 18, 0.2)' },
};

export default function Reviews() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeRating, setActiveRating] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const filtered = allReviews.filter((r) => {
    if (activeCategory !== 'all' && r.category !== activeCategory) return false;
    if (activeRating !== 'all' && r.rating !== parseInt(activeRating)) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'helpful') return b.helpful - a.helpful;
    if (sortBy === 'rating-high') return b.rating - a.rating;
    if (sortBy === 'rating-low') return a.rating - b.rating;
    return b.id - a.id; // recent by default
  });

  const avgRating = (allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length).toFixed(1);

  const starCount = [5, 4, 3, 2, 1].map(s => ({
    stars: s,
    count: allReviews.filter(r => r.rating === s).length,
    pct: Math.round((allReviews.filter(r => r.rating === s).length / allReviews.length) * 100),
  }));

  return (
    <>
      {/* HERO */}
      <section className="rev-hero">
        <div className="rev-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="rev-hero-scrim"></div>
        <div className="container rev-hero-content">
          <div className="eyebrow on-dark" style={{ justifyContent: 'center', marginBottom: '16px' }}>Customer Experiences</div>
          <h1>What Our <span className="italic">Travelers</span> Say</h1>
          <p>Honest reviews from 1,200+ happy travelers who explored India with us</p>
          <div className="rev-breadcrumb">
            <Link to="/">Home</Link> / <span>Reviews</span>
          </div>
        </div>
      </section>

      {/* SUMMARY STRIP */}
      <section className="section" style={{ paddingTop: '50px', paddingBottom: '0' }}>
        <div className="container">
          <div className="rev-summary-wrap reveal">

            {/* Overall Score */}
            <div className="rev-overall-score">
              <div className="rev-big-rating">{avgRating}</div>
              <div className="rev-big-stars">
                {[1,2,3,4,5].map(s => (
                  <i key={s} className={s <= Math.round(parseFloat(avgRating)) ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>
                ))}
              </div>
              <span className="rev-total-count">Based on 1,200+ Reviews</span>
              <div className="rev-google-badge">
                <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/>
                  <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/>
                  <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/>
                  <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
                </svg>
                Verified on Google
              </div>
            </div>

            {/* Star Breakdown Bars */}
            <div className="rev-bar-breakdown">
              {starCount.map(({ stars, count, pct }) => (
                <div key={stars} className="rev-bar-row">
                  <span className="rev-bar-label">{stars} <i className="fa-solid fa-star"></i></span>
                  <div className="rev-bar-track">
                    <div className="rev-bar-fill" style={{ width: `${pct}%` }}></div>
                  </div>
                  <span className="rev-bar-count">{count}</span>
                </div>
              ))}
            </div>

            {/* Highlight Stats */}
            <div className="rev-trust-stats">
              <div className="rev-trust-item">
                <i className="fa-solid fa-users"></i>
                <strong>10,000+</strong>
                <span>Happy Travelers</span>
              </div>
              <div className="rev-trust-item">
                <i className="fa-solid fa-route"></i>
                <strong>100+</strong>
                <span>Destinations</span>
              </div>
              <div className="rev-trust-item">
                <i className="fa-solid fa-award"></i>
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>
              <div className="rev-trust-item">
                <i className="fa-solid fa-repeat"></i>
                <strong>78%</strong>
                <span>Repeat Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS + REVIEWS GRID */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">

          {/* Filter Bar */}
          <div className="rev-filter-bar reveal">
            <div className="rev-filter-group">
              <span className="rev-filter-label">Category:</span>
              {['all', 'heritage', 'adventure', 'honeymoon', 'family', 'luxury', 'spiritual'].map(cat => (
                <button
                  key={cat}
                  className={`rev-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
            <div className="rev-filter-right">
              <select
                className="rev-sort-select"
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
              >
                <option value="recent">Most Recent</option>
                <option value="helpful">Most Helpful</option>
                <option value="rating-high">Rating: High to Low</option>
                <option value="rating-low">Rating: Low to High</option>
              </select>
              <span className="rev-count-label"><strong>{sorted.length}</strong> reviews shown</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="rev-grid reveal">
            {sorted.map(r => {
              const catStyle = categoryColors[r.category] || {};
              return (
                <div key={r.id} className="rev-card">
                  {/* Card Header */}
                  <div className="rev-card-header">
                    <div className="rev-avatar-wrap">
                      <img src={r.photo} alt={r.name} className="rev-avatar" />
                      <div className="rev-google-dot" title="Google Review">
                        <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
                          <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/>
                          <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/>
                          <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/>
                          <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
                        </svg>
                      </div>
                    </div>
                    <div className="rev-person">
                      <strong>{r.name}</strong>
                      <span className="rev-date">{r.date}</span>
                      <div className="rev-stars">
                        {[1,2,3,4,5].map(s => (
                          <i key={s} className={s <= r.rating ? 'fa-solid fa-star' : 'fa-regular fa-star'}></i>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Destination + Category Tags */}
                  <div className="rev-tags-row">
                    <span className="rev-dest-tag">
                      <i className="fa-solid fa-location-dot"></i> {r.destination}
                    </span>
                    <span
                      className="rev-cat-tag"
                      style={{ background: catStyle.bg, color: catStyle.color, border: `1px solid ${catStyle.border}` }}
                    >
                      {r.category.charAt(0).toUpperCase() + r.category.slice(1)}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="rev-text">"{r.review}"</p>

                  {/* Footer */}
                  <div className="rev-card-footer">
                    <span className="rev-helpful">
                      <i className="fa-regular fa-thumbs-up"></i> {r.helpful} found helpful
                    </span>
                    <span className="rev-verified">
                      <i className="fa-solid fa-circle-check"></i> Verified Trip
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Google CTA */}
          <div className="rev-google-cta reveal">
            <div className="rev-google-cta-inner">
              <div className="rev-cta-text">
                <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                  <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/>
                  <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/>
                  <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/>
                  <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
                </svg>
                <div>
                  <h3>Read More Reviews on Google</h3>
                  <p>We have 1,200+ verified reviews on Google with an average rating of 4.9★</p>
                </div>
              </div>
              <a
                href="https://www.google.com/search?q=Shree+Global+Holidays+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brand"
              >
                <i className="fa-brands fa-google"></i> View on Google
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
