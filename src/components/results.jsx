import React, { Component } from 'react';
import Cards from './common/cards';

class Results extends Component {
    render() {
        return (
            <div>
                <h1>Doctor Search Results</h1>
                <ul>
                    {this.props.result.map((result) => (
                        <li key={result.uid}>
                            {result.profile.first_name}
                            {result.profile.last_name}
                        </li>
                    ))}
                </ul>
                <Cards />
            </div>
        );
    }
}

export default Results;
