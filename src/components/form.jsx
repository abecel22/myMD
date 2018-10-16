import React, { Component } from 'react';

class Form extends Component {
    state = {
        formData: {}
    };

    handleChange = ({ currentTarget: input }) => {
        const formData = { ...this.state.formData };
        formData[input.name] = input.value;
        this.setState({ formData });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.makeAPICall();
    };

    makeAPICall = () => {
        const key = process.env.REACT_APP_SECRET_CODE;
        const formData = this.state.formData;
        console.log(formData);
        fetch(
            `https://api.betterdoctor.com/2016-03-01/doctors?name=${
                formData.doctor
            }&location=29.75020,-95.795104,100&limit=10&user_key=${key}`
        )
            .then((res) => res.json())
            .then((result) => console.log(result));
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
