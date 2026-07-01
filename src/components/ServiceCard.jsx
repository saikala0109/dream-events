import { Link } from 'react-router-dom'
import './ServiceCard.css'

function ServiceCard({ icon, title, description, image, slug }) {
  return (
    <Link to={`/services/${slug}`} className="service-card">
      <div className="service-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="service-card-content">
        <span className="service-card-icon">{icon}</span>
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
        <span className="service-card-link">Learn More →</span>
      </div>
    </Link>
  )
}

export default ServiceCard