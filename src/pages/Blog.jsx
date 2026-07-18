import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const allBlogPosts = [
  {
    id: 1,
    title: 'The Ultimate Golden Triangle Itinerary: Delhi, Agra & Jaipur',
    category: 'destination',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Everything you need to know before exploring India\'s most iconic circuit — from the best time to visit to hidden gems.',
    date: '15 Jan 2026',
    readTime: '6 min read',
    author: 'Rajesh Sharma',
    authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    comments: 24
  },
  {
    id: 2,
    title: 'Ladakh on Two Wheels: A Motorcycle Adventure Through the High Himalayas',
    category: 'adventure',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Conquering the world\'s highest motorable passes — a first-hand account of riding through Ladakh\'s breathtaking landscape.',
    date: '8 Jan 2026',
    readTime: '8 min read',
    author: 'Vikram Mehta',
    authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    comments: 18
  },
  {
    id: 3,
    title: 'Houseboat Heaven: Experiencing Kerala\'s Backwaters in Style',
    category: 'luxury',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600',
    excerpt: 'From traditional rice boats to luxury cruises — here\'s how to do Kerala\'s backwaters like a true connoisseur.',
    date: '2 Jan 2026',
    readTime: '5 min read',
    author: 'Priya Singh',
    authorImg: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=100',
    comments: 15
  },
  {
    id: 4,
    title: 'Inside Rajasthan\'s Royal Palaces: A Guide to India\'s Living Heritage',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Step into the world of maharajas — exploring the forts, palaces and stories that make Rajasthan truly regal.',
    date: '28 Dec 2025',
    readTime: '7 min read',
    author: 'Rajesh Sharma',
    authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    comments: 32
  },
  {
    id: 5,
    title: 'The Magic of Varanasi: Witnessing the Ganga Aarti at Dawn',
    category: 'spiritual',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600',
    excerpt: 'An immersive experience of spirituality, culture and timeless rituals along the banks of the holy Ganges.',
    date: '20 Dec 2025',
    readTime: '5 min read',
    author: 'Ananya Reddy',
    authorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
    comments: 21
  },
  {
    id: 6,
    title: 'Top 5 Himalayan Treks for Every Fitness Level',
    category: 'adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600',
    excerpt: 'From easy day hikes to challenging multi-day expeditions — find the perfect Himalayan trek for your ability.',
    date: '15 Dec 2025',
    readTime: '9 min read',
    author: 'Vikram Mehta',
    authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
    comments: 27
  },
  {
    id: 7,
    title: '10 Essential Travel Tips for Your First Trip to India',
    category: 'tips',
    image: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Everything first-time visitors need to know — from cultural etiquette to packing essentials and local transport.',
    date: '10 Dec 2025',
    readTime: '6 min read',
    author: 'Priya Singh',
    authorImg: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=100',
    comments: 19
  },
  {
    id: 8,
    title: 'Royal Rajasthan: A Journey Through India\'s Most Vibrant State',
    category: 'heritage',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Discover the palaces, forts, and colorful culture that make Rajasthan a must-visit destination.',
    date: '5 Dec 2025',
    readTime: '7 min read',
    author: 'Rajesh Sharma',
    authorImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    comments: 14
  },
  {
    id: 9,
    title: 'The Ultimate Guide to Kerala\'s Backwaters',
    category: 'destination',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600',
    excerpt: 'Everything you need to know about houseboat cruises, hidden villages, and the best time to visit.',
    date: '28 Nov 2025',
    readTime: '6 min read',
    author: 'Ananya Reddy',
    authorImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
    comments: 22
  }
];

export default function Blog() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtered posts
  const filtered = allBlogPosts.filter((post) => {
    // category filter
    if (activeCategory !== 'all' && post.category !== activeCategory) return false;
    // search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.author.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const pageItems = filtered.slice(startIdx, startIdx + itemsPerPage);

  const categoryColors = {
    destination: 'destination',
    adventure: 'adventure',
    luxury: 'luxury',
    heritage: 'heritage',
    spiritual: 'spiritual',
    tips: 'tips',
    trekking: 'trekking'
  };

  return (
    <>
      {/* ================= BLOG HERO ================= */}
      <section className="blog-hero">
        <div className="blog-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="blog-hero-scrim"></div>
        <div className="blog-hero-content">
          <span className="sub-badge"><i className="fa-regular fa-newspaper"></i> Travel Journal</span>
          <h1>Stories from the <span className="italic">Road</span></h1>
          <p>Insider tips, destination guides, and travel stories from our team of explorers</p>
          <div className="blog-search-box">
            <input 
              type="text" 
              placeholder="Search articles, destinations, topics..." 
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
            <button><i className="fa-solid fa-search"></i> Search</button>
          </div>
          <div className="blog-breadcrumb">
            <Link to="/">Home</Link> / <span>Blog</span>
          </div>
        </div>
      </section>

      {/* ================= BLOG CATEGORY TABS ================= */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: 0 }}>
        <div className="container">
          <div className="blog-tabs reveal">
            {[
              { label: 'All Posts', value: 'all', icon: 'fa-solid fa-asterisk' },
              { label: 'Destination Guides', value: 'destination', icon: 'fa-solid fa-location-dot' },
              { label: 'Adventure', value: 'adventure', icon: 'fa-solid fa-mountain' },
              { label: 'Luxury Travel', value: 'luxury', icon: 'fa-solid fa-crown' },
              { label: 'Heritage', value: 'heritage', icon: 'fa-solid fa-landmark' },
              { label: 'Spiritual', value: 'spiritual', icon: 'fa-solid fa-hand-peace' },
              { label: 'Travel Tips', value: 'tips', icon: 'fa-solid fa-lightbulb' }
            ].map((tab) => (
              <button 
                key={tab.value}
                className={`blog-tab ${activeCategory === tab.value ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(tab.value);
                  setCurrentPage(1);
                }}
              >
                <i className={tab.icon}></i> {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="section" style={{ padding: '10px' }}>
        <div className="container">
          {/* Featured Post (only on page 1 when no search or "all" category) */}
          {currentPage === 1 && activeCategory === 'all' && !search.trim() && (
            <div className="featured-post reveal">
              <div className="image">
                <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" alt="Featured post" />
                <span className="badge">Featured</span>
              </div>
              <div className="content">
                <div className="meta">
                  <span><i className="fa-regular fa-calendar"></i> 15 Jan 2026</span>
                  <span><i className="fa-regular fa-clock"></i> 8 min read</span>
                  <span><i className="fa-regular fa-comment"></i> 24 Comments</span>
                </div>
                <h2><Link to="/blog/1">The Ultimate Golden Triangle Itinerary: Delhi, Agra &amp; Jaipur</Link></h2>
                <p>Everything you need to know before exploring India's most iconic circuit — from the best time to visit to hidden gems, luxury stays, and insider tips.</p>
                <div className="author">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Author" />
                  <div>
                    <div className="name">Rajesh Sharma</div>
                    <div className="role">Founder &amp; Travel Expert</div>
                  </div>
                </div>
                <Link to="/blog/1" className="btn btn-brand btn-sm"><i className="fa-regular fa-arrow-right"></i> Read Full Article</Link>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="blog-grid reveal">
            {pageItems.length === 0 ? (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px 20px' }}>
                <i className="fa-regular fa-newspaper" style={{ fontSize: '3rem', color: 'var(--ink-faint)', display: 'block', marginBottom: '16px' }}></i>
                <h3 style={{ color: 'var(--ink-soft)' }}>No posts found</h3>
                <p style={{ color: 'var(--ink-faint)' }}>Try adjusting your search or filter.</p>
              </div>
            ) : (
              pageItems.map((post) => (
                <div key={post.id} className="blog-card" data-category={post.category}>
                  <div className="image-wrap">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <span className={`category-badge ${categoryColors[post.category] || ''}`}>{post.category}</span>
                    <span className="read-time"><i className="fa-regular fa-clock"></i> {post.readTime}</span>
                  </div>
                  <div className="content">
                    <div className="meta">
                      <span><i className="fa-regular fa-calendar"></i> {post.date}</span>
                      <span><i className="fa-regular fa-comment"></i> {post.comments} Comments</span>
                    </div>
                    <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                    <p>{post.excerpt}</p>
                    <div className="footer">
                      <div className="author">
                        <img src={post.authorImg} alt={post.author} />
                        <span className="name">{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="read-more">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination reveal">
              <button 
                className="arrow" 
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} 
                disabled={currentPage === 1}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                <button 
                  key={page}
                  className={currentPage === page ? 'active' : ''}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button 
                className="arrow" 
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} 
                disabled={currentPage === totalPages}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '30px' }}>
        <div className="container">
          <div className="blog-newsletter reveal">
            <h3><i className="fa-regular fa-envelope"></i> Subscribe to Our Newsletter</h3>
            <p>Get the latest travel stories, destination guides, and exclusive deals delivered to your inbox.</p>
            <form className="nl-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit"><i className="fa-regular fa-paper-plane"></i> Subscribe</button>
            </form>
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
