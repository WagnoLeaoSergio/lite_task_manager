import React, { Component } from 'react'

import ActionsPanel from './ActionsPanel'
import TodoList from './TodoList'

class MainContent extends Component {

    render() {
        return (
            <main>
                < ActionsPanel />
                < TodoList />
            </main>
        )
    }
}

export default MainContent