import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createPost } from '../redux/services/postService'

const PostForm = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)

    const addPostHandler = (e) => {
        e.preventDefault()
        // console.log(title, body)
        const formData = {
            title,
            body
        }
        dispatch(createPost(formData))
        setTitle("")
        setBody("")
    }

    if (posts.isError) {
        return (
            <div className='text-danger'>Sorry we are unable to add this post at this time. Please try agin after some time</div>
        )
    }

    return (
        <div>
            <h5>Create Post</h5>
            <form onSubmit={(e) => addPostHandler(e)}>
                <div className="form-group my-3">
                    <input type="text" className="form-control" placeholder="Enter Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group my-3">
                   <textarea rows="5" className="form-control" placeholder="Enter Post Description" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary my-3">Submit</button>
            </form>
        </div>

    )
}

export default PostForm