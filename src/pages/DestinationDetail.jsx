import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './DestinationDetail.css';
import { useWishlist } from '../context/WishlistContext';

const destinationsDetailData = {
  1: {
    id: 1,
    name: 'Ladakh',
    badge: 'Himalayan Adventure',
    tagline: 'Land of High Passes, Monasteries & Pangong Lake',
    heroImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1600',
    rating: 4.9,
    reviewsCount: 240,
    toursCount: 8,
    price: 27300,
    region: 'North India',
    subregion: 'Himalayas',
    bestTime: 'May to October',
    idealDuration: '6 - 9 Days',
    nearestAirport: 'Kushok Bakula Rimpoche Airport (Leh)',
    description: "Ladakh is a high-altitude desert region located in Jammu & Kashmir, renowned for its dramatic barren landscapes, snow-capped peaks, crystal-clear high lakes, and centuries-old Tibetan Buddhist monasteries. Situated between the Kunlun mountain range in the north and the main Great Himalayas to the south, Ladakh offers a road-tripping journey unlike anywhere else on Earth.",
    highlights: [
      'Drive across Khardung La — one of the highest motorable passes in the world',
      'Camp beside the mesmerizing blue waters of Pangong Tso & Tso Moriri lakes',
      'Explore double-humped Bactrian camel safaris in the sand dunes of Nubra Valley',
      'Visit ancient hilltop monasteries: Thiksey, Hemis, Diskit, and Lamayuru',
      'Experience the thrilling zero-gravity phenomenon at Magnetic Hill'
    ],
    attractions: [
      { name: 'Pangong Tso Lake', desc: 'Famous high-altitude salt lake changing colors from blue to turquoise green.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600' },
      { name: 'Nubra Valley & Hunder', desc: 'High-altitude cold desert with white sand dunes and Bactrian double-humped camels.', img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600' },
      { name: 'Khardung La Pass', desc: 'World-famous high pass at 17,982 ft offering views of Karakoram range.', img: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=600' },
      { name: 'Thiksey Monastery', desc: '12-story complex resembling Lhasa’s Potala Palace with a 49ft Maitreya statue.', img: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=600' }
    ],
    packages: [
      { id: 7, name: 'Leh Ladakh Bike & SUV Odyssey', duration: '7D/6N', price: 27300, rating: 4.9, image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600' },
      { id: 8, name: 'Magical Ladakh Family & Couple Escape', duration: '6D/5N', price: 24500, rating: 4.8, image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  2: {
    id: 2,
    name: 'Manali',
    badge: 'Mountain Valley',
    tagline: 'Pine Forests, Snow Peaks & Solang Valley Adventures',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1600',
    rating: 4.7,
    reviewsCount: 180,
    toursCount: 6,
    price: 18900,
    region: 'North India',
    subregion: 'Himachal Pradesh',
    bestTime: 'Throughout the Year (Dec-Feb for Snow)',
    idealDuration: '4 - 6 Days',
    nearestAirport: 'Kullu Manali Airport (Bhuntar - 50 km)',
    description: "Nestled in the Beas River valley, Manali is India’s premier hill resort destination. Surrounded by towering pine forests, cascading waterfalls, and snow-draped Himalayan peaks, Manali serves as the gateway to Solang Valley, Rohtang Pass, and the Spiti Valley circuit.",
    highlights: [
      'Experience snow sports, paragliding, and skiing at Solang Valley',
      'Drive through the engineering marvel Atal Tunnel to Sissu & Lahaul',
      'Stroll through Old Manali’s bohemian cafes, apple orchards, and wooden houses',
      'Seek blessings at the ancient Hadimba Devi Temple built inside cedar woods',
      'Relax in the natural hot sulfur springs of Vashisht Village'
    ],
    attractions: [
      { name: 'Solang Valley', desc: 'Adventure hub for paragliding, zorbing, ropeway, and snow skiing.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600' },
      { name: 'Atal Tunnel & Sissu', desc: '9.02 km tunnel opening into the otherworldly snow valleys of Lahaul.', img: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=600' },
      { name: 'Hadimba Temple', desc: '16th-century wooden temple tucked amidst giant Deodar trees.', img: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=600' },
      { name: 'Rohtang Pass', desc: 'High mountain pass offering year-round snow landscapes and panoramic glacier views.', img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600' }
    ],
    packages: [
      { id: 2, name: 'Shimla Manali Escape', duration: '6D/5N', price: 18900, rating: 4.8, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  3: {
    id: 3,
    name: 'Shimla',
    badge: 'Colonial Hill Queen',
    tagline: 'Queen of Hills, Toy Train & Mall Road Heritage',
    heroImage: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=1600',
    rating: 4.6,
    reviewsCount: 140,
    toursCount: 5,
    price: 16500,
    region: 'North India',
    subregion: 'Himachal Pradesh',
    bestTime: 'October to June',
    idealDuration: '3 - 5 Days',
    nearestAirport: 'Jubbarhatti Airport (Shimla - 22 km)',
    description: "Shimla, the summer capital of British India, retains its colonial charm with Tudor and neo-Gothic architecture, pedestrian Mall Road, Christ Church, and panoramic views of the Shivalik hills.",
    highlights: [
      'Ride the UNESCO Heritage Kalka-Shimla Toy Train through 102 tunnels',
      'Walk along the famous Mall Road, Ridge, and Christ Church at sunset',
      'Enjoy horse riding and valley views at Kufri Fun World',
      'Trek to Jakhoo Temple dedicated to Lord Hanuman for hilltop vistas',
      'Visit the Viceregal Lodge (Indian Institute of Advanced Study)'
    ],
    attractions: [
      { name: 'The Ridge & Mall Road', desc: 'The heart of Shimla with heritage shops, cafes, and open promenades.', img: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=600' },
      { name: 'Kufri Snow Point', desc: 'Scenic hilltop town famous for skiing, yak rides, and panoramic mountain views.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600' }
    ],
    packages: [
      { id: 2, name: 'Shimla Manali Escape', duration: '6D/5N', price: 18900, rating: 4.8, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  4: {
    id: 4,
    name: 'Jaipur',
    badge: 'Royal Heritage',
    tagline: 'The Pink City of Forts, Palaces & Rajasthani Royalty',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1600',
    rating: 4.8,
    reviewsCount: 310,
    toursCount: 12,
    price: 14500,
    region: 'West India',
    subregion: 'Rajasthan',
    bestTime: 'October to March',
    idealDuration: '3 - 4 Days',
    nearestAirport: 'Jaipur International Airport (Sanganer)',
    description: "Jaipur, the capital of Rajasthan, is world-famous as the Pink City due to the distinctive terracotta color of its historic buildings. Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur forms part of India’s famous Golden Triangle route.",
    highlights: [
      'Explore the hilltop Amber Fort and Sheesh Mahal (Mirror Palace)',
      'Photograph the iconic honeycomb façade of Hawa Mahal (Palace of Winds)',
      'Visit the City Palace museum & Jantar Mantar UNESCO astronomical site',
      'Watch sunset over Jaipur city from Nahargarh Fort',
      'Shop for traditional Bandhani silks, lac bangles, and blue pottery'
    ],
    attractions: [
      { name: 'Amber Fort', desc: 'Grand hilltop fortress combining Rajput architecture with scenic Maota lake.', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600' },
      { name: 'Hawa Mahal', desc: '5-story pink sandstone palace with 953 intricate latticework windows.', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600' }
    ],
    packages: [
      { id: 1, name: 'Golden Triangle Tour', duration: '5D/4N', price: 14500, rating: 4.9, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600' },
      { id: 5, name: 'Royal Rajasthan Heritage Circuit', duration: '8D/7N', price: 28900, rating: 4.9, image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  7: {
    id: 7,
    name: 'Kerala',
    badge: 'Backwater Paradise',
    tagline: 'God’s Own Country of Houseboats, Tea Gardens & Coastline',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1600',
    rating: 4.9,
    reviewsCount: 350,
    toursCount: 14,
    price: 19600,
    region: 'South India',
    subregion: 'Coastal Tropics',
    bestTime: 'September to March',
    idealDuration: '5 - 8 Days',
    nearestAirport: 'Cochin International Airport (COK)',
    description: "Kerala is a tropical paradise stretching along India's southwestern Malabar Coast. Famed for its palm-fringed backwaters, spice plantations, tea estates in Munnar, Ayurvedic wellness, and serene beaches in Kovalam and Varkala.",
    highlights: [
      'Cruise overnight in a private luxury Houseboat through Alleppey backwaters',
      'Walk through misty tea gardens and waterfalls in Munnar hill station',
      'Spot wild elephants and tigers in Periyar Wildlife Sanctuary (Thekkady)',
      'Watch traditional Kathakali dance and Kalaripayattu martial art shows',
      'Unwind at Kovalam and Varkala cliffside beaches'
    ],
    attractions: [
      { name: 'Alleppey Backwaters', desc: 'Vast network of tranquil canals, lagoons, and traditional wooden houseboats.', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600' },
      { name: 'Munnar Tea Estates', desc: 'Rolling emerald green tea hills, misty valleys, and Anamudi peak.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600' }
    ],
    packages: [
      { id: 3, name: 'Kerala Backwaters & Hills Delight', duration: '6D/5N', price: 19600, rating: 4.9, image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  9: {
    id: 9,
    name: 'Varanasi',
    badge: 'Spiritual Capital',
    tagline: 'Ancient Sacred City of Ganga Aarti, Ghats & Temples',
    heroImage: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1600',
    rating: 4.6,
    reviewsCount: 190,
    toursCount: 6,
    price: 12800,
    region: 'East India',
    subregion: 'Ganges Valley',
    bestTime: 'October to March',
    idealDuration: '3 - 4 Days',
    nearestAirport: 'Lal Bahadur Shastri International Airport (Varanasi)',
    description: "Varanasi (Kashi) is one of the world's oldest continuously inhabited cities. Situated on the banks of the sacred River Ganges, Varanasi is the spiritual pulse of India, famous for its 84 bathing ghats, grand evening Ganga Aarti ceremonies, and ancient Kashi Vishwanath temple.",
    highlights: [
      'Witness the mesmerizing evening Ganga Aarti at Dashashwamedh Ghat',
      'Take a peaceful sunrise boat ride along the Ganges river ghats',
      'Visit the ancient Kashi Vishwanath Corridor & Temple',
      'Explore Sarnath where Lord Buddha gave his first sermon',
      'Shop for authentic handcrafted Banarasi silk sarees'
    ],
    attractions: [
      { name: 'Dashashwamedh Ghat', desc: 'Main ghat famous for grand priests-led evening fire ritual to River Ganges.', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600' },
      { name: 'Sarnath Deer Park', desc: 'Historic Buddhist site with Dhamek Stupa and Ashoka Pillar lion capital.', img: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&q=80&w=600' }
    ],
    packages: [
      { id: 4, name: 'Varanasi Pilgrimage Tour', duration: '4D/3N', price: 12800, rating: 4.6, image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600' }
    ]
  }
};

const defaultDestination = {
  id: 1,
  name: 'Explore India',
  badge: 'Premium Journey',
  tagline: 'Custom Private Tours & Unforgettable Experiences',
  heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1600',
  rating: 4.9,
  reviewsCount: 200,
  toursCount: 10,
  price: 18500,
  region: 'India',
  subregion: 'Heritage & Nature',
  bestTime: 'October to March',
  idealDuration: '4 - 7 Days',
  nearestAirport: 'Major International Airports',
  description: "Experience the incredible beauty, rich cultural heritage, and warm hospitality of India with Shree Global Holidays. From high-altitude mountain passes to sun-kissed beaches and royal fortresses, we craft personalized itineraries tailored around the way you like to travel.",
  highlights: [
    'Handpicked 4-Star & 5-Star heritage stays with breakfast',
    'Chauffeur-driven private luxury vehicles for seamless road trips',
    'Expert local guides at historical monuments and national parks',
    '24/7 live concierge support during your trip'
  ],
  attractions: [
    { name: 'Heritage Monuments', desc: 'UNESCO heritage forts, palaces, and ancient architecture.', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600' },
    { name: 'Scenic Landscapes', desc: 'From tea valleys to backwaters and snow mountain passes.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600' }
  ],
  packages: [
    { id: 1, name: 'Golden Triangle Tour', duration: '5D/4N', price: 14500, rating: 4.9, image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600' }
  ]
};

export default function DestinationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    travelers: '2 Adults'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const dest = destinationsDetailData[id] || {
    ...defaultDestination,
    id: id || 1,
    name: isNaN(id) ? id : `Destination ${id}`
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', date: '', travelers: '2 Adults' });
    }, 4000);
  };

  return (
    <div className="dest-detail-page">
      {/* ================= HERO SECTION ================= */}
      <section className="dest-detail-hero">
        <div
          className="dest-detail-hero-bg"
          style={{ backgroundImage: `url('${dest.heroImage}')` }}
        ></div>
        <div className="dest-detail-hero-scrim"></div>
        <div className="container dest-detail-hero-content">
          <div className="dest-detail-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/destinations">Destinations</Link>
            <span>/</span>
            <span className="current">{dest.name}</span>
          </div>

          <span className="dest-detail-badge">
            <i className="fa-solid fa-location-dot"></i> {dest.badge}
          </span>
          <h1>{dest.name} Travel Guide</h1>
          <p className="dest-detail-tagline">{dest.tagline}</p>

          <div className="dest-detail-stats-strip">
            <div className="stat-item">
              <i className="fa-solid fa-star gold"></i>
              <strong>{dest.rating}</strong> ({dest.reviewsCount} Reviews)
            </div>
            <div className="stat-item">
              <i className="fa-solid fa-route"></i>
              <strong>{dest.toursCount}</strong> Tours Available
            </div>
            <div className="stat-item">
              <i className="fa-solid fa-tag"></i>
              Starting at <strong>₹{dest.price ? dest.price.toLocaleString() : '18,500'}</strong> / person
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT & SIDEBAR ================= */}
      <section className="section dest-detail-body">
        <div className="container">
          <div className="dest-detail-grid">
            {/* LEFT MAIN COLUMN */}
            <div className="dest-detail-main">
              {/* About Box */}
              <div className="dest-detail-card">
                <h3 className="section-title">
                  <i className="fa-solid fa-compass"></i> About {dest.name}
                </h3>
                <p className="dest-description-text">{dest.description}</p>

                {/* Quick Info Grid */}
                <div className="dest-quick-info-grid">
                  <div className="info-box">
                    <i className="fa-regular fa-calendar-check"></i>
                    <div>
                      <span>Best Time to Visit</span>
                      <strong>{dest.bestTime}</strong>
                    </div>
                  </div>
                  <div className="info-box">
                    <i className="fa-regular fa-clock"></i>
                    <div>
                      <span>Ideal Duration</span>
                      <strong>{dest.idealDuration}</strong>
                    </div>
                  </div>
                  <div className="info-box">
                    <i className="fa-solid fa-plane"></i>
                    <div>
                      <span>Nearest Airport</span>
                      <strong>{dest.nearestAirport}</strong>
                    </div>
                  </div>
                  <div className="info-box">
                    <i className="fa-solid fa-map-pin"></i>
                    <div>
                      <span>Region</span>
                      <strong>{dest.region} ({dest.subregion})</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              {dest.highlights && (
                <div className="dest-detail-card">
                  <h3 className="section-title">
                    <i className="fa-solid fa-wand-magic-sparkles"></i> Key Highlights &amp; Experiences
                  </h3>
                  <ul className="dest-highlights-list">
                    {dest.highlights.map((item, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Attractions Grid */}
              {dest.attractions && (
                <div className="dest-detail-card">
                  <h3 className="section-title">
                    <i className="fa-solid fa-camera"></i> Top Places to Visit in {dest.name}
                  </h3>
                  <div className="dest-attractions-grid">
                    {dest.attractions.map((attr, idx) => (
                      <div key={idx} className="attraction-card">
                        <img src={attr.img} alt={attr.name} />
                        <div className="attr-content">
                          <h4>{attr.name}</h4>
                          <p>{attr.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recommended Packages */}
              <div className="dest-detail-card">
                <h3 className="section-title">
                  <i className="fa-solid fa-suitcase"></i> Recommended {dest.name} Tour Packages
                </h3>
                <div className="dest-packages-grid">
                  {dest.packages && dest.packages.length > 0 ? (
                    dest.packages.map((pkg) => (
                      <div key={pkg.id} className="mini-pkg-card">
                        <img src={pkg.image} alt={pkg.name} />
                        <div className="mini-pkg-info">
                          <h4>{pkg.name}</h4>
                          <div className="mini-pkg-meta">
                            <span><i className="fa-regular fa-clock"></i> {pkg.duration}</span>
                            <span><i className="fa-solid fa-star gold"></i> {pkg.rating}</span>
                          </div>
                          <div className="mini-pkg-footer">
                            <span className="price">₹{pkg.price.toLocaleString()}</span>
                            <Link to={`/package/${pkg.id}`} className="btn btn-brand btn-sm">
                              View Tour
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-pkg-box">
                      <p>We craft 100% custom private itineraries for {dest.name}.</p>
                      <Link to="/contact" className="btn btn-brand">
                        Request Custom Plan
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="dest-detail-sidebar">
              {/* Inquiry Card */}
              <div className="dest-sidebar-card inquiry-card">
                <h3>
                  <i className="fa-solid fa-paper-plane"></i> Plan Trip to {dest.name}
                </h3>
                <p>Speak to our travel expert for a personalized private itinerary.</p>

                {formSubmitted ? (
                  <div className="inquiry-success">
                    <i className="fa-solid fa-circle-check"></i>
                    <h4>Inquiry Received!</h4>
                    <p>Our travel specialist will contact you within 15 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="sidebar-form">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Expected Travel Date</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Number of Travelers</label>
                      <select
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      >
                        <option>1 Person</option>
                        <option>2 Adults (Couple)</option>
                        <option>Family (3-5 Persons)</option>
                        <option>Group (6+ Persons)</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn-brand btn-block">
                      <i className="fa-solid fa-paper-plane"></i> Get Free Custom Quote
                    </button>
                  </form>
                )}

                <div className="direct-call-box">
                  <span>Or Call Directly:</span>
                  <a href="tel:+919811022334"><i className="fa-solid fa-phone"></i> +91 98110 22334</a>
                </div>
              </div>

              {/* Trust Badge Card */}
              <div className="dest-sidebar-card trust-card">
                <h4><i className="fa-solid fa-shield-halved"></i> Why Shree Global</h4>
                <ul>
                  <li><i className="fa-solid fa-check"></i> 100% Custom Private Cars &amp; Guides</li>
                  <li><i className="fa-solid fa-check"></i> Verified Luxury Fleet &amp; Chauffeurs</li>
                  <li><i className="fa-solid fa-check"></i> 24x7 Live Assistance During Trip</li>
                  <li><i className="fa-solid fa-check"></i> No Hidden Charges &amp; Best Rate Guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
