import initialState from '../index'

function tasks_reducer(state=initialState, action){
    
    const localData = JSON.parse(localStorage.getItem('todoAPP'))

    switch(action.type) {
        case "ADD_TASK":

            const newTask_description = sessionStorage.getItem('add_task_input')

            if(!state.tasks || !newTask_description)
                return state

            const new_task = {
                key: Math.floor(Math.random() * 500), 
                description: newTask_description, 
                checked: false 
            }

            const uptd_tasks =  [ new_task, ...state.tasks ]

            localStorage.setItem('todoAPP', JSON.stringify({'appTasks': uptd_tasks}))
            sessionStorage.setItem('add_task_input', "")

            return {
                ...state,
                tasks : uptd_tasks
            }

        case 'LOAD_TASKS':
            return {
                ...state,
                tasks: localData.appTasks
            }

        case 'GET_NEW_TASK_INFO':
            sessionStorage.setItem('add_task_input', action.payload)
            return state

        case 'UPDATE_TASK':
            
            const refreshed_tasks = [ ...state.tasks ]

            for(let i = 0; i < refreshed_tasks.length; i++) {
                if(refreshed_tasks[i].key === action.payload.key) {
                    refreshed_tasks[i].checked = action.payload.checked
                }
            }

            localStorage.setItem('todoAPP', JSON.stringify({'appTasks': refreshed_tasks}))

            return {
                ...state,
                tasks: refreshed_tasks
            }

        case 'UPDATE_TASKS':
            const updated_tasks = action.payload
            localStorage.setItem('todoAPP', JSON.stringify({'appTasks': updated_tasks}))

            return {
                ...state,
                tasks: updated_tasks
            }

        case 'REMOVE_TASK':
            const newTasks = state.tasks.filter((task) => task.key !== action.payload)

            localStorage.setItem('todoAPP', JSON.stringify({'appTasks': newTasks}))

            return {
                ...state,
                tasks: newTasks
            }

        default: 
            return state
    }
}

export default tasks_reducer