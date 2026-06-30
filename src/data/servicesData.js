import { 
  GiDiamondRing, 
  GiSunflower, 
  GiFlowerPot,
  GiMusicalNotes,
  GiCakeSlice,
  GiHearts,
  GiDress,
  GiTrophy,
  GiRocket,
  GiPalmTree,
  GiWineGlass,
  GiBriefcase,
  GiFireworkRocket,
  GiMicrophone
} from 'react-icons/gi'

const servicesData = [
  { slug: 'wedding', icon: '💒', Icon: GiDiamondRing, title: 'Wedding',
     shortDesc: 'Create the perfect fairy-tale wedding with our expert planning and stunning decorations.',
      image: 'https://image.wedmegood.com/resized-nw/1300X/wp-content/uploads/2023/01/DAY03_MANVITHA_VISHWAK_WEDDING-1047.jpg' },
  { slug: 'haldi', icon: '💛', Icon: GiSunflower, title: 'Haldi', shortDesc: 'Beautiful Haldi ceremony setups with traditional marigold decorations and vibrant themes.', image: 'https://i.pinimg.com/1200x/4b/28/63/4b28634acc4b7c41c8add17a905808b3.jpg' },
  { slug: 'mehndi', icon: '🌿', Icon: GiFlowerPot, title: 'Mehndi', shortDesc: 'Colorful and fun Mehndi ceremony arrangements with stunning decor and entertainment.', image: 'https://i.pinimg.com/736x/60/60/49/60604978979eab50a6c7f0ef70302ccf.jpg '},
  { slug: 'sangeet', icon: '🎵', Icon: GiMusicalNotes, title: 'Sangeet', shortDesc: 'Vibrant Sangeet night setups with dance floors, DJ, lighting, and stage arrangements.', image: 'https://i.pinimg.com/736x/eb/16/5e/eb165ebe84480777f28285512937ea2e.jpg' },
  { slug: 'birthday', icon: '🎂', Icon: GiCakeSlice, title: 'Birthday', shortDesc: 'Fun, creative, and memorable birthday celebrations for all ages with themed decorations.', image: 'https://i.pinimg.com/1200x/d4/c7/15/d4c7150f37f71ec2df0317d5f3eb8372.jpg' },
{
  slug: 'engagement',
  icon: '💍',
  Icon: GiHearts,
  title: 'Engagement',
  shortDesc: 'Beautiful engagement ceremony planning with elegant decorations and photography.',
  image: 'https://i.pinimg.com/1200x/97/d1/e3/97d1e32629ebadc0a118382bd13e05a1.jpg'
},
  { slug: 'half-saree', icon: '🥻', Icon: GiDress, title: 'Half Saree Function', shortDesc: 'Traditional Half Saree ceremony celebrations with grand decorations and cultural themes.', image: 'https://i.pinimg.com/1200x/0b/34/90/0b34904f009aa380e3a8563b928fb531.jpg' },
  { slug: 'award-ceremonies', icon: '🏆', Icon: GiTrophy, title: 'Award Ceremonies', shortDesc: 'Professional award ceremony management with stage design, lighting, and AV setup.', image: 'https://i.pinimg.com/736x/f4/d0/a3/f4d0a37b2d1fdb35aa79fdea833123cf.jpg' },
  { slug: 'product-launch', icon: '🚀', Icon: GiRocket, title: 'Product Launch', shortDesc: 'Impactful product launch events with branding, media coverage, and presentation setups.', image: 'https://i.pinimg.com/1200x/81/40/2d/81402d652cd601bb3fabf3ed97117832.jpg' },
  { slug: 'beach-parties', icon: '🏖️', Icon: GiPalmTree, title: 'Beach Parties', shortDesc: 'Exciting beach party setups with bonfires, music, lighting, and beach-themed decorations.', image: 'https://i.pinimg.com/1200x/a9/ff/4f/a9ff4fc345939fc02a6f5f5fcd283060.jpg' },
  { slug: 'cocktail-parties', icon: '🍸', Icon: GiWineGlass, title: 'Cocktail Parties', shortDesc: 'Elegant cocktail party arrangements with premium setups, bar service, and ambiance.', image: 'https://i.pinimg.com/736x/46/38/ed/4638edf85d9b8cfd5850144f8e1da942.jpg' },
  { slug: 'corporate-events', icon: '🏢', Icon: GiBriefcase, title: 'Corporate Events', shortDesc: 'Professional event management for conferences, seminars, team building, and meetings.', image: 'https://i.pinimg.com/1200x/99/e6/97/99e697e6f2125eafd83cfb40ffa1f8db.jpg' },
  { slug: 'festival-events', icon: '🎇', Icon: GiFireworkRocket, title: 'Festival Events', shortDesc: 'Grand festival celebrations with traditional and modern themes for any occasion.', image: 'https://i.pinimg.com/736x/75/01/a1/7501a1708a27fa0edc68c84c6dc862c0.jpg' },
  { slug: 'music-entertainment', icon: '🎤', Icon: GiMicrophone, title: 'Music & Entertainment', shortDesc: 'Live music, DJ, dance performances, and complete entertainment packages for events.', image: 'https://i.pinimg.com/736x/45/61/30/45613016fbab5edb59d65abdacfa9a92.jpg' },
]

export default servicesData