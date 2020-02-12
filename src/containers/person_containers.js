import Persons from '../components/persons'
import {connect} from 'react-redux'
import {createAddPerson} from '../redux/action_creators/persons_action_creator'

export default connect(
    (state)=>({persons:state.persons,number:state.number}),
    {addPerson:createAddPerson}
)(Persons)