import React from 'react'

const Heading = ({h1, p, className, classLink}) => {
  return (
    <div>
        <h2 className={`text-5xl font-bold mb-5 ${className}`}>{h1}</h2>
        <p className={` ${classLink}`}>{p}</p>
    </div>
  )
}

export default Heading