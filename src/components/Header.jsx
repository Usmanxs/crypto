import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
   <button>
    <Link to="./" style={{ textDecoration: 'none', color:'black' }}> Home</Link>
    </button> 
   <button>
    <Link to="./Coin" style={{ textDecoration: 'none', color:'black' }}>Coin</Link>
    </button> 
   <button>
    <Link to="./Exchange" style={{ textDecoration: 'none', color:'black' }}>Exchange</Link>
    </button> 
    </div>
  )
}

export default Header

