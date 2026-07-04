import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServicePage from './pages/ServicePage'
import Gallery from './pages/Gallery'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Booking from './pages/Booking'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App