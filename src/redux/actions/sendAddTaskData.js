function sendAddTaskData(taskDesc) {
    return {
        type: "GET_NEW_TASK_INFO",
        payload: taskDesc
    }
}

export default sendAddTaskData
