// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import GetInTouchButton from './GetInTouchBtn';
import Link from 'next/link';

const HeroSection: React.FC=() => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-gray-800 md:p-20  py-20 px-4">
      <div className="flex-1 mb-8 md:mb-0 md:mr-10" id='hero'>
        <h2 className="text-4xl font-bold">
          Elevate Your Startup with Expert Software Design & Development
        </h2>
        <p className="mb-6 text-lg">
        At Dadako, we bring startup ideas to life through innovative software solutions.        </p>
        <div className="flex flex-wrap gap-4">
          <GetInTouchButton />
          <Link href="/Soon" >
            <button className="bg-transparent hover:bg-teal-900 text-teal-900 font-semibold hover:text-white py-2 px-4 border border-teal-900 hover:border-transparent rounded">
              View Our Work
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        {/* Example: Using a placeholder image. Replace with your actual**/}
         <Image src="/images/hero1.webp"
          alt="Innovation" width={500}
          height={300} />
        
        {/*<video width="500" height="500" autoPlay muted loop>
          <source src="/images/hero1.webp_zoom-in.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>**/}

      </div>
    </section>
  );
};

export default HeroSection;
