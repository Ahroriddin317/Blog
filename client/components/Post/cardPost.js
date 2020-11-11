import React from 'react'
import { Link } from 'react-router-dom'


const CardPost = ({ miniDescription, title, cotegory, img }) => {
  return (
    <div className="card-post">
      <div className="card-post-img">
        <Link to={`/blog/${title}`}>
          <img src={img} alt="blog Img" />
        </Link>
      </div>
      <div className="card-post-text">
        <h2 className="subtitle">{cotegory}</h2>
        <h1>{title}</h1>
        <p className="description-post">{miniDescription}</p>
      </div>
    </div>
  )
}

export default CardPost
