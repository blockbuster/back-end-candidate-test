import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to = '/save-file'>Invoke Lambda for saving file</Link>
      <ul>
        <li><Link to = '/products'>Product</Link></li>
        <li><Link to = '/programs'>Program</Link></li>
        <li><Link to = '/transactions'>Transaction</Link></li>
        <li><Link to = '/users'>User</Link></li>
      </ul>
    </div>
  )
}

export default Header
