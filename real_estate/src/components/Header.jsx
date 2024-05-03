import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>
            <span>Dream</span>
            <span>Estate</span>
          </h1>
        </Link>
      </div>
      <form className='search'>
        <input type="text" placeholder="Search.." className='search_input' />
        <button className='search_button'><FaSearch /></button>
      </form>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/Login">
          <li>Login</li>
        </Link>
        <Link to="/SignUp">
          <li>Join</li>
        </Link>
        {/* <Link to="/profile">
          {currentUser ? (
            <img
              src={currentUser.avatar}
              alt="profile"
            />

          ) : (
          <li>Sign in</li>
          )}
        </Link> */}
      </ul>
    </header>
  )
}

export default Header