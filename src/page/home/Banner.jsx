import React from "react";
import banner from "../../assets/banner.jpg"
import Image from "../../layer/Image";
import Container from "../../component/Container";
import Button from "../../layer/Button";


const Banner = () => {
  return (
    <div className="relative w-full h-screen">

      <div className="absolute top-0 left-0 w-full h-full ">
        <Image src={banner} className="w-full h-full"/>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full  bg-black/50">
        <Container className="text-white pt-28">
          <p className="text-xl font-bold">We've got your morning covered with </p>
          <h1 className="text-[180px] font-Clicker">Coffee</h1>
          <p className="text-xl w-[527px]">It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
        <Button to="/" className="mt-5  px-5 py-3 text-black rounded-sm border-[1px] border-button hover:bg-transparent hover:text-white transition-all duration-700" text="Order Now" />
        </Container>
      </div>
    </div>
  );
};

export default Banner;
