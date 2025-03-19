import React from 'react'
import Image from '../../layer/Image'
import Coffee from "/coffee-bean.jpg"
import Bean from "/bean.png"
import Cup from "/cup.png"
import Container from '../../component/Container'
import Heading from '../../component/Heading'
import Button from '../../layer/Button'


const Banner4 = () => {
  return (
    <div className='pt-20 '>
        <div className='relative w-full h-[574px]'>
            <Image src={Coffee} className="object-cover absolute top-0 left-0 w-full h-full" />
            
            <div className='absolute top-0 left-0 w-full h-full bg-[rgba(96,55,9,0.8)]'>
                <Image src={Bean} className="object-cover absolute bottom-0 right-0 w-auto h-full"/>
                <Container className="text-white flex justify-between items-center">
                    <div className='py-[135px'>
                        <Heading h1="Get a chance to have an Amazing morning" p="We are giving you are one time opportunity to experience a better life with coffee." className="max-w-[575px] mb-6 " classLink="max-w-[412px] text-xl mb-6" />
                        <Button text="Order Now" className="opacity-100" />
                    </div>
                    <Image src={Cup} className="object-cover mr-20 z-40 py-10" />
                </Container>
            </div>


           
        </div>
    </div>
  )
}

export default Banner4