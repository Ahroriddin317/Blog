import axios from 'axios'

const GET_POSTS = 'GET_POSTS'
const GET_POST = 'GET_POST'

const initialState = {
  posts: [],
  post: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      }

    case GET_POST:
      return {
        ...state,
        post: action.post
      }
    default:
      return state
  }
}

export function getPosts() {
  return (dispatch) => {
    axios('http://localhost:8090/api/v1/posts').then(({ data: posts }) => {
      dispatch({ type: GET_POSTS, posts })
    })
  }
}

export function addedPost({ title, img, description, miniDescription }) {
  axios.post('http://localhost:8090/api/v1/added-post', {
    title,
    img,
    description,
    miniDescription
  })
}

export function getPost(title) {
  return (dispatch) => {
    axios(`http://localhost:8090/api/v1/post/${title}`).then(({ data }) => {
      console.log(data[0])
      dispatch({ type: GET_POST, post: data[0] })
    })
  }
}
