import React from 'react';
const Destinations = () => {
  return <div className="w-full">
     {/* Hero Section with Background Image */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80")'
    }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4"> Destinations & Attractions</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Explore the natural wonders and cultural treasures of Kenya.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Discover {"Kenya's"} most breathtaking destinations, from the
          flamingo-filled shores of Lake Nakuru to the vast plains of Maasai
          Mara. Our expertly guided tours will take you to these incredible
          locations.
        </p>
        {/* Placeholder for destination content */}
        <div className="text-center py-12">
          <p className="text-gray-500">
            Detailed destination information coming soon...
          </p>
        </div>
      </div>
    </div>;
};
export default Destinations;