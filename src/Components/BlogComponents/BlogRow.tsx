import React, {useEffect, useState} from 'react'
import styles from './Styles/BlogRow.module.css'
import BlogItem from './BlogItem'
import pic1 from './Images/blog1.jpg'
import pic2 from './Images/blog2.jpg'
import pic3 from './Images/blog3.jpg'
import pic4 from './Images/blog4.jpg'
import pic5 from './Images/blog5.jpg'
import pic6 from './Images/blog6.jpg'

const BlogRow = () => {
    const blogs = [
        {
            picture: pic1,
            title:"Wooden Contructasts A Lifetime",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:1,

        },

        {
            picture: pic2,
            title:"Style Over Substance & Culture Of Design",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:2
        },
        {
            picture: pic3,
            title:"All The Elements Fit Together",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:3
        },
        {
            picture: pic4,
            title:"Gallery For Buildings",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:4
        },
        {
            picture: pic5,
            title:"Modern Concrete House & Architectural Techno",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:5
        },
        {
            picture: pic6,
            title:"Wooden Contructasts A Lifetime",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:6
        },

    ]
    const [inputValue, setInputValue] = useState("")
    const [searchedBlogs, setSearchedBlogs] = useState(blogs)

    useEffect(()=>{
    
   if(inputValue.length>2){
    const newArray = blogs.filter((item)=>item.title.toLowerCase().includes(inputValue.toLowerCase()));
    setSearchedBlogs(newArray)
   }

   if(inputValue.length===0){
    setSearchedBlogs(blogs)
   }
    },[inputValue])


    
  return (
    <div className={styles.container}>
       <div className={styles.wrapped}>
       <div className={styles.navigationBar}>
            <div>
            <input className={styles.input} value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='Search by Title' type="text" />
            <button onClick={()=>setInputValue("")} className={styles.cancel}>x</button>
            </div>
           
            <h3>Recent Posts</h3>

            <div className={styles.blogLink}>
            <a href="#">Wooden Contructasts A Lifetime</a> 
            </div>
            
            <div className={styles.blogLink}>
            <a href="#">Style Over Substance & Culture Of Design</a> 
            </div>

            <div className={styles.blogLink}>
            <a href="#">All The Elements Fit Together</a> 
            </div>

            <div className={styles.blogLink}>
            <a href="#">Gallery For Buildings</a> 
            </div>
            
           
           <div className={styles.blogLink}>
           <a href="#">Modern Concrete House & Architectural Techno</a> 
           </div>
          

        </div>
        

        <div className={styles.blogBlocks}>
             
             {searchedBlogs.length===0&&(
                <div className={styles.sorryText}>Sorry, nothing found</div>
             )}
           {searchedBlogs[0]&&(
             <div className={styles.blogRow}>
             <BlogItem blog={searchedBlogs[0]}/>
             {searchedBlogs[1]&&(<BlogItem blog={searchedBlogs[1]}/>)}
             
             </div>
           )}
          

          {searchedBlogs[2]&&(
             <div className={styles.blogRow}>
             <BlogItem blog={searchedBlogs[2]}/>
             {searchedBlogs[3]&&(<BlogItem blog={searchedBlogs[3]}/>)}
             
             </div>
           )}
          
          {searchedBlogs[4]&&(
             <div className={styles.blogRow}>
             <BlogItem blog={searchedBlogs[4]}/>
             {searchedBlogs[5]&&(<BlogItem blog={searchedBlogs[5]}/>)}
             
             </div>
           )}
          

           


        </div>
       </div>
    </div>
  )
}

export default BlogRow