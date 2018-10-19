import React, { Component } from 'react';
import Form from './form';

class Doctors extends Component {
    state = {
        formData: {}
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.makeAPICall();
    };

    handleChange = ({ currentTarget: input }) => {
        const formData = { ...this.state.formData };
        formData[input.name] = input.value;
        this.setState({ formData });
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
            <div className="container">
                <h1>Find a Doctor</h1>
                <Form
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Doctors;
