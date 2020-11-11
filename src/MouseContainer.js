import React, {useState} from 'react'
import HookMouse from './components/HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggele Display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer
