import React from 'react'

const SubHeading = ({className,text}) => {
  return (
   <p  className={`font-inter text-secondary !text-[25px] font-bold ${className} `}>{text}</p>
  )
}

export default SubHeading