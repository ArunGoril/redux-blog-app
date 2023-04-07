import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../redux/services/postService'

const PostList = () => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    // console.log(posts)

    if (posts.isLoading) {
        return (
            <div className='text-success mx-3'>
                <h3>Loading...</h3>
            </div>
        )
    }

    if (posts.isError) {
        return (
            <div className='text-danger mx-3'>
                <h3>Something Went Wrong!</h3>
            </div>
        )
    }

    if (posts.postList.length === 0) {
        return (
            <div className='text-danger mx-3'>
                <h3>No Post Available to Display!</h3>
            </div>
        )
    }

    return (
        <div>
            {
                posts.postList.map((post, index) => {
                    return (
                        <div className="list-group text-left" key={post._id}>
                            <div className="list-group-item list-group-item-action text-start my-2">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">
                                        <Link to={`/posts/${post._id}`} state={{ index: index+1 }} className="text-info">{post.title}</Link>
                                    </h5>
                                    <small className='text-muted'>Post No: {index+1}</small>
                                </div>
                                <p className="mb-1 text-left">{post.body}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList