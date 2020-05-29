import React from 'react'
import loadTasksRequest from '../redux/actions/loadTasksRequest'
import { useDispatch } from 'react-redux'

function LoadPanel(){

    const dispatch = useDispatch()

    const emitLoadRequest = () => {
        dispatch(loadTasksRequest())
    }

    return (
        <div className="panel load-task">
            <h3 className="panel-title" >Load Tasks from Local Storage:</h3>
            <button className="panel-button" onClick={emitLoadRequest}>
                Load
            </button>
            </div>
    )
}

export default LoadPanel