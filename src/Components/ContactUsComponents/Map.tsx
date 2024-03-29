import React from 'react'
import styles from './ContactUsStyles/Map.module.css'

const Map = () => {
  return (
    <div className={styles.container}>
    
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171336.66545039104!2d35.01020165263432!3d47.85634096654014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc673dfa85bb03%3A0x7e675cd9074d3f4a!2sSaporischschja%2C%20Ukraine%2C%2069000!5e0!3m2!1sde!2sde!4v1710680932359!5m2!1sde!2sde"   loading="lazy" ></iframe>
   
    </div>
  )
}

export default Map