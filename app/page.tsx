import CallToAction from '@/components/home/CallToAction';
import FeaturedDestinations from '@/components/home/FeaturedDestinations';
import Hero from '@/components/home/Hero';
import Testimonials from '@/components/home/Testimonials';
import TourPackages from '@/components/home/TourPackages';
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