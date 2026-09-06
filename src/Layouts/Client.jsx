import React from 'react'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import Heading from '../Componets/Heading'
import SubHeading from '../Componets/SubHeading'
const Client = () => {
  return (
  <section>
    <Container>
      <Heading tittle={`Some Client Reviews`} />
      <SubHeading  text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.`}/>
 <Flex>
   <div className='w-1/2 h-[400px] bg-red-500' ></div>
  <div  className='w-1/2 h-[400px] bg-slate-600 ' >  </div>
 </Flex>
    </Container>
  </section>
  )
}

export default Client