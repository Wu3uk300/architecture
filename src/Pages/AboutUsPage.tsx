import React, { useEffect } from 'react'
import { NavBar } from '../Components/HomePageComponents/NavBar'
import Background from '../Components/AboutUsComponents/Background'
import HomePageSecondPart from '../Components/HomePageComponents/HomePageSecondPart'
import FourthBlocks from '../Components/HomePageComponents/FourthBlocks'
import Footer from '../Components/HomePageComponents/Footer'

const AboutUsPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <div>
        <NavBar/>
        <Background page='About Us'  />
        <HomePageSecondPart/>
        <FourthBlocks/>
        <Footer/>
    </div>
  )
}

export default AboutUsPage