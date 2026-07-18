import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from '../components/Lightbox';
import './Gallery.css';

const galleryItems = [
  { id: 1, title: 'Taj Mahal at Sunrise', category: 'heritage', location: 'Agra, Uttar Pradesh', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=600', size: 'large' },
  { id: 2, title: 'Himalayan Trekking', category: 'adventure', location: 'Himachal Pradesh', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600', size: 'tall' },
  { id: 3, title: 'Kerala Houseboat', category: 'nature', location: 'Alleppey, Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600', size: 'wide' },
  { id: 4, title: 'Jaipur City Palace', category: 'heritage', location: 'Jaipur, Rajasthan', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600', size: 'tall' },
  { id: 5, title: 'Varanasi Ganga Aarti', category: 'culture', location: 'Varanasi, Uttar Pradesh', image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=600', size: 'wide' },
  { id: 6, title: 'Ladakh Mountains', category: 'adventure', location: 'Ladakh', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600', size: 'large' },
  { id: 7, title: 'Rajasthan Camel Safari', category: 'culture', location: 'Thar Desert, Rajasthan', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600', size: 'tall' },
  { id: 8, title: 'Havelis of Jaisalmer', category: 'heritage', location: 'Jaisalmer, Rajasthan', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600', size: 'wide' },
  { id: 9, title: 'Goa Beach Sunset', category: 'nature', location: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600', size: 'tall' },
  { id: 10, title: 'Indian Street Food', category: 'food', location: 'Delhi', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600', size: 'wide' },
  { id: 11, title: 'Tea Gardens of Darjeeling', category: 'nature', location: 'Darjeeling, West Bengal', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600', size: 'large' },
  { id: 12, title: 'Udaipur Lake Palace', category: 'heritage', location: 'Udaipur, Rajasthan', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600', size: 'tall' },
  { id: 13, title: 'Rishikesh Rafting', category: 'adventure', location: 'Rishikesh, Uttarakhand', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600', size: 'wide' },
  { id: 14, title: 'Kerala Spice Plantations', category: 'nature', location: 'Munnar, Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600', size: 'tall' },
  { id: 15, title: 'Jodhpur Blue City', category: 'culture', location: 'Jodhpur, Rajasthan', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600', size: 'wide' },
  { id: 16, title: 'Shimla Snow', category: 'nature', location: 'Shimla, Himachal Pradesh', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600', size: 'large' },
  { id: 17, title: 'Indian Wedding Traditions', category: 'culture', location: 'Udaipur, Rajasthan', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600', size: 'tall' },
  { id: 18, title: 'Spice Market Delhi', category: 'food', location: 'Delhi', image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=600', size: 'wide' },
  { id: 19, title: 'Mysore Palace', category: 'heritage', location: 'Mysore, Karnataka', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600', size: 'tall' },
  { id: 20, title: 'Coorg Coffee Plantations', category: 'nature', location: 'Coorg, Karnataka', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600', size: 'wide' },
  { id: 21, title: 'Pushkar Camel Fair', category: 'culture', location: 'Pushkar, Rajasthan', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=600', size: 'large' },
  { id: 22, title: 'Gangtok Monastery', category: 'heritage', location: 'Gangtok, Sikkim', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=600', size: 'tall' },
  { id: 23, title: 'Kerala Sadhya (Feast)', category: 'food', location: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=600', size: 'wide' },
  { id: 24, title: 'Rajasthan Fort at Dusk', category: 'heritage', location: 'Jaipur, Rajasthan', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=600', size: 'large' }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxState, setLightboxState] = useState({ isOpen: false, index: 0 });

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const displayedItems = filteredItems.slice(0, visibleCount);

  // Map to format required by components/Lightbox.jsx
  const lightboxItems = filteredItems.map(item => ({
    src: item.image,
    title: item.title,
    location: item.location
  }));

  const handleOpenLightbox = (itemId) => {
    const activeIndex = filteredItems.findIndex(item => item.id === itemId);
    if (activeIndex !== -1) {
      setLightboxState({ isOpen: true, index: activeIndex });
    }
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <>
      {/* ================= GALLERY HERO ================= */}
      <section className="gallery-hero">
        <div className="gallery-hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920')" }}></div>
        <div className="gallery-hero-scrim"></div>
        <div className="gallery-hero-content">
          <span className="sub-badge"><i className="fa-regular fa-image"></i> Visual Stories</span>
          <h1>Moments <span className="italic">Captured</span> on the Road</h1>
          <p>A visual journey through India's incredible landscapes, cultures, and experiences</p>
          <div className="gallery-breadcrumb">
            <Link to="/">Home</Link> / <span>Gallery</span>
          </div>
        </div>
      </section>

      {/* ================= GALLERY FILTER ================= */}
      <section className="section" style={{ paddingTop: '30px', paddingBottom: 0 }}>
        <div className="container">
          <div className="gallery-filter-wrap reveal">
            <div className="gallery-filter-buttons">
              {[
                { label: 'All', value: 'all', icon: 'fa-solid fa-asterisk' },
                { label: 'Heritage', value: 'heritage', icon: 'fa-solid fa-landmark' },
                { label: 'Nature', value: 'nature', icon: 'fa-solid fa-tree' },
                { label: 'Culture', value: 'culture', icon: 'fa-solid fa-people-group' },
                { label: 'Adventure', value: 'adventure', icon: 'fa-solid fa-mountain' },
                { label: 'Food', value: 'food', icon: 'fa-solid fa-utensils' }
              ].map(tab => (
                <button
                  key={tab.value}
                  className={`gallery-filter-btn ${filter === tab.value ? 'active' : ''}`}
                  onClick={() => {
                    setFilter(tab.value);
                    setVisibleCount(12);
                  }}
                >
                  <i className={tab.icon}></i> {tab.label}
                </button>
              ))}
            </div>
            <div className="gallery-count">
              <strong>{filteredItems.length}</strong> photos
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY MASONRY ================= */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="gallery-masonry reveal">
            {displayedItems.length === 0 ? (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px 20px' }}>
                <i className="fa-regular fa-image" style={{ fontSize: '3rem', color: 'var(--ink-faint)', display: 'block', marginBottom: '16px' }}></i>
                <h3 style={{ color: 'var(--ink-soft)' }}>No photos in this category</h3>
                <p style={{ color: 'var(--ink-faint)' }}>Try selecting a different category.</p>
              </div>
            ) : (
              displayedItems.map(item => (
                <div 
                  key={item.id} 
                  className={`gallery-item ${item.size}`} 
                  onClick={() => handleOpenLightbox(item.id)}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="overlay">
                    <div className="icon"><i className="fa-regular fa-expand"></i></div>
                    <div className="title">{item.title}</div>
                    <div className="location"><i className="fa-solid fa-location-dot"></i> {item.location}</div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Load More */}
          {visibleCount < filteredItems.length && (
            <div className="load-more-wrap reveal">
              <button className="load-more-btn" onClick={handleLoadMore}>
                <i className="fa-solid fa-plus"></i> Load More Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="cta-strip">
        <img src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=1600" alt="Mountain road" />
        <div className="ov"></div>
        <div className="container content">
          <div className="eyebrow on-dark" style={{ justifyContent: 'center' }}>Start Your Journey</div>
          <h2>Ready to <span className="italic">create your own</span> memories?</h2>
          <div className="actions">
            <Link to="/contact" className="btn btn-brand"><i className="fa-regular fa-paper-plane"></i> Get Free Quote</Link>
            <a href="tel:+919811022334" className="btn btn-line"><i className="fa-solid fa-phone"></i> +91 98110 22334</a>
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ isOpen: false, index: 0 })}
        items={lightboxItems}
        initialIndex={lightboxState.index}
      />
    </>
  );
}
