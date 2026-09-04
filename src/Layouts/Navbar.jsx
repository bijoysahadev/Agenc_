import React from 'react'
import  Container  from '../Componets/Container'
import Flex from '../Componets/Flex'
import Image from '../Componets/Image'
import Logo from '../assets/logo.png'
import ListItem from '../Componets/ListItem'
import Button from '../Componets/Button'
const Navbar = () => {
  return (
  <nav className={`bg-white py-8`} >
<Container>
<Flex className={`items-center justify-between`} >
   <div>
    <Image src={Logo} alt={Logo} />
   </div>
 <div>
  <ul>
   <Flex className={`items-center gap-x-5`} >
      <ListItem tittle={`Hone`} />
    <ListItem tittle={`About`} />
    <ListItem tittle={`Service`} />
    <ListItem tittle={`Career`} />
    <ListItem tittle={`Contact`} />
   </Flex>
  </ul>
 </div>
 <div>
  <Button tittle={`Contact `} className={`px-12 py-4 `  }   />
 </div>
</Flex>
</Container>
  </nav>
  )
}

export default Navbar