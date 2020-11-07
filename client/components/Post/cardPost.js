import React from 'react'
import cardPostImg from '../../assets/images/post1.jpg'

const CardPost = ({ miniDescription, title, subTitle }) => {
  return (
    <div className="card-blog">
      <div className="card-blog-img">
        <img src={cardPostImg} alt="blog Img" />
      </div>
      <div className="card-blog-text">
        <h2 className="subtitle">{subTitle}</h2>
        <h1>{title}</h1>
        <p className="description-post">{miniDescription}</p>
      </div>
    </div>
  )
}

export default CardPost
