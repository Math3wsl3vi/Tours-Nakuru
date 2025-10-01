import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section
  className="relative h-screen bg-cover bg-center"
  style={{ backgroundImage: 'url("../images/diani.jpg")' }}
>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Centered content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-3xl text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Experience the Magic of Kenya?
          </h2>
          <p className="text-xl mb-8">
            From the flamingo-filled shores of Lake Nakuru to the vast plains of
            Maasai Mara, your perfect African adventure awaits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/booking"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors"
            >
              Book Your Tour Now
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white hover:text-green-800 text-white border-2 border-white px-8 py-4 rounded-md text-lg font-medium transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
