import React from 'react';
import Bannerimg from '../../assets/2.png';

const Banner = () => {
  return (
    <>
    <div className='container py-14'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/*images section */}
            <div className='flex justify-center items-center'>
                <img src={Bannerimg} alt=''/>
            </div>
            {/*text section*/}
            <div>
                <h1 className="text-3xl font-semibold"> Food is always good</h1>
                <p className='py-4 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus minus ipsam consectetur porro placeat, officiis, labore exercitationem, beatae quis nesciunt. Suscipit nisi quis ea pariatur porro? Dolorem, ex alias.</p>
            </div>
        </div>
      
      </div>
    
    </>
  )
}

export default Banner;
