// components/CompaniesSlider.jsx
"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Images from public/assets/
const companies = [
  {
    name: "TCS",
    logo: "/tieups/tcsLogo.png",
    background: "/tieups/TCS.jpg",
    description:
      "Tata Consultancy Services (TCS) is a global leader in IT services, consulting, and business solutions. With a vast network of innovation and delivery centers, TCS partners with clients to simplify, strengthen, and transform their businesses.",
    programs: [
      "Global Internship Programs",
      "Industry Collaborative Learning Initiatives",
      "TCS Ignite for Fresh Graduates",
    ],
  },
  {
    name: "IBM",
    logo: "/tieups/ibmLogo.png",
    background: "/tieups/ibm.jpg",
    description:
      "IBM is a multinational technology and consulting company. It offers a wide range of services including cloud computing, AI, blockchain, and quantum computing, with a strong emphasis on research and development.",
    programs: [
      "IBM Skills Academy",
      "AI and Cloud Integration Bootcamps",
      "Collaborative Research Projects",
    ],
  },
  {
    name: "Cisco",
    logo: "/tieups/ciscoLogo.png",
    background: "/tieups/cisco.webp",
    description:
      "Cisco is a global leader in networking and cybersecurity solutions. It provides hardware, software, and services that enable businesses to securely connect and collaborate across digital platforms.",
    programs: [
      "Cisco Networking Academy",
      "IoT and Cybersecurity Training Programs",
      "Collaborative University Projects",
    ],
  },
  {
    name: "HDFC Bank",
    logo: "/tieups/hdfcLogo.png",
    background: "/tieups/hdfc.png",
    description:
      "HDFC Bank is one of India’s leading private sector banks offering a wide range of financial services including retail banking, wholesale banking, and treasury operations. It is known for its technology-driven and customer-focused approach.",
    programs: [
      "Future Bankers Program",
      "Internships in Finance & Technology",
      "Campus Connect Initiatives",
    ],
  },
]

export default function CompaniesTieUps() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const sliderRef = useRef(null)

  const infiniteCompanies = [...companies, ...companies, ...companies]

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setSlidesToShow(1)
      else if (width < 768) setSlidesToShow(1.3)
      else if (width < 1024) setSlidesToShow(2)
      else setSlidesToShow(2)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = infiniteCompanies.length - Math.ceil(slidesToShow)
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [slidesToShow])

  const nextSlide = () => {
    const maxIndex = infiniteCompanies.length - Math.ceil(slidesToShow)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    const maxIndex = infiniteCompanies.length - Math.ceil(slidesToShow)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const slideWidth = 100 / slidesToShow

  return (
    <div className="bg-blue-100 relative">
      <div className="relative overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
        >
          {infiniteCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${slideWidth}%` }}
            >
              <div className="flex flex-col lg:flex-row shadow-xl overflow-hidden bg-white min-h-[500px] lg:h-[450px] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="lg:w-1/2 w-full p-4 sm:p-6 lg:p-8 relative bg-white flex flex-col h-full">
                  <div className="flex justify-center mb-4 lg:mb-6">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      width={128}
                      height={64}
                      className="object-contain max-h-12 sm:max-h-16"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="mb-4 lg:mb-6">
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed">
                        {company.description}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-2 lg:mb-3">Programs Offered:</p>
                      <ul className="space-y-1 lg:space-y-2">
                        {company.programs.map((program, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full mt-1.5 lg:mt-2 mr-2 lg:mr-3 flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm lg:text-sm text-gray-600 leading-relaxed">{program}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 w-full h-48 lg:h-full relative overflow-hidden group">
                  <Image
                    src={company.background}
                    alt={`${company.name} background`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg lg:text-xl font-bold">{company.name}</h3>
                    <p className="text-sm text-blue-200">Industry Partner</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-700 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-700 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  )
}
