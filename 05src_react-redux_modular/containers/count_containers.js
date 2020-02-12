//该文件是容器组件  负责给UI组件传递   redux中状态   操作方法
import Count from '../components/count'
import {createDecrementAction,createIncrementAction,createIncrementAsyncAction} from '../redux/action_creators/count_action_creator'
import {connect} from 'react-redux'
//connect方法  连接
/* 
	connect的作用：
		1.connect函数调用所返回的那个函数能够生成一个容器组件
		2.connect函数能让UI组件和容器组件建立起联系
*/
export default connect(
	(state)=>({number:state.number,persons:state.persons}),//这个函数返回一个对象,对象的key作为props的key,对象的value作为props的value
	//完整版写法
    // (dispatch)=>({
	// 	increment:value=>dispatch(createIncrementAction(value)),//它和上面一样
	// 	decrement:value=>dispatch(createDecrementAction(value))
	// })
	//精简版
	{
		increment:createIncrementAction,
		decrement:createDecrementAction,
		incrementAsync:createIncrementAsyncAction
	}
)(Count)