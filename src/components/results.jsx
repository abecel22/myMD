import React, { Component } from 'react';
import Cards from './common/cards';

class Results extends Component {
    render() {
        return (
            <div>
                {this.props.result.length > 0 && <h1>Doctor Search Results</h1>}

                <Cards results={this.props.result} />
            </div>
        );
    }
}

export default Results;
