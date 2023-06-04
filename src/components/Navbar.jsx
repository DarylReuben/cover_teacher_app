import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon } from './Icons' 


function Navbar() {
  return (
    <div><Link to="/"> <HomeIcon /> </Link>
        <h1 className="text-2xl font-bold text-center text-gray-800 p-2"> Hanoi cover teachers</h1>
        
    </div>
  )
}

export default Navbar