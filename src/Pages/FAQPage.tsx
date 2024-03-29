import React, {useEffect} from 'react'
import { NavBar } from '../Components/HomePageComponents/NavBar'
import Background from '../Components/AboutUsComponents/Background'
import FAQList from '../Components/FAQComponents/FAQList'
import HighRise from '../Components/HomePageComponents/HighRise'
import Footer from '../Components/HomePageComponents/Footer'

const FAQPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
},[])
  return (
    <div>
        <NavBar/>
        <Background page="FAQ"/>
        <FAQList/>
        <HighRise/>
        <Footer/>
    </div>
  )
}

export default FAQPage