import  Container  from '../Componets/Container'
import React from 'react'
import Heading from '../Componets/Heading'
import SubHeading from '../Componets/SubHeading'
import ServiceCard from '../Componets/ServiceCard'
import Flex from '../Componets/Flex'
import ServiceCard1 from '../assets/ServioceCard1.png'
import ServiceCard2 from '../assets/ServiceCard2.png'
import ServiceCard3 from '../assets/ServiceCard3.png'
import ServiceCard4 from '../assets/ServiceCard4.png'
import ServiceCard5 from '../assets/ServiceCard5.png'
import ServiceCard6 from '../assets/ServiceCard6.png'


const Service = () => {
  return (
    <section className={`py-[150px]`} >
        <Container>
            <Heading  className={`text-center`} tittle={`Our Provided Services`} />
            <SubHeading className={`w-[609px] !text-[16px] ! pb-[50px] font-normal  mx-auto text-center pt-5 `} text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.`}/>
          <Flex className={`flex-wrap items-center justify-around `} >
              <ServiceCard tittle={`Web Design`} text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`} icon={ServiceCard1}/>
            <ServiceCard tittle={`UI/UX Design`} text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`} icon={ServiceCard2}/>
            <ServiceCard tittle={`Web Development`} text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`} icon={ServiceCard3}/>
            <ServiceCard tittle={`Motion Graphics`} text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`} icon={ServiceCard4}/>
            <ServiceCard tittle={`3D Animation`} text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`} icon={ServiceCard5}/>
            <ServiceCard tittle={`Digital Marketing`} text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.`} icon={ServiceCard6}/>
          </Flex>
        </Container>
    </section>
  )
}

export default Service