 import Container  from '../Componets/Container'
import React from 'react'
import Flex from '../Componets/Flex'
 import Image from '../Componets/Image'
 import Image1 from '../assets/Image1.png'
 import Image2 from '../assets/Image2.png'
 import Image3 from '../assets/Image3.png'
 import Image4 from '../assets/Image4.png'
 import Image5 from '../assets/Image5.png'
 import Image6 from '../assets/Image6.png'
 import Banner1 from '../assets/Banner-Image.png'
import Heading from '../Componets/Heading'
import Button from '../Componets/Button'
 const Banner = () => {
   return (
    <section className={`pt-8 pb-[150px]`} >
        <Container>
           <Flex className={`items-center justify-around`} >
            <div className='w-1/2' >
          <h1 className={` leading-[120%] font-inter text-[75px] font-bold  text-black `} >We Help brands with high quality services</h1>
          <p className={` w-[604px] py-10 leading-7 font-inter font-normal text-secondary `} > There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
          <Button tittle={`Get Started`} />
            </div>
            <div className= 'w-1/2 '     >
            <Image src={Banner1}  alt={`Banner Image`} />
          
            </div>
           </Flex>
        </Container>
    </section>
   )
 }
 
 export default Banner