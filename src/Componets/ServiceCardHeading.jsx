import React from 'react'

const ServiceCardHeading = ({className,text}) => {
  return (
    <h1 className={`font-inter text-[45px] font-bold  text-black  ${className}`} >{text}</h1>
    
  )
}

export default ServiceCardHeading