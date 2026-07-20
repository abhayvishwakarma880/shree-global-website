import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Shree Global Holidays Logo" className="mark" />
            Shree Global <span className="cyanpart">Holidays</span>
          </Link>
          <p>A premier luxury travel agency based in New Delhi, crafting seamless, unforgettable journeys across India since 2010.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Explore</h5>
          <ul>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/packages">Tour Packages</Link></li>
            <li><Link to="/services">Services</Link></li>
            {/* <li><Link to="/fleet">Luxury Rentals</Link></li> */}
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* <li><Link to="/careers">Careers</Link></li> */}
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Support</h5>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/cancellation">Cancellation Policy</Link></li>
            <li><Link to="/insurance">Travel Insurance</Link></li>
            <li><a href="tel:+919811022334">24×7 Helpline</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Legal</h5>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-nl">
          <h5>Find Us</h5>
          <p>Visit our office in Connaught Place, New Delhi</p>
          
          <div className="footer-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.234567890123!2d77.216721!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce24e8d8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Global Holidays Office Location"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Shree Global Holidays. All rights reserved.</span>
        <div className="payment-badges">
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-paypal"></i>
          <i className="fa-brands fa-google-pay"></i>
        </div>
      </div>
    </footer>
  );
}
