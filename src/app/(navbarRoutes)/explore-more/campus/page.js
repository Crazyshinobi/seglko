import Head from 'next/head';
import Image from 'next/image';

// Sample gallery images data (replace with your actual images)
const galleryImages = [

// 🏫 Campus Building
{ id: 1, src: '/gallery/building1.jpg', alt: 'Campus Building 1', category: 'campus' },
{ id: 2, src: '/gallery/building2.jpg', alt: 'Campus Building 2', category: 'campus' },
{ id: 3, src: '/gallery/building3.jpg', alt: 'Campus Building 3', category: 'campus' },
{ id: 4, src: '/gallery/building6.jpg', alt: 'Campus Building 6', category: 'campus' },
 
];


export default function Library() {
  return (
    <div className=" bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Campus | Gallery</title>
        <meta name="description" content="Experience campus life through our gallery" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Campus</h1>
          <p className="text-xl text-gray-600">Explore our Campus through these moments</p>
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