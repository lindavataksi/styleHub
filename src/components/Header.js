import React from 'react'
import Carousel from './Carousel'
const Header = () => {
  return (
    <div>
        <Carousel />
        <div className='slogan-container'>
            <div className='slogan-container-left'> 
              <span><p>Simply Unique <span style={{ color: 'grey'}}>/</span></p>
              <p>Simply Better<span style={{ color: 'grey'}}>.</span></p></span>
            </div>
            <div>
              <p><span style={{ fontWeight: 'bold' }}>Stylehub</span> is a fashion store based in NYC, New York. Established since 2024.</p>
            </div>


        </div>
    </div>
  )
}

export default Header
