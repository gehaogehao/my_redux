//redux核心文件
//引入createStore创建一个store
import {createStore} from 'redux'
//引入reducer,操作状态
import countReducer from './count_reducer'
//调用createStore时，必须传入一个reducer   上菜
export default createStore(countReducer)