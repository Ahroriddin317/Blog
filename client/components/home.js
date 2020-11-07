import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './post'
import Head from './head'
import CardBlog from './cardBlog'
import SignUp from './signup'
import { getPosts } from '../redux/reducers/post'

const Home = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(s => s.post)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div>
      <Head />
      <div className="container">
        {posts.map(({ id, title, subTitle, description }) => {
          return <Post key={id} title={title} subTitle={subTitle} description={description} />
        })}
        <div className="cards-blog">
          <CardBlog />
          <CardBlog />
        </div>
      </div>
      <SignUp />
    </div>
  )
}

Home.propTypes = {}

export default Home
