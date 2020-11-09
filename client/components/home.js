import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post/post'
import Head from './head'
import CardPost from './Post/cardPost'
import SignUp from './signup'
import { getPosts } from '../redux/reducers/post'
import NavBar from './navbar'

const Home = () => {
  const dispatch = useDispatch()
  const { posts } = useSelector(s => s.post)

  useEffect(() => {
    dispatch(getPosts())
  }, [posts])

  return (
    <div>
      <Head />
      <NavBar />
      <div className="container">
        {posts.map(({ title, cotegory, description }) => {
          return <Post key={title} title={title} cotegory={cotegory} description={description} />
        })}
        <div className="cards-blog">
          {posts.map(({ cotegory, title, miniDescription }) => {
            return (
              <CardPost
                key={title}
                cotegory={cotegory}
                title={title}
                miniDescription={miniDescription}
              />
            )
          })}
        </div>
      </div>
      <SignUp />
    </div>
  )
}

Home.propTypes = {}

export default Home
