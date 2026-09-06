import  Container  from '../Componets/Container'
import Flex from '../Componets/Flex'
import React from 'react'
import Heading from '../Componets/Heading'
import SubHeading from '../Componets/SubHeading'

const Contact = () => {
  return (
   <section className={`bg-[#F3F3F3]  py-[150px] `} >
    <Container>
        <Flex className={`items-center justify-around`} >
            <div  className='w-1/2 ' > 
            <Heading  className={`text-start`} tittle={`We Do design, Code & Development`} /> 
            <SubHeading  className={`w-[514px]  text-start font-normal text-[16px]`} text={`I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.`} />
            <SubHeading className={`w-[514px]  text-start font-normal text-[16px]`}  text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.`} />
            </div>
            <div className='w-1/2 h-[500px] bg-[#FFFFFF]' ></div>
        </Flex>
    </Container>
   </section>
  )
}

export default Contact