import React from 'react'
import Container from '../Componets/Container'
import Flex from '../Componets/Flex'
import Image from '../Componets/Image'
import Logo from '..//assets/Logo.png'
import SubHeading from '../Componets/SubHeading'
import Heading from '../Componets/Heading'
import ListItem from '../Componets/ListItem'
import FooterLi from '../Componets/FooterLi'
const Footer = () => {
  return (
  <footer className='bg-white py-[150px]' >
<Container>
<Flex className={`items-center justify-around  gap-3 pb-4 `} >
<div className='w-14/12 ' >
<Image src={Logo} />
<SubHeading  className={`w-[356px] py-[30px] font-normal text-[16px] `} text={`I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.`} />
</div>
<div className='w-2/12  ' > 
<FooterLi text={`About`} />
  <FooterLi tittle={`About Us`} />
  <FooterLi tittle={`Features`} />
  <FooterLi tittle={`News`} />
  <FooterLi tittle={`Career`} />

</div>
<div className='w-2/12 ' >
<FooterLi text={`Company`} />
  <FooterLi tittle={`Our Team`} />
  <FooterLi tittle={`Partner With Us`} />
  <FooterLi tittle={`FAQ`} />
  <FooterLi tittle={`Blog`} />
<FooterLi/></div>
<div className='w-2/12 ' >
<FooterLi text={`Support`} />
  <FooterLi tittle={`About`} />
  <FooterLi tittle={`Support Center`} />
  <FooterLi tittle={`Feedback`} />
  <FooterLi tittle={`Contact Us`} />
  <FooterLi tittle={`Accesbility`} />
</div>
<div className='w-2/12  text-end' >
<FooterLi text={`Get in touch`}  />
<FooterLi tittle={`info@gmail.com`} />
<FooterLi tittle={`+88 0121 0212`} />
</div>

</Flex>
<div className='text-center border-t broder-[#E8E8E8] pb-5 pt-8 '>
    <p className='text-[#D0D0D0] font-inter font-normal text-[16px]   ' >All credit goes to @agence.com</p>
</div>
</Container>
    
  </footer>
  )
}

export default Footer