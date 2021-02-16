/**
 * Author: Tom Hayton
 * Description: Vertical navbar
 */

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link>Portfolio</Link></li>
        <li><Link>My Services</Link></li>
        <li><Link>About Me</Link></li>
        <li><Link>Contact Me</Link></li>
      </ul>
      <div>
        <span>LinkedIn</span>
        <span>Github</span>
      </div>
    </nav>
  )
}

export default Navbar
