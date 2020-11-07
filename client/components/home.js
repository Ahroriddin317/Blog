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
  }, [])

  return (
    <div>
      <Head />
      <NavBar />
      <div className="container">
        {posts.map(({ id, title, subTitle, description }) => {
          return <Post key={id} title={title} subTitle={subTitle} description={description} />
        })}
        <div className="cards-blog">
          {posts.map(({ id, subTitle, title, miniDescription }) => {
            return (
              <CardPost
                key={id}
                subTitle={subTitle}
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
