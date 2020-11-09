import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const { token } = useSelector(s => s.auth)

  const linkArray = [
    {
      url: '/',
      link: 'home'
    },
    {
      url: '/',
      link: 'blog'
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
              {linkArray.map(({ link, url }) => {
                return (
                  <li key={link}>
                    <Link to={url}>{link}</Link>
                  </li>
                )
              })}
              <li>
                <Link to="/login">{token !== undefined ? 'admin' : 'sing in'}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
