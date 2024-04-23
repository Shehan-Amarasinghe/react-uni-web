import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div>
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>

            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tommorow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quod doloremque vel ullam! Ex quas reprehenderit culpa distinctio doloremque tempore odio nemo? Animi fuga obcaecati, veritatis ea natus et quis.
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit laudantium magnam, obcaecati, possimus harum est dolore vel et rerum labore sed quasi ipsa fugiat veritatis, veniam praesentium? Odit, dolore officia!
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vel inventore cumque earum aliquid dignissimos assumenda deleniti deserunt ipsam ad rem nulla obcaecati dicta, natus dolorum harum, voluptatum corporis! Quisquam!
                </p>
            </div>
        </div>
    </div>
  )
}

export default About