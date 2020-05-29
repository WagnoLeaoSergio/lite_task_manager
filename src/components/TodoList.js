import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { sortableContainer, sortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'

import TaskContainer from './TaskContainer'
import updateTasksList from '../redux/actions/updateTasksList'

const SortableItem = sortableElement(({item}) => <TaskContainer  
    key={item.key} 
    key_data={item.key} 
    description={item.description} 
    checked={item.checked} />
)

const SortableTasks = sortableContainer(({children}) => <ul>{children}</ul>)


function TodoList() {
    const tasks = useSelector(state => state.tasks_reducer.tasks)
    const dispatch = useDispatch()

    const handleSortEnd = ({oldIndex, newIndex}) => {
        dispatch(updateTasksList(arrayMove(tasks, oldIndex, newIndex)))
    };

    return (
        <div className="container">
            <div className="content-container todo-list-container">
                <h2>Tasks</h2>
                <SortableTasks onSortEnd={handleSortEnd} className="todoList">
                    { tasks.map((item, index) => <SortableItem key={item.key} index={index} item={item}/>) }
                </SortableTasks>
            </div>
        </div>
    )
}

export default TodoList