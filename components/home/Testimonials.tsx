import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
const testimonials = [{
  id: 1,
  name: 'Emma Johnson',
  origin: 'United Kingdom',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
  rating: 5,
  text: 'Our safari in Lake Nakuru was absolutely incredible! Our guide was knowledgeable and passionate. We saw rhinos, lions, and countless flamingos. The accommodation arranged by Nakuru Tours was luxurious and the service impeccable.'
}, {
  id: 2,
  name: 'David Mwangi',
  origin: 'Nairobi, Kenya',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
  rating: 5,
  text: 'As a local, I wanted to show my international colleagues the beauty of Kenya. Nakuru Tours organized a perfect corporate retreat for us. Professional service, great attention to detail, and they even accommodated our last-minute changes.'
}, {
  id: 3,
  name: 'Sarah & Michael',
  origin: 'Australia',
  image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  rating: 5,
  text: "Our honeymoon in Kenya was a dream come true thanks to Nakuru Tours. The private safari, romantic dinners under the stars, and the hot air balloon ride over Maasai Mara were unforgettable experiences that we', ll, cherish, forever, .,"
}];
const Testimonials = () => {
  return <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read authentic reviews from travelers who have experienced our tours
            and services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image width={64} height={64} src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.origin}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)}
              </div>
              <p className="text-gray-700 italic">&quot;{testimonial.text}&quot;</p>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="text-green-600 hover:text-green-800 font-medium text-lg">
            Read More Reviews
          </a>
        </div>
      </div>
    </section>;
};
export default Testimonials;