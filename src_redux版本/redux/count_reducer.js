import {INCREMENT,DECREMENT} from './action_types'
//专门为count组件服务的reducer
export default function(preState=0,action){
    const {type,data} = action
    let newState
    switch (type) {
        case INCREMENT: //加法
            newState = preState + data
            return newState
            
        case DECREMENT: //减法
            newState = preState - data
            return newState
            
        default:
            return preState
    }
}