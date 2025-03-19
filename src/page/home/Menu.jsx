import React from 'react'
import Container from '../../component/Container';
import Heading from '../../component/Heading';
import { Link } from 'react-router-dom';
import Button from '../../layer/Button';

const Menu = () => {
    const items = [
      { name: "Espresso", coffee: "Coffee: 50%", milk:"Milk:50%", price: "$3", image: "/expre.jpg" },
      { name: "Cappuccino", coffee: "Coffee: 50%", milk:"Milk:50%", price: "$4", image: "/capp.jpg" },
      { name: "Latte", coffee: "Coffee: 50%", milk:"Milk:50%", price: "$4.5", image: "/lattle.jpg" },
      { name: "Macchiato", coffee: "Coffee: 50%", milk:"Milk:50%", price: "$4.5", image: "/macc.jpg" },
    ];
  
    return (
      <div className="pt-20 text-center">
       <Container>
        <Heading h1="Our Menu" p="Explore all flavours of coffee with us. There is always a new cup worth experiencing" classLink="mb-10 text-xl"/>
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
              <p className=''>{item.coffee} | {item.milk}</p>
              <p className="text-lg text-gray-600">{item.price}</p>
              <Button className="mt-2" text="Order Now" />
            </div>
          ))}
        </div>
       </Container>
      </div>
    );
  };
  
  export default Menu;
  