import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './VideoCarousel.css'

function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

    const videos = [
    { src: '/images/Engagement.mp4' },
    { src: '/images/Birthday.mp4' },
    { src: '/images/Entry.mp4' },
    { src: '/images/ThemeB.mp4' },
  ]

  const total = videos.length

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }

  const handleCardClick = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index)
    } else {
      handleNext()
    }
  }

  const getCardStyle = (index) => {
    const diff = (index - currentIndex + total) % total

    if (diff === 0) {
      // Active card — front and center
      return {
        transform: 'translateX(0) translateZ(0px) scale(1)',
        opacity: 1,
        zIndex: 10,
        filter: 'none',
      }
    } else if (diff === 1) {
      // Next card — right, pushed back
      return {
        transform: 'translateX(105%) translateZ(-100px) scale(0.88)',
        opacity: 0.6,
        zIndex: 5,
        filter: 'brightness(0.7)',
      }
    } else if (diff === total - 1) {
      // Previous card — left, pushed back
      return {
        transform: 'translateX(-105%) translateZ(-100px) scale(0.88)',
        opacity: 0.6,
        zIndex: 5,
        filter: 'brightness(0.7)',
      }
    } else {
      // All other cards — hidden
      return {
        transform: 'translateX(0) translateZ(-300px) scale(0.5)',
        opacity: 0,
        zIndex: 0,
        filter: 'brightness(0.5)',
      }
    }
  }

  return (
    <section className="section video-carousel-section">
      <div className="container">
        <div className="vc-layout">
          {/* Left Text */}
          <div className="vc-text">
            <div className="section-divider" style={{ margin: '0 0 1rem' }}></div>
            <h2>Watch Our Work</h2>
            <p>See how we transform ordinary spaces into extraordinary experiences.</p>
            <div className="vc-arrows">
              <button className="vc-arrow" onClick={handlePrev}>
                <FaArrowLeft />
              </button>
              <button className="vc-arrow" onClick={handleNext}>
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="vc-carousel-wrapper">
            <div className="vc-stage">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={`vc-card ${index === currentIndex ? 'vc-card-active' : ''}`}
                  style={getCardStyle(index)}
                  onClick={() => handleCardClick(index)}
                >
                  <video
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoCarousel