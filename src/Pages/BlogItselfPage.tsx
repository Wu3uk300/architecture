import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../Components/HomePageComponents/NavBar'
import BlogItselfConent from '../Components/BlogItselfComponents/BlogItselfContent'
import NotFoundPage from './NotFoundPage'
import Footer from '../Components/HomePageComponents/Footer'
const BlogItself = () => {
    const {item} =useParams()
    useEffect(()=>{
      window.scrollTo(0, 0)
  },[])
  return (
    <div>
        {(item===undefined||Number(item)>=7)?(<div>
         <NotFoundPage/>
        </div>):
        (<div>
        <NavBar/>
        <BlogItselfConent params={item}/>
        <Footer/>
        </div>)}
       
    </div>
  )
}

export default BlogItself