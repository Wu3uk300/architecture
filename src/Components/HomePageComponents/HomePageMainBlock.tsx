import React, { FC, useState, useEffect} from 'react'
import styles from './HomePageStyles/HomePageMainBlock.module.css'
import mainpic1 from './Images/mainPic1.jpg'
import mainpic2 from './Images/mainPic2.jpg'
import { CSSTransition } from 'react-transition-group'




const HomePageMainBlock:FC = () => {
    const [animate, setAnimate] = useState<boolean>(false);
    const [change,setChange] = useState<boolean>(false)


    useEffect(() => {
        const intervalId = setInterval(() => {
          setChange((prev) => !prev);
        }, 15000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);
    
      useEffect(() => {
        setAnimate(false);
    
        const timeoutId = setTimeout(() => {
          setAnimate(true);
        }, 10);
    
        return () => {
          clearTimeout(timeoutId);
        };
      }, [change]);
   
  return (
    <div className={styles.mainContainer}>
        
        <div className={styles.container}>
       
        <div className={styles.mainPic}>
         <CSSTransition in={animate} timeout={1500} classNames="alert" unmountOnExit>
            <img src={change?mainpic2:mainpic1} alt="" />
            </CSSTransition>
           
            
            
        </div>
       
       
        <div className={styles.mainTextBlock}>
        <CSSTransition in={animate} timeout={1500} classNames="slide" unmountOnExit>
            <div className={styles.textArea}>
                {change ?
                <>
                <p>High Rise Building</p>
                <h2>Unique Plan <br /> Ideas & Design <br /> Promotion</h2>
                <button>SHOP NOW</button>
                </>:
                <>
                 <p>High Rise Building</p>
                 <h2>Innovation <br /> Ideas & Design <br /> Events</h2>
                <button>SHOP NOW</button>
                </>
                }
                
            </div>
            </CSSTransition>
            
            
           
        </div>
        </div>
       
        
    </div>
  )
}

export default HomePageMainBlock