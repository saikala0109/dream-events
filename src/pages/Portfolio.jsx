import SparkleHero from '../components/SparkleHero'
import { Link } from 'react-router-dom'
import './Portfolio.css'

function Portfolio() {
  const projects = [
    {
      title: 'Royal Wedding — vamsi & kala',
      category: 'Wedding',
      description: 'A grand wedding celebration with 1500+ guests featuring traditional Indian decor, live music, and gourmet catering.',
      image: 'https://i.pinimg.com/1200x/e3/21/fc/e321fc46fe43fa99aebdfc28d5d17105.jpg',
      stats: { guests: '500+', duration: '3 Days', rating: '5/5' }
    },
    {
      title: 'Tech Summit 2025',
      category: 'Corporate',
      description: 'A 2-day corporate conference with keynote speakers, product demos, networking sessions, and entertainment.',
      image: 'https://i.pinimg.com/736x/65/e8/b7/65e8b70f6bc7a641731be823a95a3a51.jpg',
      stats: { guests: '300+', duration: '2 Days', rating: '5/5' }
    },
    {
      title: 'Princess Theme Birthday',
      category: 'Birthday',
      description: 'A magical princess-themed birthday party for a 7-year-old with custom decorations, games, and a themed cake.',
      image: 'https://i.pinimg.com/736x/2e/7c/84/2e7c84b768b807384049b16d0e006f56.jpg',
      stats: { guests: '100+', duration: '1 Day', rating: '5/5' }
    },
    {
      title: 'New Year Gala Night',
      category: 'Social',
      description: 'An exclusive New Year celebration with live DJ, dance floor, premium beverages, and a spectacular midnight fireworks show.',
      image: 'https://i.pinimg.com/1200x/1f/0c/46/1f0c46c490641c8486fce917b21365e4.jpg',
      stats: { guests: '200+', duration: '1 Night', rating: '5/5' }
    },
  ]

  return (
    <div className="portfolio-page">
      <SparkleHero
        title="Our Portfolio"
        subtitle="Featured events that showcase our expertise"
      />
      {/* Hero */}
    
      {/* Projects */}
      <section className="section">
        <div className="container">
          <div className="section-divider"></div>
          <h2 className="section-title">Featured Events</h2>
          <p className="section-subtitle">Take a closer look at some of our finest work.</p>

          <div className="portfolio-list">
            {projects.map((project, index) => (
              <div key={index} className={`portfolio-item ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <span className="portfolio-category">{project.category}</span>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{project.title}</h3>
                  <p className="portfolio-description">{project.description}</p>
                  <div className="portfolio-stats">
                    <div className="portfolio-stat">
                      <span className="portfolio-stat-value">{project.stats.guests}</span>
                      <span className="portfolio-stat-label">Guests</span>
                    </div>
                    <div className="portfolio-stat">
                      <span className="portfolio-stat-value">{project.stats.duration}</span>
                      <span className="portfolio-stat-label">Duration</span>
                    </div>
                    <div className="portfolio-stat">
                      <span className="portfolio-stat-value">{project.stats.rating}</span>
                      <span className="portfolio-stat-label">Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta" style={{ marginTop: '50px' }}>
            <Link to="/booking" className="btn btn-primary">Plan Your Event With Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio