import { useState } from 'react';
import { featuredProducts, categories } from '../data/mockData';

export default function Featured() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? featuredProducts
    : featuredProducts.filter(p => p.category === activeCategory);

  return (
    <section id="collection" className="py-24 bg-brand-beige dark:bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-maroon dark:text-brand-gold mb-4">Curated Collection</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-8"></div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm uppercase tracking-wider font-semibold border transition-colors ${
                  activeCategory === cat
                    ? 'bg-brand-maroon border-brand-maroon text-white dark:bg-brand-gold dark:border-brand-gold dark:text-brand-black'
                    : 'border-brand-black text-brand-black hover:bg-brand-black hover:text-white dark:border-brand-beige dark:text-brand-beige dark:hover:bg-brand-beige dark:hover:text-brand-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer bg-white dark:bg-brand-darkGray shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden relative" style={{ height: '400px' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  style={{ height: '400px', display: 'block' }}
                  className="w-full object-cover transform transition-transform duration-700 group-hover:scale-105 h-full"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-brand-black px-6 py-3 uppercase text-sm tracking-widest font-semibold hover:bg-brand-gold transition-colors">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">{product.category}</p>
                <h3 className="font-serif font-semibold text-lg dark:text-brand-beige mb-1">{product.name}</h3>
                <p className="text-brand-maroon dark:text-brand-gold font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
