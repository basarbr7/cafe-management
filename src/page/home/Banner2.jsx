import React from 'react'
import Heading from '../../component/Heading'
import Container from '../../component/Container'
import Image from '../../layer/Image'
import Cup from "../../assets/coffee_cup.png"
import Blast from "../../assets/coffee_blast.png"
import Button from '../../layer/Button'

const Banner2 = () => {
  return (
    <div className='pt-20 relative'>
        <Container className="flex items-center justify-between gap-24 z-30">
            <div className='w-[585px]'>
                <Heading h1="Discover the best coffee" p="Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted." classLink="text-xl" />
                <Button className="mt-7" text="Learn more" />
            </div>
            <Image src={Cup} className="w-1/2"/>
        </Container>
        <Image src={Blast} className="absolute left-0 -bottom-20 -z-10"/>

    </div>
  )
}

export default Banner2