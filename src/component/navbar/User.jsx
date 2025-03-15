import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleLight } from "react-icons/pi";


let obj={
  name: "rahim"
}
console.log(obj.__proto__);



const User = () => {
  return (
    <div className="flex items-center space-x-7 text-lg">
        <Link to="/cart" className="relative ">
            <PiShoppingCartSimpleLight className='text-3xl transform scale-x-[-1] '/>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">0</span>
        </Link>
        <Link to="/login" className="px-3 py-1 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition-all duration-300 ">
        Login
        </Link>
    </div>
  )
}

export default User