import React from 'react'
import Firsthero from './Firsthero'
import Companies from './Companies'
import Services from './Services'
import WorkInProgress from './WorkInProgress'
import Testimonials from './Testimonials'
import Team from './Team'
import Contact from './Contact'
import Footer from '../Footer/Footer.jsx'
import "./Body.css"
import Header from '../Header/header.jsx'
const Body = () => {
  return (
    <div className>
        <Header/>
        <Firsthero/>
        <Companies/>
        <Services/>
        <WorkInProgress/>
        <Team/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Body