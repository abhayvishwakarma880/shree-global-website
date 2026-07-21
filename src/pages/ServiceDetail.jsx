import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import './ServiceDetail.css';

const servicesData = {
  'group-tours': {
    title: 'Group Tours',
    subtitle: 'Curated Journeys for Families, Friends, and Special Interest Groups',
    heroImage: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&q=80&w=1600',
    description: 'Traveling is best enjoyed together. Our group tours are designed to foster connection, create shared memories, and deliver seamless, hassle-free travel experiences. From family reunions and social clubs to corporate retreats and pilgrimage groups, we design custom itineraries that cater to every group size and interest.',
    whyChooseUs: [
      {
        title: 'Customized Itineraries',
        desc: 'No cookie-cutter trips. We tailor schedules, hotels, and activities to match your group\'s unique vibe and pace.'
      },
      {
        title: 'Dedicated Tour Manager',
        desc: 'A professional tour manager travels with you to handle hotel check-ins, local transfers, and guided sightseeing.'
      },
      {
        title: 'Exclusive Group Rates',
        desc: 'Leverage our 15+ years of industry partnerships to secure special group discounts on luxury stays and transport.'
      }
    ],
    offerings: [
      {
        title: 'Family & Friends Getaways',
        desc: 'Tailored holidays for family reunions, milestone birthdays, and close-friend groups looking for luxury and leisure.',
        icon: 'fa-solid fa-people-roof'
      },
      {
        title: 'Special Interest Groups',
        desc: 'Itineraries focused on photography, historical architecture, yoga and wellness, or culinary experiences led by domain experts.',
        icon: 'fa-solid fa-camera-retro'
      },
      {
        title: 'Corporate Retreats & Team Building',
        desc: 'Blend business sessions with team-building activities, adventure sports, and premium banquets at luxury heritage resorts.',
        icon: 'fa-solid fa-briefcase'
      },
      {
        title: 'Educational & Student Trips',
        desc: 'Safe, educational, and fun travel programs designed for students and educational institutions with proper chaperone support.',
        icon: 'fa-solid fa-graduation-cap'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800'
    ],
    faqs: [
      {
        q: 'What is the minimum group size for a custom group tour?',
        a: 'We design custom group tours for groups of 8 or more travelers. For smaller groups, we recommend our personalized custom itineraries.'
      },
      {
        q: 'Do you provide tour managers for the entire journey?',
        a: 'Yes! For groups larger than 15, we provide a dedicated tour manager who coordinates all ground logistics and stays with the group 24/7.'
      },
      {
        q: 'How do you handle dietary requirements for groups?',
        a: 'We gather dietary preferences (vegetarian, vegan, gluten-free, jain, etc.) from all group members during the planning phase and pre-arrange special meals with hotels and restaurants.'
      }
    ]
  },
  'mice': {
    title: 'MICE',
    subtitle: 'Meetings, Incentives, Conferences & Exhibitions',
    heroImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1600',
    description: 'We orchestrate end-to-end corporate event planning, logistics, venue sourcing, and execution tailored to your business objectives. Whether hosting an executive board meeting or a large-scale international exhibition, our team handles all corporate hospitality with utmost professionalism and precision.',
    whyChooseUs: [
      {
        title: 'Technology & AV Integration',
        desc: 'Access state-of-the-art visual, sound, and lighting configurations to make your conference impact-driven.'
      },
      {
        title: 'Premium Venues',
        desc: 'Strong associations with top 5-star properties, convention centers, and unique offsite venues globally.'
      },
      {
        title: 'Dedicated Event Managers',
        desc: 'Single point of contact from conceptualization to execution, ensuring zero communication lag.'
      }
    ],
    offerings: [
      {
        title: 'Executive Conferences & Board Meetings',
        desc: 'Confidential and highly sophisticated arrangements for board members and senior executives at remote retreats or luxury city hotels.',
        icon: 'fa-solid fa-handshake'
      },
      {
        title: 'Product Launches & Gala Dinners',
        desc: 'Creative themes, sound, lighting, entertainment, and customized catering to leave a lasting impact on your clients and partners.',
        icon: 'fa-solid fa-bullhorn'
      },
      {
        title: 'Exhibitions & Trade Shows',
        desc: 'Full booth construction, stall design, vendor coordination, licensing, security, and crowd management solutions.',
        icon: 'fa-solid fa-display'
      },
      {
        title: 'Corporate Travel & Flight Management',
        desc: 'Bulk flight bookings, airport meet-and-greet, luxury transfers, and delegate registration services.',
        icon: 'fa-solid fa-plane-up'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800'
    ],
    faqs: [
      {
        q: 'Do you manage international conferences as well?',
        a: 'Yes, we manage both domestic (across major Indian metropolitan and resort cities) and international conferences in destinations like Dubai, Bali, Singapore, Thailand, and Europe.'
      },
      {
        q: 'How far in advance should we plan a corporate MICE event?',
        a: 'For smaller meetings (20-50 pax), 2-3 months is sufficient. For large conferences or exhibitions (100+ pax), we recommend starting the planning process 6 months in advance.'
      }
    ]
  },
  'incentive-tours': {
    title: 'Incentive Tours',
    subtitle: 'Rewarding Excellence with Luxury Travel Experiences',
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600',
    description: 'Motivate and reward your high-performing teams, channel partners, and distributors with life-changing luxury travel experiences. We curate reward travel that goes far beyond standard packages, featuring private charters, palace stays, exclusive dining, and local experiences designed to make every attendee feel valued.',
    whyChooseUs: [
      {
        title: 'Bespoke Luxuries',
        desc: 'From private yacht charters to exclusive palace buyouts, we offer access to the extraordinary.'
      },
      {
        title: 'High-Impact Branding',
        desc: 'Integrate your brand story at every touchpoint — from premium custom kits and flight greetings to gala awards nights.'
      },
      {
        title: 'Flawless Logistics',
        desc: 'Our ground teams manage high-profile guest transfers, luggage handling, and dynamic requests seamlessly.'
      }
    ],
    offerings: [
      {
        title: 'Ultra-Luxury Hotel Buyouts',
        desc: 'Experience complete privacy with exclusive takeovers of heritage palaces in Rajasthan, private island resorts, or boutique mountain lodges.',
        icon: 'fa-solid fa-hotel'
      },
      {
        title: 'Unique Team Adventures',
        desc: 'Bond over unforgettable activities like hot air ballooning in Jaipur, private dune dinners in Jaisalmer, or scuba expeditions in Andaman.',
        icon: 'fa-solid fa-compass'
      },
      {
        title: 'Theme Gala Nights & Award Ceremonies',
        desc: 'Celebrate success with state-of-the-art audio-visual setups, stellar entertainment, and premium dining at historic forts and beach resorts.',
        icon: 'fa-solid fa-award'
      },
      {
        title: 'Custom Guest Kits & Gifting',
        desc: 'Curated eco-friendly luggage, personalized travel guides, local souvenir baskets, and premium travel accessories for each attendee.',
        icon: 'fa-solid fa-gift'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=800'
    ],
    faqs: [
      {
        q: 'Can we integrate business meetings inside an Incentive Tour?',
        a: 'Absolutely. Most incentive tours have a half-day or full-day session dedicated to corporate presentations, annual reviews, and awards, followed by leisure travel.'
      },
      {
        q: 'What are the top domestic destinations for Incentive Tours in India?',
        a: 'Rajasthan (Udaipur, Jaipur, Jodhpur) for heritage luxury, Goa for beach-side relaxation, and Kerala for scenic backwater resorts are highly popular.'
      }
    ]
  },
  'visa-assistance': {
    title: 'Visa Assistance',
    subtitle: 'Seamless, Reliable Document Processing for Global Travel',
    heroImage: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=1600',
    description: 'Applying for travel visas can be complex and stressful. Our dedicated visa division provides end-to-end support for business, tourist, and group visas for all major global destinations. We verify documents, fill applications, book embassy appointments, and prepare you for interviews to maximize your visa success rate.',
    whyChooseUs: [
      {
        title: 'Visa Experts',
        desc: 'Our team stays updated with changing embassy rules, documentation criteria, and processing times.'
      },
      {
        title: 'High Success Rate',
        desc: 'Through rigorous pre-submission documentation checks, we minimize rejection risks.'
      },
      {
        title: 'Document Pickup & Drop',
        desc: 'Convenient document logistics to collect your passport and physical papers securely from your home or office.'
      }
    ],
    offerings: [
      {
        title: 'Tourist & Leisure Visas',
        desc: 'Guidance and submission support for Schengen (Europe), USA, UK, Canada, Australia, and popular Asian/Middle Eastern countries.',
        icon: 'fa-solid fa-passport'
      },
      {
        title: 'Corporate & Business Visas',
        desc: 'Fast-track visa processing for corporate employees, business delegates, and exhibitors attending overseas corporate meets.',
        icon: 'fa-solid fa-user-tie'
      },
      {
        title: 'Group Visa Management',
        desc: 'Streamlined coordination for corporate incentive groups, wedding guests, or tour groups flying together to overseas locations.',
        icon: 'fa-solid fa-users'
      },
      {
        title: 'Appointment Booking & Interview prep',
        desc: 'Securing early slots for biometric submission and conducting mock sessions to build confidence for embassy interviews.',
        icon: 'fa-solid fa-calendar-check'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=800'
    ],
    faqs: [
      {
        q: 'Do you guarantee visa approval?',
        a: 'No agency can guarantee visa approval as the decision lies solely with the respective embassies. However, our experienced visa consultants ensure your file is presented flawlessly, raising approval rates significantly.'
      },
      {
        q: 'How early should I apply for my travel visa?',
        a: 'We recommend applying at least 45 to 60 days before your intended travel date, especially for USA, UK, and Schengen countries, as appointment slots and processing times vary.'
      }
    ]
  },
  'cruise-management': {
    title: 'Cruise Management',
    subtitle: 'Sail in Style Across the World\'s Most Scenic Waterways',
    heroImage: 'https://assets.angloeastern.com/assets/2024/07/MV-Sylvia-Earle-v1-webp.webp',
    description: 'Unpack once and wake up in a new destination every morning. From mega-liners sailing the Caribbean and Mediterranean to intimate river cruises exploring the Ganges, Mekong, or European waterways, we handle bookings, cabin selections, pre/post-cruise stays, transfers, and custom shore excursions.',
    whyChooseUs: [
      {
        title: 'Global Partners',
        desc: 'Preferred partnerships with Royal Caribbean, Celebrity, Norwegian, MSC, AmaWaterways, and Cordelia Cruises.'
      },
      {
        title: 'Cabin & Suite Guidance',
        desc: 'Expert recommendations to help you select the best staterooms, balcony suites, or private family villas.'
      },
      {
        title: 'Full Inclusions Layout',
        desc: 'Clear details on cruise packages, beverage cards, specialty dining, Wi-Fi packages, and gratuities.'
      }
    ],
    offerings: [
      {
        title: 'Luxury Ocean Cruises',
        desc: 'Book state-of-the-art mega liners featuring top amenities, entertainment, and culinary options across oceans globally.',
        icon: 'fa-solid fa-ship'
      },
      {
        title: 'River Cruise Expeditions',
        desc: 'Explore historical towns and lush landscapes up close along the Ganges in India, the Danube in Europe, or the Nile in Egypt.',
        icon: 'fa-solid fa-water'
      },
      {
        title: 'Custom Shore Excursions',
        desc: 'Skip crowded cruise tours and explore ports with our private local guides, custom vehicles, and exclusive entry passes.',
        icon: 'fa-solid fa-anchor'
      },
      {
        title: 'Corporate Charters & Events',
        desc: 'Book entire decks or complete cruise vessels for incentive trips, dealer meets, theme parties, or large scale family celebrations.',
        icon: 'fa-solid fa-star'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80&w=800'
    ],
    faqs: [
      {
        q: 'What is included in the cruise fare?',
        a: 'Typically, the fare includes accommodation, main dining hall meals, buffet access, standard theatre shows, pool access, and onboard fitness amenities. Specialty restaurants, alcoholic drinks, Wi-Fi, spa, and shore tours are extra.'
      },
      {
        q: 'Are cruise holidays suitable for senior citizens and children?',
        a: 'Absolutely. Cruises are highly family-friendly, offering kids clubs, play zones, adult-only lounges, medical centers, and wheelchair access throughout the ship.'
      }
    ]
  },
  'crisis-management': {
    title: 'Crisis Management & Travel Security',
    subtitle: '24/7 Dedicated Support and Contingency Planning for Safe Travel',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600',
    description: 'Unforeseen situations like flight cancellations, sudden medical issues, natural disasters, or political unrest can disrupt any trip. Our Crisis Management division provides 24/7 real-time monitoring and backup support to keep you safe. We manage immediate rerouting, emergency hotel stays, medical liaison, and travel insurance claims assistance.',
    whyChooseUs: [
      {
        title: '24/7 Hotlines',
        desc: 'Dedicated emergency contacts that are answered instantly, anytime, anywhere in the world.'
      },
      {
        title: 'Global Coordination Network',
        desc: 'Partnerships with ground teams, airlines, hotels, and medical rescue providers for instant local assistance.'
      },
      {
        title: 'Proactive Alert System',
        desc: 'We monitor global travel warnings, flight changes, and weather patterns to advise and steer you clear of disruptions.'
      }
    ],
    offerings: [
      {
        title: 'Emergency Flight & Hotel Rebooking',
        desc: 'Instant booking of alternative flight routes and luxury hotel stays in case of sudden delays or travel cancellations.',
        icon: 'fa-solid fa-plane-slash'
      },
      {
        title: 'Medical Coordination & Evacuation',
        desc: 'Liaison with local hospitals, arrangement of English-speaking doctors, medical transports, and coordination with travel insurers.',
        icon: 'fa-solid fa-suitcase-medical'
      },
      {
        title: 'Document Loss Support',
        desc: 'Assistance in filing police reports, coordinating with local Indian Embassies/Consulates, and issuing emergency travel certificates in case of lost passports.',
        icon: 'fa-solid fa-file-shield'
      },
      {
        title: 'Travel Insurance Facilitation',
        desc: 'Guiding you on correct documentation (delay certificates, medical bills) to ensure smooth claim settlements with insurance providers.',
        icon: 'fa-solid fa-shield'
      }
    ],
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800'
    ],
    faqs: [
      {
        q: 'Is Crisis Management support free for your travelers?',
        a: 'Yes, basic emergency coordination, rebooking support, and local assistance are fully included for all clients who have booked their travel packages or services through Shree Global Holidays.'
      },
      {
        q: 'What should I do first if my passport is lost abroad?',
        a: 'Immediately contact our 24/7 hotline. We will help you file a report with the local police, prepare the documents, and schedule an emergency visit to the nearest Indian Embassy for a duplicate passport or emergency travel document.'
      }
    ]
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug];

  // State for inquiry form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '8',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const [activeFaq, setActiveFaq] = useState(null);

  if (!service) {
    return (
      <div className="container service-not-found">
        <h2>Service Not Found</h2>
        <p>The service you are looking for does not exist or has been renamed.</p>
        <Link to="/services" className="btn btn-brand">Back to Services</Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-bg" style={{ backgroundImage: `url('${service.heroImage}')` }}></div>
        <div className="service-detail-hero-scrim"></div>
        <div className="service-detail-hero-content">
          <div className="service-detail-breadcrumbs">
            <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>{service.title}</span>
          </div>
          <h1>{service.title}</h1>
          <p className="subtitle">{service.subtitle}</p>
        </div>
      </section>

      {/* ================= CONTENT & SIDEBAR ================= */}
      <section className="section service-detail-main">
        <div className="container">
          <div className="service-detail-grid">
            {/* Left Content Column */}
            <div className="service-detail-content reveal active">
              <h2>About <span className="italic">the Service</span></h2>
              <p className="intro-text">{service.description}</p>

              {/* Why Choose Us */}
              <div className="why-choose-service">
                <h3>Why Choose Shree Global for {service.title}?</h3>
                <div className="why-grid">
                  {service.whyChooseUs.map((item, index) => (
                    <div className="why-card" key={index}>
                      <span className="why-num">0{index + 1}</span>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Offerings */}
              <div className="service-offerings">
                <h3>Key <span className="italic">Offerings</span></h3>
                <div className="offerings-list-detailed">
                  {service.offerings.map((offering, index) => (
                    <div className="offering-detail-item" key={index}>
                      <div className="offering-icon">
                        <i className={offering.icon}></i>
                      </div>
                      <div className="offering-info">
                        <h4>{offering.title}</h4>
                        <p>{offering.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Showcase (Gallery) */}
              <div className="service-showcase">
                <h3>Visual <span className="italic">Showcase</span></h3>
                <div className="service-gallery-grid">
                  {service.gallery.map((imgUrl, index) => (
                    <div className="showcase-img" key={index}>
                      <img src={imgUrl} alt={`${service.title} ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div className="service-faqs">
                  <h3>Frequently Asked <span className="italic">Questions</span></h3>
                  <div className="faq-accordion-wrap">
                    {service.faqs.map((faq, index) => (
                      <div className={`faq-item-box ${activeFaq === index ? 'active' : ''}`} key={index}>
                        <div className="faq-q-bar" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                          <h4>{faq.q}</h4>
                          <span className="toggle-icon">
                            <i className="fa-solid fa-chevron-down"></i>
                          </span>
                        </div>
                        <div className="faq-a-content">
                          <p>{faq.a}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar Column */}
            <div className="service-detail-sidebar reveal active">
              {/* Inquiry Form */}
              <div className="sidebar-card inquiry-form-card">
                <h3>Book / Inquire <span className="italic">Service</span></h3>
                <p>Send details of your travel requirements, and our team will customize the options for you.</p>

                {formSubmitted ? (
                  <div className="inquiry-success">
                    <div className="success-icon"><i className="fa-solid fa-circle-check"></i></div>
                    <h4>Inquiry Submitted!</h4>
                    <p>Thank you for reaching out. A Shree Global Holidays travel expert will contact you shortly.</p>
                    <button className="btn btn-brand btn-sm w-full mt-4" onClick={() => setFormSubmitted(false)}>Send Another Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    {formError && <div className="form-error-msg">{formError}</div>}
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="Enter full name" 
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="Enter email address" 
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="Enter contact number" 
                        required 
                      />
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="date">Travel Date</label>
                        <input 
                          type="date" 
                          id="date" 
                          name="date" 
                          value={formData.date} 
                          onChange={handleInputChange} 
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="guests">Group Size</label>
                        <input 
                          type="number" 
                          id="guests" 
                          name="guests" 
                          value={formData.guests} 
                          onChange={handleInputChange} 
                          min="1" 
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message / Special Notes</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleInputChange} 
                        placeholder="Describe your requirements (destinations, hotel type, etc.)"
                        rows="3"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-brand w-full">Submit Inquiry</button>
                  </form>
                )}
              </div>

              {/* Helpline Card */}
              <div className="sidebar-card helpline-card">
                <div className="help-icon"><i className="fa-solid fa-phone-volume"></i></div>
                <h4>Need Immediate Help?</h4>
                <p>Speak to our senior tour advisors for custom group planning or corporate travel inquiries.</p>
                <div className="contact-details">
                  <a href="tel:+919811022334" className="phone-link"><i className="fa-solid fa-phone"></i> +91 98110 22334</a>
                  <a href="mailto:info@shreeglobalholidays.com" className="email-link"><i className="fa-solid fa-envelope"></i> info@shreeglobal.com</a>
                </div>
              </div>

              {/* Other Services */}
              <div className="sidebar-card other-services-card">
                <h4>Other <span className="italic">Services</span></h4>
                <ul className="other-services-list">
                  {Object.keys(servicesData).map((key) => {
                    if (key !== slug) {
                      return (
                        <li key={key}>
                          <Link to={`/service/${key}`}>
                            <span className="dot"></span> {servicesData[key].title}
                          </Link>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
