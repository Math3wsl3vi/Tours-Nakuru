"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      title: "Lake Nakuru Flamingos",
      category: "wildlife",
      location: "Lake Nakuru National Park"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Maasai Mara Sunset",
      category: "landscape",
      location: "Maasai Mara National Reserve"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      title: "Great Migration",
      category: "wildlife",
      location: "Maasai Mara"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1589556183411-27dbe556691d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Mount Kenya Peaks",
      category: "landscape",
      location: "Mount Kenya National Park"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Diani Beach",
      category: "beach",
      location: "Diani Beach, Coast"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1557764934-97b8cfa340a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Amboseli Elephants",
      category: "wildlife",
      location: "Amboseli National Park"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2056&q=80",
      title: "Maasai Culture",
      category: "culture",
      location: "Narok County"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1567599755068-d759e9ea7e2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
      title: "Samburu Landscape",
      category: "landscape",
      location: "Samburu National Reserve"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Safari Adventure",
      category: "wildlife",
      location: "Tsavo National Park"
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Lamu Old Town",
      category: "culture",
      location: "Lamu Island"
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Hell's Gate National Park",
      category: "landscape",
      location: "Naivasha"
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      title: "Giraffes at Sunrise",
      category: "wildlife",
      location: "Nairobi National Park"
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1589556183411-27dbe556691d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Watamu Beach",
      category: "beach",
      location: "Watamu, Coast"
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Traditional Dance",
      category: "culture",
      location: "Western Kenya"
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1557764934-97b8cfa340a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      title: "Lake Bogoria Hot Springs",
      category: "landscape",
      location: "Lake Bogoria"
    },
    {
      id: 16,
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2056&q=80",
      title: "Lions Resting",
      category: "wildlife",
      location: "Maasai Mara"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'wildlife', name: 'Wildlife' },
    { id: 'landscape', name: 'Landscapes' },
    { id: 'culture', name: 'Culture' },
    { id: 'beach', name: 'Beaches' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="w-full">
      <div className="relative h-[500px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Explore the natural wonders and cultural treasures of Kenya.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto text-lg">
          Immerse yourself in the breathtaking beauty of Kenya through our collection of stunning photographs. 
          From wildlife encounters to cultural experiences and scenic landscapes.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                <Image
                width={400}
                height={300}
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.location}
                  </p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium capitalize">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Ready to Experience Kenya?
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            These photos capture just a glimpse of what awaits you. Let us help you create your own unforgettable Kenyan adventure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
              Book Your Tour
            </button>
            <button className="bg-transparent hover:bg-green-600 hover:text-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-md text-lg font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;