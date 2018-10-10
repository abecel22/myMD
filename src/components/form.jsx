import React, { Component } from 'react';

class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted');
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="col-9 mx-auto">
                <div className="form-group">
                    <input
                        className="form-control"
                        id="doctor"
                        name="doctor"
                        placeholder="Find a Doc"
                    />
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Zip Code"
                        id="zipCode"
                        name="zipCode"
                    />
                </div>

                <div className="form-group">
                    <button className="btn btn-dark btn-block">Find</button>
                </div>
            </form>
        );
    }
}

export default Form;
