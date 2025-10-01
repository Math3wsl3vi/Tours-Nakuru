import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
const destinations = [
 {
  id: 1,
  name: 'Diani Beach',
  image: 'https://images.unsplash.com/photo-1706012955757-6c2048c32668?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlhbmklMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D',
  description: 'A pristine tropical paradise on Kenya’s south coast, Diani Beach is known for its white sandy shores, turquoise waters, coral reefs, and vibrant nightlife.',
  link: '/destinations/diani-beach'
},
{
  id: 2,
  name: 'Menengai Crater',
  image: "/images/menengai-crater.jpg",
  description: 'One of the largest calderas in the world with breathtaking views of the Rift Valley.',
  link: '/destinations/menengai-crater'
}, {
  id: 3,
  name: 'Tsavo East National Park',
  image: 'https://images.unsplash.com/photo-1537976856963-b1166f2bb739?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHNhdm8lMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D',
  description: 'Home to a large population of elephants and diverse wildlife.',
  link: '/destinations/tsavo-east'
}, {
  id: 4,
  name: 'Maasai Mara',
  image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  description: 'World-famous safari destination known for the Great Migration and abundant wildlife.',
  link: '/destinations/maasai-mara'
}];
const FeaturedDestinations = () => {
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore {"Kenya's"} most stunning locations with our expertly guided
            tours and create memories to last a lifetime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map(destination => <div key={destination.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <Image width={300} height={200} src={destination.image} alt={destination.name} className="w-full h-full object-cover transition-transform hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <Link href={destination.link} className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
                  Explore more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <Link href="/destinations" className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors">
            View All Destinations <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>;
};
export default FeaturedDestinations;