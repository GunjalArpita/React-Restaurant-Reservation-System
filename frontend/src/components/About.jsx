import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'


const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US
                    </h1>
                    <p>The only we are serious about is food.</p>
                </div>
                <p className="mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, asperiores? Quidem cupiditate sint nihil excepturi sunt beatae, veniam necessitatibus qui aspernatur soluta repellendus eaque voluptatibus, dicta autem magnam! Quidem animi cum aliquid eos ut, odio adipisci quod sint eum dicta fugit, ratione repellendus quo aspernatur, vel molestias magnam architecto iure?</p>
            <Link to={"/"}>Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>

            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About