import React from 'react'
import One from '../components/One'
import Banner from '../Assets/Travel Fika banner.png'
import '../../src/App.css'
function Home() {
  return (
    <div className='home'>
      <div className='banner'>
         <img src={Banner} alt="banner" />
      </div>
      <div className='greetings'>
      <h2>Let's book your next trip! </h2>
      </div>
      <div className='one'>
       
       <One/>
      </div>
     
    </div>
  )
}

export default Home