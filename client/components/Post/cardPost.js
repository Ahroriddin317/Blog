import React from 'react'
import { Link } from 'react-router-dom'
import cardPostImg from '../../assets/images/post1.jpg'

const CardPost = ({ miniDescription, title, cotegory }) => {
  return (
    <div className="card-blog">
      <div className="card-blog-img">
        <Link to="/blog">
          <img src={cardPostImg} alt="blog Img" />
        </Link>
      </div>
      <div className="card-blog-text">
        <h2 className="subtitle">{cotegory}</h2>
        <h1>{title}</h1>
        <p className="description-post">{miniDescription}</p>
      </div>
    </div>
  )
}

export default CardPost
