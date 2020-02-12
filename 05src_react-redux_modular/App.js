import React, { Component } from 'react'
import Container from './containers/count_containers'
import Persons from './containers/person_containers'

export default class App extends Component {
    render() {
        return (
            <div>
                <Container/>
                <Persons/>
            </div>
        )
    }
}
