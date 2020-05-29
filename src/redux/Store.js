import { createStore, combineReducers } from 'redux'

import tasks_reducer from './reducers/tasks_reducer'
import noteBox_reducer from './reducers/noteBox_reducer'

const root_reducer = combineReducers({ tasks_reducer, noteBox_reducer })
const store = createStore(root_reducer)

export default store