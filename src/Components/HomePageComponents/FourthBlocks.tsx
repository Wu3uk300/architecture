import React, { FC } from 'react'
import styles from "./HomePageStyles/FourthBlocks.module.css"
import pic1 from "./Images/FourthBlock1.jpg"
import pic2 from "./Images/FourthBlock2.jpg"
import pic3 from "./Images/FourthBlock3.jpg"
import pic4 from "./Images/FourthBlock4.jpg"



const FourthBlocks:FC = () => {
  return (
   <div className={styles.mainContainer}>
     <div className={styles.container}>
      <div className={styles.firstRow}>

        <div className={styles.infoBlock}>
        <img style={{width:650, height:750}} src={pic1} alt="" />
        <p className={styles.bigText}>Furniture Style</p>
        <p className={styles.smallText}>Commercial</p>
        </div>
        
        <div className={styles.infoBlockSmall}>
        <img style={{width:650, height:450}} src={pic2} alt="" />
        <p className={styles.bigText}>Structure</p>
        <p className={styles.smallText}>Office Planning</p>
        </div>
        

      </div>
      <div className={styles.secondRow}>
        
      <div className={styles.infoBlock}>
        <img style={{width:650, height:450}} src={pic3} alt="" />
        <p className={styles.bigText}>Glamorous</p>
        <p className={styles.smallText}>Luxurious</p>
        </div>


        <div className={styles.infoBlock}>
        <img style={{width:650, height:750}} src={pic4} alt="" />
        <p className={styles.bigText}>Furniture Style</p>
        <p className={styles.smallText}>Indoot Idea’s</p>
        </div>

      </div>
    </div>
   </div>
  )
}

export default FourthBlocks