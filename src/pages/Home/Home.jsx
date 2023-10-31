/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from './Banner'
import About from './About'
import Services from './Services/Services'
import Contact from './Contact'
import Features from './Features'
import Team from './Team'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Team></Team>
      <Features></Features>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home
