import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/action';

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.personAdded} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.persondeleted(person.id)} />
                ))}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        persons: state.persons
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        personAdded: (name, age) => dispatch({ type: actionTypes.ADD_PERSON, payload: { name: name, age: age } }),
        persondeleted: (id) => dispatch({ type: actionTypes.DELETE_PERSON, personId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);