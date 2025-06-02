import Head from 'next/head';
import Image from 'next/image';

const galleryImages = [
  { id: 1, src: '/gallery/sports-meet-1.jpg', alt: 'Sports Meet 1', category: 'sports' },
  { id: 2, src: '/gallery/sports-meet-2.jpg', alt: 'Sports Meet 2', category: 'sports' },
  { id: 3, src: '/gallery/sports-meet-3.jpeg', alt: 'Sports Meet 3', category: 'sports' },
  { id: 4, src: '/gallery/sports-meet-4.jpeg', alt: 'Sports Meet 4', category: 'sports' },
  { id: 5, src: '/gallery/sports-meet-5.jpeg', alt: 'Sports Meet 5', category: 'sports' },
  { id: 6, src: '/gallery/sports-meet-6.jpeg', alt: 'Sports Meet 6', category: 'sports' },
  { id: 7, src: '/gallery/sports-meet-7.jpeg', alt: 'Sports Meet 7', category: 'sports' },
  { id: 8, src: '/gallery/sports-meet-8.jpeg', alt: 'Sports Meet 8', category: 'sports' },
  { id: 9, src: '/gallery/sports-meet-10.jpeg', alt: 'Sports Meet 10', category: 'sports' },
  { id: 10, src: '/gallery/sports-meet-11.jpeg', alt: 'Sports Meet 11', category: 'sports' },
];

export default function Library() {
  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Sports | Gallery</title>
        <meta name="description" content="Experience campus life through our gallery" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sports</h1>
          <p className="text-xl text-gray-600">Explore our Sports moments through these moments</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-60">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
