import React, {useEffect} from 'react'
import { NavBar } from '../Components/HomePageComponents/NavBar'
import Background from '../Components/AboutUsComponents/Background'
import BlogRow from '../Components/BlogComponents/BlogRow'
import Footer from '../Components/HomePageComponents/Footer'

const BlogPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
  return (
  
    <div>
        <NavBar/>
        <Background page="Blog"/>
        <BlogRow/>
        <Footer/>
    </div>
  )
}

export default BlogPage