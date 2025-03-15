import React from 'react'
import { Link } from 'react-router-dom'
import { SiCoffeescript } from "react-icons/si";

const Logo = () => {
  return (
    <div className=' flex items-center justify-center '>
        <Link className='flex gap-2 items-center justify-center text-2xl font-bold'>
        <SiCoffeescript />
          Cafe
        </Link>
    </div>
  )
}

export default Logo