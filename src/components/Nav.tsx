import React from 'react'
import { FaFacebook } from 'react-icons/fa'

const Nav = () => (
    <nav className="bg-white dark:bg-gray-700">
      <ul>
        <li><FaFacebook / ></li>
        <li>SEARCH</li>
      </ul>
      <ul>
        <li>Home</li>
        <li>Friends</li>
        <li>Groups</li>
      </ul>
      <ul>
        <li>Create</li>
        <li>Messenger</li>
        <li>Notifications</li>
        <li>Profile</li>
      </ul>
    </nav>
  )

export default Nav
