import React from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'

const Posts = () => {
  return (
    <div className='container'>
        <h2 className='my-3 text-secondary'>Welcome to my Blog App</h2>
        <div className='row'>
            <div className='col-md-4 col-12'>
                <PostForm />
            </div>
            <div className='col-md-8 col-12'>
                <PostList />
            </div>
        </div>
    </div>
  )
}

export default Posts