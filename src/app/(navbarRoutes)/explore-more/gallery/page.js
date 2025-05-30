'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const galleryImages = [
  { id: 1, src: '/gallery/building1.jpg', alt: 'College building', category: 'campus' },
  { id: 2, src: '/gallery/building2.jpg', alt: 'College building', category: 'campus' },
  { id: 3, src: '/gallery/building3.jpg', alt: 'College building', category: 'campus' },
  { id: 16, src: '/gallery/building6.jpg', alt: 'College building', category: 'campus' },
  { id: 4, src: '/gallery/library1.jpg', alt: 'Library', category: 'facilities' },
  { id: 5, src: '/gallery/library2.jpg', alt: 'Library', category: 'facilities' },
  { id: 6, src: '/gallery/library3.jpg', alt: 'Library', category: 'facilities' },
  { id: 7, src: '/gallery/library4.jpg', alt: 'Library', category: 'facilities' },
  { id: 8, src: '/gallery/library5.jpg', alt: 'Library', category: 'facilities' },
  { id: 9, src: '/gallery/library6.jpg', alt: 'Library', category: 'facilities' },
  { id: 10, src: '/gallery/library7.jpg', alt: 'Library', category: 'facilities' },
  { id: 11, src: '/gallery/computer-lab1.jpg', alt: 'Computer Lab', category: 'facilities' },
  { id: 12, src: '/gallery/computer-lab3.jpg', alt: 'Computer Lab', category: 'facilities' },
  { id: 13, src: '/gallery/computer-lab4.jpg', alt: 'Computer Lab', category: 'facilities' },
  { id: 14, src: '/gallery/computer-lab5.jpg', alt: 'Computer Lab', category: 'facilities' },
  { id: 15, src: '/gallery/transport1.jpg', alt: 'Transport', category: 'services' },
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
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-4 aspect-h-3 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold capitalize">
                    {image.alt.replace('-', ' ')}
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