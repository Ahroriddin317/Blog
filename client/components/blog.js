import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPost } from '../redux/reducers/post'
import NavBar from './navbar'
import Post from './Post/post'

const Blog = () => {
  const { title } = useParams()
  const { cotegory, description, img } = useSelector((s) => s.post.post)
  console.log(cotegory, description)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPost(title))
  }, [])
  return (
    <>
      <NavBar />
      <div className="container">
        <Post title={title} cotegory={cotegory} description={description} img={img} />
      </div>
    </>
  )
}

export default Blog
