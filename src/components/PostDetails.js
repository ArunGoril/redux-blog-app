import React from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
    const { postId } = useParams()
    return (
        <div>
            <h5>Post Details</h5>
            <p>{postId}</p>
        </div>
    )
}

export default PostDetails