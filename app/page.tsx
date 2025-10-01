import React from 'react';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import TourPackages from '@/components/home/TourPackages';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import Hero from '@/components/home/Hero';
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