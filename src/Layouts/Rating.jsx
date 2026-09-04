import Container from '../Componets/Container'
import React from 'react'
import Flex from '../Componets/Flex'
import RatingCard from '../Componets/RatingCard'
import Elcise1 from '../assets/Ellipse1.png'
import Elcise2 from '../assets/Ellipse2.png'
import Elcise3 from '../assets/Ellipse3.png'
import Elcise4 from '../assets/Ellipse4.png'
import Elcise5 from '../assets/Ellipse5.png'
import Image from '../Componets/Image'
import RatingProfile from '../Componets/RatingProfile'
import { IoStar } from "react-icons/io5";
const Rating = () => {
  return (
    <section className='' >
      <Container >
        <Flex className={`bg-[#F8F6FE] py-[86px] px-[50px] rounded-[20px] `} >
          <div className={`w-4/12 `} >
            <p className='text-2xl font-medium text-primnary font-inter'> Our Success</p>
            <h3 className=' w-[387px] pt-4 font-inter font-semibold text-[35px] text-black' >West cost Brand makers-Global Edge</h3>
          </div>
          <div className={`w-8/12 `} >
            <Flex className={`items-center justify-around`} >
              <div className=' relative flex flex-col items-center justify-center' >
                <RatingCard tittle={`200+`} text={`Customer Satisfied`} />
                <div className='' >

                  <RatingProfile className={`left-[0px]`} image={Elcise1} />
                  <RatingProfile className={`left-[20px]`} image={Elcise2} />
                  <RatingProfile className={`left-[40px]`} image={Elcise3} />
                  <RatingProfile className={`left-[60px]`} image={Elcise4} />
                  <RatingProfile className={`left-[80px]`} image={Elcise5} />





                </div>
              </div>
              <div className={`  relative flex flex-col items-center justify-center`} >
                <RatingCard tittle={`4.5`} text={`200+ Avg rating`} />
                <div className={`absolute  bottom-[40px] `} >
                  <ul>
                    <Flex className={`items-center justify-center gap-2`} >
                      <li className={`text-[#FFAC4A] text-lg `} ><IoStar /></li>
                      <li className={`text-[#FFAC4A] text-lg `} ><IoStar /></li>
                      <li className={`text-[#FFAC4A] text-lg `} ><IoStar /></li>

                      <li className={`text-[#FFAC4A] text-lg `} ><IoStar /></li>
                      <li className={`text-[#FFAC4A] text-lg `} ><IoStar /></li>
                    </Flex>
                  </ul>
                </div>
              </div>
              <div className={` relative flex flex-col items-center justify-center`} >
                <RatingCard tittle={`351+`} text={`Project Delivered`} />
                <a className='absolute left-0 bottom-[20px]'>See Work</a>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default Rating