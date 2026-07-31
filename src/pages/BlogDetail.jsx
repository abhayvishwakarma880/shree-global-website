import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBlogByIdApi, getBlogsApi } from '../api/blogApi.js';
import './BlogDetail.css';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch single blog details
  useEffect(() => {
    const fetchBlogDetail = async () => {
      setIsLoading(true);
      try {
        const response = await getBlogByIdApi(id);
        if (response.success && response.data) {
          setBlog(response.data);
        }
      } catch (error) {
        console.error('Error fetching blog detail:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  // Fetch related articles
  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const response = await getBlogsApi('all', '', 1, 3);
        if (response.success) {
          setRelatedBlogs((response.data || []).filter((b) => b._id !== id).slice(0, 3));
        }
      } catch (error) {
        console.error('Error fetching related blogs:', error);
      }
    };

    fetchRelated();
  }, [id]);

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

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 0', color: 'var(--navy, #002D71)' }}>
        <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
        <p style={{ marginTop: '12px', fontWeight: 600 }}>Loading article details...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 0', color: '#6b7280' }}>
        <h3>Article Not Found</h3>
        <p style={{ marginTop: '8px' }}>The requested article does not exist or has been removed.</p>
        <Link to="/blog" style={{ display: 'inline-block', marginTop: '16px', color: '#002D71', fontWeight: 'bold' }}>
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* ================= HERO (NO BLOG IMAGE BACKGROUND) ================= */}
      <section className="blog-detail-hero">
        <div 
          className="blog-detail-hero-bg" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1920')" }}
        ></div>
        <div className="blog-detail-hero-scrim"></div>
        <div className="blog-detail-hero-content">
          <span className="category">
            <i className="fa-solid fa-location-dot"></i> {blog.category?.title || 'Travel Guide'}
          </span>
          <h1>{blog.title}</h1>
          
          <div className="blog-detail-breadcrumbs" style={{ marginTop: '10px', marginBottom: '16px', fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Home</Link> / <Link to="/blog" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Blog</Link> / <span>Article</span>
          </div>

          <div className="meta">
            <span className="author">
              <i className="fa-solid fa-user-pen" style={{ color: '#DA9F27', marginRight: '6px' }}></i>
              <span>By {blog.authorName || 'Shree Global Team'}</span>
            </span>
            <span><i className="fa-regular fa-calendar"></i> {formatDate(blog.createdAt)}</span>
            {/* <span><i className="fa-regular fa-clock"></i> {blog.readMinutes || 5} min read</span> */}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT (BLOG COVER IMAGE BELOW HERO) ================= */}
      <section className="section" style={{ paddingTop: '30px' }}>
        <div className="container">
          <div className="blog-detail-content reveal">
            
            {/* Blog Cover Image rendered below Hero */}
            {blog.image && (
              <div className="featured-image" style={{ marginBottom: '30px', maxHeight: '520px', overflow: 'hidden', borderRadius: '16px' }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}

            {/* Formatted Article Details Content */}
            <div 
              className="ck-content"
              dangerouslySetInnerHTML={{ __html: blog.details }}
            />

            {/* Share Section */}
            <div className="share-section" style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
              <span>Share this article:</span>
              <div className="share-icons">
                <a href="#" className="fb" onClick={(e) => e.preventDefault()} aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="tw" onClick={(e) => e.preventDefault()} aria-label="X"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" className="wa" onClick={(e) => e.preventDefault()} aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#" className="ln" onClick={(e) => e.preventDefault()} aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RELATED POSTS ================= */}
      {relatedBlogs.length > 0 && (
        <section className="section sand tight">
          <div className="container">
            <div className="kicker-row reveal">
              <div>
                <div className="eyebrow">You May Also Like</div>
                <h2>Related <span className="italic">Articles</span></h2>
              </div>
            </div>
            <div className="related-grid reveal">
              {relatedBlogs.map((item) => (
                <div key={item._id} className="related-card">
                  <img src={item.image || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=500'} alt={item.title} />
                  <div className="content">
                    <span className="cat">{item.category?.title || 'Travel Guide'}</span>
                    <h4><Link to={`/blog/${item.slug || item._id}`}>{item.title}</Link></h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Styling for CKEditor Content */}
      <style>{`
        .ck-content h1 { font-size: 1.8rem; font-weight: 700; color: #002D71; margin-top: 1.5rem; margin-bottom: 0.5rem; }
        .ck-content h2 { font-size: 1.45rem; font-weight: 700; color: #002D71; margin-top: 1.25rem; margin-bottom: 0.5rem; }
        .ck-content h3 { font-size: 1.2rem; font-weight: 600; color: #DA9F27; margin-top: 1rem; margin-bottom: 0.5rem; }
        .ck-content p { font-size: 1.02rem; line-height: 1.8; color: #374151; margin-bottom: 1.2rem; }
        .ck-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem; }
        .ck-content table td, .ck-content table th { border: 1px solid #d1d5db; padding: 0.75rem 1rem; }
        .ck-content table th { background-color: #f3f4f6; font-weight: 600; text-align: left; }
        .ck-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.2rem; }
        .ck-content ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.2rem; }
        .ck-content blockquote { border-left: 4px solid #DA9F27; padding-left: 1.2rem; font-style: italic; color: #4b5563; margin: 1.5rem 0; background: #fafafa; padding-top: 0.5rem; padding-bottom: 0.5rem; }
      `}</style>
    </>
  );
}
