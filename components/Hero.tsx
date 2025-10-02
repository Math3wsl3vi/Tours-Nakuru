import Link from 'next/link';
import React from 'react';
const Hero = () => {
  return <div className="relative h-screen">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80")'
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      {/* Hero Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Discover Nakuru, <span className="text-green-400">Explore Kenya</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Experience the breathtaking beauty of {"Kenya's"} landscapes, wildlife,
          and culture with our expert-guided tours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/tours" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
            Book a Tour
          </Link>
          <Link href="/contact" className="bg-transparent hover:bg-white hover:text-green-800 text-white border-2 border-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
            Get a Quote
          </Link>
          <Link href="/contact" className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <div className="w-1 h-8 bg-white opacity-70 rounded-full animate-bounce"></div>
      </div>
    </div>;
};
export default Hero;