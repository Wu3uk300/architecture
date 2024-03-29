import React, {useEffect, useRef, useState} from 'react'
import styles from './HomePageStyles/HighRise.module.css'
import pic from './Images/HighRise.jpg'
import { CSSTransition } from 'react-transition-group'

const HighRise = () => {
    const [animation, setAnimation] = useState<boolean>(false)
    const myRef = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
  
        const observer = new IntersectionObserver((entries)=>{
         const entry = entries[0]
         if(entry.isIntersecting===true){
            setAnimation(true)
            
            
          }
        
        })
        
        if(myRef.current){
          observer.observe(myRef.current)
        }
        
        return () => {
          observer.disconnect();
        };
        
         },[])
  return (
    <div ref={myRef} className={styles.container}>
          <CSSTransition in={animation} timeout={1500} classNames="alert" unmountOnExit>
        <div className={styles.content}>
            <div className={styles.textPart}>
                <p className={styles.smallText}>High Rise Building</p>
                <p className={styles.bigText}>Innovation Ideas & <br />Design Events</p>
                <button className={styles.btn}>Click here</button>
            </div>
            <div className={styles.image}>
                <img src={pic} alt="" />
            </div>
        </div>
        </CSSTransition>
    </div>
  )
}

export default HighRise