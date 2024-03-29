import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../Components/HomePageComponents/NavBar'
import Background from '../Components/AboutUsComponents/Background'
import PortfilioRow from '../Components/PortfolioComponents/PortfilioRow'

const PortfolioPage = () => {
    const {size} =useParams()

    useEffect(()=>{
     
      window.scrollTo(0, 0)
  },[])
  return (
  <div>
    <NavBar/>
    <Background page={size==="two"?"Two Columns":"Three Columns"}/> 
    <PortfilioRow size={`${size}`}/>
  </div>
  )
}

export default PortfolioPage