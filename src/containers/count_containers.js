//该文件是容器组件  负责给UI组件传递   redux中状态   操作方法
import Count from '../components/count'

//connect方法  连接
/* 
	connect的作用：
		1.connect函数调用所返回的那个函数能够生成一个容器组件
		2.connect函数能让UI组件和容器组件建立起联系
*/

import {connect} from 'react-redux'


export default connect(
    ()=>({a:1,b:2}),//这个函数返回一个对象,对象的key作为props的key,对象的value作为props的value
    ()=>({})//它和上面一样
)(Count)