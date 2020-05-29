import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import removeTask from '../redux/actions/removeTask'

function RemoveTaskBtn(props) {
    const dispatch = useDispatch()

    const [ isMouseOVer, setIsMouseOver ] = useState(false)

    const btnStyle = {
        background: "none",
        border: "none"
    }

    const handleClick = (event) => {
        dispatch(removeTask(props.key_data))
    }

    return (
        <button 
            className="remove-button"
            style={btnStyle}
            onMouseOver={() => {setIsMouseOver(true)}}
            onMouseLeave={() => {setIsMouseOver(false)}}
            onClick={ handleClick }
        >
            DELETE
        
        </button>
    )
}

export default RemoveTaskBtn