function removeTask(taskKey) {
    return {
        type: 'REMOVE_TASK',
        payload: taskKey
    }
}

export default removeTask