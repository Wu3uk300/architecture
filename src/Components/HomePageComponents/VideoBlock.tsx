import React, { FC, useState, useRef,useEffect } from 'react'
import styles from "./HomePageStyles/VideoBlock.module.css"
import fon from './Images/VideoBlockFon.jpg'
import { CSSTransition } from 'react-transition-group'
const VideoBlock:FC = () => {
    const [playCheck, setPlayCheck] = useState<boolean>(false)
    function playVideo(){
        setPlayCheck(true)
    }
    function closeVideo(){
        setPlayCheck(false)
    }
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
    
  <div className={styles.mainContainer}>
    <div ref={myRef} className={styles.container}>
    <CSSTransition in={animation} timeout={1500} classNames="alert" unmountOnExit>
    <div>
    
    <img  src={fon} style={playCheck?{width: 2400, height:600,opacity: 0.2 }:{width: 2400, height:600}} alt="" />
      <div className={styles.divBtn}>
      <button onClick={playVideo} className={playCheck?styles.hidden:styles.playBtn}>&#10148; </button>
      

      <div className={styles.videoWindow}>
      <button onClick={closeVideo} className={playCheck?styles.closeBtn:styles.hidden}>X</button>
      <CSSTransition in={playCheck} timeout={1000} classNames="video" unmountOnExit>
   
      <div className={playCheck?styles.video:styles.hidden} >
      <iframe allow="autoplay; encrypted-media" frameBorder="0"   title='video' width="900" height="500"
       src="https://www.youtube.com/embed/dzRkAp9LUr8?autoplay=1">
      </iframe>
      </div>
     
      </CSSTransition>

      </div>
     

      </div>
    </div>
    </CSSTransition>
      
  </div>
  </div>
  )
}

export default VideoBlock