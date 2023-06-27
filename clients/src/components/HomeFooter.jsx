import React from 'react'
import speakEasy from '../assets/speak easy.png'
import preppers from '../assets/preppers.png'
import find from '../assets/find.png'
import { Link } from 'react-router-dom'
const HomeFooter = () => {
  return (
    <div className='homefooter_main'>
      <Link to='/'>
        <img src={find} alt="find" className='footer_img find' />
        </Link>
        <Link to='/'>
        <img src={preppers} alt="preppers" className='footer_img preppers' />
        </Link>
        <Link to='/speak-easy'>
        <img src={speakEasy} alt="speakEasy" className='footer_img speakEasy' />

        </Link>
    </div>
  )
}

export default HomeFooter