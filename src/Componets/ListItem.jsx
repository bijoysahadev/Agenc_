import React from 'react'

const ListItem = ({tittle,className}) => {
  return (
    <>
       <li   className={`text-lg text-secondary font-inter font-normal cursor-pointer  hover:text-primnary   duration-300   ${className} `  } >{tittle}</li>
    </>
  )
}

export default ListItem