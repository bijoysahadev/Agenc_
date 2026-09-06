import React from 'react'
import ListItem from './Componets/ListItem'
import Button from './Componets/Button'
import Logo from './assets/logo.png'
import Image from './Componets/Image'
import Navbar from './Layouts/Navbar'
import  Container  from './Componets/Container'
import Flex from './Componets/Flex'
import Banner from './Layouts/Banner'
import Rating from './Layouts/Rating'
import SubHeading from './Componets/SubHeading'
import Service from './Layouts/Service'
import Work from './Layouts/Work'
import Agency from './Layouts/Agency'
import Client from './Layouts/Client'
import Contact from './Layouts/Contact'
const App = () => {
  return (
    <>
<Navbar/>
<Banner/>
<Rating/>
<Service/>
<Work/>
<Agency/>
<Client/>
<Contact/>
    </>
  )
}

export default App