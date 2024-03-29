import React, {useEffect} from 'react'
import { NavBar } from '../Components/HomePageComponents/NavBar';
import HomePageMainBlock from '../Components/HomePageComponents/HomePageMainBlock';
import HomePageSecondPart from '../Components/HomePageComponents/HomePageSecondPart';
import NumbersCounter from '../Components/HomePageComponents/NumbersCounter';
import FourthBlocks from '../Components/HomePageComponents/FourthBlocks';
import VideoBlock from '../Components/HomePageComponents/VideoBlock';
import HighRise from '../Components/HomePageComponents/HighRise';
import BlogMain from '../Components/HomePageComponents/BlogMain';
import ContactMainPage from '../Components/HomePageComponents/ContactMainPage';
import Footer from '../Components/HomePageComponents/Footer';

const HomePage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
},[])
  return (
    <div>
    <NavBar />
    <HomePageMainBlock />
    <HomePageSecondPart/>
    <NumbersCounter/>
    <FourthBlocks/>
    <VideoBlock/>
    <HighRise/>
    <BlogMain/>
    <ContactMainPage/>
    <Footer/>
  </div>
  )
}

export default HomePage