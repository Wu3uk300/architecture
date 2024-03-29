import React, { FC } from 'react'
import styles from './AbousUsStyles/Background.module.css'
import background from './AboutUsImages/backgroundIMG.jpg'

interface BackgroundProps  {
   page: string
}
const Background:FC<BackgroundProps> = ({page}) => {
    
  return (
    <div style={{backgroundImage: `url(${background})`}} className={styles.container}>
          <h1 className={styles.header}>{page}</h1>
    </div>
  )
}

export default Background