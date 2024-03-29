import React, { FC, useState, useRef, useEffect } from 'react'
import styles from './HomePageStyles/BlogMain.module.css'
import pic1 from './Images/blog1.jpg'
import pic2 from './Images/blog2.jpg'
import pic3 from './Images/blog3.jpg'
import pic4 from './Images/blog4.jpg'
import pic5 from './Images/blog5.jpg'
import pic6 from './Images/blog6.jpg'
import { motion, useMotionValue } from 'framer-motion'
import { Link } from 'react-router-dom'

const BlogMain:FC = () => {
    
    const [imgIndex, setImgIndex] = useState(0)
    const dragX = useMotionValue(0);
    
    const imgs = [
        {img:pic1,
         header:"Style Over Substance & Culture Of Design",
         subtext:"In Elit Risus, Mollis Id Vestibulum Id, Efficitur Id Urna. Proin Condimentum Id Nibh Ut Aliquet. Proin Eu Lacus Sed Lectus Dictum Congue. Nunc Ut Luctus Ipsum, Tincidunt Aliquet Lacus. Cras Egestas, Risus Ut Rutrum Tempus, Diam Sem Imperdiet Libero, Id Pharetra Diam Eros In Odio.  ",
         id:1
        },
        {img:pic2,
        header: "Wooden Contructasts A Lifetime",
        subtext:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
        id:2
        },
        {img:pic3,
            header:"Style Over Substance & Culture Of Design",
            subtext:"In Elit Risus, Mollis Id Vestibulum Id, Efficitur Id Urna. Proin Condimentum Id Nibh Ut Aliquet. Proin Eu Lacus Sed Lectus Dictum Congue. Nunc Ut Luctus Ipsum, Tincidunt Aliquet Lacus. Cras Egestas, Risus Ut Rutrum Tempus, Diam Sem Imperdiet Libero, Id Pharetra Diam Eros In Odio.  ",
            id:3
        },
        {img:pic4,
            header: "Wooden Contructasts A Lifetime",
            subtext:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
        id:4},
        {img:pic5,
            header:"Style Over Substance & Culture Of Design",
            subtext:"In Elit Risus, Mollis Id Vestibulum Id, Efficitur Id Urna. Proin Condimentum Id Nibh Ut Aliquet. Proin Eu Lacus Sed Lectus Dictum Congue. Nunc Ut Luctus Ipsum, Tincidunt Aliquet Lacus. Cras Egestas, Risus Ut Rutrum Tempus, Diam Sem Imperdiet Libero, Id Pharetra Diam Eros In Odio.  ",
        id:5
        },
        {img:pic6,
            header: "Wooden Contructasts A Lifetime",
            subtext:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
        id:6
    }]
    const DRAG_BUFFER = 50;
    const [checkSlider, setCheckSlider]=useState(false)
   
    function onDragEnd(){

        const x = dragX.get()

        if(x<=-DRAG_BUFFER &&  imgIndex < imgs.length*6  ){
           setImgIndex(x=>x+16)
            
        }
     
        else if(x>=DRAG_BUFFER && imgIndex>0){
            setImgIndex(x=>x-16)
            
        }
    }
    const myRef = useRef(null)
    useEffect(()=>{
     
        const observer = new IntersectionObserver((entries)=>{
         const entry = entries[0]
         
        if(entry.isIntersecting===true){
          setCheckSlider(true)
        }
        
    
        })
        
        if(myRef.current){
          observer.observe(myRef.current) 
        }
      
    
         },[])

    useEffect(()=>{
console.log(checkSlider)

setTimeout(()=>{
       if(checkSlider===true){
        setImgIndex(x=>x+16)
       }
        
    
  },1000)
    },[checkSlider])

  
  return (
   <div ref={myRef} className={styles.mainContainer}>
     <div className={styles.container}>
        <div className={styles.blogText}>
        Get The Latest Updates
        </div>
        <div className={styles.blogSlider}>
            <motion.div drag="x" dragConstraints={{left:0, right:0}}
             animate={{translateX: `-${imgIndex}%`}}
             onDragEnd={onDragEnd}
             className={styles.blogRow}
             style={{
                x:dragX
             }}
            >
             

               
               {imgs.map((info)=>
                <div className={styles.blogSquare}>

                   <div className={styles.blogDate}>Jun 07</div>
                   <div className={styles.imageFlow}>
                   <div className={styles.image} style={{backgroundImage: `url(${info.img})`}}> </div>
                   </div>
                <Link to={`/blog/${info.id}`}><div className={styles.blockHeader}><p>{info.header}</p></div></Link>
                   
                   <div className={styles.blockSubText}><p>{info.subtext}</p></div>

                  
               </div>
               )}

               

            
            </motion.div>
        </div>
    </div>
   </div>
  )
}

export default BlogMain