import React from 'react'
import FontAwesome from 'react-fontawesome'

function Header (){
    return (
        <header>
            <p>Lite Task Manager</p>
            <a href="https://github.com/WagnoLeaoSergio/lite_task_manager" target="_blank" rel="noopener noreferrer">
                <FontAwesome name="fab fa-github-alt" size="2x"/>
            </a>
        </header>
    )
}

export default Header