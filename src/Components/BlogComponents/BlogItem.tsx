import React, { FC } from 'react'
import styles from './Styles/BlogItem.module.css'
import { Link } from 'react-router-dom'



interface BlogInfo{
    picture: string,
    title: string,
    author: string,
    date: string,   
    description: string,
    id:number,
}

const BlogItem: FC<{ blog: BlogInfo }> = ({ blog }) => {
 
  return (
    <div className={styles.container}>
        <div style={{overflow:'hidden'}}>
          <Link to={`/blog/${blog.id}`}><div className={styles.itemPicture} style={{backgroundImage: `url(${blog.picture})`}}></div></Link>
        
        </div>
       <Link className={styles.itemTitle} to={`/blog/${blog.id}`}>
       {blog.title}
       </Link>
      
       <div className={styles.dateNAuthor}>
        {blog.author} / {blog.date}
       </div>
       <div className={styles.description}><p>{blog.description}</p></div>

       <div className={styles.readMore}><Link to={`/blog/${blog.id}`}>READ MORE</Link></div>
    </div>
  )
}

export default BlogItem