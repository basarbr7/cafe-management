import React from 'react'
import { Link } from 'react-router-dom'

let menu = ["Home", "Menu", "Orders", "Reservations", "Contact"]  

const Menu = () => {
  return (
    <div className='flex items-center '>
        <ul className='flex gap-10 items-center text-lg'>
            {menu.map((item,index)=>(
                <li key={index}><Link>{item}</Link></li> 
            ))}
        </ul>

       
    </div>
  )
}

export default Menu