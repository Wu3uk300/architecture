import React, { useState } from 'react'
import styles from './Styles/FAQList.module.css'


const FAQList = () => {
    const [first, setFirst] = useState(false)
    const[second, setSecond] = useState(false)
    const[third, setThird] = useState(false)
    const[fourth, setFourth] = useState(false)
    const[fifth, setFifth] = useState(false)
    function handleChange1(){
        setFirst((prev)=>(!prev))
    }
    function handleChange2(){
        setSecond((prev)=>(!prev))
    }
    function handleChange3(){
        setThird((prev)=>(!prev))
    }
    function handleChange4(){
        setFourth((prev)=>(!prev))
    }
    function handleChange5(){
        setFifth((prev)=>(!prev))
    }
  return (
    <div className={styles.container}>

       <div className={styles.faqQuestion}>
        <div onClick={handleChange1} className={first?styles.nostyle:styles.question}><p className={styles.questionItself}>Can I Edit The Files?</p> <p className={styles.arrow}>{first?<div>&#11014;</div>:<div>&#11015;</div>}</p></div>
        
        {first&&

         <p className={styles.answer}>I Am Item Content. Click Edit Button To Change This Text. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis.</p>

        }
   
       
       </div>

       <div className={styles.faqQuestion}>
        <div onClick={handleChange2} className={second?styles.nostyle:styles.question}><p className={styles.questionItself}>Is It Layered ?</p> <p className={styles.arrow}>{second?<div>&#11014;</div>:<div>&#11015;</div>}</p></div>
        
        {second&&

         <p className={styles.answer}>I Am Item Content. Click Edit Button To Change This Text. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis.</p>

        }
   
       
       </div>

       <div className={styles.faqQuestion}>
        <div onClick={handleChange3} className={third?styles.nostyle:styles.question}><p className={styles.questionItself}>How Can I Edit The Masks ?</p> <p className={styles.arrow}>{third?<div>&#11014;</div>:<div>&#11015;</div>}</p></div>
        
        {third&&

         <p className={styles.answer}>I Am Item Content. Click Edit Button To Change This Text. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis.</p>

        }
   
       
       </div>

       <div className={styles.faqQuestion}>
        <div onClick={handleChange4} className={fourth?styles.nostyle:styles.question}><p className={styles.questionItself}>What Do I Need To Open The Files ?</p> <p className={styles.arrow}>{fourth?<div>&#11014;</div>:<div>&#11015;</div>}</p></div>
        
        {fourth&&

         <p className={styles.answer}>I Am Item Content. Click Edit Button To Change This Text. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis.</p>

        }
   
       
       </div>

       <div className={styles.faqQuestionLast}>
        <div onClick={handleChange5} className={fifth?styles.nostyle:styles.question}><p className={styles.questionItself}>Is The Font Free ?</p> <p className={styles.arrow}>{fifth?<div>&#11014;</div>:<div>&#11015;</div>}</p></div>
        
        {fifth&&

         <p className={styles.answer}>I Am Item Content. Click Edit Button To Change This Text. Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Ut Elit Tellus, Luctus Nec Ullamcorper Mattis.</p>

        }
   
       
       </div>

       

    </div>
  )
}

export default FAQList