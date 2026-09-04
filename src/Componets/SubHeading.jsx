import React from 'react'

const SubHeading = ({className,text}) => {
  return (
   <p  className={`font-inter text-secondary text-4 font-normal ${className} `}>{text}</p>
  )
}

export default SubHeading