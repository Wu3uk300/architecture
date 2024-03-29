import React, { FC, useState } from 'react'
import styles from "./HomePageStyles/Footer.module.css"
import { Link } from 'react-router-dom'

const Footer:FC = () => {
  const [send,setSend] = useState(false)
  const [ value, setValue] = useState("")
  const [loader,setLoader] = useState(false)
  function handleSend(){
          setLoader(true);
      setTimeout(()=>{
        setLoader(false)
        setSend(true)
        setValue("")
      },1000)
      setTimeout(()=>{
        setSend(false)
      },5000)
  }
  return (
    
    <div className={styles.container}>
              <div className={styles.links}>

               <div className={styles.linksSection}>
                <p className={styles.linksSectionHeader}>Contact</p>
                <p className={styles.address}>4642 Roosevelt Wilson Lane <br />
                 Beach, CA 90802</p>
                 <p className={styles.number}>+1 555 436 1747</p>
               </div>

               <div className={styles.linksSectionSpecial}>
                <p className={styles.linksSectionHeader}>Link</p>
                <Link className={styles.footerLink} to="/about">About Us</Link>
           
                <Link className={styles.footerLink} to="/contact">Contact Us</Link>
                <Link className={styles.footerLink} to="/team">Team</Link>
                <Link className={styles.footerLink} to="/faq">FAQ</Link>
                <Link className={styles.footerLink} to="/notfound">404 Error</Link>
               </div>

               
               <div className={styles.linksSectionSpecial2}>
                <p className={styles.linksSectionHeader}>Info</p>
                <a className={styles.footerLink} href="#">Policy</a>
                <a className={styles.footerLink}href="#">Terms And Use</a>
                <a className={styles.footerLink} href="#">Get Apps</a>
               </div>

                     
               <div className={styles.linksSection}>
                <p className={styles.linksSectionHeader}>Newslatter</p>
                <p className={styles.slogan}>{send?<div style={{color:'lightgreen'}}>Mail has been sent!</div>:"Our Newsletter To Be In The Know."}</p>
                <div className={styles.inputLine}>
                  <input value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Your Email Address' type="text"  />
                  <button  onClick={handleSend}> {loader?<div className={styles.loader}></div>:<div>&#9993;</div>}</button>
                 
                  </div>
                
               </div>



              </div>
              <div className={styles.copyright}>  © 2024 Kondratov</div>
    </div>
  )
}

export default Footer