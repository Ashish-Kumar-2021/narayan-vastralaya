import { shopInfo } from '../data/mockData';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-brand-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center space-y-10">
          <div>
            <h2 className="text-4xl font-serif font-bold text-brand-maroon dark:text-brand-gold mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Visit our store to experience the quality firsthand, or reach out to us for styling advice and inquiries.</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-brand-gold w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-lg dark:text-brand-beige">Boutique Location</h4>
                <p className="text-gray-600 dark:text-gray-400">{shopInfo.address}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-brand-gold w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-lg dark:text-brand-beige">Direct Line</h4>
                <p className="text-gray-600 dark:text-gray-400">{shopInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-brand-gold w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-lg dark:text-brand-beige">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">{shopInfo.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-beige dark:bg-brand-dark p-10 shadow-sm border border-gray-100 dark:border-gray-800">
          <form name="contact" method="POST" data-netlify="true" className="space-y-6">
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="block text-sm font-semibold text-brand-black dark:text-brand-beige mb-2">Full Name</label>
              <input type="text" name="name" required className="w-full px-4 py-3 bg-white dark:bg-brand-darkGray border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-brand-maroon dark:focus:border-brand-gold dark:text-white transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-black dark:text-brand-beige mb-2">Email Address</label>
              <input type="email" name="email" required className="w-full px-4 py-3 bg-white dark:bg-brand-darkGray border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-brand-maroon dark:focus:border-brand-gold dark:text-white transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-black dark:text-brand-beige mb-2">Message</label>
              <textarea name="message" rows="4" required className="w-full px-4 py-3 bg-white dark:bg-brand-darkGray border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-brand-maroon dark:focus:border-brand-gold dark:text-white transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-maroon dark:bg-brand-gold text-white dark:text-brand-black py-4 uppercase tracking-widest font-bold hover:bg-brand-black dark:hover:bg-white transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
