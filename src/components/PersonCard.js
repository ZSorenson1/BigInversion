import React, { Component } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

class PersonCard extends Component {
    
    render () {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age} </p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
}

export default PersonCard;