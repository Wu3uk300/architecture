import React, {  useRef, FC, useState, useEffect } from 'react'
import styles from './HomePageStyles/HomePageSecondPart.module.css'
import pic1 from "./Images/house.png"
import pic3 from './Images/digital-drawing.png'
import slidePic1 from "./Images/SlideBild1.jpg"
import slidePic2 from "./Images/SlideBild2.jpg"
import slidePic3 from "./Images/SlideBild3.jpg"
import { CSSTransition } from 'react-transition-group'

const HomePageSecondPart:FC = () => {
  const myRef = useRef<HTMLDivElement | null>(null)
  const [animation,setAnimation] = useState<boolean>()
  const [xPos, setXPos] = useState<number>(0)
  
 
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

 function changeSlide(e:any){
 
  if(e.className==="HomePageSecondPart_prevBtn__4bYFi"){
    
    setXPos((x) => x + 560)
   
   
  }
  else{
    setXPos((x) => x - 560)
  
  }
 }
  
  return (
      <div className={styles.mainContainer}>
          <div ref={myRef} className={styles.whole}>
      <CSSTransition in={animation} timeout={1500} classNames="alert" unmountOnExit>
<div  className={styles.container}> 
      <div className={styles.textBlock}>
        <h2>Innovation and excellence <br /> in the field of design and <br /> construction</h2>
       <div className={styles.firstRow}>
        <div className={styles.infoBlock}>
          <img src={pic1} alt="" />
          <p className={styles.bigText}>Upcoming Projects</p>
          <p className={styles.smallText}>Contrary To Popular Belief In Ipsum Is <br /> Not Simply.</p>
        </div>
        <div className={styles.infoBlock}>
          <img src={pic3} alt="" />
          <p className={styles.bigText}>Interior Design</p>
          <p className={styles.smallText}>Contrary To Popular Belief In Ipsum Is <br /> Not Simply.</p>
        </div>
       </div>
       <div className={styles.secondRow}>
       <div className={styles.infoBlock}>
          <img src={pic3} alt="" />
          <p className={styles.bigText}>Interior Design</p>
          <p className={styles.smallText}>Contrary To Popular Belief In Ipsum Is <br /> Not Simply.</p>
        </div>
       </div>
      </div>
      <div className={styles.imageBlock}>
        <div  className={styles.imageSlider} >
        <div className={styles.imagesRow} style={{ transform: `translateX(${xPos}px)` }}  >
          <img src={slidePic1} alt="" />
          <img src={slidePic2} alt="" />
          <img src={slidePic3} alt="" />
        </div>
        </div>
        <div className={styles.btnSection}>
          
        <button onClick={(e)=>changeSlide(e.target)} disabled={xPos===0?true:false} className={styles.prevBtn}>Prev</button>
       <button onClick={(e)=>changeSlide(e.target)} disabled={xPos===-1120?true:false} className={styles.nextBtn}>Next</button>

        </div>
       
      </div>
      
    </div>
    </CSSTransition>
    </div>
      </div>
    
  )
}

export default HomePageSecondPart