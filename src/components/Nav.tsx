import React from "react";
import { FaFacebook } from "react-icons/fa";

const Nav = () => (
  <nav className="bg-white dark:bg-gray-700 flex py-2 px-4 border-solid border-b">
    <ul className="flex">
      <li>
        <FaFacebook className="text-4xl" fill="#0b88ef" />
      </li>
      <li>SEARCH</li>
    </ul>
    <ul className="flex">
      <li>Home</li>
      <li>Friends</li>
      <li>Groups</li>
    </ul>
    <ul className="flex">
      <li>Create</li>
      <li>Messenger</li>
      <li>Notifications</li>
      <li>Profile</li>
    </ul>
  </nav>
);

export default Nav;
