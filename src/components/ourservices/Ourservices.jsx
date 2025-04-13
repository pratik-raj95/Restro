import React from 'react';
import { FaMobileScreen } from "react-icons/fa6";
import { MdFastfood, MdOutlineFoodBank } from "react-icons/md";
import { LuTruck } from "react-icons/lu";

const Ourservices = () => {
  return (
    <div className='container mx-auto py-12'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-800'>Our Services</h1>
        <p className="text-gray-600 mt-2">We offer the best services for your convenience</p>
      </div>

      {/* Services Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        {/* Service 1 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <FaMobileScreen className="text-red-500 text-5xl mb-3" />
          <p className="text-lg font-semibold">Online Booking</p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <MdFastfood className="text-yellow-500 text-5xl mb-3" />
          <p className="text-lg font-semibold">Fast Food</p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <MdOutlineFoodBank className="text-green-500 text-5xl mb-3" />
          <p className="text-lg font-semibold">Healthy Food</p>
        </div>

        {/* Service 4 */}
        <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
          <LuTruck className="text-blue-500 text-5xl mb-3" />
          <p className="text-lg font-semibold">Fast Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;
