import { useState } from 'react'
import GalleryGrid from '../components/GalleryGrid'
import SparkleHero from '../components/SparkleHero'
import './Gallery.css'

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const allImages = [
    { src: 'https://i.pinimg.com/originals/f1/00/e2/f100e27841fb4af6aab49bece5335deb.jpg', alt: 'Wedding Ceremony', category: 'weddings' },
    { src: 'https://tse1.mm.bing.net/th/id/OIP.NQavdz8sG9HUWt19MAEjFwHaDV?pid=Api&P=0&h=180', alt: 'Wedding Ceremony', category: 'weddings' },
    { src: 'https://i.pinimg.com/originals/4d/05/7c/4d057cd3c262034a2be99b30199fbd61.jpg', alt: 'Wedding Ceremony', category: 'weddings' },
    { src: 'https://i.pinimg.com/originals/33/2b/85/332b85d7026f43bfc2278e04e09d19cb.jpg', alt: 'Wedding Ceremony', category: 'weddings' },
    { src: 'https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2023/01/DAY03_MANVITHA_VISHWAK_WEDDING-1047.jpg', alt: 'Wedding Ceremony', category: 'weddings' },
    { src: 'https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2023/01/IMG_0894.jpg.jpg', alt: 'Wedding Ceremony', category: 'weddings' },
    { src: 'https://media.weddingz.in/images/16ab8276a8bfa26550f679e8e6963687/best-wedding-reception-halls-in-patna-you-will-absolutely-fall-in-love-with.jpg', alt: 'Wedding Reception', category: 'weddings' },
    { src: 'https://i.pinimg.com/originals/60/4b/7c/604b7c5e0854ca82a80a95e49deda0f3.jpg', alt: 'Wedding Reception', category: 'weddings' },
    { src: 'https://www.happywedding.app/blog/wp-content/uploads/2023/03/Wedding-Stage-Decor.jpg', alt: 'Wedding Reception', category: 'weddings' },
    { src: 'https://i.pinimg.com/originals/bd/4d/7f/bd4d7fc8f9310f09c561057874007384.jpg', alt: 'Wedding Entry', category: 'weddings' },
    { src: 'https://i.pinimg.com/736x/33/64/9b/33649ba14e2656b594beb5377c7b5fb4.jpg', alt: 'Wedding Reception', category: 'weddings' },
    { src: 'https://cdn0.weddingwire.in/article/3424/original/1280/jpg/94243-sangeet-ideas-planning-to-organise-it-right-the-wedding-planning-company-decor-for-sangeet-night.jpeg', alt: 'Wedding Entry', category: 'weddings' },

    { src: 'https://i.pinimg.com/1200x/d4/c7/15/d4c7150f37f71ec2df0317d5f3eb8372.jpg', alt: 'Birthday Celebration', category: 'birthdays' },
    { src: 'https://i.pinimg.com/1200x/fe/af/ed/feafed25764ea94924b0d39460e6b0d0.jpg', alt: 'Birthday Decoration', category: 'birthdays' },
    { src: 'https://i.pinimg.com/1200x/2d/13/f5/2d13f53b93e7c08e186bf81dc9640f07.jpg', alt: 'Birthday Decoration', category: 'birthdays' },
    { src: 'https://i.pinimg.com/736x/62/e5/6d/62e56d674db432b09ba997d01ad2940a.jpg', alt: 'Birthday Decoration', category: 'birthdays' },
    { src: 'https://i.pinimg.com/1200x/2e/58/d2/2e58d2a692d03dc88f56d01cd88028d3.jpg', alt: 'Birthday Decoration', category: 'birthdays' },
    { src: 'https://i.pinimg.com/1200x/b8/4e/22/b84e22c0b89d68df6ef903eb0404cc47.jpg', alt: 'Birthday Decoration', category: 'birthdays' },
    { src: 'https://i.pinimg.com/1200x/44/e8/2e/44e82e68a9abb2503e35974e9853762a.jpg', alt: 'Birthday Decoration', category: 'birthdays' },
    { src: 'https://i.pinimg.com/736x/56/9f/61/569f61c8a3cde75747963592d5638561.jpg', alt: 'Birthday Decoration', category: 'birthdays' },
    { src: 'https://i.pinimg.com/736x/8c/5c/bf/8c5cbfbdb72d2adae0d86c74616091f4.jpg', alt: 'Birthday Decoration', category: 'birthdays' },
    { src: 'https://i.pinimg.com/1200x/43/4b/df/434bdf08bce61ea4d00efeb64c6bd78a.jpg', alt: 'Birthday Party', category: 'birthdays' },
    { src: 'https://i.pinimg.com/1200x/fc/9d/3a/fc9d3ad00201817efefee1bfbf1747b8.jpg', alt: 'Birthday Party', category: 'birthdays' },

    { src: 'https://i.pinimg.com/736x/a9/a6/a5/a9a6a56a98d12d7ff12f5653d29c85ab.jpg', alt: 'Corporate Conference', category: 'corporate' },
    { src: 'https://i.pinimg.com/736x/65/e8/b7/65e8b70f6bc7a641731be823a95a3a51.jpg', alt: 'Corporate Meeting', category: 'corporate' },
    { src: 'https://i.pinimg.com/736x/c5/65/23/c56523241b53010713d0cf5e56d5862f.jpg', alt: 'Corporate Event', category: 'corporate' },
    { src: 'https://i.pinimg.com/1200x/81/40/2d/81402d652cd601bb3fabf3ed97117832.jpg', alt: 'Corporate Event', category: 'corporate' },
    { src: 'https://i.pinimg.com/736x/6e/8c/ea/6e8ceaef259aa4e430721e61235b4c1d.jpg', alt: 'Corporate Event', category: 'corporate' },
    { src: 'https://i.pinimg.com/736x/c0/df/74/c0df744868d124dc48a1654caa8b0db3.jpg', alt: 'Corporate Event', category: 'corporate' },
    { src: 'https://i.pinimg.com/1200x/36/e6/f3/36e6f31181fe8ca6ef17d070cf9e0ade.jpg', alt: 'Corporate Event', category: 'corporate' },
    { src: 'https://i.pinimg.com/1200x/2a/4e/36/2a4e367df08842b32975c02c68f991fa.jpg', alt: 'Corporate Event', category: 'corporate' },
    { src: 'https://i.pinimg.com/736x/1a/3b/b9/1a3bb916c9f204a25cce2222221b8317.jpg', alt: 'Corporate Event', category: 'corporate' },

    { src: 'https://i.pinimg.com/736x/51/f2/6b/51f26b9d99d386d6259459fc0f1795f0.jpg', alt: 'Social Gathering', category: 'social' },
    { src: 'https://i.pinimg.com/736x/cc/8a/1f/cc8a1f08a13967874cdc4cec503f957d.jpg', alt: 'Festival Celebration', category: 'social' },
    { src: 'https://i.pinimg.com/736x/46/38/ed/4638edf85d9b8cfd5850144f8e1da942.jpg', alt: 'Festival Celebration', category: 'social' },
    { src: 'https://i.pinimg.com/1200x/13/82/21/138221acb89f37016662cd9446da6379.jpg', alt: 'Festival Celebration', category: 'social' },
    { src: 'https://i.pinimg.com/736x/ee/ae/63/eeae63bcf761405aa79c1bdfa0abfa20.jpg', alt: 'Festival Celebration', category: 'social' },
    { src: 'https://i.pinimg.com/1200x/c9/70/bd/c970bdc5fa31c160db9a1bdfdfe0309b.jpg', alt: 'Festival Celebration', category: 'social' },
    { src: 'https://i.pinimg.com/736x/45/61/30/45613016fbab5edb59d65abdacfa9a92.jpg', alt: 'Party Night', category: 'social' },
    { src: 'https://i.pinimg.com/736x/25/09/be/2509be7060ec2dbe57de2a63888e4337.jpg', alt: 'Party Night', category: 'social' },

    { src: 'https://i.pinimg.com/736x/aa/13/37/aa13370f07c97274e8e2b7a18c23ed9a.jpg', alt: 'Haldi Ceremony', category: 'Haldi' },
    { src: 'https://i.pinimg.com/1200x/ab/bc/bf/abbcbffd61090778ce1c884bad2e7ca9.jpg', alt: 'Haldi Ceremony', category: 'Haldi' },
    { src: 'https://i.pinimg.com/736x/9f/e7/94/9fe794de1c111927634b1982d6525ec6.jpg', alt: 'Haldi Ceremony', category: 'Haldi' },
    { src: 'https://i.pinimg.com/736x/80/75/30/80753023a974c0b24e59032007ea4223.jpg', alt: 'Haldi Ceremony', category: 'Haldi' },
    { src: 'https://i.pinimg.com/1200x/4b/28/63/4b28634acc4b7c41c8add17a905808b3.jpg', alt: 'Haldi Ceremony', category: 'Haldi' },
    { src: 'https://i.pinimg.com/736x/ad/55/76/ad557650deb9f312ceb38873fa866105.jpg', alt: 'Haldi Ceremony', category: 'Haldi' },
    { src: 'https://i.pinimg.com/736x/74/21/42/742142a1a927bd3631c1bf5c83b76661.jpg', alt: 'Haldi Ceremony', category: 'Haldi' },
    { src: 'https://i.pinimg.com/1200x/da/2f/2c/da2f2c707fb47de6771ee019987675a0.jpg', alt: 'Haldi Ceremony', category: 'Haldi' },
    { src: 'https://i.pinimg.com/1200x/38/de/a7/38dea7de82f5fccf6f2514a9c0c33b6b.jpg', alt: 'Haldi Ceremony', category: 'Haldi' },
    { src: 'https://i.pinimg.com/736x/09/f0/e7/09f0e796ecba197cd2f53cbd3f52cd80.jpg', alt: 'Haldi Ceremony', category: 'Haldi' },

    { src: 'https://i.pinimg.com/736x/ef/a4/71/efa471caadcc0c6c03abab4957c0e699.jpg', alt: 'Sangeet Night', category: 'Sangeet' },
    { src: 'https://i.pinimg.com/736x/df/f8/12/dff812e5f761c31b91082da7a0774619.jpg', alt: 'Sangeet Night', category: 'Sangeet' },
    { src: 'https://i.pinimg.com/736x/b9/27/22/b92722f7a61b364b232c10a902753fbb.jpg', alt: 'Sangeet Night', category: 'Sangeet' },
    { src: 'https://i.pinimg.com/736x/f9/82/cb/f982cbcd2bb365b5711170c8fa37e0ab.jpg', alt: 'Sangeet Night', category: 'Sangeet' },
    { src: 'https://i.pinimg.com/736x/4c/23/4c/4c234c73454aa091fcb3d14adbb5128b.jpg', alt: 'Sangeet Night', category: 'Sangeet' },
    { src: 'https://i.pinimg.com/1200x/b8/d9/17/b8d917f66627e234d451981c8c88c474.jpg', alt: 'Sangeet Night', category: 'Sangeet' },
    { src: 'https://i.pinimg.com/736x/d8/d1/35/d8d1353660bb0321bc724733b97fb2fd.jpg', alt: 'Sangeet Night', category: 'Sangeet' },
    { src: 'https://i.pinimg.com/736x/eb/16/5e/eb165ebe84480777f28285512937ea2e.jpg', alt: 'Sangeet Night', category: 'Sangeet' },
    { src: 'https://i.pinimg.com/736x/45/61/30/45613016fbab5edb59d65abdacfa9a92.jpg', alt: 'Sangeet Night', category: 'Sangeet' },
    { src: 'https://i.pinimg.com/736x/89/d0/d3/89d0d3efaaee80c4b78c0e8f865dfc9d.jpg', alt: 'Sangeet Night', category: 'Sangeet' },
    { src: 'https://i.pinimg.com/1200x/1f/0c/46/1f0c46c490641c8486fce917b21365e4.jpg', alt: 'Sangeet Night', category: 'Sangeet' },
  ]

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Weddings', value: 'weddings' },
    { label: 'Birthdays', value: 'birthdays' },
    { label: 'Corporate', value: 'corporate' },
    { label: 'Social', value: 'social' },
    { label: 'Haldi', value: 'Haldi' },
    { label: 'Sangeet', value: 'Sangeet' },
  ]

  const filteredImages = activeFilter === 'all'
    ? allImages
    : allImages.filter(img => img.category === activeFilter)

  return (
    <div className="gallery-page">

      {/* SparkleHero — full width, no wrapper */}
      <SparkleHero
        title="Our Gallery"
        subtitle="A glimpse of magical events we've created"
      />

      {/* Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="section-divider"></div>
          <h2 className="section-title">Event Photos</h2>

          {/* Filter Buttons */}
          <div className="gallery-filters">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={activeFilter === filter.value ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <GalleryGrid images={filteredImages} />
        </div>
      </section>

    </div>
  )
}

export default Gallery