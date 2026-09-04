import React from 'react'

const ServiceCardSubHeading = ({className,text}) => {
  return (
   <p className={`w-[326px] pt-10 pb-5 text-center font-inter text-secondary text-4 font-normal ${className} `} >{text}</p>
  )
}

export default ServiceCardSubHeading