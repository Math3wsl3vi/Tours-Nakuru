import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className=" w-full">
      {/* Hero Section with Background Image */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80")'
      
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Learn more about Nakuru Tours and our passion for showcasing {"Kenya's"} beauty.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Our Story
          </h2>
          <p className="text-gray-700 mb-8">
            Nakuru Tours was founded in 2010 by a group of passionate local
            guides with extensive knowledge of {"Kenya's"} landscapes, wildlife, and
            cultures. What started as a small operation has grown into one of
            the most respected tour companies in the region, known for authentic
            experiences and personalized service.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-8">
            Our mission is to showcase the natural beauty and cultural richness
            of Kenya while promoting sustainable tourism that benefits local
            communities and preserves our natural heritage for future
            generations.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                Sustainability
              </h3>
              <p className="text-gray-700">
                We are committed to environmentally responsible tourism
                practices that minimize our ecological footprint.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                Authenticity
              </h3>
              <p className="text-gray-700">
                We provide genuine experiences that showcase the real Kenya,
                beyond the typical tourist attractions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-green-700">
                Excellence
              </h3>
              <p className="text-gray-700">
                We strive for the highest standards in all aspects of our
                service, from guides to accommodations.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Our Team
          </h2>
          <p className="text-gray-700 mb-8">
            Our team consists of experienced guides, travel experts, and
            hospitality professionals who are passionate about creating
            unforgettable experiences for our guests. All our guides are
            certified, with extensive knowledge of {"Kenya's"} wildlife, geography,
            and cultures.
          </p>
          
          <div className="bg-green-50 p-8 rounded-lg mb-12 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Why Choose Us?
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                Over 10 years of experience in the tourism industry
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                Personalized service and customizable tour packages
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                Knowledgeable local guides who speak multiple languages
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                Commitment to sustainable and responsible tourism
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                Partnerships with quality accommodations and service providers
              </li>
              <li className="flex items-center">
                <span className="text-green-600 mr-3">✓</span>
                24/7 customer support during your tour
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Ready to Explore?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/tours" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
              >
                View Our Tours
              </Link>
              <Link 
                href="/contact" 
                className="bg-transparent hover:bg-green-600 hover:text-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-md text-lg font-medium transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;