import React from 'react'
// import One from '../components/One'
import Banner from '../Assets/Travel Fika banner.png'
import plane from '../Assets/plane.svg'
import hotel from '../Assets/hotel.svg'
import cab from '../Assets/taxi.svg'
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
      <div className='options-wrapper'>
        <div className='options'>
         <img src={plane} alt='Plane'/>
         <h4>Flights</h4>
        </div>
        <div className='options'>
         <img src={hotel} alt='hotel'/>
         <h4>Hotels</h4>
        </div>
        <div className='options'>
         <img src={cab} alt='cab'/>
         <h4>Cabs</h4>
        </div>

      </div>
      {/* <div className='one'>
       
       <One/>
      </div> */}
     
    </div>
  )
}

export default Home