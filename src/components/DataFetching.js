import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
       .then(response => {
            setPost(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    return (
        <div>
            <input type="text" value={id}
                onChange={e => setId(e.target.value)}
            />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {posts.map(post  => {
                  return  <li key={post.id}>{post.title}</li>
                })}
            </ul> */}
        </div>
    )
}

export default DataFetching
