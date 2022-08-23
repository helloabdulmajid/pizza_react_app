import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assests/pizza.jpeg'
import'../styles/Home.css'


const Home = () => {
  return (
<>
<div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
    <div className='headerContainer' >
    <h1>AM PIZZAHUNT</h1>
    <p>TASTE EVERRY BITE OF PIZZA</p>
    <Link to="/menu">
    <button>
        ORDER NOW
    </button>
    </Link>
    </div>
</div>
</>
    )
}

export default Home