import countReducer from './count_reducer'
import personReducer from './person_reduecr'

import {combineReducers} from 'redux'

export default combineReducers({
    number:countReducer,
    persons:personReducer
})