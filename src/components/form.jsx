import React, { Component } from 'react';

class Form extends Component {
    state = {
        data: {}
    };

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.state.data;
        console.log(data);
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
                        onChange={this.handleChange}
                    />
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Zip Code"
                        id="zipCode"
                        name="zipCode"
                        onChange={this.handleChange}
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
