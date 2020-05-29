import React from 'react'
import { useDispatch } from 'react-redux'

import updateTaskState from '../redux/actions/updateTaskState'
import RemoveTaskBtn from './RemoveTaskBtn'

function TaskContainer(props){

    const dispatch = useDispatch()

    const taskChecked_style = {
        textDecorationLine: "line-through",
        color: "#bbb"
    }
    const taskNonChecked_style = {
        textDecorationLine: "none",
        color: "#000"
    }

    const handleChange = (event) => {
        dispatch(updateTaskState({
            key: props.key_data,
            description: props.description, 
            checked: event.target.checked
            })
        )
    }

    return (
        <li className="item-container">
            <input 
                className="checkBox"
                type="checkbox"
                name="" 
                id=""
                checked={ props.checked }
                onChange={ handleChange }
            />
            <p style={props.checked ? taskChecked_style : taskNonChecked_style}>
                {props.description}
            </p>
            < RemoveTaskBtn key_data={props.key_data}/>
        </li>
    )
}

export default TaskContainer