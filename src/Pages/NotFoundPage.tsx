import React from 'react'
import pic from '../backgroundNOTFOUND.jpg'
import styles from '../Components/FAQComponents/Styles/FAQList.module.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className={styles.backgroundNotFound} style={{backgroundImage: `url(${pic})`}}>
     <div> 
        <p className={styles.bigText}>PAGE NOT FOUND</p>
        <p className={styles.message}>Oops, Something Went Wrong. The Page You’re Looking For Either Doesn’t Exist <br /> Or Has Been Moved.</p>
        <Link className={styles.linktoMain} to="/">Back to homepage</Link>
     </div>
    </div>
  )
}

export default NotFoundPage