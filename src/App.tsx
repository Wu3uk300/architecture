import React from 'react';
import "./norm.css";
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import TeamPage from './Pages/TeamPage';
import FAQPage from './Pages/FAQPage';
import NotFoundPage from './Pages/NotFoundPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import BlogItself from './Pages/BlogItselfPage';


export default function App() {
 

  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutUsPage/>}/>
    <Route path='/contact' element={<ContactUsPage/>}/>
    <Route path='/team' element={<TeamPage/>}/>
    <Route path='/faq' element={<FAQPage/>}/>
    <Route path="/notfound" element={<NotFoundPage/>}/>
    <Route path='/portfolio/:size' element={<PortfolioPage/>}/>
    <Route path="/blog" element={<BlogPage/>}/>
    <Route path="/blog/:item" element={<BlogItself/>}/>

   </Routes>
  );
}
