import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About = () => {
  return (
    <div>
      <Navbar />
      <div className='d-flex justify-content-center fs-1 commonHeight align-items-center'>
        Welcome to About Page.
      </div>
      <Footer />
    </div>
  )
}

export default About