import  Container  from '../Componets/Container'
import Flex from '../Componets/Flex'
import React from 'react'
import Heading from '../Componets/Heading'
import SubHeading from '../Componets/SubHeading'
import Button from '../Componets/Button'

const Contact = () => {
  return (
   <section className={`bg-[#F3F3F3]  py-[150px] `} >
    <Container>
        <Flex className={`items-center justify-around`} >
            <div  className='w-1/2 ' > 
            <Heading  className={`text-start py-5 `} tittle={`We Do design, Code & Development`} /> 
            <SubHeading  className={`w-[514px]  text-start font-normal text-[16px]`} text={`I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.`} />
            <SubHeading  className={` pt-5 w-[514px]  text-start font-normal text-[16px]`}  text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.`} />
            </div>
            <div className='w-1/2 bg-[#FFFFFF] rounded-[20px]  flex flex-col items-center justify-center ' >
            <div className='w-[536px]  bg-white rounded-[20px]  py-[61px] px-[43px] ' >

<h4 className={` pb-[30px] font-inter text-black text-[30px] font-bold  text-center`} >Get a free quote now</h4>
<form action="
">
    <label  className='text-base text-black font-medium font-inter' htmlFor="Name">Name
        <input id='Name' className=' mt-2 py-[19px] px-[23px] w-full border border-[#E8E8E8] rounded-lg placeholder:text-[#D0D0D0] placeholder:text-base ' type="text" placeholder='Enter Your Name' />
    </label>
    <label  className=' my-5 block text-base text-black font-medium font-inter' htmlFor="Email">Email
        <input id='Email' className=' mt-2 py-[19px] px-[23px] w-full border border-[#E8E8E8] rounded-lg placeholder:text-[#D0D0D0] placeholder:text-base ' type="text" placeholder='Enter your email' />
    </label>
    <label  className='text-base text-black font-medium font-inter' htmlFor="Phone">Phone
        <input id='Phone' className=' mt-2 py-[19px] px-[23px] w-full border border-[#E8E8E8] rounded-lg placeholder:text-[#D0D0D0] placeholder:text-base ' type="text" placeholder='Enter your phone number' />
    </label>
  
</form>
             <Button  className={ ` mt-5 py-[19px] px-[150px] `} tittle={`Get Pricing Now`} />
            </div>

            </div>
        </Flex>
    </Container>
   </section>
  )
}

export default Contact