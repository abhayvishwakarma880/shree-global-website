import { Link } from 'react-router-dom';
import shreeGlobalLogo from '../assets/shreeGlobalLogo.jpeg';
import whitelogo from '../assets/whitelogo.png'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img src={shreeGlobalLogo} alt="Shree Global Holidays" className="mark" />
          </Link>
          <div className="footer-social">
            <a href="https://wa.me/919335649404" target='_blank' rel="noopener noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
            <a href="https://www.facebook.com/shreeglobalholidays/" target='_blank' rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/shreeglobalholidays/" target='_blank' rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/GlobalShree" target='_blank' rel="noopener noreferrer" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="http://linkedin.com/in/shreeglobalholidays/" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
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
            <li><a href="tel:+919335649404">24×7 Helpline</a></li>
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
          <p>Gomti Nagar, Lucknow, Uttar Pradesh</p>
          
          <div className="footer-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d911289.6458478066!2d80.942513!3d26.848692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1785215005860!5m2!1sen!2sus" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Global Holidays Office Location"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">

        <div className="designer-info">
          Designed & Developed by <a target='_blank' rel="noopener noreferrer" href="https://codecrafter.co.in/"><img src={whitelogo} alt="Code Crafter" /></a>
        </div>
        <span>© 2026 Shree Global Holidays. All rights reserved.</span>
        {/* <div className="payment-badges">
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-paypal"></i>
          <i className="fa-brands fa-google-pay"></i>
        </div> */}
      </div>
    </footer>
  );
}
