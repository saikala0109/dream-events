import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-section footer-about">
          <div className="footer-logo-wrapper">
            <img src="/images/Background.png" alt="Dream Events" className="footer-logo-img" />
          </div>
          <p className="footer-tagline">Life is an Event, Make it Memorable</p>
          <p className="footer-description">
            Dream Events & Management — your trusted partner for creating unforgettable
            {/* celebrations. From weddings to corporate events, we bring your vision to life. */}
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/share/1Kj8roAX5P/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
            <a href="https://www.instagram.com/dreameventseg?igsh=aGZpd3V3ZGFidXo2" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/gallery" className="footer-link">Gallery</Link>
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/booking" className="footer-link">Book Event</Link>
        </div>

        <div className="footer-section footer-services-list">
          <h4 className="footer-heading">Our Services</h4>
          <Link to="/services" className="footer-link">Wedding Planning</Link>
          <Link to="/services" className="footer-link">Birthday Parties</Link>
          <Link to="/services" className="footer-link">Corporate Events</Link>
          <Link to="/services" className="footer-link">Social Gatherings</Link>
          <Link to="/services" className="footer-link">Festival Events</Link>
          <Link to="/services" className="footer-link">Private Parties</Link>
        </div>

        <div className="footer-section footer-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="footer-contact-item">
            <FaPhone className="footer-contact-icon" />
            <div>
              <a href="tel:+919705291111">9705291111</a><br />
              <a href="tel:+918897192205">8897 192 205</a>
            </div>
          </div>
          <div className="footer-contact-item">
            <FaWhatsapp className="footer-contact-icon" />
            <a href="https://wa.me/919705291111">9705 291 111</a>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope className="footer-contact-icon" />
            <a href="mailto:dreameventss99@gmail.com">dreameventss99@gmail.com</a>
          </div>
          <div className="footer-contact-item">
            <FaMapMarkerAlt className="footer-contact-icon" />
            <span>Ramaraopeta, Kakinada,<br />Andhra Pradesh, India</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; 2026 Dream Events & Management. All rights reserved.</p>
          <p>Life is an Event, Make it Memorable ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
