

import Image from 'next/image';
import { FaLeaf, FaShieldAlt, FaStar, FaWeightHanging } from 'react-icons/fa';

const Breed = () => {
     const breeds = [
    {
      id: 1,
      name: "Sahiwal",
      type: "Cow Breed",
      image: "https://i.ibb.co.com/BV4xBXdj/images2.jpg",
      icon: <FaWeightHanging className="text-emerald-600 text-lg" />,
      description:
        "Known for strong body structure, healthy meat quality, and premium Qurbani value.",
      feature: "Heavy Weight",
    },
    {
      id: 2,
      name: "Black Bengal",
      type: "Goat Breed",
      image: "https://i.ibb.co.com/0pR39rwy/black-goat.jpg",
      icon: <FaLeaf className="text-emerald-600 text-lg" />,
      description:
        "Popular for tender meat, natural growth, and excellent suitability for family Qurbani.",
      feature: "Tender Meat",
    },
    {
      id: 3,
      name: "Brahman Cross",
      type: "Cow Breed",
      image: "https://i.ibb.co.com/fGTdfk1n/card2.webp",
      icon: <FaShieldAlt className="text-emerald-600 text-lg" />,
      description:
        "Highly valued for strength, premium size, and trusted large-scale Qurbani demand.",
      feature: "Premium Size",
    },
  ];
    return (
       <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Top Breeds
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore the most trusted and popular livestock breeds preferred for
            healthy and quality Qurbani.
          </p>
        </div>

        {/* breeds grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breeds.map((breed, index) => (
            <div
              key={breed.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm `}
            >
              {/* image */}
              <div className="relative">
                <Image
                width={300}
                height={300}
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-60 object-cover"
                />
                <span className="absolute top-4 left-4 bg-white/90 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {breed.type}
                </span>
              </div>

              {/* content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {breed.icon}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {breed.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {breed.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 bg-emerald-50 px-3 py-2 rounded-full">
                    <FaStar className="text-amber-500" />
                    {breed.feature}
                  </span>

                  <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Breed;