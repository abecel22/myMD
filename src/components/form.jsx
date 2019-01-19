import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-row">
                    <div className="col-sm-7 mx-auto mt-2">
                        <select
                            className="form-control"
                            id="specialty"
                            name="specialty"
                            placeholder="Enter a specialty"
                            onChange={this.props.onChange}
                        >
                            <option>Allergist</option>
                            <option>Cardiologist</option>
                            <option>Pediatrician</option>
                        </select>
                    </div>

                    <div className="col-sm mx-auto mt-2">
                        <input
                            className="form-control"
                            placeholder="Zip Code"
                            id="zipCode"
                            name="zipCode"
                            onChange={this.props.onChange}
                        />
                    </div>

                    <div className="ml-4 mx-auto mt-2">
                        <button className="btn form-button">Find</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;
