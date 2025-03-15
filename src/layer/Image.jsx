import React from 'react'

const Image = ({src, className}) => {
  return (
    <div className={`${className}`}>
        <img src={src} alt="image" />
    </div>
  )
}

export default Image