import SparkleHero from '../components/SparkleHero'
import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
      const { error } = await supabase
        .from('contacts')
        .insert([formData])

      if (error) throw error

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <SparkleHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
      />

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-info-text">
                Have a question or want to discuss your event? Reach out to us through any of the channels below or fill out the contact form.
              </p>

              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaPhone /></div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 88971 92205</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaWhatsapp /></div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+91 97052 91111</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaEnvelope /></div>
                  <div>
                    <h4>Email</h4>
                    <p>dreamevents99@gmail.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FaMapMarkerAlt /></div>
                  <div>
                    <h4>Address</h4>
                    <p>Ramarao peta, Kakinada , Andhra Pradesh</p>
                  </div>
                </div>
              </div>

              <div className="contact-socials">
                <h4>Follow Us</h4>
                <div className="contact-social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                  <a href="https://wa.me/9705291111" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>

              {status === 'success' && (
                <div className="form-alert form-success">
                  ✅ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="form-alert form-error">
                  ❌ Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit}>
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

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your enquiry..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary contact-submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact