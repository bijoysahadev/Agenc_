import React from 'react'

const RatingCard = ({tittle,text,className,className2}) => {
  return (
     <div>
            <h3 className={`text-[50px] font-inter text-dark font-bold ${className} `} >{tittle}</h3>
            <p className={`pb-20 text-[20px] font-inter text-secondary font-medium ${className2} `} >{text}</p>
        </div>
  )
}

export default RatingCard