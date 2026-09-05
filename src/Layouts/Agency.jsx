import  Container  from '../Componets/Container'
import React from 'react'
import Flex from '../Componets/Flex'
import Agency1 from '../assets/Agency.png'
import Image from '../Componets/Image'
import Heading from '../Componets/Heading'
import SubHeading from '../Componets/SubHeading'
import AgecyCard from '../Componets/AgecyCard'
import  AgencyCard1 from '../assets/AgencyCard1.png'
const Agency = () => {
  return (
 <section className={`py-[150px]`} >
    <Container>
        <Flex>
          <div className=' w-7/12' >
          <Heading className={`text-start w-[518px] `} tittle={`Why You Should Choose Agenc`} />
          <SubHeading  className={`w-[508px] !pt-20 pb-20 leading-[26px]`} text={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`} />
           <Flex className={`flex-wrap justify-center  `} >
             <AgecyCard tittle={`Innovative Ideas`}  text={`Because each project is different, we adapt to your business model.`} icon={AgencyCard1} />
            <AgecyCard className={`mt-8 ml-16`} tittle={`Innovative Ideas`}  text={`Because each project is different, we adapt to your business model.`} icon={AgencyCard1} />
            <AgecyCard className={`pt-10`} tittle={`Innovative Ideas`}  text={`Because each project is different, we adapt to your business model.`} icon={AgencyCard1} />
           </Flex>
          </div>
        
          <div className='  w-5/12' >
          <Image src={Agency1} alt={Agency1}  icon={Agency1} /></div>
      
        </Flex>
    </Container>
 </section>
  )
}

export default Agency