import React from 'react'

const Heading = ({tittle,className}) => {
  return (
   <h1  className={`font-inter text-[45px] font-bold  text-black text-center  ${className} `} >{tittle}</h1>
  )
}

export default Heading