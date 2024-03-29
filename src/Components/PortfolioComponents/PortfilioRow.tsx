import React, { FC, useRef,useState,useEffect } from 'react'
import pic1 from'./Images/blog1.jpg'
import pic2 from'./Images/blog2.jpg'
import pic3 from'./Images/blog3.jpg'
import pic4 from'./Images/blog4.jpg'
import pic5 from'./Images/blog5.jpg'
import pic6 from'./Images/blog6.jpg'
import styles from'./Styles/PortfolioRow.module.css'
import { CSSTransition } from 'react-transition-group'

interface PortfolioProps{
    size:string
}

const PortfilioRow:FC<PortfolioProps> = ({size}) => {
    
  const firstRow = useRef(null)
  const [animation, setAnimation] = useState(false)



  useEffect(() => {


    
    const observerFirst = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setAnimation(true);
        }   
    });

    
   
 

    if (firstRow.current) {
        observerFirst.observe(firstRow.current);
    }
   

    return () => {
        observerFirst.disconnect();


    };
}, []);
 



 
  return (
    size==="two"?(
<div ref={firstRow} className={styles.container}>

        
<CSSTransition in={animation} timeout={1500} classNames="alert" unmountOnExit>
<div >

<div >

<div className={styles.row}>
<div style={{backgroundImage: `url(${pic1})`}} className={styles.portfoliowork}></div>
<div style={{backgroundImage: `url(${pic2})`}} className={styles.portfoliowork}></div>
</div>

</div>


<div >


<div className={styles.row}>
<div style={{backgroundImage: `url(${pic3})`}} className={styles.portfoliowork}></div>
<div style={{backgroundImage: `url(${pic4})`}} className={styles.portfoliowork}></div>
</div>

</div>


<div >


<div className={styles.row}>
<div style={{backgroundImage: `url(${pic5})`}} className={styles.portfoliowork}></div>
<div style={{backgroundImage: `url(${pic6})`}} className={styles.portfoliowork}></div>
</div>



</div>


</div>
</CSSTransition>



</div>

    ):(
        <div ref={firstRow} className={styles.container}>

        
        <CSSTransition in={animation} timeout={1500} classNames="alert" unmountOnExit>
        <div >
       
        <div >
       
       <div className={styles.row}>
       <div style={{backgroundImage: `url(${pic1})`}} className={styles.portfolioworkSmall}></div>
       <div style={{backgroundImage: `url(${pic2})`}} className={styles.portfolioworkSmall}></div>
       <div style={{backgroundImage: `url(${pic3})`}} className={styles.portfolioworkSmall}></div>
       
       </div>
 
        </div>

       
        <div >
     
       
        <div className={styles.row}>
        <div style={{backgroundImage: `url(${pic4})`}} className={styles.portfolioworkSmall}></div>
        <div style={{backgroundImage: `url(${pic5})`}} className={styles.portfolioworkSmall}></div>
        <div style={{backgroundImage: `url(${pic6})`}} className={styles.portfolioworkSmall}></div>
        </div>
        
        </div>
   
   
       

      
        </div>
        </CSSTransition>



    </div>
  
    )
    
  )
}

export default PortfilioRow