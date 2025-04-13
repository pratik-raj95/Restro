import React from "react";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";

const foodData = [
  {
    image: img3,
    rating: "⭐⭐⭐⭐⭐",
    price: "$10.99",
    name: "Delicious Burger",
  },
  {
    image: img4,
    rating: "⭐⭐⭐⭐⭐",
    price: "$12.99",
    name: "Cheesy Pizza",
  },
  {
    image: img5,
    rating: "⭐⭐⭐⭐",
    price: "$8.99",
    name: "Tasty Pasta",
  },
];

const Toplist = () => {
  return (
    <div className="container mx-auto py-14 px-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-serif text-gray-800">Top Picks</h1>
        <p className="text-gray-600 text-lg">Our most loved dishes</p>
      </div>

      {/* Card Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {foodData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200"
          >
            {/* Image */}
            <div className="w-full h-48 flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-auto object-contain rounded-t-lg"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-red-500 text-lg">{item.rating}</p>
              <p className="text-gray-700 font-bold mt-2">{item.price}</p>

              {/* Order Button */}
              <button className="mt-4 bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition-all">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toplist;
