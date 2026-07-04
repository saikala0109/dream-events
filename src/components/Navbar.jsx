import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone, FaChevronDown } from 'react-icons/fa'
import servicesData from '../data/servicesData'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setDropdownOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container container">
          <span className="top-bar-tagline">✨ Life is an Event, Make it Memorable</span>
          <div className="top-bar-contact">
            <a href="tel:+919705291111"><FaPhone size={11} /> 9705 291 111</a>
            <span className="top-bar-divider">|</span>
            <a href="tel:+918897192205">8897 192 205</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container container">
       <Link to="/" className="navbar-logo">
  <img src="/images/Background.png" alt="Dream Events" className="logo-image"/>
  </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <Link to="/" className={location.pathname === '/' ? 'nav-link active-link' : 'nav-link'} onClick={closeMenu}>
              Home
            </Link>

            <Link to="/about" className={location.pathname === '/about' ? 'nav-link active-link' : 'nav-link'} onClick={closeMenu}>
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="nav-dropdown"
              ref={dropdownRef}
              onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(true)}
              onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(false)}
            >
              <button
                className={`nav-link dropdown-trigger ${location.pathname.startsWith('/services') ? 'active-link' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Services <FaChevronDown className={`dropdown-arrow ${dropdownOpen ? 'rotated' : ''}`} />
              </button>

              <div className={`mega-dropdown ${dropdownOpen ? 'open' : ''}`}>
                <div className="mega-dropdown-inner">
                  <div className="mega-dropdown-header">
                    <h3>Our Services</h3>
                  </div>
                  <div className="mega-dropdown-grid">
                    {servicesData.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="mega-dropdown-item"
                        onClick={closeMenu}
                      >
                        <span className="mega-item-icon">{service.Icon ? <service.Icon /> : service.icon}</span>
                        <div className="mega-item-text">
                          <span className="mega-item-title">{service.title}</span>
                          <span className="mega-item-desc">{service.shortDesc.substring(0, 50)}...</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mega-dropdown-footer">
                    <Link to="/services" className="mega-view-all" onClick={closeMenu}>
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/gallery" className={location.pathname === '/gallery' ? 'nav-link active-link' : 'nav-link'} onClick={closeMenu}>
              Gallery
            </Link>

            {/* <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'nav-link active-link' : 'nav-link'} onClick={closeMenu}>
              Portfolio
            </Link> */}

            <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active-link' : 'nav-link'} onClick={closeMenu}>
              Contact
            </Link>

            <Link to="/booking" className="nav-link nav-btn" onClick={closeMenu}>
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar