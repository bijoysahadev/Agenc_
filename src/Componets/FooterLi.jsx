import React from 'react'
import ListItem from './ListItem'

const FooterLi = ({className,text,tittle}) => {
  return (
    <div>
         <ul className={`flex flex-col items-start justify-start gap-2 ${className}`} >
    
<strong className='inline-block text-xl' >{text}</strong>
    <ListItem  className={`text-base hover:text-secondary`} tittle={tittle} />
   
   
   </ul>
    </div>
  )
}

export default FooterLi