import React from 'react'
import Image from './Image'
const RatingProfile = ({className,image}) => {
  return (
    <div className= {`w-[35px] h-[35px] absolute  bottom-[40px] left-0 bg-slate-600 rounded-full  ${className} `} >
                  <Image src={image} />
                </div>
  )
}

export default RatingProfile