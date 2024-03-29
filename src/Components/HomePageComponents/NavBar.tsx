import React,{FC, useState} from 'react'
import styles from "./HomePageStyles/NavBar.module.css"
import { Link } from 'react-router-dom'

export const NavBar:FC = () => {
  const [small, setSmall] = useState<boolean>(false)
  window.onscroll=onScroll
  function onScroll(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      setSmall(true)
    }
    else{
      setSmall(false)
    }
  }
  return (
  
 

  <div  className={small? styles.NavBarSmall: styles.NavBar}> 
       <div className={styles.NavLogo}>
        <Link to="/">knd.rtv</Link>
       </div>
       <div className={styles.NavBtns}>
       <ul className={styles.NavMenu}>
        <li><Link to="/">Home</Link></li>
       
        <li><Link to="">Pages <span>&#9660;</span></Link>
        <ul style={small?{ paddingTop: 14}:{paddingTop:34}} >
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/notfound">404 Error</Link></li>
        </ul>
        </li>
        <li><Link to="">Portfolio <span>&#9660;</span></Link>
          <ul style={small?{ paddingTop: 14}:{paddingTop:34}}>
             <li><Link to="/portfolio/two">Two Columns</Link></li>
             <li><Link to="/portfolio/three">Three Columns</Link></li>
          </ul>
       </li>
        <li><Link to="/blog">Blog</Link></li>
       </ul>
       </div>
       <div className={styles.NavMainBtn}>
        <button>Get inquiry</button>
       </div>
 </div>

 



 
  )
}
