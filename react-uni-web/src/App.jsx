import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonial from './Component/Testimonial/Testimonial'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonial/>
      <Title subTitle='Contact Us' title='Get in touch'/>
      <Contact/>
      <Footer/>
      </div>
      
    </div>

  )
}

export default App

