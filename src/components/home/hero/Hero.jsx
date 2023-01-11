import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Find Your Next Job' subtitle='Kickstart Your Modelling carrier' />

          <form className='flex'>
            <div className='box'>
              <span>Audition Location</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Job Type</span>
              <input type='text' placeholder='Job Type' />
            </div>
            <div className='box'>
              <span>Salary Range</span>
              <input type='text' placeholder='Salary Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
