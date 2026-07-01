import { useState } from 'react'
import './GalleryGrid.css'

function GalleryGrid({ images }) {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(img)}
          >
            <img src={img.src} alt={img.alt} />
            <div className="gallery-item-overlay">
              <p className="gallery-item-title">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p className="lightbox-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryGrid