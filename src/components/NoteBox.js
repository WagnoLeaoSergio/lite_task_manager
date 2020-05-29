import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import updateNoteBox from '../redux/actions/updateNoteBox'

function NoteBox() {

    const noteBoxText = useSelector(state => state.noteBox_reducer.noteBox)

    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(updateNoteBox(event.target.value))
    }

    return (
        <div className="panel noteBox">
            <h3 className="panel-title" >Anotate Your Thoughts:</h3>
            <textarea 
                onChange={handleChange}
                value={noteBoxText}
            />
        </div>
    )
}

export default NoteBox