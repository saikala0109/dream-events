import { Link } from 'react-router-dom'
import { FaPalette, FaClock, FaRupeeSign, FaHandshake, FaUsers, FaHeart, FaWhatsapp } from 'react-icons/fa'
import SparkleHero from '../components/SparkleHero'
import './About.css'

function About() {
  const stats = [
    { number: '500+', label: 'Events Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Venues Covered' },
  ]

  const strengths = [
    { icon: <FaPalette />, title: 'Personalized Themes', description: 'Every event is uniquely designed to reflect your style, personality, and vision — no two events are ever the same.' },
    { icon: <FaClock />, title: 'On-Time Execution', description: 'We deliver flawless events right on schedule. Our meticulous planning ensures everything runs smoothly and on time.' },
    { icon: <FaRupeeSign />, title: 'Budget Friendly', description: 'Premium quality events at competitive prices. We work within your budget to deliver maximum value without compromising.' },
    { icon: <FaHandshake />, title: 'One-Stop Solution', description: 'From decoration to catering, photography to entertainment — we handle every aspect of your event under one roof.' },
    { icon: <FaUsers />, title: 'Experienced Team', description: 'Our skilled and passionate team brings years of expertise to every event, ensuring professional execution every time.' },
    { icon: <FaHeart />, title: 'Customer First', description: 'Your happiness is our priority. We listen to your needs, understand your dreams, and go the extra mile to exceed expectations.' },
  ]

  return (
    <div className="about-page">

      {/* SparkleHero — full width, no wrapper */}
      <SparkleHero
        title="Dream Events"
        subtitle="Life is an Event, Make it Memorable"
        //breadcrumb="Home › About"
      />

      {/* Our Story + Stats */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story-content">
              <div className="section-divider" style={{ margin: '0 0 1rem 0' }}></div>
              <h2>Our Story</h2>
              <p>
                Dream Events & Management was born from a deep passion for creating extraordinary celebrations.
                Based in Ramaraopeta, Kakinada, we started with a simple belief — every moment in life deserves
                to be celebrated beautifully, whether it's a grand wedding or an intimate birthday gathering.
              </p>
              <p>
                Over the years, we have had the privilege of planning and executing hundreds of events across
                Andhra Pradesh. From traditional weddings, haldi & mehndi ceremonies, and sangeet nights to
                corporate events, product launches, and beach parties — we bring creativity, precision, and
                heart to every occasion.
              </p>
              <p>
                What sets us apart is our personal touch. We don't just organize events — we craft experiences
                that tell your unique story. Our dedicated team works closely with every client, turning their
                vision into a breathtaking reality that they and their loved ones will cherish for a lifetime.
              </p>
            </div>
            <div className="about-story-stats">
              {stats.map((stat, index) => (
                <div key={index} className="about-stat-card">
                  <span className="about-stat-number">{stat.number}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section about-why-choose">
        <div className="container">
          <div className="section-divider"></div>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Here's what makes Dream Events the right choice for your special occasion.</p>
          <div className="why-choose-grid">
            {strengths.map((item, index) => (
              <div key={index} className="why-choose-card">
                <div className="why-choose-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section about-founder">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-image-wrapper">
              <div className="founder-image-frame">
                <img src="/images/founder.png" alt="Vamsi Gudupu - Founder of Dream Events" />
              </div>
              <div className="founder-image-accent"></div>
            </div>
            <div className="founder-content">
              <div className="section-divider" style={{ margin: '0 0 1rem 0' }}></div>
              <h2>Meet Our Founder</h2>
              <h3 className="founder-name">Vamsi Gudupu</h3>
              <p className="founder-role">Founder & CEO, Dream Events & Management</p>
              <p>
                When Vamsi Gudupu envisioned Dream Events, it was driven by a single powerful idea — that every
                celebration, big or small, deserves to be extraordinary. With a natural flair for creative design
                and a deep understanding of what makes moments truly special, Vamsi set out to build more than
                just an event company.
              </p>
              <p>
                For Vamsi, planning an event is about listening to people's dreams, understanding their emotions,
                and crafting an experience that exceeds every expectation. His hands-on approach, attention to
                detail, and commitment to perfection have made Dream Events one of the most trusted names in
                event management in Kakinada and across Andhra Pradesh.
              </p>
              <p>
                Under his leadership, Dream Events has successfully delivered 500+ events, from grand destination
                weddings to intimate family celebrations, always ensuring that every client's story is told beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Plan Your Dream Event?</h2>
          <p>Let's create something extraordinary together. Get in touch with us today!</p>
          <div className="about-cta-buttons">
            <Link to="/booking" className="btn btn-primary">Book Now →</Link>
            <a
              href="https://wa.me/919642378777?text=Hi! I'm interested in your event services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary about-cta-whatsapp"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About