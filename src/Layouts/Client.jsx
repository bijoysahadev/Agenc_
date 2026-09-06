import React from 'react'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import Heading from '../Componets/Heading'
import SubHeading from '../Componets/SubHeading'
import Image from '../Componets/Image'

import { IoIosStar } from "react-icons/io";
import ClientIcon1 from '../assets/clientIcon1.png'
import ClientIcon2 from '../assets/clientIcon2.png'
import ClientIcon3 from '../assets/clientIcon3.png'
import ClientCard from '../Componets/ClientCard'
const Client = () => {
  return (
  <section>
    <Container>
      <Heading tittle={`Some Client Reviews`} />
      <SubHeading  className={`text-center mx-auto w-[620px] text-secondary font-normal py-12`}  text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.`}/>
    <Flex className={`items-center justify-center`} >
     <ClientCard text1={`Awlad Hossain`}  text2={`UX Researcher`}  tittle={`I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.`} icon={ClientIcon1} />
     <ClientCard text1={'Eric Drake'}  text2={`Digital Marketor`}  tittle={`I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.`} icon={ClientIcon2} />
     <ClientCard text1={`Rosa Farmer`}  text2={`UI Designer`}  tittle={`I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.`} icon={ClientIcon3} />
    </Flex>
    </Container>
  </section>
  )
}

export default Client