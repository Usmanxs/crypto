import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
   <button>
    <Link to="./"><h4> Home</h4></Link>
    </button> 
   <button>
    <Link to="./Coin"><h4>Coin</h4></Link>
    </button> 
   <button>
    <Link to="./Exchange"><h4>Exchange</h4></Link>
    </button> 
    </div>
  )
}

export default Header

