import React, { useContext } from 'react'
import { UserContext } from '../App'

function ComponentF() {
    const user = useContext(UserContext)
    return (
        <div>
             User context value: {user}
        </div>
    )
}

export default ComponentF
