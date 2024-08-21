import React from 'react'
import Firsthero from './Firsthero'
import Companies from './Companies'
import Services from './Services'
import WorkInProgress from './WorkInProgress'
import Team from './Team'
const Body = () => {
  return (
    <div className>
        <Firsthero/>
        <Companies/>
        <Services/>
        <WorkInProgress/>
        <Team/>
    </div>
  )
}

export default Body