import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import TourPackages from '../components/home/TourPackages';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
const Home = () => {
  return <div className="w-full">
      <Hero />
      <FeaturedDestinations />
      <TourPackages />
      <Testimonials />
      <CallToAction />
    </div>;
};
export default Home;