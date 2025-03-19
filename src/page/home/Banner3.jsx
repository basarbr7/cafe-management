import React from 'react'
import Image from '../../layer/Image';
import Container from '../../component/Container';
import Heading from '../../component/Heading';
import BlastImage from "../../assets/coffee_blast.png"
import Button from '../../layer/Button';


const Banner3 = () => {
    const items = [
        { name: "Supreme Beans", desc: "Beans that provides greate taste", image: "/coffee-beans1.png" },
        { name: "High Quality", desc: "We provide the highest quality", image: "/badge1.png" },
        { name: "Extraordinary ", desc: "Coffee like you have never tasted", image: "/coffee-cup1.png" },
        { name: "Affordable Price ", desc: "Our Coffee prices are easy to afford", image: "/best-price1.png" },
        
      ];

  return (
    <div className='text-center mt-20 relative'>
        <Image src={BlastImage} className="absolute right-0 -top-40 rotate-y-180"/>
        <Container>
            <Heading h1="Why are we different?" p="We don’t just make your coffee, we make your day!" classLink="mb-8"/>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                {items.map((item, index)=>(
                    <div key={index} className='bg-[#FFF9F1] hover:bg-[#FFEED8] flex flex-col items-center justify-center p-9 transition-all duration-500 '>
                        <Image src={item.image} className="object-cover mb-6"/>
                        <h1 className='text-[26px] mb-2 font-bold'>{item.name}</h1>
                        <p className='text-xl'>{item.desc}</p>
                    </div>
                ))}
            </div>
            <p className='pt-8 text-xl'>Great ideas start with great coffee, Lets help you achieve that</p>
            <h1 className='text-3xl font-bold mb-6'>Get started today.</h1>
            <Button className="px-5" text="Join Us" />
        </Container>
    </div>
  )
}

export default Banner3