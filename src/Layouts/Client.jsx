import React from 'react'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import Heading from '../Componets/Heading'
import SubHeading from '../Componets/SubHeading'
import Image from '../Componets/Image'
import ClientICon from '../assets/clienticon.png'
const Client = () => {
  return (
  <section>
    <Container>
      <Heading tittle={`Some Client Reviews`} />
      <SubHeading  className={`text-center mx-auto w-[620px] text-secondary font-normal py-12`}  text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.`}/>
    <Flex className={`items-center justify-center`} >
       <div className='w-[500px] h-[500px] bg-red-500  flex flex-col  items-center justify-center gap-y-5 ' >
        <div>
          <Image src={ClientICon} />
        </div>
   <p>I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.</p>
     </div>
    </Flex>
    </Container>
  </section>
  )
}

export default Client