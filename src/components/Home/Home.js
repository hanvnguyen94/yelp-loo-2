import React, { Fragment } from 'react'

const authenticatedUser = (
  <div className='homepage px-3' style={{ textAlign: 'center', paddingTop: '30vh' }}>
    <h1>YelpLoo ๐งป</h1>
    <h2>The best place to manage your lovely loos</h2>
  </div>
)

const unauthenticatedUser = (
  <div className='homepage px-3' style={{ textAlign: 'center', paddingTop: '30vh' }}>
    <h1>Welcome to YelpLoo, Stranger! ๐</h1>
  </div>
)


const Home = ({ user }) => (
  <Fragment>
    { user ? authenticatedUser : unauthenticatedUser}
  </Fragment>
)


export default Home