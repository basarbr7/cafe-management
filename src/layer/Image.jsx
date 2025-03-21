import React from 'react'

const Image = ({src, className}) => {
  return (
        <img src={src} alt="image" className={`${className}`} />
  )
}

export default Image