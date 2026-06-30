import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import servicesData from '../data/servicesData'
import VideoCarousel from '../components/VideoCarousel'
import './Home.css'

/* ─── Scroll animation hook ─── */
function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}

function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`scroll-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          let start = 0
          const increment = target / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

/* ─── Main Home ─── */
function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: 'https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2023/01/DAY03_MANVITHA_VISHWAK_WEDDING-1047.jpg',
      title: 'Life is an Event, Make it Memorable',
      subtitle: 'Dream Events & Management — Kakinada\'s premier event planners'
    },
    {
      image: 'https://i.pinimg.com/1200x/d4/c7/15/d4c7150f37f71ec2df0317d5f3eb8372.jpg',
      title: 'Making Your Dream Events Come True',
      subtitle: 'From elegant weddings to spectacular celebrations'
    },
    {
      image: 'https://i.pinimg.com/1200x/4b/28/63/4b28634acc4b7c41c8add17a905808b3.jpg',
      title: 'Creating Unforgettable Moments',
      subtitle: 'Professional planning for every occasion, big or small'
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Show 8 services on home page
  const homeServices = servicesData.slice(0, 8)

  const galleryImages = [
    'https://i.pinimg.com/originals/f1/00/e2/f100e27841fb4af6aab49bece5335deb.jpg',
    'https://i.pinimg.com/1200x/d4/c7/15/d4c7150f37f71ec2df0317d5f3eb8372.jpg',
    'https://i.pinimg.com/1200x/2a/4e/36/2a4e367df08842b32975c02c68f991fa.jpg',
    'https://i.pinimg.com/736x/09/f0/e7/09f0e796ecba197cd2f53cbd3f52cd80.jpg',
    'https://i.pinimg.com/736x/a9/a6/a5/a9a6a56a98d12d7ff12f5653d29c85ab.jpg',
    'https://i.pinimg.com/avif/1200x/3b/f4/13/3bf413c05b78743667ebc7b68f53fc00.avf',
    'https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2023/01/DAY03_MANVITHA_VISHWAK_WEDDING-1047.jpg',
    'https://i.pinimg.com/1200x/1f/0c/46/1f0c46c490641c8486fce917b21365e4.jpg',
  ]

  const testimonials = [
    { name: 'Priya ', role: 'Wedding Client', message: 'Dream Events made our wedding absolutely magical! Every detail was perfect and beyond our expectations. Highly recommended!', rating: 5 },
    { name: 'Rajesh Kumar', role: 'Corporate Client', message: 'Professional team, excellent execution. Our annual conference was a huge success thanks to Dream Events.', rating: 5 },
    { name: 'Vamsi', role: 'Birthday Client', message: "My daughter's birthday party was beyond our expectations. The decorations were stunning and the kids had a blast!", rating: 4 },
  ]

  return (
    <div className="home-page">
      {/* ═══ HERO ═══ */}
      <section className="hero">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }} />
        ))}
        <div className="hero-overlay" />
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`, animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>

        <div className="hero-content">
          <p className="hero-badge">✨ Dream Events & Management — Kakinada</p>
          <h1 className="hero-title" key={currentSlide}>{heroSlides[currentSlide].title}</h1>
          <p className="hero-description">{heroSlides[currentSlide].subtitle}</p>
          <div className="hero-buttons">
            <Link to="/booking" className="btn hero-btn">Book Your Event</Link>
            <Link to="/services" className="btn hero-btn-outline">Our Services</Link>
          </div>
          <div className="hero-indicators">
            {heroSlides.map((_, index) => (
              <button key={index} className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)} />
            ))}
          </div>
        </div>

        <div className="hero-stats-bar">
          <div className="hero-stat-item">
            <span className="hero-stat-number"><AnimatedCounter target={10} suffix="+" /></span>
            <span className="hero-stat-text">Years Experience</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-item">
            <span className="hero-stat-number"><AnimatedCounter target={500} suffix="+" /></span>
            <span className="hero-stat-text">Events Completed</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-item">
            <span className="hero-stat-number"><AnimatedCounter target={200} suffix="+" /></span>
            <span className="hero-stat-text">Happy Clients</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat-item">
            <span className="hero-stat-number"><AnimatedCounter target={4.9} suffix="" duration={1500} /></span>
            <span className="hero-stat-text">★ Client Rating</span>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT PREVIEW ═══ */}
      <section className="section home-about">
        <div className="container">
          <div className="home-about-grid">
            <RevealSection className="home-about-content">
              <span className="section-tag">About Us</span>
              <h2>Kakinada's Trusted Event Management Partner</h2>
              <p>Dream Events & Management is a premier event management company based in Ramaraopeta, Kakinada. We are dedicated to transforming your celebrations into extraordinary experiences.</p>
              <p>Our passionate team combines creativity with meticulous planning to ensure every detail is flawless. Life is an Event — and we make sure yours is Memorable.</p>
              <div className="home-about-features">
                <div className="home-about-feature"><span className="feature-check">✓</span><span>Expert Planning & Execution</span></div>
                <div className="home-about-feature"><span className="feature-check">✓</span><span>Creative & Unique Themes</span></div>
                <div className="home-about-feature"><span className="feature-check">✓</span><span>Affordable Premium Services</span></div>
                <div className="home-about-feature"><span className="feature-check">✓</span><span>Dedicated Event Coordinator</span></div>
              </div>
              <Link to="/about" className="btn btn-primary" style={{ marginTop: '10px' }}>Learn More About Us →</Link>
            </RevealSection>
            <RevealSection className="home-about-images" delay={200}>
              <div className="about-image-collage">
                <div className="about-img-main">
                  <img src="https://i.pinimg.com/736x/80/fa/cb/80facb753e7460499da5f3e4f510fc38.jpg" alt="Wedding Event" />
                </div>
                <div className="about-img-small about-img-top">
                  <img src="https://i.pinimg.com/1200x/d4/c7/15/d4c7150f37f71ec2df0317d5f3eb8372.jpg" alt="Birthday Event" />
                </div>
                <div className="about-img-small about-img-bottom">
                  <img src="https://i.pinimg.com/736x/c5/65/23/c56523241b53010713d0cf5e56d5862f.jpg" alt="Corporate Event" />
                </div>
                <div className="about-experience-badge">
                  <span className="badge-number">10+</span>
                  <span className="badge-text">Years of Experience</span>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

     

{/* ═══ VIDEO CAROUSEL ═══ */}
      <VideoCarousel />

      {/* ═══ GALLERY CAROUSEL ═══ */}
      <section className="section home-gallery-preview">
        <div className="container">
          <RevealSection>
            <div className="section-divider"></div>
            <h2 className="section-title">Our Event Gallery</h2>
            <p className="section-subtitle">A glimpse into the beautiful events we've brought to life.</p>
          </RevealSection>
        </div>
        <RevealSection>
          <div className="gallery-carousel">
            <div className="gallery-carousel-track">
              {[...galleryImages, ...galleryImages].map((img, index) => (
                <div key={index} className="gallery-carousel-item">
                  <img src={img} alt={`Event ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
        <div className="container">
          <div className="section-cta" style={{ marginTop: '30px' }}>
            <Link to="/gallery" className="btn btn-secondary">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section home-testimonials">
        <div className="container">
          <RevealSection>
            <div className="section-divider"></div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Don't just take our word for it — hear from our happy clients.</p>
          </RevealSection>
          <div className="testimonials-grid">
            {testimonials.map((t, index) => (
              <RevealSection key={index} delay={index * 150}>
                <TestimonialCard {...t} />
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="home-cta">
        <div className="home-cta-overlay" />
        <div className="container home-cta-content">
          <RevealSection>
            <h2>Ready to Plan Your Dream Event?</h2>
            <p>Let's create something unforgettable together. Contact us today for a free consultation.</p>
            <div className="home-cta-buttons">
              <Link to="/booking" className="btn btn-primary">Book Your Event</Link>
              <Link to="/contact" className="btn btn-secondary home-cta-outline">Contact Us</Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  )
}

export default Home