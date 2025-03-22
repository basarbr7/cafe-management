import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {

    let footerItem= [
        {
            title: "About",
            links: ["Menu",  "Features", "News & Blogs", "Help & Supports"]
        },
        {
            title: "Company",
            links: ["How we work",  "Terms of service", "Pricing", "FAQ"]
        }
    ]
  return (
    <div className="relative bg-cover bg-no-repeat" style={{backgroundImage: "url('/fotter_image.png')" }}>
        <div className='overlay w-full h-full absolute inset-0  bg-[#442808] opacity-80'></div>
        <Container className="relative pt-[162px] pb-[72px] text-white grid grid-cols-12 gap-[66px]">
            <div className='col-span-4'>
                <h1 className='font-Clicker text-[54px] mb-5'>Bean Scene</h1>
                <p className='mb-5 max-w-[380px] text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='flex gap-5 text-xl'>
                    <Link to='/'><FaFacebook /></Link>
                    <Link to='/'><AiFillInstagram /></Link>
                    <Link to='/'><FaYoutube /></Link>
                    <Link to='/'><FaTwitter /></Link>
                </div>
            </div>
            <div className='col-span-4 flex gap-[66px]'>
                {footerItem.map((item, index)=>(
                    <div key={index}>
                        <h1 className='text-2xl font-bold mb-[55px]'>{item.title}</h1>
                        {item.links.map((item, index)=>(
                            <ul key={index}>
                                <li className='text-lg leading-[42px]'>{item}</li>
                            </ul>
                        ))}
                       
                    </div>
                ))}
            </div>
            <div className='col-span-4'>
                <h1 className='text-2xl font-bold mb-[55px]'>Contact Us</h1>
                <p className='mb-[22px]'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
                <ul className='text-lg'>
                    <li className='mb-4'><Link to="tel: +1 202-918-2132" > +1 202-918-2132</Link></li>
                    <li className='mb-4'><Link to="mailto: beanscene@mail.com" > beanscene@mail.com</Link></li>
                    <li><Link to="/" > www.beanscene.com</Link></li>

                </ul>
            </div>
        </Container>
        
    </div>
  )
}

export default Footer