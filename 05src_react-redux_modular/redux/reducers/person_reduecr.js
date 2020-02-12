import {ADDPERSON} from '../action_types'
export default function(preState=[{name:'李四',age:18}],action){
    const {type,data} = action
    let newState
    switch (type) {
        case ADDPERSON:
            newState = [data,...preState]
            return newState
        default:
            return preState
    }
}