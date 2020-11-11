import React from 'react'

const Post = ({ title, cotegory, description, img }) => {

  return (
    <div className="post">
      <div className="post-img">
        <img src={img} alt="post" />
      </div>
      <div className="text-post">
        <h2 className="subtitle">{cotegory}</h2>
        <h1>{title}</h1>
        <p className="description-post">{description}</p>
      </div>
    </div>
  )
}

export default Post
