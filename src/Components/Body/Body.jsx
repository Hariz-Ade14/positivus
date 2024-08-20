import React from 'react'
import Firsthero from './Firsthero'
import Companies from './Companies'
import Services from './Services'
import WorkInProgress from './WorkInProgress'
const Body = () => {
  return (
    <div className>
        <Firsthero/>
        <Companies/>
        <Services/>
        <WorkInProgress/>
    </div>
  )
}

export default Body