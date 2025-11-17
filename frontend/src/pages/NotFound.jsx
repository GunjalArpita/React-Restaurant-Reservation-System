import React from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
function NotFound() {
  return (
   <>
  <section className='notFound'>
    <div className="container">
      <img src="/notFound.svg" alt="not found" />
      <h1>LOOKS LIKE YOU'RE LOST</h1>
      <p>We can't seem to find you the page you're looking for</p>
      <Link to={"/"}>
      Back to home{" "} <span><HiOutlineArrowNarrowRight/></span></Link>
      
    </div>
  </section>
   </>
  )
}

export default NotFound