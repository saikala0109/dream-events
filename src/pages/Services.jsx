import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'
import './Services.css'

function Services() {
  const services = [
    {
      icon: '💒',
      title: 'Wedding Planning',
      description: 'Complete wedding planning from venue selection to decoration, catering, entertainment, and coordination. We handle every detail to make your big day truly special.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop'
    },
    {
      icon: '🎂',
      title: 'Birthday Parties',
      description: 'Creative and fun birthday celebrations for kids and adults. Themed decorations, cakes, entertainment, and everything to make the day memorable.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop'
    },
    {
      icon: '🏢',
      title: 'Corporate Events',
      description: 'Professional event management for conferences, product launches, team building, annual meetings, and corporate parties with flawless execution.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop'
    },
    {
      icon: '🎉',
      title: 'Social Gatherings',
      description: 'From house warmings to anniversary parties and reunion events. We create the perfect ambiance for every social gathering.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop'
    },
    {
      icon: '🎪',
      title: 'Festival Events',
      description: 'Grand festival celebrations with traditional and modern themes. Perfect for community events, religious ceremonies, and cultural festivals.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop'
    },
    {
      icon: '🥂',
      title: 'Private Parties',
      description: 'Exclusive private events with personalized themes, luxury setups, gourmet catering, and premium entertainment options.',
      image: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=400&h=300&fit=crop'
    },
    {
      icon: '🎓',
      title: 'College Events',
      description: 'Energetic and creative event management for college fests, fresher parties, farewell events, and cultural programs.',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop'
    },
    {
      icon: '💍',
      title: 'Engagement Ceremonies',
      description: 'Beautiful engagement ceremony planning with stunning decorations, photography arrangements, and seamless coordination.',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=300&fit=crop'
    },
    {
      icon: '🎭',
      title: 'Theme Parties',
      description: 'Unique themed parties — retro, Bollywood, Hollywood, tropical, and more. We bring your wildest party themes to life.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop'
    },
  ]

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Everything you need to make your event extraordinary</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-divider"></div>
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            From intimate gatherings to grand celebrations, we have the expertise to handle it all.
          </p>
          <div className="services-page-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section services-process">
        <div className="container">
          <div className="section-divider"></div>
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">Simple steps to your dream event.</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">1</div>
              <h3>Contact Us</h3>
              <p>Reach out with your event idea. We'll listen and understand your vision.</p>
            </div>
            <div className="process-step">
              <div className="process-number">2</div>
              <h3>Plan Together</h3>
              <p>We create a detailed plan covering theme, venue, catering, and more.</p>
            </div>
            <div className="process-step">
              <div className="process-number">3</div>
              <h3>Design & Prepare</h3>
              <p>Our team designs decorations, arranges vendors, and prepares everything.</p>
            </div>
            <div className="process-step">
              <div className="process-number">4</div>
              <h3>Execute Perfectly</h3>
              <p>We handle everything on the day so you can enjoy your event stress-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Tell us about your event and get a free quote!</p>
          <div className="services-cta-buttons">
            <Link to="/booking" className="btn btn-primary">Book Now</Link>
            <Link to="/contact" className="btn btn-secondary services-cta-outline">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services