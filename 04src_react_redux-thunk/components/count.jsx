import React, { Component } from 'react'



export default class Count extends Component {


    //加
    increment=()=>{
        const value = this.refs.number.value
        //react版本
        //let number = this.state.number+value*1
        //this.setState({number})
        //redux版本
        //this.props.store.dispatch(createIncrementAction(value*1))
        //react-redux版本
        this.props.increment(value*1)
    }
    //减
    decrement=()=>{
        const value = this.refs.number.value
         //react版本
        // let number = this.state.number-value*1
        // this.setState({number})
        //redux版本
        //this.props.store.dispatch(createDecrementAction(value*1))
        //react-redux版本
        this.props.decrement(value*1)
    }
    //奇数加
    incrementOdd=()=>{
        const value = this.refs.number.value
         //react版本
        // let number = this.state.number
        // if(number%2 === 1){
        //     this.setState({number:number+value*1})
        // }
        //redux版本
        //if(this.props.store.getState()%2 === 1){
            // this.props.store.dispatch(createIncrementAction(value*1))
        //}
        //react-redux版本
        if(this.props.number%2 === 1){
            this.props.increment(value*1)
        }
    }
    //延时加
    incrementAsync=()=>{
        const value = this.refs.number.value
         //react版本
        // let number = this.state.number+value*1
        // setTimeout(()=>{
        //     this.setState({number})
        // },1000)
        //redux版本
        //setTimeout(()=>{
            // this.props.store.dispatch(createIncrementAction(value*1))
        //},1000)
        //react-redux版本
        // setTimeout(()=>{
        //     this.props.increment(value*1)
        // },1000)
        //thunk版本
        this.props.incrementAsync(value*1,2000)
    }

    render() {
        return (
            <div>
                <h2>计数器:当前数字为{this.props.number}</h2>
                <select ref='number'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementOdd}>increment if odd</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        )
    }
}
