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
            return {
                ...state,
                noteBox: localData.noteBox
            }

        default:
            return state
    }
}

export default noteBox_reducer