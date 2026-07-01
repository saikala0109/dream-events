import SparkleHero from '../components/SparkleHero'
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import './Booking.css'

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event_type: '',
    event_date: '',
    guest_count: '',
    venue: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const submitData = {
        ...formData,
        guest_count: formData.guest_count ? parseInt(formData.guest_count) : null
      }

      const { error } = await supabase
        .from('bookings')
        .insert([submitData])

      if (error) throw error

      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        event_type: '',
        event_date: '',
        guest_count: '',
        venue: '',
        message: ''
      })
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const eventTypes = [
    'Wedding',
    'Birthday Party',
    'Corporate Event',
    'Engagement Ceremony',
    'Social Gathering',
    'Festival Event',
    'Private Party',
    'College Event',
    'Theme Party',
    'Other'
  ]

  return (
    <div className="booking-page">
      {/* Hero */}
      <SparkleHero
        title="Book Your Dream Event"
        subtitle="Fill the form below and we'll get back to you within 24 hours"
      />

      {/* Booking Form */}
      <section className="section">
        <div className="container">
          <div className="booking-form-container">
            <div className="booking-form-header">
              <div className="section-divider" style={{ margin: '0 auto 1rem' }}></div>
              <h2>Event Booking Form</h2>
              <p>Tell us about your event and we'll create something amazing together.</p>
            </div>

            {status === 'success' && (
              <div className="form-alert form-success">
                ✅ Booking request submitted successfully! We'll contact you within 24 hours to discuss your event.
              </div>
            )}

            {status === 'error' && (
              <div className="form-alert form-error">
                ❌ Something went wrong. Please try again or contact us directly via WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="event_type">Event Type *</label>
                  <select
                    id="event_type"
                    name="event_type"
                    value={formData.event_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="event_date">Event Date *</label>
                  <input
                    type="date"
                    id="event_date"
                    name="event_date"
                    value={formData.event_date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="guest_count">Estimated Guests</label>
                  <input
                    type="number"
                    id="guest_count"
                    name="guest_count"
                    value={formData.guest_count}
                    onChange={handleChange}
                    placeholder="How many guests?"
                    min="1"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="venue">Venue / Location</label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="Preferred venue or location"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Details / Special Requests</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your event, theme preferences, budget range, special requirements..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary booking-submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : '✨ Submit Booking Request'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking