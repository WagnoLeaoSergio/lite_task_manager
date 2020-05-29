import React, {Component} from 'react'

import AddPanel from './AddPanel'
import NoteBox from './NoteBox'

class ActionsPanel extends Component {

    render() {
        return (
            <div className="content-container actions">
                <AddPanel />
                <NoteBox />
            </div>
        )
    }
}

export default ActionsPanel