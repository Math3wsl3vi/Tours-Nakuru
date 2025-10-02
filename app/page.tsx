import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import TourPackages from '@/components/TourPackages';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';

import React from 'react';
const Home = () => {
  return <div className="w-full font-poppins">
      <Hero />
      <FeaturedDestinations />
      <TourPackages />
      <Testimonials />
      <CallToAction />
    </div>;
};
export default Home;