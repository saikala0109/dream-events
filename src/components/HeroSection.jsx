import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle">✨ Welcome to Dream Events</p>
        <h1 className="hero-title">Making Your Dream Events Come True</h1>
        <p className="hero-description">
          From elegant weddings to spectacular corporate events, we bring your vision to life
          with creativity, passion, and flawless execution.
        </p>
        <div className="hero-buttons">
          <Link to="/booking" className="btn btn-primary hero-btn">
            Book Your Event
          </Link>
          <Link to="/services" className="btn btn-secondary hero-btn-outline">
            Our Services
          </Link>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Events Completed</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Venues Covered</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection