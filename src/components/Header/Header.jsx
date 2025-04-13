import React from 'react';
import img1 from '../../assets/1.png';

const Header = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Text section */}
      <div>
        <h1 className="text-5xl font-bold">Best food waiting for your belly</h1>
        <p className="font-semibold mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti earum animi tenetur esse provident fugit aspernatur! Neque dolorem ullam sequi necessitatibus accusamus tempora saepe dolor quos aliquam vitae! Ut voluptate?
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded">Food Menu</button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded">Book Table</button>
        </div>
      </div>

      {/* Image section */}
      <div>
        <img src={img1} alt="Delicious food" className="w-full" />
      </div>
    </div>
  );
};

export default Header;
