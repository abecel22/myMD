import React, { Component } from 'react';
import Cards from './common/cards';
import doc1 from '../assets/doc1.png';
import doc2 from '../assets/doc2.png';

class Results extends Component {
    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    render() {
        if (!this.props.result) {
            return (
                <div className="row icons-container">
                    <div className="col-sm">
                        <img src={doc1} alt="" />
                        <h4 className="mt-4">Find doctors in your network!</h4>
                    </div>
                    <div className="col-sm">
                        <img src={doc2} alt="" />
                        <h4 className="mt-4">Book a physical today!</h4>
                    </div>
                </div>
            );
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
