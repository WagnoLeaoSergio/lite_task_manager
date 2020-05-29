import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import sendAddTaskData from '../redux/actions/sendAddTaskData'
import emitAddTaskRequest from '../redux/actions/emitAddTaskRequest'

function AddPanel() {

    const [ taskDescription, setTaskDescription ] = useState("")
    const dispatch = useDispatch()

    const handleForm  = (event) => {
        event.preventDefault()
        dispatch(emitAddTaskRequest())
        setTaskDescription("")
    }

    return (
        <div className="panel add-task">
            <h3 className="panel-title">Add a New Task:</h3>
            <form onSubmit={handleForm}>
                <input 
                    name="taskDescription" placeholder="Task description" type="text"
                    value = {taskDescription.toUpperCase()}
                    onChange={
                        event => {
                            setTaskDescription(event.target.value)
                            dispatch(sendAddTaskData(event.target.value.toUpperCase()))
                        }
                    }
                />
                <button 
                    className="panel-button"
                    name="addTaskBtn"
                    type="submit">
                        Add
                </button>
            </form>
        </div>
    )
}


export default AddPanel