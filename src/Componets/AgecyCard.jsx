import React from 'react'
import ServiceCardHeading from './ServiceCardHeading'
import ServiceCardSubHeading from './ServiceCardSubHeading'
import Image from './Image'
const AgecyCard = ({tittle,className,text,icon}) => {
  return (
   <div className={`w-[344px] h-[176px] flex flex-col items-start justify-center    ${className} `} >
        <Image src={icon} /> 
       
        <ServiceCardHeading  className={` text-start  !text-[25px]`} text={tittle}/>
        <ServiceCardSubHeading text={text}  className={`!text-start  `} />
    </div>
  )
}

export default AgecyCard