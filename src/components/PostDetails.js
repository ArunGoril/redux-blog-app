import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import swal from 'sweetalert'
import { deletePost, editPost, getPostById } from '../redux/services/postService'

const PostDetails = () => {
    const { postId } = useParams()
    const location = useLocation()
    // const post = useSelector(state => state.posts.post)
    const {post, isLoading, isError} = useSelector(state => state.posts)
    const dispatch = useDispatch()
    // console.log(post)

    const navigate = useNavigate();

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    useEffect(() => {
        dispatch(getPostById(postId))
    }, [postId, dispatch])

    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)
    }, [post])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const formData = {title, body}
        if (title === post.title && body === post.body) {
            alert("nothing has been changed neither in title nor in description")
            return
        }
        dispatch(editPost(postId, formData))
        swal("Good job!", "Post edited successfully", "success");
        navigate("/posts")
    }

    const handleDelete = (postId) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(willdelete => {
            if (willdelete) {
                dispatch(deletePost(postId))
                navigate("/posts")
            }
        })
    }

    if (isLoading) {
        return (
            <div className='container my-3'>
                <div className='row'>
                    <div className='col'>
                        <h3>Wait...</h3>
                    </div>
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className='container my-3'>
                <div className='row'>
                    <div className='col'>
                        <h3 className='text-danger'>Post not found</h3>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='row m-5'>
            <div className="card col bg-light shadow">
                <div className="card-body">
                    <h5 className="card-title text-info">{post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Post No: {location.state.index}</h6>
                    <p className="card-text">{post.body}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit Post
                    </button>
                    <button type='button' className='btn btn-danger mx-3' onClick={() => handleDelete(postId)}>delete</button>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit your post</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <form onSubmit={(e) => handleOnSubmit(e)}>
                                    <div className="form-group my-3">
                                        <input type="text" className="form-control" placeholder="Enter Post Title" value={title || ""} onChange={(e) => setTitle(e.target.value)} />
                                    </div>
                                    <div className="form-group my-3">
                                        <textarea rows="5" className="form-control" placeholder="Enter Post Description" value={body || ""} onChange={(e) => setBody(e.target.value)}></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary my-3" data-bs-dismiss="modal">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetails