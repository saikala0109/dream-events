import SparkleHero from '../components/SparkleHero'
import { useParams, Link } from 'react-router-dom'
import servicesData from '../data/servicesData'
import './ServicePage.css'

function ServicePage() {
  const { slug } = useParams()
  const service = servicesData.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="container section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Service Not Found</h1>
        <p>The service you're looking for doesn't exist.</p>
        <Link to="/services" className="btn btn-primary" style={{ marginTop: '20px' }}>View All Services</Link>
      </div>
    )
  }

  const relatedServices = servicesData
    .filter(s => s.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)

  return (
    <div className="service-page-detail">

      {/* SparkleHero — replaces old sp-hero section */}
      <SparkleHero
        title={service.title}
        subtitle={service.shortDesc}
        //breadcrumb={`Home › Services › ${service.title}`}
      />

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="sp-content-grid">
            <div className="sp-main">
              <div className="section-divider" style={{ margin: '0 0 1rem' }}></div>
              <h2>About Our {service.title} Services</h2>
              <p>
                At Dream Events & Management, we bring excellence and creativity to every {service.title.toLowerCase()} event
                we plan. Based in Kakinada, our experienced team ensures that every detail is taken care of so you
                can relax and enjoy your special occasion.
              </p>
              <p>
                We understand that every event is unique, which is why we offer customized planning and execution
                tailored to your specific vision, budget, and requirements. From concept to completion, we handle it all.
              </p>

              <h3>What We Offer</h3>
              <div className="sp-offerings">
                <div className="sp-offer-item">
                  <span className="sp-offer-icon">🎨</span>
                  <div>
                    <h4>Theme Design & Decoration</h4>
                    <p>Custom themes and stunning decorations tailored to your style and preferences.</p>
                  </div>
                </div>
                <div className="sp-offer-item">
                  <span className="sp-offer-icon">📍</span>
                  <div>
                    <h4>Venue Selection & Setup</h4>
                    <p>Help finding the perfect venue and complete setup management.</p>
                  </div>
                </div>
                <div className="sp-offer-item">
                  <span className="sp-offer-icon">📸</span>
                  <div>
                    <h4>Photography & Videography</h4>
                    <p>Professional photo and video coverage to capture every beautiful moment.</p>
                  </div>
                </div>
                <div className="sp-offer-item">
                  <span className="sp-offer-icon">🍽️</span>
                  <div>
                    <h4>Catering & Food</h4>
                    <p>Delicious catering options with customized menus for your event.</p>
                  </div>
                </div>
                <div className="sp-offer-item">
                  <span className="sp-offer-icon">🎵</span>
                  <div>
                    <h4>Entertainment & Music</h4>
                    <p>Live music, DJ, performances, and entertainment for your guests.</p>
                  </div>
                </div>
                <div className="sp-offer-item">
                  <span className="sp-offer-icon">🚗</span>
                  <div>
                    <h4>Logistics & Coordination</h4>
                    <p>End-to-end coordination including transport, scheduling, and management.</p>
                  </div>
                </div>
              </div>

              <h3>Our Process</h3>
              <div className="sp-process">
                <div className="sp-process-step">
                  <div className="sp-step-num">1</div>
                  <div>
                    <h4>Consultation</h4>
                    <p>We discuss your vision, requirements, and budget.</p>
                  </div>
                </div>
                <div className="sp-process-step">
                  <div className="sp-step-num">2</div>
                  <div>
                    <h4>Planning</h4>
                    <p>We create a detailed plan with themes, vendors, and timeline.</p>
                  </div>
                </div>
                <div className="sp-process-step">
                  <div className="sp-step-num">3</div>
                  <div>
                    <h4>Execution</h4>
                    <p>Our team handles everything on the day — flawlessly.</p>
                  </div>
                </div>
                <div className="sp-process-step">
                  <div className="sp-step-num">4</div>
                  <div>
                    <h4>Memories</h4>
                    <p>You enjoy and we deliver the photos and videos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="sp-sidebar">
              <div className="sp-sidebar-card sp-cta-card">
                <h3>Plan Your {service.title}</h3>
                <p>Ready to create an unforgettable experience? Get in touch with us today!</p>
                <Link to="/booking" className="btn btn-primary sp-cta-btn">Book Now</Link>
                <Link to="/contact" className="btn btn-secondary sp-cta-btn">Get a Quote</Link>
              </div>

              <div className="sp-sidebar-card sp-contact-card">
                <h4>Quick Contact</h4>
                <div className="sp-contact-item">
                  <span>📞</span>
                  <a href="tel:+919705291111">9705 291 111</a>
                </div>
                <div className="sp-contact-item">
                  <span>💬</span>
                  <a href="https://wa.me/919705291111">WhatsApp Us</a>
                </div>
                <div className="sp-contact-item">
                  <span>✉️</span>
                  <a href="mailto:dreameventss99@gmail.com">Email Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section sp-related" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div className="section-divider"></div>
          <h2 className="section-title">Other Services You May Like</h2>
          <div className="sp-related-grid">
            {relatedServices.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="sp-related-card">
                <div className="sp-related-img">
                  <img src={s.image} alt={s.title} />
                </div>
                <div className="sp-related-content">
                  <span className="sp-related-icon">{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.shortDesc.substring(0, 60)}...</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default ServicePage