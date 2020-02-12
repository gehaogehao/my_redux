//redux核心文件
//引入createStore创建一个store
import {createStore,applyMiddleware} from 'redux'
//引入reducer,操作状态
import reducer from './reducers'
//引入redux-thunk用于异步编程
import thunk from 'redux-thunk'
//调用createStore时，必须传入一个reducer   (用于接收reducer返回的新状态newState)
export default createStore(reducer,applyMiddleware(thunk))