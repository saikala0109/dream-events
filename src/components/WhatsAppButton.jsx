import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919705291111?text=Hi! I'm interested in your event management services."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-tooltip">Chat with us!</span>
    </a>
  )
}

export default WhatsAppButton
