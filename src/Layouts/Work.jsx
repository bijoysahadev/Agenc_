import Container from '../Componets/Container'
import React from 'react'
import Flex from '../Componets/Flex'
import Heading from '../Componets/Heading'
import SubHeading from '../Componets/SubHeading'
import WorkCard2 from '../assets/WorkCard2.png';
import WorkCard3 from '../assets/WorkCard3.png';
import WorkCard4 from '../assets/WorkCard4.png';
import WorkCard5 from '../assets/WorkCard5.png';
import WorkCard6 from '../assets/WorkCard6.png';
import WorkCard1 from '../assets/WorkCard1.png';
import WorkCard from '../Componets/WorkCard'

const Work = () => {
    return (
        <section className={`bg-[#F3F3F3] py-[150px] `} >
            <Container>
                <Heading tittle={`Our Recent Work`} />
                <SubHeading className={`!text-[16px] font-normal text-center w-[602px] mx-auto `} text={`There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.`} />
              
                    <ul className='w-full py-10' >
                   <Flex className={`items-center justify-around `} >
                         <li className={`font-inter text-[20px text-primnary`} >All</li>
                        <li className={`font-inter text-[20px text-secondary`} >Mobile Design</li>
                        <li className={`font-inter text-[20px text-secondary`} >Web design</li>
                        <li className={`font-inter text-[20px text-secondary`} >Branding</li>
                        <li className={`font-inter text-[20px text-secondary`} >Illustration</li>
                        <li className={`font-inter text-[20px text-secondary`} >Digital Marketisecondary</li>

                   </Flex>
                    </ul>
                  <Flex className={`flex-wrap  items-center justify-around  gap-6`} >
                      <WorkCard tittle={`Task Management App`}  WorkIcon={WorkCard1}  text={`This is a task management application that can help you be more `} />
                      <WorkCard tittle={`Saas Landing Page Design`}  WorkIcon={WorkCard2}  text={`This is a task management application that can help you be more `} />
                      <WorkCard tittle={`App Design`}  WorkIcon={WorkCard3}  text={`This is a task management application that can help you be more `} />
                      <WorkCard tittle={`Landing Page Design`}  WorkIcon={WorkCard4}  text={`This is a task management application that can help you be more `} />
                      <WorkCard tittle={`Dashboard Design`}  WorkIcon={WorkCard5}  text={`This is a task management application that can help you be more `} />
                      <WorkCard tittle={`Web App Design`}  WorkIcon={WorkCard6}  text={`This is a task management application that can help you be more `} />
                     
                     
                  </Flex>
               
            </Container>
        </section>
    )
}

export default Work