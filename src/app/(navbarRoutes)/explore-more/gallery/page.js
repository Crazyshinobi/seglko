'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  // 🏅 Sports
  { id: 1, src: '/gallery/sports-meet-1.jpg', alt: 'Sports Meet ', category: 'sports' },
  { id: 2, src: '/gallery/sports-meet-2.jpg', alt: 'Sports Meet ', category: 'sports' },
  { id: 3, src: '/gallery/sports-meet-3.jpeg', alt: 'Sports Meet ', category: 'sports' },
  { id: 4, src: '/gallery/sports-meet-4.jpeg', alt: 'Sports Meet ', category: 'sports' },
  { id: 5, src: '/gallery/sports-meet-5.jpeg', alt: 'Sports Meet ', category: 'sports' },
  { id: 6, src: '/gallery/sports-meet-6.jpeg', alt: 'Sports Meet ', category: 'sports' },
  { id: 7, src: '/gallery/sports-meet-7.jpeg', alt: 'Sports Meet ', category: 'sports' },
  { id: 8, src: '/gallery/sports-meet-8.jpeg', alt: 'Sports Meet ', category: 'sports' },
  { id: 9, src: '/gallery/sports-meet-10.jpeg', alt: 'Sports Meet ', category: 'sports' },
  { id: 10, src: '/gallery/sports-meet-11.jpeg', alt: 'Sports Meet ', category: 'sports' },

  // 🏥 Medical / Facility
  { id: 11, src: '/gallery/medical.jpg', alt: 'Medical Room ', category: 'facilities' },
  { id: 12, src: '/gallery/medical2.jpg', alt: 'Medical Room ', category: 'facilities' },
  { id: 13, src: '/gallery/medical3.jpg', alt: 'Medical Room ', category: 'facilities' },
  { id: 14, src: '/gallery/medical4.jpg', alt: 'Medical Room ', category: 'facilities' },
  { id: 15, src: '/gallery/medical5.jpg', alt: 'Medical Room ', category: 'facilities' },
  { id: 16, src: '/gallery/medical6.jpg', alt: 'Medical Room ', category: 'facilities' },

  // 🏭 Industrial Visit
  { id: 17, src: '/gallery/industrial-visit1.jpg', alt: 'Industrial Visit ', category: 'facilities' },
  { id: 18, src: '/gallery/industrial-visit2.jpg', alt: 'Industrial Visit ', category: 'facilities' },

  // 🛡️ Cyber Security
  { id: 19, src: '/gallery/cyber-security-workshop.jpg', alt: 'Cyber Security Workshop', category: 'events' },

  // 🍴 Canteen
  { id: 20, src: '/gallery/canteen.jpg', alt: 'Canteen Area', category: 'facilities' },

  // 🇮🇳 Subhash Chandra Bose Event
  { id: 21, src: '/gallery/subhash_chandra_bose_1.jpeg', alt: 'Subhash Chandra Bose Event ', category: 'events' },
  { id: 22, src: '/gallery/subhash_chandra_bose_2.jpeg', alt: 'Subhash Chandra Bose Event ', category: 'events' },
  { id: 23, src: '/gallery/subhash_chandra_bose_3.jpeg', alt: 'Subhash Chandra Bose Event ', category: 'events' },

  // 🎉 Festival
  { id: 24, src: '/gallery/makar-sankranti-and-lohri-celebration.jpeg', alt: 'Makar Sankranti and Lohri Celebration', category: 'events' },

  // 🏫 Campus Building
  { id: 25, src: '/gallery/building1.jpg', alt: 'Campus Building ', category: 'campus' },
  { id: 26, src: '/gallery/building2.jpg', alt: 'Campus Building ', category: 'campus' },
  { id: 27, src: '/gallery/building3.jpg', alt: 'Campus Building ', category: 'campus' },
  { id: 28, src: '/gallery/building6.jpg', alt: 'Campus Building ', category: 'campus' },

  // 📚 Library
  { id: 29, src: '/gallery/library1.jpg', alt: 'Library ', category: 'facilities' },
  { id: 30, src: '/gallery/library2.jpg', alt: 'Library', category: 'facilities' },
  { id: 31, src: '/gallery/library3.jpg', alt: 'Library ', category: 'facilities' },
  { id: 32, src: '/gallery/library4.jpg', alt: 'Library ', category: 'facilities' },
  { id: 33, src: '/gallery/library5.jpg', alt: 'Library ', category: 'facilities' },
  { id: 34, src: '/gallery/library6.jpg', alt: 'Library ', category: 'facilities' },
  { id: 35, src: '/gallery/library7.jpg', alt: 'Library ', category: 'facilities' },

  // 🖥️ Computer Labs
  { id: 36, src: '/gallery/computer-lab1.jpg', alt: 'Computer Lab ', category: 'facilities' },
  { id: 37, src: '/gallery/computer-lab3.jpg', alt: 'Computer Lab ', category: 'facilities' },
  { id: 38, src: '/gallery/computer-lab4.jpg', alt: 'Computer Lab ', category: 'facilities' },
  { id: 39, src: '/gallery/computer-lab5.jpg', alt: 'Computer Lab ', category: 'facilities' },

  // 🚌 Transport
  { id: 40, src: '/gallery/transport1.jpg', alt: 'College Transport Bus', category: 'services' }
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'campus', name: 'Campus' },
  { id: 'facilities', name: 'Facilities' },
  { id: 'services', name: 'Services' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>SEG Gallery | Campus Life</title>
        <meta name="description" content="Explore our campus through stunning visuals" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              SEG Gallery
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our campus through these beautiful moments and facilities
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Masonry Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="relative w-full h-64 rounded-xl shadow-lg overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold capitalize">
                    {image.alt.replace(/-/g, ' ')}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
