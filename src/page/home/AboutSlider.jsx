import React from 'react'
import Container from '../../component/Container'
import Slider from "react-slick"
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import Heading from '../../component/Heading';



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 -mt-7 bg-[#F9C06A] py-3 px-4 cursor-pointer "
        onClick={onClick}>
            <FaLongArrowAltLeft />
      </div>
    );
}
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 -mt-7 bg-[#F9C06A] py-3 px-4 cursor-pointer z-10"
      onClick={onClick}>
        <FaLongArrowAltRight />
      </div>
    );
  }

const AboutSlider = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      let imageItem = [
        { 
            id: 1, 
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
            name: "Jonny Thomas",
            title: "Project Manager",
            image: "/holder1.jpg"
        },
        { 
            id: 2, 
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
            name: "Jonny Thomas",
            title: "Project Manager",
            image: "/holder1.jpg"
        },
        { 
            id: 3, 
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
            name: "Jonny Thomas",
            title: "Project Manager",
            image: "/holder1.jpg"
        },
      ]
    
  return (
    <div className='pt-20 text-center'>
      <Heading h1="Our coffee perfection feedback" p="Our customers has amazing things to say about us" classLink="mb-11" />
          <Container className="!max-w-[980px] mx-auto">
              <Slider {...settings} className=''>
                  {imageItem.map((item)=>(
                    <div className='h-[580px]'>
                      <div key={item.id} className='h-[524px] bg-[#FFF9F1] border-[1px] border-[#F9C06A] relative outline-none'>
                          <span className='block text-[120px] mt-5 ml-4'><RiDoubleQuotesL/></span>
                          <div className='w-[780px] mx-auto flex flex-col justify-center items-center text-center'>
                              <p className='text-lg mb-7 leading-9'>{item.desc}</p>
                              <h1 className='text-3xl font-bold'>{item.name}</h1>
                              <h3 className='text-xl mb-1 '>{item.title}</h3>
                          </div>
                          <img src={item.image} className='absolute top-full left-1/2 -translate-1/2 ' />
                      </div>
                    </div>
                      
                  ))}
              </Slider>
          </Container>
    </div>
  )
}

export default AboutSlider