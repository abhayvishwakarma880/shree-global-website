import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PackageDetail.css';

const packagesData = {
  1: {
    id: 1,
    name: 'Golden Triangle Tour',
    category: 'Heritage',
    duration: '5 Days / 4 Nights',
    price: 14500,
    originalPrice: 18000,
    rating: 4.9,
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1200',
    description: "Experience the magic of India's three most famous cities: Delhi, Agra, and Jaipur. From the historic monuments of Delhi and the eternal beauty of the Taj Mahal in Agra to the royal forts and palaces of Jaipur, this tour offers a complete immersion into the rich cultural heritage of North India. Perfectly paced for families, couples, and first-time travelers.",
    highlights: [
      'Guided sightseeing tours in Delhi, Agra, and Jaipur',
      'Watch the sunrise at the majestic Taj Mahal',
      'Explore the giant courtyards and palaces of Amber Fort in Jaipur',
      'Drive through the grand boulevards of New Delhi'
    ],
    inclusions: [
      '4-Star Heritage Hotel stays with breakfast',
      'Dedicated AC Sedan/SUV for the entire trip',
      'English-speaking local guides at monuments',
      'Airport pickups and drop-offs',
      'All driver allowances, parking, and toll fees'
    ],
    exclusions: [
      'Monument entry tickets and camera charges',
      'Meals other than breakfast',
      'Personal expenses (laundry, shopping, tips)',
      'Any airfare or train fare'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Delhi & Local Sightseeing', desc: 'Arrive at Delhi Airport/Railway Station where our driver will pick you up. Transfer to hotel. In the afternoon, explore historic Old Delhi including Jama Masjid, Red Fort (from outside), and the bustling lanes of Chandni Chowk. Overnight in Delhi.' },
      { day: 2, title: 'New Delhi Tour & Drive to Agra', desc: 'After breakfast, visit Qutub Minar, Humayun’s Tomb, and India Gate. Drive past the Parliament House and President’s Palace. In the afternoon, take a 3.5-hour drive via the Yamuna Expressway to Agra. Check into hotel and relax. Overnight in Agra.' },
      { day: 3, title: 'Taj Mahal Sunrise Visit & Drive to Jaipur', desc: 'Visit the world-famous Taj Mahal at sunrise for stunning photo opportunities. Return to hotel for breakfast. Check out and visit the magnificent Agra Fort. Later, drive to Jaipur, visiting the abandoned Mughal city of Fatehpur Sikri en route. Overnight in Jaipur.' },
      { day: 4, title: 'Jaipur Full-Day Heritage Sightseeing', desc: 'Enjoy a full day of sightseeing in the Pink City. Start with Amber Fort, situated on a hilltop. Later, visit the unique honeycomb-designed Hawa Mahal (Palace of Winds), the City Palace museum, and the historic Jantar Mantar observatory. Overnight in Jaipur.' },
      { day: 5, title: 'Jaipur Shopping & Departure to Delhi', desc: 'After breakfast, explore the colorful local handicraft and jewelry bazaars of Jaipur. In the afternoon, check out and drive back to Delhi Airport/Railway Station for your onward journey.' }
    ]
  },
  2: {
    id: 2,
    name: 'Shimla Manali Escape',
    category: 'Honeymoon',
    duration: '6 Days / 5 Nights',
    price: 18900,
    originalPrice: 21000,
    rating: 4.8,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1200',
    description: 'Escape to the serene, snow-capped Himalayas with our premium Shimla and Manali tour. Journey through lush pine forests, gushing rivers, and breathtaking mountain passes. Witness the colonial charm of Shimla’s Mall Road and experience adventure sports, paragliding, and snow play in Manali and Solang Valley.',
    highlights: [
      'Stroll on the historic Mall Road & Ridge in Shimla',
      'Scenic drive alongside the Beas River to Manali',
      'Adventure activities at Solang Valley & Atal Tunnel',
      'Visit the ancient wooden Hadimba Temple in Manali'
    ],
    inclusions: [
      'Premium hotel rooms with private mountain balconies',
      'Daily breakfast and buffet dinners included',
      'Private AC Cab for all transfers and sightseeing',
      'Solang Valley excursion'
    ],
    exclusions: [
      'Atal Tunnel / Rohtang Pass permit charges',
      'Adventure sports fees (paragliding, rafting)',
      'Lunch and snacks'
    ],
    itinerary: [
      { day: 1, title: 'Delhi to Shimla Drive (350 km)', desc: 'Our representative will pick you up from Delhi and drive you to Shimla. Drive past the scenic Pinjore Gardens and experience the climb into the hills. Check-in at your hotel in Shimla. Evening at leisure.' },
      { day: 2, title: 'Shimla & Kufri Sightseeing', desc: 'After breakfast, take an excursion to Kufri, famous for Himalayan nature parks and yak rides. In the afternoon, return to Shimla and visit Jakhoo Temple, Mall Road, Scandal Point, and Christ Church.' },
      { day: 3, title: 'Shimla to Manali Scenic Drive (250 km)', desc: 'Checkout and drive to Manali. En route, enjoy the beautiful views of Sundernagar Lake, Pandoh Dam, and Hanogi Devi Temple. Arrive in Manali by evening and check into your hotel.' },
      { day: 4, title: 'Manali Local Sightseeing', desc: 'Visit Hadimba Temple, Manu Temple, Vashisht Hot Springs, and Club House. In the evening, explore Mall Road and shop for traditional woolen shawls.' },
      { day: 5, title: 'Solang Valley & Snow Point Excursion', desc: 'Excursion to Solang Valley, a hub for paragliding, zorbing, and quad biking. (Rohtang Pass visit is subject to permit availability and local union taxi booking at extra cost).' },
      { day: 6, title: 'Manali to Delhi Departure', desc: 'Check out after breakfast and proceed on the return drive to Delhi. Drop at Delhi Airport/Railway Station by late evening.' }
    ]
  },
  3: {
    id: 3,
    name: 'Rajasthan Heritage Trail',
    category: 'Luxury',
    duration: '7 Days / 6 Nights',
    price: 22400,
    originalPrice: 26000,
    rating: 4.9,
    reviews: 85,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1200',
    description: 'Travel like royalty through India’s desert state. Experience palace stays, camel safaris, and massive forts across Jaipur, Jodhpur, and Udaipur. From the blue city walls of Jodhpur to the tranquil lake cruises of Udaipur, this itinerary showcases the absolute best of Rajput grandeur.',
    highlights: [
      'Luxury stays in converted heritage palaces',
      'Sunset camel ride in the Thar Desert with cultural dance',
      'Explore Mehrangarh Fort, India’s largest hill fort',
      'Boat cruise on Lake Pichola in Udaipur'
    ],
    inclusions: [
      '5-Star heritage hotel stays with breakfast',
      'Traditional Rajasthani welcome and dinner in desert',
      'Private SUV with experienced local driver',
      'Boat ride tickets in Udaipur'
    ],
    exclusions: [
      'Personal tour guides (available on demand)',
      'Camera fees at monuments',
      'Lunch and beverages'
    ],
    itinerary: [
      { day: 1, title: 'Jaipur Arrival & Sightseeing', desc: 'Pick up in Jaipur and transfer to hotel. Visit Birla Temple and Albert Hall Museum. Evening free to explore Rajasthani cuisine at Chokhi Dhani.' },
      { day: 2, title: 'Jaipur Forts & Palaces', desc: 'Full-day tour of Jaipur: Amer Fort, Hawa Mahal, City Palace, and Jantar Mantar. Experience shopping for gemstones and block-printed textiles.' },
      { day: 3, title: 'Jaipur to Jodhpur (330 km)', desc: 'Drive to Jodhpur, the Blue City. Visit the grand Umaid Bhawan Palace, home to the current royal family. Check-in at hotel and relax.' },
      { day: 4, title: 'Mehrangarh Fort & Drive to Jaisalmer Desert', desc: 'Visit Mehrangarh Fort and Jaswant Thada. Afterward, drive to Sam Sand Dunes in Jaisalmer. Stay in a luxury desert camp, enjoy camel rides, cultural folk dances, and dinner under the stars.' },
      { day: 5, title: 'Jaisalmer Fort to Udaipur (Drive/Train)', desc: 'Explore Jaisalmer Golden Fort, Patwon ki Haveli, and Gadisar Lake. Drive to Udaipur, the City of Lakes.' },
      { day: 6, title: 'Udaipur City Tour & Boat Cruise', desc: 'Visit City Palace, Jagdish Temple, and Saheliyon-ki-Bari. Enjoy an evening boat ride on Lake Pichola, viewing the Lake Palace and Jag Mandir.' },
      { day: 7, title: 'Departure from Udaipur', desc: 'After breakfast, transfer to Udaipur Airport or Railway Station for your departure flight.' }
    ]
  },
  4: {
    id: 4,
    name: 'Kerala Backwater Trail',
    category: 'Family',
    duration: '6 Days / 5 Nights',
    price: 19600,
    originalPrice: 22000,
    rating: 4.7,
    reviews: 110,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200',
    description: 'Indulge in the peaceful tranquility of Kerala, "God’s Own Country". This tour takes you from the colonial streets of Kochi to the misty tea plantations of Munnar, ending with an overnight cruise in a private houseboat through the world-famous Alleppey backwaters.',
    highlights: [
      'Stay overnight on a luxury private houseboat in Alleppey',
      'Walk through organic tea plantations and spice gardens in Munnar',
      'See wild elephants at Periyar Lake Wildlife Sanctuary',
      'Watch Kathakali dance and Kalaripayattu martial arts show'
    ],
    inclusions: [
      'Houseboat stay with all meals (Lunch, Dinner, Breakfast) included',
      'Boutique resort stays in Munnar & Thekkady',
      'Dedicated private AC vehicle for transfers',
      'Spice plantation tour fees'
    ],
    exclusions: [
      'Elephant ride and boating tickets at Periyar',
      'Any ayurvedic massage or spa therapies',
      'Lunch and dinners at hotels'
    ],
    itinerary: [
      { day: 1, title: 'Kochi Arrival & Sightseeing', desc: 'Arrive in Kochi. Visit the historical Fort Kochi, Chinese Fishing Nets, St. Francis Church, and Jewish Synagogue. Check into your hotel.' },
      { day: 2, title: 'Kochi to Munnar Hill Station (130 km)', desc: 'Drive to Munnar, enjoying views of Valara and Cheeyappara waterfalls along the way. Check into Munnar hill resort and spend evening amidst tea gardens.' },
      { day: 3, title: 'Munnar Tea Gardens Tour', desc: 'Visit Eravikulam National Park (home to Nilgiri Tahr), Mattupetty Dam, Echo Point, Kundala Lake, and the Tea Museum.' },
      { day: 4, title: 'Munnar to Thekkady Wild Forest (110 km)', desc: 'Drive to Thekkady. Take a spice plantation tour to see pepper, cardamom, and vanilla cultivation. In the afternoon, enjoy boating on Periyar Lake.' },
      { day: 5, title: 'Thekkady to Alleppey Houseboat (140 km)', desc: 'Drive to Alleppey. Board your traditional Kerala Houseboat (Kettuvallam). Enjoy a scenic cruise through palm-fringed canals. Lunch, tea snacks, and dinner served fresh on board.' },
      { day: 6, title: 'Departure from Kochi', desc: 'Disembark from the houseboat after breakfast. Drive to Kochi Airport/Railway Station for your return trip.' }
    ]
  },
  5: {
    id: 5,
    name: 'Ladakh High-Altitude Circuit',
    category: 'Adventure',
    duration: '8 Days / 7 Nights',
    price: 27300,
    originalPrice: 31000,
    rating: 4.9,
    reviews: 65,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1200',
    description: 'Embark on the ultimate high-altitude adventure of Ladakh. Conquer Khardung La (one of the highest motorable passes in the world), camp on the shores of the deep blue Pangong Tso Lake, and ride double-humped camels in the sand dunes of Nubra Valley.',
    highlights: [
      'Camp overnight right next to the saltwater Pangong Lake',
      'Cross the legendary Khardung La Pass (17,582 ft)',
      'Double-humped Bactrian camel ride in Nubra Valley dunes',
      'Visit Thiksey Monastery, styled like Tibet’s Potala Palace'
    ],
    inclusions: [
      'Accommodation in cozy guest houses & luxury luxury camps',
      'Breakfast and dinner included daily',
      'Inner Line Permits for restricted areas (Pangong, Nubra)',
      'Oxygen cylinder in vehicle for emergencies'
    ],
    exclusions: [
      'Adventure activities, camel rides, and river rafting charges',
      'Personal medical expenses due to high altitude',
      'Flight tickets to Leh'
    ],
    itinerary: [
      { day: 1, title: 'Leh Arrival & Acclimatization', desc: 'Fly into Leh Airport. Transfer to hotel. Rest for the entire day to adapt to high altitude. Overnight in Leh.' },
      { day: 2, title: 'Leh Monasteries & Hall of Fame', desc: 'Visit Leh Palace, Shanti Stupa, Hall of Fame museum, and magnetic hill. Witness the confluence of Indus and Zanskar rivers.' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La (125 km)', desc: 'Drive to Nubra Valley via Khardung La Pass. Check into desert camp. Evening camel ride at Hunder Sand Dunes. Overnight in Nubra.' },
      { day: 4, title: 'Nubra Valley to Pangong Lake (150 km)', desc: 'Drive directly to Pangong Tso Lake via the scenic Shyok River route. Witness the changing colors of the lake. Overnight in Pangong Lake Camp.' },
      { day: 5, title: 'Pangong Lake back to Leh (140 km)', desc: 'Wake up to the gorgeous lakeside sunrise. Drive back to Leh crossing Chang La Pass. Overnight in Leh.' },
      { day: 6, title: 'Excursion to Sham Valley', desc: 'Visit Likir Monastery, Alchi Monastery, and Basgo Fort. Return to Leh for overnight stay.' },
      { day: 7, title: 'Leh Free Day / Local Markets', desc: 'Spend the day at leisure for shopping, cafes, and exploring Leh local markets on your own. Overnight in Leh.' },
      { day: 8, title: 'Departure from Leh', desc: 'Transfer to Leh Airport early morning for flight back home.' }
    ]
  }
};

// Fallback in case ID is not in predefined list (e.g. IDs 6-12)
const defaultPackageData = {
  name: 'Premium Custom Tour Package',
  category: 'Customizable',
  duration: '5 Days / 4 Nights',
  price: 15500,
  originalPrice: 18500,
  rating: 4.8,
  reviews: 50,
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200',
  description: 'Design your own custom dream vacation with Shree Global Holidays. Tell us where you want to travel across India, your dates, and budget, and our travel experts will design the perfect tailored itinerary for you.',
  highlights: [
    'Fully custom routes and handpicked hotels',
    'Personal driver and local guides included',
    '24/7 dedicated trip assistance helpline'
  ],
  inclusions: [
    'Customized hotel stays',
    'Private AC vehicle & driver',
    'Daily breakfast'
  ],
  exclusions: [
    'Monument tickets',
    'Personal purchases & shopping'
  ],
  itinerary: [
    { day: 1, title: 'Day 1: Arrival & Hotel Check-in', desc: 'Our driver meets you at the airport/station and drops you at your handpicked hotel. Rest of the day at leisure.' },
    { day: 2, title: 'Day 2: Guided Sightseeing Tour', desc: 'Explore the major landmarks of the city with a private guide. Return to hotel by evening.' },
    { day: 3, title: 'Day 3: Scenic Travel or Activity Day', desc: 'Travel to the next destination or enjoy a local heritage experience curated by us.' },
    { day: 4, title: 'Day 4: Rest and Shopping', desc: 'Explore local markets and authentic restaurants at your own pace.' },
    { day: 5, title: 'Day 5: Airport/Station Drop', desc: 'Enjoy breakfast, check out of your hotel, and transfer to your departure point.' }
  ]
};

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = packagesData[id] || { ...defaultPackageData, id: id || 99 };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    travelers: '2',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Mimic API post
    console.log('Query submitted:', formData, 'Package:', pkg.name);
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="pkg-detail-hero">
        <div 
          className="pkg-detail-hero-bg" 
          style={{ backgroundImage: `url('${pkg.image}')` }}
        ></div>
        <div className="pkg-detail-hero-scrim"></div>
        <div className="pkg-detail-hero-content">
          <div className="pkg-detail-breadcrumbs">
            <Link to="/">Home</Link> / <Link to="/packages">Packages</Link> / <span>{pkg.name}</span>
          </div>
          <span className="pkg-detail-tag"><i className="fa-solid fa-plane-departure"></i> {pkg.category} Tour</span>
          <h1>{pkg.name}</h1>
          <div className="pkg-detail-meta">
            <span><i className="fa-regular fa-clock"></i> {pkg.duration}</span>
            <span><i className="fa-solid fa-star text-gold"></i> {pkg.rating} ({pkg.reviews} Reviews)</span>
            <span><i className="fa-solid fa-shield-halved"></i> 100% Verified</span>
          </div>
        </div>
      </section>

      {/* ================= MAIN DETAIL BODY ================= */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="pkg-detail-layout">
            
            {/* LEFT COLUMN: INFORMATION & ITINERARY */}
            <div className="pkg-detail-info-col reveal">
              <div className="pkg-detail-card">
                <h2>About This Tour</h2>
                <p className="pkg-description">{pkg.description}</p>
                
                <h3>Tour Highlights</h3>
                <ul className="pkg-highlights-list">
                  {(pkg.highlights || []).map((hl, i) => (
                    <li key={i}><i className="fa-solid fa-circle-check"></i> {hl}</li>
                  ))}
                </ul>
              </div>

              {/* Day-Wise Itinerary */}
              <div className="pkg-detail-card" style={{ marginTop: '30px' }}>
                <h2>Day-Wise Itinerary</h2>
                <div className="itinerary-timeline">
                  {pkg.itinerary.map((item, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-day">Day {item.day || idx + 1}</div>
                      <div className="timeline-content">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions and Exclusions */}
              <div className="pkg-inout-grid" style={{ marginTop: '30px' }}>
                <div className="pkg-detail-card inclusions-card">
                  <h3><i className="fa-solid fa-square-check text-green"></i> What’s Included</h3>
                  <ul>
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i}><i className="fa-solid fa-check"></i> {inc}</li>
                    ))}
                  </ul>
                </div>
                <div className="pkg-detail-card exclusions-card">
                  <h3><i className="fa-solid fa-square-xmark text-red"></i> What’s Excluded</h3>
                  <ul>
                    {pkg.exclusions.map((exc, i) => (
                      <li key={i}><i className="fa-solid fa-xmark"></i> {exc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: BOOKING SIDEBAR */}
            <div className="pkg-detail-sidebar reveal">
              <div className="booking-sticky-card">
                <div className="price-header">
                  <div className="price-label">Tour Cost</div>
                  <div className="price-wrap">
                    {pkg.originalPrice && <span className="orig-price">₹{pkg.originalPrice.toLocaleString()}</span>}
                    <span className="curr-price">₹{pkg.price.toLocaleString()}</span>
                    <span className="per-person">/ Person</span>
                  </div>
                  {pkg.originalPrice && (
                    <div className="discount-tag">
                      Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()} ({Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% Off)
                    </div>
                  )}
                </div>

                <div className="booking-card-body">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="booking-form">
                      <h4>Request Free Quote</h4>
                      <p>Send details to get a customized price quote within 2 hours.</p>
                      
                      <div className="form-group">
                        <label>Full Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe" 
                        />
                      </div>

                      <div className="form-group">
                        <label>Email Address</label>
                        <input 
                          type="email" 
                          name="email" 
                          required 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com" 
                        />
                      </div>

                      <div className="form-group">
                        <label>Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required 
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210" 
                        />
                      </div>

                      <div className="form-grid">
                        <div className="form-group">
                          <label>Travel Date</label>
                          <input 
                            type="date" 
                            name="date" 
                            required 
                            value={formData.date}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Travelers</label>
                          <select 
                            name="travelers" 
                            value={formData.travelers} 
                            onChange={handleInputChange}
                          >
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5+">5+ People</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Custom Needs (Optional)</label>
                        <textarea 
                          name="message" 
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="e.g. extra bed, wheelchair access, flight bookings..."
                        ></textarea>
                      </div>

                      <button type="submit" className="btn btn-brand btn-book-submit">
                        <i className="fa-regular fa-paper-plane"></i> Get Free Plan
                      </button>
                    </form>
                  ) : (
                    <div className="booking-success-message">
                      <div className="success-icon"><i className="fa-solid fa-circle-check"></i></div>
                      <h3>Request Submitted!</h3>
                      <p>Thank you, <strong>{formData.name}</strong>. Our travel specialist will review your request for the <strong>{pkg.name}</strong> and contact you shortly with a personalized itinerary quote.</p>
                      <button 
                        onClick={() => setSubmitted(false)} 
                        className="btn btn-dark btn-sm"
                        style={{ marginTop: '15px' }}
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  )}

                  <div className="trust-badges">
                    <div><i className="fa-solid fa-shield text-green"></i> <span>Secure Booking</span></div>
                    <div><i className="fa-solid fa-phone text-green"></i> <span>24/7 Phone Support</span></div>
                    <div><i className="fa-solid fa-pen-ruler text-green"></i> <span>100% Customizable</span></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RELATED PACKAGES SECTION ================= */}
      <section className="section sand tight">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">More to Explore</div>
              <h2>You Might Also <span className="italic">Like</span></h2>
            </div>
          </div>
          
          <div className="pkg-detail-related-grid reveal">
            {Object.values(packagesData)
              .filter((p) => p.id !== pkg.id)
              .slice(0, 3)
              .map((p) => (
                <div key={p.id} className="related-pkg-card">
                  <img src={p.image} alt={p.name} />
                  <div className="content">
                    <span className="cat">{p.category}</span>
                    <h4><Link to={`/package/${p.id}`}>{p.name}</Link></h4>
                    <div className="meta-footer">
                      <span><i className="fa-regular fa-clock"></i> {p.duration.split(' ')[0]} Days</span>
                      <strong className="text-green">₹{p.price.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
