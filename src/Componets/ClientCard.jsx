import React from 'react'
import Image from './Image'
import { IoIosStar } from 'react-icons/io'
import ClientICon from '../assets/clienticon.png'
const ClientCard = ({className,tittle,icon,text1,text2}) => {
  return (
       <div className='border border-red-500   py-14 px-14 flex flex-col  items-start justify-center gap-y-5 ' >
        <div>
          <Image src={ClientICon} />
        </div>
   <p className='font-inter w-[307px] text-secondary font-normal  ' >{tittle}</p>

  <ul className='flex items-center justify-start' >
    <li  className='text-[#F9BD2C]' ><IoIosStar /></li>
    <li  className='text-[#F9BD2C]' ><IoIosStar /></li>
    <li  className='text-[#F9BD2C]' ><IoIosStar /></li>
    <li  className='text-[#F9BD2C]' ><IoIosStar /></li>
    <li  className='text-[#F9BD2C]' ><IoIosStar /></li>
    <li  className='text-[#F9BD2C]' ><IoIosStar /></li>
    
    
  </ul>
   <div className='flex items-center gap-x-[20px]' >
    <div className='bg-blue-500 w-[47px] h-[47px]  rounded-full ' >
      <Image  className={`w-full h-full rounded-full`} src={icon} />
    </div>
    <div>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
   </div>
     </div>
  )
}

export default ClientCard