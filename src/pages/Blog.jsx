import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getBlogCategoriesApi, getBlogsApi } from '../api/blogApi.js';
import './Blog.css';

export default function Blog() {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    totalPages: 1,
    totalCount: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  const isInitialMount = useRef(true);

  // Fetch active categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getBlogCategoriesApi();
        if (response.success) {
          setCategories(response.data || []);
        }
      } catch (error) {
        console.error('Error fetching blog categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch active blogs when activeCategory, search, or currentPage changes
  useEffect(() => {
    const fetchBlogsData = async () => {
      setIsLoading(true);
      try {
        const response = await getBlogsApi(activeCategory, search, currentPage, 9);
        if (response.success) {
          setBlogs(response.data || []);
          if (response.pagination) {
            setPagination(response.pagination);
          }
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogsData();
  }, [activeCategory, search, currentPage]);

  // Smooth scroll on page change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    const element = document.querySelector('.blog-grid') || document.querySelector('#blog-section');
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [currentPage]);

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <>
      {/* ================= BLOG HERO ================= */}
      <section className="blog-hero">
        <div className="blog-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="blog-hero-scrim"></div>
        <div className="blog-hero-content">
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
          <div className="blog-tabs">
            {/* All Posts Tab */}
            <button 
              className={`blog-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory('all');
                setCurrentPage(1);
              }}
            >
              <i className="fa-solid fa-asterisk"></i> All Posts
            </button>

            {/* Dynamic Categories fetched from backend */}
            {categories.map((cat) => (
              <button 
                key={cat._id}
                className={`blog-tab ${activeCategory === cat._id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat._id);
                  setCurrentPage(1);
                }}
              >
                <i className="fa-solid fa-layer-group"></i> {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BLOG POSTS GRID ================= */}
      <section className="section" id="blog-section" style={{ paddingTop: '30px' }}>
        <div className="container">
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--navy, #002D71)' }}>
              <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
              <p style={{ marginTop: '12px', fontWeight: 600 }}>Fetching travel articles...</p>
            </div>
          ) : blogs.length > 0 ? (
            <>
              <div className="blog-grid">
                {blogs.map((post) => (
                  <article key={post._id} className="blog-card">
                    <div className="image-wrap">
                      <img 
                        src={post.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600'} 
                        alt={post.title} 
                      />
                      <span className="category-badge destination">
                        {post.category?.title || 'Travel Guide'}
                      </span>
                      <span className="read-time">
                        <i className="fa-regular fa-clock"></i> {post.readMinutes || 5} min read
                      </span>
                    </div>

                    <div className="content">
                      <div className="meta">
                        <span><i className="fa-regular fa-calendar"></i> {formatDate(post.createdAt)}</span>
                      </div>

                      <h3>
                        <Link to={`/blog/${post.slug || post._id}`}>{post.title}</Link>
                      </h3>

                      <p>
                        {post.details ? post.details.replace(/<[^>]*>?/gm, '').substring(0, 110) + '...' : ''}
                      </p>

                      <div className="footer">
                        <div className="author">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
                            alt={post.authorName || 'Author'} 
                          />
                          <span className="name">{post.authorName || 'Shree Global Team'}</span>
                        </div>

                        <Link to={`/blog/${post.slug || post._id}`} className="read-more">
                          Read <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Server-Side Pagination */}
              {pagination.totalPages > 1 && (
                <div className="pagination">
                  <button 
                    disabled={currentPage <= 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="arrow"
                    style={{ opacity: currentPage <= 1 ? 0.4 : 1, cursor: currentPage <= 1 ? 'not-allowed' : 'pointer' }}
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>

                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={currentPage === pageNum ? 'active' : ''}
                    >
                      {pageNum}
                    </button>
                  ))}

                  <button 
                    disabled={currentPage >= pagination.totalPages}
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pagination.totalPages))}
                    className="arrow"
                    style={{ opacity: currentPage >= pagination.totalPages ? 0.4 : 1, cursor: currentPage >= pagination.totalPages ? 'not-allowed' : 'pointer' }}
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#6b7280' }}>
              <i className="fa-regular fa-newspaper fa-3x" style={{ color: '#d1d5db', marginBottom: '16px' }}></i>
              <h3>No articles found</h3>
              <p style={{ marginTop: '8px', fontSize: '0.9rem' }}>Try selecting another category or clear your search term.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
