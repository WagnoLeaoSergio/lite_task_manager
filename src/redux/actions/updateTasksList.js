function updateTasksList(newTasks) {
    return {
        type: 'UPDATE_TASKS',
        payload: newTasks
    }
}

export default updateTasksList