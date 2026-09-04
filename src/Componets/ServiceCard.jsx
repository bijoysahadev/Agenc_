import React from 'react'
import Image from '../Componets/Image'
import ServiceCard1 from '../assets/ServioceCard1.png'
import Heading from './Heading'
import ServiceCardHeading from './ServiceCardHeading'
import ServiceCardSubHeading from './ServiceCardSubHeading'
const ServiceCard = ({tittle,text,icon}) => {
  return (
    <div className={`w-[400px] h-[428px] flex flex-col items-center justify-center   rounded-[20px] shadow-lg hover:scale-[1.07] duration-300   `} >
        <Image src={icon} />
       
        <ServiceCardHeading  className={`!text-[25px]`} text={tittle}/>
        <ServiceCardSubHeading text={text} />
    </div>
  )
}

export default ServiceCard

