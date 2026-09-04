import React from 'react'
import Image from '../Componets/Image'
import ServiceCard1 from '../assets/ServioceCard1.png'
import Heading from './Heading'
import ServiceCardHeading from './ServiceCardHeading'
import ServiceCardSubHeading from './ServiceCardSubHeading'
const ServiceCard = () => {
  return (
    <div className={`w-[424px] h-[428px] flex flex-col items-center justify-center  rounded-[20px] border  border-red-500 `} >
        <Image src={ServiceCard1} />
       
        <ServiceCardHeading  text={`Web Design`}/>
        <ServiceCardSubHeading text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`} />
    </div>
  )
}

export default ServiceCard

