import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <h1 className="heading-nav">
        A cipher service inspired by the Enigma Machine
      </h1>
      <h4 className="encoded-nav">Select an option</h4>
      <ul className="ul-nav">
        <li className="encoded-nav">
          <Link to="/encrypt">Encrypt message</Link>
        </li>
        <li className="encoded-nav">
          <Link to="/decrypt">Decrypt message</Link>
        </li>
        <li className="encoded-nav">
          <Link to="/enigma">A real fake enigma machine</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
