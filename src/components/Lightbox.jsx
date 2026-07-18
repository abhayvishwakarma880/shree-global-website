import { useState, useEffect, useRef } from 'react';

export default function Lightbox({ isOpen, onClose, items, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);

  // Touch coordinates for swipe gestures
  const touchStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoom(1);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialIndex]);

  // Handle loading state when image source changes
  useEffect(() => {
    if (isOpen && items[currentIndex]) {
      setLoading(true);
      const img = new Image();
      img.src = items[currentIndex].src;
      img.onload = () => {
        setLoading(false);
        setZoom(1);
      };
      img.onerror = () => {
        setLoading(false);
      };
    }
  }, [currentIndex, isOpen, items]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          navigate(-1);
          break;
        case 'ArrowRight':
          navigate(1);
          break;
        case '+':
          e.preventDefault();
          zoomIn();
          break;
        case '-':
          e.preventDefault();
          zoomOut();
          break;
        case '0':
          setZoom(1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, zoom]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const navigate = (direction) => {
    setCurrentIndex((prev) => (prev + direction + items.length) % items.length);
  };

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleImageClick = () => {
    if (zoom > 1) {
      setZoom(1);
    } else {
      zoomIn();
    }
  };

  // Wheel zoom
  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  // Swipe support for mobile
  const handleTouchStart = (e) => {
    touchStart.current = {
      x: e.changedTouches[0].screenX,
      y: e.changedTouches[0].screenY,
    };
  };

  const handleTouchEnd = (e) => {
    const dx = e.changedTouches[0].screenX - touchStart.current.x;
    const dy = e.changedTouches[0].screenY - touchStart.current.y;
    const threshold = 50;

    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
      if (dx > 0) {
        navigate(-1); // Swipe Right -> Show Previous
      } else {
        navigate(1);  // Swipe Left -> Show Next
      }
    }
  };

  return (
    <div className="lightbox active" id="lightbox">
      <div className="lightbox-overlay" onClick={onClose}></div>
      
      <button className="lightbox-close" id="lightboxClose" aria-label="Close lightbox" onClick={onClose}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      
      <button className="lightbox-prev" id="lightboxPrev" aria-label="Previous image" onClick={() => navigate(-1)}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      
      <button className="lightbox-next" id="lightboxNext" aria-label="Next image" onClick={() => navigate(1)}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
      
      <div className="lightbox-content">
        <div className="lightbox-image-wrapper">
          <img 
            ref={imageRef}
            src={currentItem.src} 
            alt={currentItem.title} 
            id="lightboxImage"
            className={zoom > 1 ? 'zoomed' : ''}
            style={{ 
              transform: `scale(${zoom})`, 
              opacity: loading ? 0 : 1,
              transition: loading ? 'none' : 'transform 0.2s ease, opacity 0.2s ease'
            }}
            onClick={handleImageClick}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />
          <div className={`lightbox-loader ${loading ? 'active' : ''}`}></div>
        </div>
        
        <div className="lightbox-info">
          <h3 id="lightboxTitle">{currentItem.title}</h3>
          <p id="lightboxCaption">{currentItem.caption}</p>
          <span className="lightbox-counter" id="lightboxCounter">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>

      <div className="lightbox-zoom-controls">
        <button className="zoom-btn" id="zoomIn" aria-label="Zoom In" onClick={zoomIn}>
          <i className="fa-solid fa-plus"></i>
        </button>
        <button className="zoom-btn" id="zoomOut" aria-label="Zoom Out" onClick={zoomOut}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <button className="zoom-btn" id="zoomReset" aria-label="Reset Zoom" onClick={() => setZoom(1)}>
          <i className="fa-solid fa-expand"></i>
        </button>
      </div>
    </div>
  );
}
