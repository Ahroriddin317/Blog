import React from 'react'

const NavBar = () => {
  const linkArray = ['home', 'blog']

  return (
    <div>
      <nav>
        <div className="container">
          <div className="logo">
            <a href="/#">minimø</a>
          </div>
          <div>
            <ul className="nav-menu">
              {linkArray.map((link) => {
                return (
                  <li key={link}>
                    <a href="/#">{link}</a>
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
