import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
             User context value: {user}, channel context value : {channel}
        </div>
    )
}

export default ComponentF
