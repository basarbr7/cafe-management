import React from 'react'

const Heading = ({h1, p, className, classLink}) => {
  return (
    <>
        <h2 className={`text-5xl font-bold mb-5 ${className}`}>{h1}</h2>
        <p className={`text-xl ${classLink}`}>{p}</p>
    </>
  )
}

export default Heading