import React, { useState, useEffect, useRef} from 'react'
import styles from './HomePageStyles/NumberScounter.module.css'
import { CSSTransition } from 'react-transition-group'

const NumbersCounter = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0)
  const [secondNumber, setSecondNumber] = useState<number>(0)
  const [thirdNumber, setThirdNumber] = useState<number>(0)
  const [fourthNumber, setFourthNumber] = useState<number>(0)
  const myRef1 = useRef<HTMLDivElement | null>(null)
  const myRef2 = useRef<HTMLDivElement | null>(null)
  const myRef3 = useRef<HTMLDivElement | null>(null)
  const myRef4 = useRef<HTMLDivElement | null>(null)
  const myRefAnimation = useRef<HTMLDivElement | null>(null)
  const [animation, setAnimation] = useState<boolean>(false)

  
  useEffect(()=>{
     
    const observer = new IntersectionObserver((entries)=>{
     const entry = entries[0]
     
    if(entry.isIntersecting===true){
      setAnimation(true)
      
      
    }
    

    })
    
    if(myRefAnimation.current){
      observer.observe(myRefAnimation.current) 
    }
  

     },[])
     
useEffect(()=>{
  if(animation===true){
    const timeoutMain =  setTimeout(()=>{
   
      if (animation === true&& firstNumber !== 100 ) {
        const interval = setInterval(() => {
          setFirstNumber((x) => {
            const newValue = x + 1;
            if (newValue === 100) {
              clearInterval(interval);
            }
            return newValue;
          });
        }, 15);
      }
  
      if (animation === true && secondNumber !== 64) {
        const interval = setInterval(() => {
          setSecondNumber((x) => {
            const newValue = x + 1;
            if (newValue === 64) {
              clearInterval(interval);
            }
            return newValue;
          });
        }, 19);
      }
  
      if (animation === true && thirdNumber !== 16) {
        const interval = setInterval(() => {
          setThirdNumber((x) => {
            const newValue = x + 1;
            if (newValue === 16) {
              clearInterval(interval);
            }
            return newValue;
          });
        }, 70);
      }
  
      if (animation === true && fourthNumber !== 100) {
        const interval = setInterval(() => {
          setFourthNumber((x) => {
            const newValue = x + 1;
            if (newValue === 100) {
              clearInterval(interval);
            }
            return newValue;
          });
        }, 17);
      }
      
       clearTimeout( timeoutMain)
    },500)
  }
},[animation])

  return (
    <div className={styles.mainContainer}>
      <div ref={myRefAnimation}  className={styles.container}>
      <CSSTransition in={animation} timeout={1500} classNames="alert" unmountOnExit> 
    <div className={styles.infoPart}>
    <div className={styles.textPart}>
          <p>Why Choose Our <br /> Company?</p>
        </div>




        <div className={styles.numbersPart}>

<div className={styles.firstRow}>

<div className={styles.numbersSquare}>
            <h3 ref={myRef1}>{firstNumber}+</h3>
            <p>Projects Finished</p>
          </div>

          <div className={styles.numbersSquare}>
            <h3 ref={myRef2} >{secondNumber}</h3>
            <p className={styles.fixCss}>New Solutions</p>
          </div>
   </div>


        
   <div className={styles.secondRow}>
  

  <div className={styles.numbersSquare}>
              <h3 ref={myRef3}>{thirdNumber}+</h3>
              <p>Years of Experience</p>
            </div>
  
            <div className={styles.numbersSquare}>
              <h3 ref={myRef4}>{fourthNumber}+</h3>
              <p>Happy Customers</p>
            </div>
     </div>


        </div>
    </div>
    </CSSTransition>


        

      </div>
    </div>
    
  )
}

export default NumbersCounter