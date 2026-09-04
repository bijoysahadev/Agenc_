import React from 'react'

const Button = ({className,tittle}) => {
  return (
 <>
     <button className={`tex-xl text-white bg-primnary font-inter font-semibold  py-4 px-11 rounded-xl  border border-transparent hover:bg-transparent hover:text-primnary hover:border hover:border-primnary duration-300  ${className} `  } > {tittle}</button>


 </>
  )
}

export default Button