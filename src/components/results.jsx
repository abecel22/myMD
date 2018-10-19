import React, { Component } from 'react';

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
            </div>
        );
    }
}

export default Results;
