import React, {useEffect} from 'react'
import { NavBar } from '../Components/HomePageComponents/NavBar'
import Background from '../Components/AboutUsComponents/Background'
import TeamBlocks from '../Components/TeamComponents/TeamBlocks'
import Footer from '../Components/HomePageComponents/Footer'


const TeamPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <div>
    <NavBar/>
    <Background page='Team'/>
    <TeamBlocks/>
    <Footer/>
    </div>
  )
}

export default TeamPage