import React from "react";
import banner from "../../assets/banner.jpg"
import Image from "../../layer/Image";


const Banner = () => {
  return (
    <div className="relative w-full h-screen">

      <div className="absolute top-0 left-0 w-full h-full ">
        <Image src={banner} className="w-full h-full"/>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-center bg-black/50">
        <h1 className="text-5xl font-bold">Taste the Magic in Every Bite!</h1>
        <p className="text-xl mt-4">Experience authentic flavors from our kitchen.</p>
        <button className="mt-6 bg-red-500 px-6 py-3 rounded-lg text-white font-semibold hover:bg-red-600 transition">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
