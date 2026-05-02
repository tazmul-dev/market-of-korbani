import { FaHeartbeat, FaLeaf, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const QurbaniTips = () => {
  const tips = [
    {
      id: 1,
      icon: <FaHeartbeat className="text-3xl text-emerald-600" />,
      title: "Check Animal Health",
      description:
        "Choose animals with bright eyes, healthy skin, and active movement. Avoid weak or sick livestock.",
    },
    {
      id: 2,
      icon: <FaCheckCircle className="text-3xl text-emerald-600" />,
      title: "Verify Proper Age",
      description:
        "Check the teeth carefully to confirm the animal meets the required age for Qurbani.",
    },
    {
      id: 3,
      icon: <FaLeaf className="text-3xl text-emerald-600" />,
      title: "Natural Feeding Matters",
      description:
        "Prefer animals fed with natural grass, grains, and clean water for better health and meat quality.",
    },
    {
      id: 4,
      icon: <FaShieldAlt className="text-3xl text-emerald-600" />,
      title: "Buy from Trusted Sellers",
      description:
        "Choose trusted farms or verified sellers to ensure healthy livestock and fair pricing.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-emerald-50">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Qurbani Tips
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Helpful tips to choose healthy and suitable animals for Qurbani with
            confidence and care.
          </p>
        </div>

        {/* tips grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl p-6 shadow-sm "
            >
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                {tip.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {tip.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QurbaniTips;