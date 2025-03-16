import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({className, text, to}) => {
  return (
    <>
        <Link to={to} className={`bg-button px-4 py-3 ${className}`}>{text}</Link>
    </>
  )
}

export default Button