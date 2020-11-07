import React from 'react'
import postImage from '../assets/images/post.jpg'

const Post = ({title, subTitle, description}) => {
  return (
    <div className="post">
      <div className="post-img">
        <img src={postImage} alt="post" />
      </div>
      <div className="text-post">
  <h2 className="subtitle">{subTitle}</h2>
  <h1>{title}</h1>
        <p className="description-post">
          {description}
        </p>
        <button type="button">leave a comment</button>
      </div>
    </div>
  )
}

export default Post
