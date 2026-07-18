import { Link, useParams } from 'react-router-dom';
import './BlogDetail.css';

const blogPostsData = {
  1: {
    title: 'The Ultimate Golden Triangle Itinerary: Delhi, Agra & Jaipur',
    category: 'Destination Guide',
    heroImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1600',
    date: '15 January 2026',
    readTime: '8 min read',
    comments: '24 Comments',
    author: 'Rajesh Sharma',
    authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    content: (
      <>
        <p>India's Golden Triangle — Delhi, Agra, and Jaipur — is the country's most famous tourist circuit, and for good reason. This route offers a perfect introduction to India's rich history, stunning architecture, vibrant culture, and warm hospitality. Whether you're a first-time visitor or a seasoned traveler, the Golden Triangle never disappoints.</p>

        <div className="highlight-box">
          <p><strong>📌 Quick Overview:</strong> The Golden Triangle covers approximately 700 kilometers and can be completed in 5-7 days. Each city offers a unique experience — from the bustling streets of Delhi to the timeless beauty of the Taj Mahal and the royal grandeur of Jaipur.</p>
        </div>

        <h2>1. Delhi — The Heart of India</h2>
        <p>Start your journey in India's capital city, where ancient history meets modern development. Delhi is a city of contrasts — from the narrow lanes of Old Delhi to the tree-lined boulevards of New Delhi.</p>

        <h3>Top Experiences in Delhi</h3>
        <ul>
          <li><strong>Red Fort:</strong> A UNESCO World Heritage site and symbol of Mughal power</li>
          <li><strong>Jama Masjid:</strong> India's largest mosque, with stunning views of Old Delhi</li>
          <li><strong>India Gate:</strong> A war memorial that's beautiful at sunset</li>
          <li><strong>Qutub Minar:</strong> The world's tallest brick minaret</li>
          <li><strong>Humayun's Tomb:</strong> A precursor to the Taj Mahal</li>
          <li><strong>Chandni Chowk:</strong> Experience the chaos and charm of Old Delhi's bazaars</li>
        </ul>

        <div className="featured-image">
          <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1000" alt="Taj Mahal" />
        </div>

        <h2>2. Agra — Home of the Taj Mahal</h2>
        <p>Drive 3-4 hours from Delhi to reach Agra, home of the world-famous Taj Mahal. While the Taj is the star attraction, Agra has much more to offer.</p>

        <h3>Must-See in Agra</h3>
        <ul>
          <li><strong>Taj Mahal:</strong> Best visited at sunrise for the most magical experience</li>
          <li><strong>Agra Fort:</strong> A massive red sandstone fort with stunning views of the Taj</li>
          <li><strong>Mehtab Bagh:</strong> The perfect spot for sunset views of the Taj</li>
          <li><strong>Fatehpur Sikri:</strong> A beautifully preserved Mughal city on the outskirts</li>
        </ul>

        <div className="highlight-box">
          <p><strong>💡 Pro Tip:</strong> Visit the Taj Mahal at sunrise to avoid crowds and witness the monument bathed in golden light. Book tickets online in advance to skip the queues.</p>
        </div>

        <h2>3. Jaipur — The Pink City</h2>
        <p>Continue your journey to Jaipur, the capital of Rajasthan. Known as the Pink City, Jaipur is a vibrant blend of royal history, colorful markets, and stunning architecture.</p>

        <h3>Top Attractions in Jaipur</h3>
        <ul>
          <li><strong>Amber Fort:</strong> A majestic fort with a stunning mirror palace</li>
          <li><strong>City Palace:</strong> The royal residence with beautiful courtyards and museums</li>
          <li><strong>Jantar Mantar:</strong> A fascinating astronomical observatory</li>
          <li><strong>Hawa Mahal:</strong> The iconic "Palace of Winds" with its unique honeycomb design</li>
          <li><strong>Jal Mahal:</strong> A beautiful palace in the middle of Man Sagar Lake</li>
          <li><strong>Johari Bazaar:</strong> Shop for traditional jewelry, textiles, and crafts</li>
        </ul>

        <h2>4. Best Time to Visit</h2>
        <p>The best time to explore the Golden Triangle is from <strong>October to March</strong>. The weather is pleasant with clear skies, making it ideal for sightseeing. The monsoon season (July-September) brings heavy rains, while summers (April-June) can be extremely hot.</p>

        <h2>5. Travel Tips</h2>
        <ul>
          <li><strong>Transport:</strong> Hire a private car with a driver for the most convenient experience</li>
          <li><strong>Accommodation:</strong> Book heritage hotels in Jaipur for a royal experience</li>
          <li><strong>Dress Code:</strong> Dress modestly when visiting religious sites</li>
          <li><strong>Water:</strong> Always drink bottled water to avoid stomach issues</li>
          <li><strong>Photography:</strong> Check photography rules at monuments (drones are prohibited)</li>
        </ul>

        <h2>6. Where to Stay</h2>
        <ul>
          <li><strong>Delhi:</strong> The Imperial, The Lodhi, or boutique hotels in Hauz Khas</li>
          <li><strong>Agra:</strong> The Oberoi Amarvilas (with Taj views), ITC Mughal</li>
          <li><strong>Jaipur:</strong> Rambagh Palace, The Raj Palace, or heritage havelis</li>
        </ul>

        <div className="highlight-box">
          <p><strong>✨ Final Tip:</strong> Extend your trip by 2-3 days to explore nearby destinations like Pushkar, Ranthambore National Park, or the holy city of Varanasi for a deeper India experience.</p>
        </div>
      </>
    )
  }
};

const defaultPost = {
  title: 'Discovering the Wonders of Indian Travel',
  category: 'Travel Guide',
  heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1600',
  date: '10 January 2026',
  readTime: '5 min read',
  comments: '12 Comments',
  author: 'Priya Singh',
  authorImg: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=100',
  content: (
    <>
      <p>India is a land of diversity, offering everything from pristine beaches and scenic backwaters to high-altitude mountain deserts and historical monuments. Each region has its unique culture, cuisine, and heritage that awaits your exploration.</p>
      <div className="highlight-box">
        <p><strong>✈️ Plan Ahead:</strong> Exploring India is a rewarding experience when you plan your transport and accommodation in advance. From luxury trains to private guided tours, the possibilities are endless.</p>
      </div>
      <h2>Top Tips for Traveling in India</h2>
      <ul>
        <li>Choose the right season for your destination.</li>
        <li>Respect local customs and clothing requirements at sacred sites.</li>
        <li>Try regional cuisines but stick to bottled water and hygienic eateries.</li>
        <li>Carry cash as smaller vendors may not accept international cards.</li>
      </ul>
    </>
  )
};

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPostsData[id] || defaultPost;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="blog-detail-hero">
        <div className="blog-detail-hero-bg" style={{ backgroundImage: `url('${post.heroImage}')` }}></div>
        <div className="blog-detail-hero-scrim"></div>
        <div className="blog-detail-hero-content">
          <span className="category"><i className="fa-solid fa-location-dot"></i> {post.category}</span>
          <h1>{post.title}</h1>
          <div className="meta">
            <span className="author">
              <img src={post.authorImg} alt={post.author} />
              <span>By {post.author}</span>
            </span>
            <span><i className="fa-regular fa-calendar"></i> {post.date}</span>
            <span><i className="fa-regular fa-clock"></i> {post.readTime}</span>
            <span><i className="fa-regular fa-comment"></i> {post.comments}</span>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="blog-detail-content reveal">
            {post.content}

            {/* Share */}
            <div className="share-section">
              <span>Share this article:</span>
              <a href="#" className="fb" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="tw" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="wa" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#" className="ln" onClick={(e) => e.preventDefault()}><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RELATED POSTS ================= */}
      <section className="section sand tight">
        <div className="container">
          <div className="kicker-row reveal">
            <div>
              <div className="eyebrow">You May Also Like</div>
              <h2>Related <span className="italic">Articles</span></h2>
            </div>
          </div>
          <div className="related-grid reveal">
            <div className="related-card">
              <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=500" alt="Ladakh" />
              <div className="content">
                <span className="cat">Adventure</span>
                <h4><Link to="/blog/2">Ladakh on Two Wheels: A Motorcycle Adventure</Link></h4>
              </div>
            </div>
            <div className="related-card">
              <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=500" alt="Kerala" />
              <div className="content">
                <span className="cat">Luxury Travel</span>
                <h4><Link to="/blog/3">Houseboat Heaven: Kerala's Backwaters in Style</Link></h4>
              </div>
            </div>
            <div className="related-card">
              <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=500" alt="Rajasthan" />
              <div className="content">
                <span className="cat">Heritage</span>
                <h4><Link to="/blog/4">Inside Rajasthan's Royal Palaces: A Guide</Link></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
