import initialState from '../index'

function noteBox_reducer(state=initialState, action) {

    const localData = JSON.parse(localStorage.getItem('todoAPP'))

    switch(action.type) {
        case "UPDATE_NOTEBOX":
            localStorage.setItem('todoAPP', JSON.stringify({...localData, 'noteBox': action.payload}))

            return {
                ...state,
                noteBox: action.payload
            }

        case "LOAD_NOTEBOX":
            const appData = JSON.parse(localStorage.getItem('todoAPP'))
            const noteboxData = appData ? appData.noteBox : ""
            return {
                ...state,
                noteBox: noteboxData
            }

        default:
            return state
    }
}

export default noteBox_reducer