function updateTaskState(task) {
    return {
        type: 'UPDATE_TASK',
        payload: task
    }
}

export default updateTaskState