import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='center'>
            <div>
                <h1>Page Not Found</h1>
                <Link to="/">Go Home</Link>
            </div>
        </div>
    )
}

export default NotFound