import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const linkArray = [
    {
      url: '/',
      link: 'home'
    },
    {
      url: '/',
      link: 'blog'
    },
    {
      url: '/login',
      link: 'sign in'
    }
  ]

  return (
    <div>
      <nav>
        <div className="container">
          <div className="logo">
            <Link to="/">minimø</Link>
          </div>
          <div>
            <ul className="nav-menu">
              {linkArray.map(({ link, url}) => {
                return (
                  <li key={link}>
                    <Link to={url}>
                      {link}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
