import React, { useState } from 'react'

const PostForm = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const addPostHandler = (e) => {
        e.preventDefault()
        console.log(title, description)
    }

    return (
        <div>
            <h5>Create Post</h5>
            <form onSubmit={(e) => addPostHandler(e)}>
                <div className="form-group my-3">
                    <input type="text" className="form-control" placeholder="Enter Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="form-group my-3">
                   <textarea rows="5" className="form-control" placeholder="Enter Post Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary my-3">Submit</button>
            </form>
        </div>

    )
}

export default PostForm