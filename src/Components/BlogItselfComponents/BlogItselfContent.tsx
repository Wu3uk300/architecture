import React, { FC } from 'react'
import pic1 from '../BlogComponents/Images/blog1.jpg'
import pic2 from '../BlogComponents/Images/blog2.jpg'
import pic3 from '../BlogComponents/Images/blog3.jpg'
import pic4 from '../BlogComponents/Images/blog4.jpg'
import pic5 from '../BlogComponents/Images/blog5.jpg'
import pic6 from '../BlogComponents/Images/blog6.jpg'
import styles from './Styles/BlogItselfComponents.module.css'
import { Link } from 'react-router-dom'


interface ContentProps{
    params: string | undefined
}
const BlogItselfConent:FC<ContentProps> = ({params}) => {
    const blogs = [
        {
            picture: pic1,
            title:"Wooden Contructasts A Lifetime",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:"1",

        },

        {
            picture: pic2,
            title:"Style Over Substance & Culture Of Design",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:"2"
        },
        {
            picture: pic3,
            title:"All The Elements Fit Together",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:"3"
        },
        {
            picture: pic4,
            title:"Gallery For Buildings",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:"4"
        },
        {
            picture: pic5,
            title:"Modern Concrete House & Architectural Techno",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:"5"
        },
        {
            picture: pic6,
            title:"Wooden Contructasts A Lifetime",
            author: 'Admin',
            date: "June 7, 2023",
            description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec Eget Pellentesque Risus. Etiam Aliquam Enim Id Tortor Bibendum Fermentum. Phasellus A Ligula Pellentesque, Dictum Tortor In, Rutrum Mi. Nullam Mattis Lectus Eu Sagittis Convallis. Ut Laoreet Elementum Enim Quis Ullamcorper.",
            id:"6"
        },

    ]
    const usedBlog = blogs.filter((item)=>item.id===params)[0]
    console.log(usedBlog)
  return (
    <div className={styles.container}>
       <img  src={usedBlog.picture} alt="" />
       <div className={styles.contentPart}>
       <div className={styles.textPart}>
       <Link to="/blog">&#8592; Return to Blog Page</Link>
        <h3>{usedBlog.title}</h3>
        <p className={styles.authorDate}>By {usedBlog.author} | {usedBlog.date}</p>
        <div className={styles.mainText}>
            <p className={styles.logicContent}>{usedBlog.description}</p>
            <p className={styles.logicContent}>{usedBlog.description}</p>
            <p className={styles.logicContent}>{usedBlog.description}</p>
            <br />
            <br />
            <p className={styles.logicContent}>{usedBlog.description}</p>
            <p className={styles.logicContent}>{usedBlog.description}</p>

            <div className={styles.whiteBox}>
            <p className={styles.logicContent}>{usedBlog.description}</p>
            </div>
             <br />
             <p className={styles.logicContent}>{usedBlog.description}</p>
             <p className={styles.logicContent}>{usedBlog.description}</p>


             <Link  to="/blog"> <button className={styles.lastBtn}> &#8592; Return to Blog Page</button></Link>
            </div>
       </div>
       </div>
    </div>
  )
}

export default BlogItselfConent