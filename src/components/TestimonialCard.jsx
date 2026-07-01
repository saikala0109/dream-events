import './TestimonialCard.css'

function TestimonialCard({ name, role, message, rating }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      <p className="testimonial-message">"{message}"</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="testimonial-name">{name}</h4>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard