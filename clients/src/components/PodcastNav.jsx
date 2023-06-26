import React from 'react'
import logo from '../assets/mentoons podcast.png'
import { Link } from 'react-router-dom'

const PodcastNav = () => {
  return (
    <div className='podcast_nav_main'>
        <img src={logo} alt="logg" className='podcast_nav_logo' />
        <div className='podcast_route_contaner'>
            <Link to={'comics'}>Comic</Link>
            <Link to={"/audio-comic"}>Audio Comic</Link>
            <Link to={"/preppers"}>Preppers</Link>
        </div>
    </div>
  )
}

export default PodcastNav