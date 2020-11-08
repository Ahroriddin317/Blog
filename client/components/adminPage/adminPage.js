import React from 'react';
import NavBar from '../navbar';

const AdminPage = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="admin-page">
          <div className="admin-page-item">
            <div className="aded-post">
              <div>
                <h4>Title</h4>
                <input type="text" placeholder="enter text" />
              </div>
              <div>
                <h4>Img-Url</h4>
                <input type="text" placeholder='enter image url'/>
              </div>
              <div>
                <h4>Description</h4>
                <textarea placeholder="enter text" />
              </div>
              <div>
                <h4>Mini description</h4>
                <textarea placeholder="enter text" />
              </div>
            </div>
            <button type="button">
              add new post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminPage