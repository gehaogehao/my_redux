import React, { Component } from 'react'

export default class Persons extends Component {

    add=()=>{
        const name = this.refs.name.value
        const age = this.refs.age.value
        this.props.addPerson({name,age})
        this.refs.name.value = ''
        this.refs.age.value = ''
    }

    render() {
        return (
            <div>
                <h2>当前人数为:{this.props.persons.length} 上面计数为:{this.props.number}</h2>
                <input type="text" placeholder='姓名'ref="name"/>&nbsp;&nbsp;
                <input type="text" placeholder='年龄'ref="age"/>&nbsp;&nbsp;
                <button onClick={this.add}>点击添加人</button>
                <ul>
                    {
                        this.props.persons.map((personObj,index)=>{
                        return <li key={index}>姓名:{personObj.name} 年龄:{personObj.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
