import React from 'react'
import cardBlogImg from '../assets/images/post1.jpg'

const CardBlog = () => {
  return (
    <div className="card-blog">
      <div className="card-blog-img">
        <img src={cardBlogImg} alt="blog Img" />
      </div>
      <div className="card-blog-text">
        <h2 className="subtitle">LifeStyle</h2>
        <h1>More than just a music festival</h1>
        <p className="description-post">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea
        </p>
      </div>
    </div>
  )
}

export default CardBlog
