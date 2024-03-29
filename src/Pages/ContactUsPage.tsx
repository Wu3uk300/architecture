import React, {useEffect} from 'react'
import { NavBar } from '../Components/HomePageComponents/NavBar'
import Background from '../Components/AboutUsComponents/Background'
import ContactMainPage from '../Components/HomePageComponents/ContactMainPage'
import Map from '../Components/ContactUsComponents/Map'
import Footer from '../Components/HomePageComponents/Footer'
import styles from '../Styl.module.css'

const ContactUsPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
    <div className={styles.container}>
      <NavBar/>
      <Background page='Contact Us'  />
      <ContactMainPage/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default ContactUsPage