import React from 'react'
import WorkCard1 from '../assets/WorkCard1.png'
import Heading from './Heading'
import Image from '../Componets/Image'
import ServiceCardHeading from './ServiceCardHeading'
import SubHeading from './SubHeading'
const WorkCard = ({WorkIcon,tittle,text}) => {
  return (
    <div className={`w-[424px] h-auto rounded-[20px] flex flex-col items-center justify-center bg-[#FFFFFF] `} >
        <div className={`w-[420px] h-[300px] rounded-[20px] `} >
            <Image src={WorkIcon} />
        </div>
       
       <Heading    tittle={tittle} className={`!text-[20px] py-[30px] `} />
       <SubHeading   className={`w-[340px]   pb-[30px] text-center mx-auto `} text={text}/>
    </div>
  )
}

export default WorkCard