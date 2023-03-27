import React from 'react'
import { Link } from 'react-router-dom'

const PostList = () => {
    return (
        <div className="list-group text-left">
            <div className="list-group-item list-group-item-action text-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                        <Link to={`/posts/1`} className="text-info">post title 1</Link>
                    </h5>
                    <small>Post Id: 1</small>
                </div>
                <p className="mb-1 text-left">post description 1</p>
            </div>
            <div className="list-group-item list-group-item-action text-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">
                        <Link to={`/posts/2`} className="text-info">post title 2</Link>
                    </h5>
                    <small>Post Id: 2</small>
                </div>
                <p className="mb-1 text-left">post description 2</p>
            </div>
        </div>
    )
}

export default PostList