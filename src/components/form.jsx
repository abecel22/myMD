import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit} className="col-9 mx-auto">
                <div className="form-group">
                    <input
                        className="form-control"
                        id="specialty"
                        name="specialty"
                        placeholder="Enter a specialty"
                        onChange={this.props.onChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Zip Code"
                        id="zipCode"
                        name="zipCode"
                        onChange={this.props.onChange}
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
