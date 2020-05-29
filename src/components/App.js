import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'

import MainContent from './MainContent'
import Header from './Header'

import loadTasksRequest from '../redux/actions/loadTasksRequest'
import loadNoteBoxRequest from '../redux/actions/loadNoteBoxRequest'


function App() {

    const dispatch = useDispatch()
    
    useEffect(() => {
        sessionStorage.clear()
        dispatch(loadTasksRequest())
        dispatch(loadNoteBoxRequest())
    }, [])

    return (
            <div className="app-container">
                <Header />
                <MainContent />
            </div>
    )
}

export default App