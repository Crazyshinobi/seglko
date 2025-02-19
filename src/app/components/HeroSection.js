// "use client"

// import { Swiper, SwiperSlide } from "swiper/react"
// import { Navigation, Pagination } from "swiper/modules"
// import Image from "next/image"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/navigation"

// import HeroBanner from "../../../public/HeroSectionBanner.jpg"

// export default function HeroSection() {
//   return (
//     <div className="container mx-auto px-4 py-8 ">
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         autoplay={5000}
//         loop={true}
//         navigation
//         modules={[Navigation]}
//         className="rounded-lg xl:h-[80vh] lg:h-[60vh] md:h-[50vh] h-[30vh] w-full"
//       >
//         {[1, 2, 3, 4, 5].map((index) => (
//           <SwiperSlide key={index} className="relative w-full h-full">
//             <Image
//               src={HeroBanner || "/placeholder.svg"}
//               alt={`Hero Banner ${index}`}
//               layout="fill"
//               objectFit="fill"
//               priority={index === 1}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }

