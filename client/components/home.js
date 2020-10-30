import React from 'react'
import LoginForm from './auth/login'
import Head from './head'

const Home = () => {

  return (
    <div>
      <Head/>
      <LoginForm/>
    </div>
  )
}

Home.propTypes = {}

export default Home
