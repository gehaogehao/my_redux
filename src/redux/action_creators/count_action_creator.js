//创建action对象
import {INCREMENT,DECREMENT} from '../action_types'
export const createIncrementAction = value => ({type:INCREMENT,data:value})
export const createDecrementAction = value => ({type:DECREMENT,data:value})

//异步
export const createIncrementAsyncAction = (value,time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(value))
        },time)
    }
}