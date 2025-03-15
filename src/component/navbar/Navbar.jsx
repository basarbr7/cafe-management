import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Menu from './Menu'
import User from './User'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white p-4 shadow-lg'>
        <Container className='flex items-center justify-between'>
            <Logo/>
            <Menu/>
            <User/>
        </Container>
    </nav>
  )
}

export default Navbar