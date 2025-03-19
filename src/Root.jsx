import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/navbar/Navbar'

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <footer className='pt-20'>this is footer</footer>
    </div>
  )
}

export default Root