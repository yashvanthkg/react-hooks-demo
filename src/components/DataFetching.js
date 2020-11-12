import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setPosts(response.data)
        })
        .catch(error => {
            console.log(error);
        })
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>
            <ul>
                {posts.map(post  => {
                  return  <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    )
}

export default DataFetching
