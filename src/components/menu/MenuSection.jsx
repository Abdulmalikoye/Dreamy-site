import React, { useState } from "react";

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL CATEGORIES");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category Navigation */}
      <nav className="mb-12">
        <ul className="flex flex-wrap justify-center gap-8 text-gray-600">
          {[
            "ALL CATEGORIES",
            "APPETIZERS",
            "MAIN DISHES",
            "DESSERTS",
            "BEVERAGES",
            "CHEF'S SPECIAL",
          ].map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`pb-2 border-b-2 transition-colors ${
                  selectedCategory === category
                    ? "border-gray-800 text-gray-800"
                    : "border-transparent hover:text-gray-800"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mushroom Sandwich */}
        <div className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/api/placeholder/400/300"
                alt="Mushroom Sandwich"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-gray-500 mb-2">$30</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Mushroom Sandwich
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Made with juicy, savory portobello mushrooms and topped with
                  all your favorite fixings, this plant-based option is sure to
                  satisfy even the biggest meat-lovers.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Healthy Chicken Ciabatta */}
        <div className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/api/placeholder/400/300"
                alt="Healthy Chicken Ciabatta"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-gray-500 mb-2">$60</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Healthy Chicken Ciabatta
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This tasty sub is the perfect combination of a juicy burger
                  and a satisfying sub sandwich.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Falafel Poke Bowl */}
        <div className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/api/placeholder/400/300"
                alt="Falafel Poke Bowl"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-gray-500 mb-2">$80</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Falafel Poke Bowl
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Packed with crispy falafel, fresh veggies, and zesty sauces,
                  it's a vegetarian delight that's bursting with flavor and
                  nutrition.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chicken Poke Bowl */}
        <div className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/api/placeholder/400/300"
                alt="Chicken Poke Bowl"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-gray-500 mb-2">$20</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Chicken Poke Bowl
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Packed with tender, juicy chicken, fresh veggies, and
                  flavorful sauces, it's a delicious and healthy meal that will
                  leave you feeling full and satisfied.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tofu Poke Bowl */}
        <div className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/api/placeholder/400/300"
                alt="Tofu Poke Bowl"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-gray-500 mb-2">$10</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Tofu Poke Bowl
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Made with fresh tofu, fresh veggies, and delicious sauces,
                  it's the perfect meal for vegetarians and non-vegetarians
                  alike.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Savory Pancake */}
        <div className="group">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
              <img
                src="/api/placeholder/400/300"
                alt="Savory Pancake"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-gray-500 mb-2">$60</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Savory Pancake
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Succulent ribeye steak infused with aromatic truffle essence,
                  served with buttery mashed potatoes.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
