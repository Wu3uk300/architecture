import React, { useState } from 'react'
import styles from './HomePageStyles/ContactMainPage.module.css'
import { CSSTransition } from 'react-transition-group'

const ContactMainPage = () => {

    const [checkNameValidate, setCheckNameValidate] = useState("")
    const [checkMailValidate, setCheckMailValidate] = useState("")
    const [checkMessageValidate, setCheckMessageValidate] = useState("")
    
    const [checkNameClick, setCheckNameClick]=useState(false)
    const [checkMailClick, setCheckMailClick]=useState(false)
    const [checkMessageClick, setCheckMessageClick]=useState(false)
  

    const [loader,setLoader] = useState(false)
    const [validationChecked, setValidationChecked] = useState(false)
    
    function checkValidate(){
        if(checkNameValidate.length===0 || checkMailValidate.length===0 || checkMessageValidate.length===0 ){
            setCheckNameClick(true)
            setCheckMailClick(true)
            setCheckMessageClick(true)
            return;
        }

         setLoader(true);

         setTimeout(()=>{
            setCheckNameValidate("")
            setCheckMailValidate("")
            setCheckMessageValidate("")
            setCheckNameClick(false)
            setCheckMailClick(false)
            setCheckMessageClick(false)
            setLoader(false)
            setValidationChecked(true)
         },1000)

         setTimeout(()=>{
            setValidationChecked(false)
         },6000)

    }
  return (
   <div className={styles.mainContainer}>
     <div className={styles.container}>
        <div className={styles.letfPart}>Ready To Put Yourself In <br /> Expert Hands?</div>
        <div className={styles.rightPart}>

        <CSSTransition in={validationChecked} timeout={1500} classNames="alert" unmountOnExit>
        <div>
        {validationChecked&&
            
            <div className={styles.sentMessage}>
                <p className={styles.galka}>&#10004;</p>
                <p>Thank You! Form Submitted Successfully.</p>
            </div>
          
            }
        </div>
        </CSSTransition>
           
          
         <div className={styles.firstRow}>

            <div className={styles.inputBox}>
            <input onClick={()=>setCheckNameClick(true)} onChange={(e)=>setCheckNameValidate(e.target.value)} value={checkNameValidate} className={styles.nameInput} placeholder='Name' type="text" />
            {(checkNameValidate.length===0 && checkNameClick )&& <div>This field is required</div>}
            </div>

            <div className={styles.inputBox}>
            <input onClick={()=>setCheckMailClick(true)} onChange={(e)=>setCheckMailValidate(e.target.value)} value={checkMailValidate} className={styles.mailInput} placeholder='Email'  type="text" />
            {(checkMailValidate.length===0 && checkMailClick )&& <div>This field is required</div>}
            </div>
          
          
        </div>     
        <div className={styles.messageRow}>
            <textarea onClick={()=>setCheckMessageClick(true)} onChange={(e)=>setCheckMessageValidate(e.target.value)} value={checkMessageValidate} name="message" id="" placeholder='Message' cols={60}rows={6}></textarea>
            {(checkMessageValidate.length===0 && checkMessageClick )&& <div>This field is required</div>}
        </div>
        <div className={styles.SendButton}>
            <button  onClick={checkValidate}>{loader?<div className={styles.loader}></div>:"Send Us"}</button>
        </div>
        </div>
    </div>
   </div>
  )
}

export default ContactMainPage