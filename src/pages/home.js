import React from 'react'
import One from '../components/one/One'
import Banner from '../Assets/Travel Fika banner.png'
import '../../src/App.css'
function Home() {
  return (
    <div className='home'>
      <div className='banner'>
         <img src={Banner} alt="banner" />
      </div>
      <One/>
    </div>
  )
}

export default Home