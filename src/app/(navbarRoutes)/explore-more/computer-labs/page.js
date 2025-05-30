import Head from 'next/head';
import Image from 'next/image';

// Sample gallery images data (replace with your actual images)
const galleryImages = [

  { id: 1, src: '/gallery/computer-lab1.jpg', alt: 'computer-lab' },
  { id: 2, src: '/gallery/computer-lab3.jpg', alt: 'computer-lab' },
  { id: 3, src: '/gallery/computer-lab4.jpg', alt: 'computer-lab' },
  { id: 4, src: '/gallery/computer-lab5.jpg', alt: 'computer-lab' },
];


export default function ComputerLabs() {
  return (
    <div className=" bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Computer Labs | Gallery</title>
        <meta name="description" content="Experience campus life through our gallery" />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Computer Labs</h1>
          <p className="text-xl text-gray-600">Explore our Computer labs through these moments</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
             
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}