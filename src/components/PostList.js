import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../redux/services/postService'

const PostList = () => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [])
    // console.log(posts)

    if (posts.isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    if (posts.isError) {
        return (
            <div className='text-danger'>Something Went Wrong!</div>
        )
    }

    return (
        <div>
            {
                posts.postList.map(post => {
                    return (
                        <div className="list-group text-left" key={post.id}>
                            <div className="list-group-item list-group-item-action text-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">
                                        <Link to={`/posts/${post.id}`} className="text-info">{post.title}</Link>
                                    </h5>
                                    <small>Post Id: {post.id}</small>
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