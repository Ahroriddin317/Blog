import React, { useState } from 'react'
import { addedPost } from '../../redux/reducers/post'
import NavBar from '../navbar'

const AdminPage = () => {
  const [title, setTitle] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [description, setDescription] = useState('')
  const [miniDescription, setMiniDescription] = useState('')
  const [error, setError] = useState('')

  const handlerButton = () => {
    if (
      miniDescription.trim() !== '' &&
      description.trim() !== '' &&
      title.trim() !== '' &&
      imgUrl.trim() !== ''
    ) {
      addedPost({ title, img: imgUrl, description, miniDescription })
      setTitle('')
      setImgUrl('')
      setDescription('')
      setMiniDescription('')
    }
    else{
          setError('please check if you have filled in all the fields')
          setTimeout(() => {
            setError('')
          }, 4000)
    }
  }

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="admin-page">
          <div className="admin-page-item">
            <div className="aded-post">
              <div>
                <h4>Title</h4>
                <input
                  type="text"
                  placeholder="enter text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <h4>Img-Url</h4>
                <input
                  type="text"
                  placeholder="enter image url"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                />
              </div>
              <div>
                <h4>Description</h4>
                <textarea
                  placeholder="enter text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <h4>Mini description</h4>
                <textarea
                  placeholder="enter text"
                  value={miniDescription}
                  onChange={(e) => setMiniDescription(e.target.value)}
                />
              </div>
            </div>
            {error !== '' ? (
              <div className="alert">
                <h1>{error}</h1>
              </div>
            ) : (
              ''
            )}
            <button type="button" onClick={handlerButton}>
              add new post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage
