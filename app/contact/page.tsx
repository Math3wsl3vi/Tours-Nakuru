import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
const Contact = () => {
  return <div className="pt-20 w-full">
      <div className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            Get in touch with our team to plan your perfect Kenyan adventure.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Get In Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have questions about our tours or need help planning your trip?
              Fill out the form, and our team will get back to you as soon as
              possible.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your email" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Subject" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">Our Office</h3>
                  <p className="text-gray-600">
                    123 Kenyatta Avenue, Nakuru, Kenya
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+254 700 000 000</p>
                  <p className="text-gray-600">+254 733 000 000 (WhatsApp)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@nakurutours.com</p>
                  <p className="text-gray-600">bookings@nakurutours.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-green-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">
                    Sunday: Closed (Emergency contact available)
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">
                Emergency Contact
              </h3>
              <p className="text-gray-600">
                For urgent matters outside business hours:
              </p>
              <p className="text-gray-600 font-medium">+254 722 000 000</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;