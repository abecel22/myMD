import React, { Component } from 'react';
import Cards from './common/cards';

class Results extends Component {
    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    render() {
        if (!this.props.result) {
            return null;
        }
        return (
            <div>
                {this.props.result.length > 0 && (
                    <h1 className="mb-5">
                        {this.props.result.length} Results for {''}
                        {this.capitalize(
                            this.props.formData.specialty
                        )} near {this.props.formData.zipCode}
                    </h1>
                )}
                <Cards results={this.props.result} />
            </div>
        );
    }
}

export default Results;
