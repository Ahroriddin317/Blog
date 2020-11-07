import axios from "axios"

const GET_POSTS = 'GET_POSTS'


const initialState = {
  posts: []
}

export default (state = initialState, action) => {
  switch(action.type){
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}

export function getPosts(){
  return (dispatch) => {
    axios('http://localhost:8090/api/v1/posts').then(({ data:posts }) => {
    console.log(posts)
    dispatch({ type: GET_POSTS, posts })
  })
  }
}