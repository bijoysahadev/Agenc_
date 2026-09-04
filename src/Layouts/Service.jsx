import  Container  from '../Componets/Container'
import React from 'react'
import Heading from '../Componets/Heading'
import SubHeading from '../Componets/SubHeading'
import ServiceCard from '../Componets/ServiceCard'

const Service = () => {
  return (
    <section className={`py-[150px]`} >
        <Container>
            <Heading  className={`text-center`} tittle={`Our Provided Services`} />
            <SubHeading className={`w-[609px] mx-auto text-center pt-5 `} text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.`}/>
            <ServiceCard/>
        </Container>
    </section>
  )
}

export default Service